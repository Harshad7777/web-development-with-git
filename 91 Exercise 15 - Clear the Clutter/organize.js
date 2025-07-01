const fs = require('fs');
const path = require('path');

// Change this path to the directory you want to clean
const directoryPath = path.join(__dirname, 'clutter-folder');

// Create a folder if it doesn't exist
function createFolderIfNotExists(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }
}

// Move file to the designated folder
function moveFile(file, folderName) {
    const folderPath = path.join(directoryPath, folderName);
    createFolderIfNotExists(folderPath);

    const oldPath = path.join(directoryPath, file);
    const newPath = path.join(folderPath, file);

    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${file} to ${folderName}/`);
}

// Main function to organize files
function organizeDirectory() {
    const files = fs.readdirSync(directoryPath);

    files.forEach(file => {
        const fullPath = path.join(directoryPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isFile()) {
            const ext = path.extname(file).slice(1); // remove dot from .ext
            if (ext) {
                moveFile(file, ext);
            }
        }
    });

    console.log('Directory organized successfully!');
}

organizeDirectory();
