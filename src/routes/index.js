const { Router } = require("express");
const router = Router();

router.get("/rutaGetConRouter", function (req, res) {
  res.send("hola desde una web llamada en el servidor utilizando routes");
});
module.exports = router;

router.get("/rutaGet", (req, res) => {
  console.log(
    "hola en la consola de node, desde la 1º ruta Get en el servidor"
  );
  res.send("hola soy la 1º ruta GET");
});
router.get("/rutaGetsegunda", (req, res) => {
  console.log(
    "hola en la consola de node, desde la 2º ruta Get en el servidor"
  );
  res.send("hola soy la 2º ruta GET");
});
router.get("/rutaGetconJSON", (req, res) => {
  console.log(
    "hola en la consola de node, desde la 3º ruta Get en el servidor"
  );
  res.json({
    Title: "hola mundo con express probando cosas para subir a github",
  });
});
router.post("/rutaPOST", (req, res) => {
  console.log("Alguien ha accedido a mi ruta post");
  res.send("hola haciendo mis pruebas de inicio a la ruta post");
});
