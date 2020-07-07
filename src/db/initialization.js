const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const Group = require('../models/Group');
const Lesson = require('../models/Lesson');

Group.hasMany(Student);
Lesson.belongsToMany(Group, { through: 'LessonsGroups', timestamps: false });
Group.belongsToMany(Lesson, { through: 'LessonsGroups', timestamps: false });
Teacher.hasMany(Lesson);

module.exports = async (seq) => seq.sync({ force: true });
