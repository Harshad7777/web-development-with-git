const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (local)
mongoose.connect("mongodb://localhost:27017/locationDB", {
  useNewUrlParser: true
 
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Schema
const locationSchema = new mongoose.Schema({
  latitude: String,
  longitude: String,
  timestamp: { type: Date, default: Date.now },
});
const Location = mongoose.model("Location", locationSchema);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// POST: Save location
app.post("/location", async (req, res) => {
  const { lat, lng } = req.body;
  if (!lat || !lng) return res.status(400).json({ message: "Missing data" });

  try {
    const location = new Location({ latitude: lat, longitude: lng });
    await location.save();
    console.log(`📍 Saved to MongoDB: (${lat}, ${lng})`);
    res.json({ message: "Location saved" });
  } catch (err) {
    console.error("❌ Save error:", err);
    res.status(500).json({ message: "Failed to save location" });
  }
});

// GET: View locations
app.get("/locations", async (req, res) => {
  const locations = await Location.find().sort({ timestamp: -1 });
  res.json(locations);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
