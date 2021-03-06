const Message = require("../../models/message");

function messageController() {
  return {
    index(req, res) {
      res.render("message/leaveamessage");
    },
    postmessage(req, res) {
      console.log(req.body);

      const { name, message } = req.body;

      const hello = new Message({
        name,
        message,
      });

      hello
        .save()
        .then((hello) => {
          return res.redirect("/");
        })
        .catch((err) => {
          return res.redirect("/leaveamessage");
        });
    },

    async inbox(req, res) {
      const hi = await Message.find();
      res.render("message/inbox", { hi: hi });
    },

    chatwithmentor(req, res) {
      res.render("message/chatwithmentor");
    },
  };
}

module.exports = messageController;
