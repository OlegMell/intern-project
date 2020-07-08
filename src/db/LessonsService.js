const { Op } = require('sequelize');
const Teacher = require('../models/Teacher');
const Group = require('../models/Group');
const Lesson = require('../models/Lesson');

class LessonService {
  constructor() {
    this.model = Lesson;
  }

  async read() {
    return this.model.findAll({
      include: [Group, Teacher],
    });
  }

  async readOne(id) {
    return this.model.findByPk(id, {
      include: [Group, Teacher],
    });
  }

  async delete(id) {
    return this.model.destroy({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
  }

  async create(data) {
    return this.model.create({
      topic: data.topic,
      classroom: data.classroom,
      begin: data.begin,
      end: data.end,
    });
  }

  async update(id, data) {
    return this.model.update({ ...data }, {
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
  }

}

module.exports = new LessonService();
