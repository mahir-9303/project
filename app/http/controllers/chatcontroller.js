function chatController() {
    return {
        index(req, res) {
            res.render('chat/chatdb')
        },
        chat(req, res) {
            res.render('chat/chat')
        }
    }
}

module.exports = chatController