module.exports = {
  HOST: "localhost",
  PASSWORD: "",
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

