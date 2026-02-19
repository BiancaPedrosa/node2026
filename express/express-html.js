express= require ("express");
const app = express();

app.get("/", function (req, res) {
   res.sendFile(__dirname + "/html/home.html", function (err) {
      if (err) {
         console.error("Error sending file:", err);
         res.status(500).send("Internal Server Error");
      }
   });
}
);
app.get("/cardapio", function (req, res) {
    res.sendFile(__dirname + "/html/cardapio.html", function (err) {
        if (err) {
           console.error("Error sending file:", err);
           res.status(500).send("Internal Server Error");
        }
    });
}
);
app.get("/fale", function (req, res) {
    res.sendFile(__dirname + "/html/fale.html", function (err) {
        if (err) {
           console.error("Error sending file:", err);
           res.status(500).send("Internal Server Error");
        }
    })
}
);

app.listen(3000, () => {
    console.log("Servidor rodando na url http://localhost:3000");
}
);