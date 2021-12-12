let express = require("express");
let app = express();
let path = require("path");

// Rutas
app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
});
app.get("/register",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/register.html"))
});
app.get("/login",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/login.html"))
});


app.use(express.static(path.resolve(__dirname,"./public")));
app.listen(3000,() => console.log(` server on port 3000\n http://localhost:3000`)
);

