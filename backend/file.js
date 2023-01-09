const fs = require('fs');

let event = null;

try{
    const data = fs.readFileSync('backend/event.txt', 'utf-8');
    event = data;
    console.log(data);
} catch (err){
    console.error(err);
}

module.exports = event;
