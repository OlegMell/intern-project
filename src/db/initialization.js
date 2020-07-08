const sequelize = require('./connection');

const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const Group = require('../models/Group');
const Lesson = require('../models/Lesson');

Group.hasMany(Student);
Group.belongsToMany(Lesson, { through: 'GroupsLessons', timestamps: false });
Lesson.belongsToMany(Group, { through: 'GroupsLessons', timestamps: false });
// Teacher.hasMany(Lesson);
// Lesson.hasOne(Teacher);
Lesson.belongsTo(Teacher);

module.exports = sequelize.sync(/*{ force: true }*/);
