module.exports = {
    HOST: 'localhost',
    port: 3306,
    USER: 'admin',
    PASSWORD: 'cs@oc2022t6',
    DB: 'p2-t6-courses',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
  };