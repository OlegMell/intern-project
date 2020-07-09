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
    return res.status(404).json({ message: 'lesson not found' });
  }

  static async create(req, res) {
    const data = req.body;
    if (!data) return res.status(400).send();

    const teacher = await TeachersService.readOne(data.teacherId);
    const groups = await GroupsService.readFew(data.groups);
    if (!teacher && groups.includes(null)) {
      return res.status(400).json({ message: 'groups or teacher not found' });
    }

    const lesson = await LessonsService.create(data);
    await lesson.setTeacher(teacher);
    await lesson.addGroups(groups);

    return res.status(201).json(await LessonsService.readOne(lesson.id));
  }

  static async delete(req, res) {
    const { id } = req.params;
    const result = await LessonsService.delete(id);
    if (result > 0) return res.status(204).send();
    return res.status(404).json({ message: 'lesson not found' });
  }

  static async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    if (!data) return res.status(400).send();
    const teacher = await TeachersService.readOne(data.teacherId);
    const groups = await GroupsService.readFew(data.groups);
    if (!teacher && groups.includes(null)) {
      return res.status(404).json({ message: 'groups or teacher not found' });
    }

    const lesson = await LessonsService.readOne(id);
    if (!lesson) return res.status(404).json({ message: 'lesson not found' });

    await lesson.setTeacher(teacher);
    await lesson.setGroups(groups);
    await LessonsService.update(id, data);
    return res.json(await LessonsService.readOne(id));
  }
}

module.exports = LessonsController;
