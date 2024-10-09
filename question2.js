const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'example.txt');

//  Write to a file (non-blocking)
fs.writeFile(filePath, 'Hello, this is a file system demo.', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File written successfully.');

  //  Read the file (non-blocking)
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:', data);

    //  Append to the file (non-blocking)
    fs.appendFile(filePath, '\nAppended content to the file.', (err) => {
      if (err) {
        console.error('Error appending to file:', err);
        return;
      }
      console.log('Content appended successfully.');

      //  List files in the current directory 
      fs.readdir(__dirname, (err, files) => {
        if (err) {
          console.error('Error reading directory:', err);
          return;
        }
        console.log('Files in directory:', files);

        //  Delete the file 
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
            return;
          }
          console.log('File deleted successfully.');
        });
      });
    });
  });
});
