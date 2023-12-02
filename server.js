const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);

const PORT = 3000;

app.use( '/', express.static( path.join(__dirname, 'portfolio/dist') )); 


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'portfolio/dist/index.html'));  
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
