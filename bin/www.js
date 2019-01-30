const app = require('../server/server.js');

const port = 8080;

app.listen(port, function(){
        console.log('running at localhost:' + port);
    }
);