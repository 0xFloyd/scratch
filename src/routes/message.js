

var uuidv4 = require('uuid/v4');
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.messages));
});

router.get('/:messageId', (req, res) => {
  return res.send(req.context.models.messages[req.params.messageId]);
});

app.post('/', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,     //  grab text from the body of the incomming request 
        userId: req.context.me.id,     //  Suddenly we would have access to the me user in the request object, which is the authenticated user, in our routes.
    }

    req.context.models.messages[id] = message;//accesssing id key  in message object

    return res.send(message);
})

router.delete('/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = req.context.models.messages;
  req.context.models.messages = otherMessages;
  return res.send(message);
});
export default router;