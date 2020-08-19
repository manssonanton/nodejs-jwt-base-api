const router = require('express').Router();
const verify = require('./tokenVerify');

router.get('/', verify ,(req,res) => {
    res.json({
        Tasks: {
            Title: 'Tvätta måndag',
            description: 'Tvätta måndag kl 19:00'
        }
    })
});

module.exports = router