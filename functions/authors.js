// functions/authors.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  try {
    // Lee el archivo authors.json desde la carpeta data
    const data = fs.readFileSync(path.join(__dirname, '../data/authors.json'), 'utf8');
    
    return {
      statusCode: 200,
      body: JSON.stringify(JSON.parse(data)),
    };
  } catch (error) {
    console.error('Error reading authors data:', error);
    return {
      statusCode: 500,
      body: 'Error reading authors data',
    };
  }
};
