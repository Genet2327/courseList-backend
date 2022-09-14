module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("course", {
    dept: {
      type: Sequelize.STRING
    },
    courseNumber: {
      type: Sequelize.STRING
    },
    
    houre: {
      type: Sequelize.INTEGER
    },
    level: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.TEXT
    },
    description: {
      type: Sequelize.TEXT
    },

  });
  return Course;
};