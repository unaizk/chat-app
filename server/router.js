const express = require('express')

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Server is now running');
})

module.exports = router