// functions/books.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  try {
    // Lee el archivo books.json desde la carpeta data
    const data = fs.readFileSync(path.join(__dirname, '../data/books.json'), 'utf8');
    
    return {
      statusCode: 200,
      body: JSON.stringify(JSON.parse(data)),
    };
  } catch (error) {
    console.error('Error reading books data:', error);
    return {
      statusCode: 500,
      body: 'Error reading books data',
    };
  }
};
