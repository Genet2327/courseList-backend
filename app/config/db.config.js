module.exports = {
  HOST: "localhost",
  PASSWORD: "0608Eyosi",
  USER: "root",
  DB: "courses",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000 
  }
};

