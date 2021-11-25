const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("view engine", "ejs");
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = require("./router");
app.get("/endpointLain", (req, res) => {
  res.send("Lain");
});
app.get("/iniError", (req, res) => {
  iniError;
});

app.use(router);

app.listen(3000, () => {
  console.log("Server nyala di http://localhost:3000");
});

//Internal Server Error handler
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).json({
    status: "fail",
    errors: err.message,
  });
});

//404 Handler
app.use(function (req, res, next) {
  res.status(404);

  // respond with json
  if (req.accepts("json")) {
    res.json({
      status: "fail",
      error: "Are you lost?",
    });
    return;
  }
});

// //Application Level Middleware
// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// };

// app.use(logger);

// //Built-in middleware
// //Pastikan middleware ini dipanggil sebelum handler function
// //Karena urutan sangat penting di express middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// //Setiap GET request ke http://localhost:3000/ akan diarahkan ke handler ini
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// //Setiap GET request ke http://localhost:3000/products akan diarahkan ke handler ini
// app.get("/products", (req, res) => {
//   res.json(["Apple", "Redmi", "One Plus One"]);
// });

// //Setiap GET request ke http://localhost:3000/orders akan diarahkan ke handler ini
// app.get("/orders", (req, res) => {
//   res.json([
//     {
//       id: 1,
//       paid: false,
//       user_id: 1,
//     },
//     {
//       id: 2,
//       paid: false,
//       user_id: 1,
//     },
//   ]);
// });

// app.listen(3000, () => {
//   console.log("Server nyala");
// });
