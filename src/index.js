const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("port", process.env.PORT || 8080);

app.use(morgan("dev"));
app.use(express.urlencoded({ extend: false }));

app.listen(app.set("port"), leerPuerto());
//app.get("/rutaGet", function (req, res) {
// console.log("hola en la consola de node, desde una llamada en el servidor");
//res.send("hola desde una web llamada en el servidor");
//});
function leerPuerto() {
  // console.log("hola desde el puerto" + app.get("port"));
  // console.log("vamos a crear una ruta GET");
  console.log(`hola desde el puerto: ${app.get("port")}`);
}
//app.get("/", function (req, res) {
// console.log("Alguien ha accedido a la ruta get");
// res.send("hola haciendo pruebas con la ruta get");
//});
//app.get("/cara", function (req, res) {
// console.log("Alguien ha accedido al servidor con la cara");
//res.send("hola haciendo pruebas con la ruta get en la cara");
//});
//app.get("/cruz", function (req, res) {
//console.log("Alguien ha accedido al servidor con la cruz");
//res.send("hola haciendo pruebas con la ruta get en la cruz");
//});
//app.get("/prueba", function (req, res) {
//console.log("Alguien ha accedido a la ruta get, con la prueba");
//res.send("hola haciendo pruebas con la ruta get, con la prueba");
//});
app.use(require("./routes/index")); //Routes
