const app = require('../server/server.js');

const port = process.env.PORT || 3000;

app.listen(port, function(){
        console.log(`running on port ${port}`);
    }
);