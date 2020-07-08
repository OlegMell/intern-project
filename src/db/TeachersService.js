const { Op } = require('sequelize');
const Teacher = require('../models/Teacher');

class TeachersService {
  constructor() {
    this.model = Teacher;
  }

  async read() {
    return this.model.findAll();
  }

  async readOne(id) {
    return this.model.findByPk(id);
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

module.exports = new TeachersService();
