const LessonsService = require('../db/LessonsService');

class LessonsController {
  static async getAll(req, res) {
    res.send(await LessonsService.read());
  }

  static async getOne(req, res) {
    const { id } = req.body;
    res.send(await LessonsService.readOne(id));
  }

  static async create(req, res) {
    const { data } = req.body;
    await LessonsService.create(data);
    res.send('OK');
  }
}

module.exports = LessonsController;
