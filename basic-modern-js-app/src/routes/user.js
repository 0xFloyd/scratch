var express = require('express');
var router = express.Router();


//GET users list, and individual users

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.users));
  });

router.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

export default router;