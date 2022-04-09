const express = require('express')
const router = express.Router();

router.get('/store',(req,res) => {
    const str=[{
        "name": 'pretom',
        "email": 'pretomksaha@yahoo.com'
    }];
    res.end(JSON.stringify(str))
});

router.post('/search',(req, res) => {
    res.end('NA');
});

module.exports = router;