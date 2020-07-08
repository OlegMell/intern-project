const LessonsService = require('../db/LessonsService');
const GroupsService = require('../db/GroupsService');
const TeachersService = require('../db/TeachersService');

class LessonsController {
  static async getAll(req, res) {
    const lessons = await LessonsService.read();
    res.send(lessons);
  }

  static async getOne(req, res) {
    const { id } = req.params;
    const lesson = await LessonsService.readOne(id);
    if (lesson) return res.json(lesson);
    return res.status(404).send();
  }

  static async create(req, res) {
    const data = req.body;
    if (!data) return res.status(400).send();

    const teacher = await TeachersService.readOne(data.teacherId);
    const groups = await GroupsService.readFew(data.groups);

    if (!teacher && !groups && !groups.includes(null)) {
      return res.status(400).send();
    }

    const lesson = await LessonsService.create(data);
    await lesson.setTeacher(teacher);
    await lesson.addGroups(groups);

    return res.status(201).json(lesson);
  }

  static async delete(req, res) {
    const { id } = req.params;
    const result = await LessonsService.delete(id);
    if (result > 0) return res.status(204).send();
    return res.status(404).send();
  }

  static async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    if (!data) return res.status(400).send();

    const teacher = await TeachersService.readOne(data.teacherId);
    const groups = await GroupsService.readFew(data.groups);
    if (!teacher && !groups && groups.includes(null)) {
      return res.status(404).send();
    }

    const lesson = await LessonsService.readOne(id);
    if (!lesson) return res.status(404).send();

    await lesson.setTeacher(teacher);
    await lesson.setGroups(groups);
    await LessonsService.update(id, data);
    return res.json(await LessonsService.readOne(id));
  }
}

module.exports = LessonsController;
