const express=require('express');
const router = express.Router();
const Index=require('./index');


router.get('/', async function(req, res) {
    await res.header('Content-Type', 'application/json');
    await res.send("ok");
    await res.end();
  });

  module.exports = router;