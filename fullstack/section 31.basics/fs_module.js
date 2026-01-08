// EXAMPLE: ALLOW ARGUMENTS WHEN RUNNING A SCRIPT
// argv example:
// const args = process.argv.slice(2)
// console.log(args)

// for(arg of args){
//   console.log(`HELLO THERE, ${arg}`)
// }

// EXAMPLE: CREATE A FOLDER
const fs = require('fs');
const folderName = process.argv[2] || 'New Folder1'; // getting the 3rd argument

// asynchronous: fs.mkdir(path[, options], callback)
// fs.mkdir('D:/tite', (err) => {
//   if (err) throw err;
// });


// synchronous: fs.mkdirSync(path[, options])
fs.mkdirSync(`D:/${folderName}`); // creates a folder in the specified location after runnning node fs_module.js [file_name]

// EXAMPLE: CREATE A FILE

// action creates readines, confidence, momentum, and clarity all at once
fs.writeFileSync(`${folderName}/index.html`);
fs.writeFileSync(`${folderName}/app.css`);
fs.writeFileSync(`${folderName}/app.js`);