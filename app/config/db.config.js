module.exports = {
  HOST: "localhost",
  PASSWORD: "Se@4055018070",
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
// module.exports = {
//   HOST: "project2.eaglesoftwareteam.com",
//   USER: "t62022",
//   PASSWORD: "cs@oc2022t6",
//   DB: "p2-t6-courses",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000 
//   }
// };