const employeeySchema = new mongoose.Schema({
  name:String,
  salary: number,
  language: string,
  city: string,
  isManager:Boolean
});
const Employee = mongoose.model('Employee', employeeSchema);
module.export = Employee