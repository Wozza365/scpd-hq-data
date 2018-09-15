// player controller routes
var express = require('express');
var router = express.Router();

// get /api/player/
router.get('/',(req,res) => {
  res.send([{
    name: 'Wozza',
    nationality: 'British'
  },
  {
    name: 'Chris',
    nationality: 'Murrican'
  },
  {
    name: 'Wardog',
    nationality: 'Aussie'
  },
  {
    name: 'Gauntlet',
    nationality: 'idk'
  }
]);
});

// post /api/player/
router.post('/',(req,res) => {
  res.send('POST response');
});

// put /api/player/
router.put('/',(req,res) => {
  res.send('PUT response');
});

// delete /api/player/
router.delete('/',(req,res) => {
  res.send('DELETE response');
});

module.exports = router;