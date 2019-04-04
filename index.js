var fs = require('fs');

fs.readdir ('.',function(err, data) {   
    fs.writeFile('./filesList.txt', data, function(err) {
        if (err) throw err; 
        console.log('Zapisano aktualną listę plików!');
    })
});