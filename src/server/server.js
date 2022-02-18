import express from "express";
import path from "path";

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();

const asset = path.join(__dirname, "../dist");
app.use("/", express.static(asset));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
