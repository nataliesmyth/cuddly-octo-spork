const express = require('express');
const app = express;
// if on a production server, use that port, if not use 4000
const PORT = process.env.PORT || 4000;

app.listen(3000, () => {
    console.log('i am listening...')
})