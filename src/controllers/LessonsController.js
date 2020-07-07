const Lesson = require('../models/Lesson');

class LessonsController {
  async getAll(req, res) {
    res.send(await Lesson.findAll());
  }
}

const lessonsController = new LessonsController();

module.exports = lessonsController;
