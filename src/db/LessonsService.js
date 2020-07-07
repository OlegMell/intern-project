const Service = require('./Service');
const Lesson = require('../models/Lesson');
const Teacher = require('../models/Teacher');

class LessonsService extends Service(Lesson) {
  static async create(data) {
    const lesson = this.model.create({
      topic: data.topic,
      classroom: data.classroom,
    });

    const teacher = await Teacher.findOne(data.teacherId);
    teacher.setLessons(lesson);
  }
}

module.exports = LessonsService;
