// EXAMPLE: CREATE A FOLDER
const fs = require('fs');
const folderName = process.argv[2] || 'Default Folder'; // getting the 3rd argument

try {
  // synchronous: fs.mkdirSync(path[, options])
fs.mkdirSync(`D:/${folderName}`); // creates a folder in the specified location after runnning node fs_module.js [file_name]

// EXAMPLE: CREATE A FILE
// action creates readines, confidence, momentum, and clarity all at once
fs.writeFileSync(`D:/${folderName}/index.html`,'');
fs.writeFileSync(`D:/${folderName}/app.css`,'');
fs.writeFileSync(`D:/${folderName}/app.js`,'');


} catch (error) {
  console.log("~~~~~~~~~~~ SOMETHING WENT WRONG!!!")  
  console.log(error)
}

// IMPORTANT! 

// NOTICE THAT I INDICATED THE DISK LOCATION "D:/" even in the writeFileSync and not just with the mkdirSync..