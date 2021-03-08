function courseController() {
  return {
    index(req, res) {
      res.render("course/course");
    },

    addcourse(req, res) {
      res.render("course/addcourse");
    },
  };
}

module.exports = courseController;
