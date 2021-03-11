function homeController() {
  return {
    index(req, res) {
      res.render("../../home_page/index");
    },
    sdashboard(req, res) {
      res.render("sdashboard");
    },
    mdashboard(req, res) {
      res.render("mdashboard");
    },
    error(req, res) {
      res.render("error");
    },
  };
}

module.exports = homeController;
