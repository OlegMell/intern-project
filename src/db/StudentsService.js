const { Op } = require('sequelize');
const Group = require('../models/Group');
const Student = require('../models/Student');

class StudentsService {
  constructor() {
    this.model = Student;
  }

  async read() {
    return this.model.findAll({
      include: [Group],
    });
  }

  async readOne(id) {
    return this.model.findByPk(id, {
      include: [Group],
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
    return this.model.create({ ...data });
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

module.exports = new StudentsService();
