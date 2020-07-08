const { Op } = require('sequelize');
const Group = require('../models/Group');
const Lesson = require('../models/Lesson');

class GroupsService {
  constructor() {
    this.model = Group;
  }

  async read() {
    return this.model.findAll({
      include: [Lesson],
    });
  }

  async readOne(id) {
    return this.model.findByPk(id, {
      include: [Lesson],
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

  async readFew(groupsId) {
    const groupsPromises = [];
    groupsId.forEach((group) => {
      groupsPromises.push(this.readOne(group));
    });
    return Promise.all(groupsPromises);
  }
}

module.exports = new GroupsService();
