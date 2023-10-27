import http from "node:http";
import fs from "node:fs";

const PUBLIC = "./public";

const { PORT = 3000 } = process.env;

const onRequest = (req, res) => {
  const halaman = req.url;
  let html = "";
  let fileHtml = "";
  let fileCss = "";
  let css = "";
  let fileJs = "";
  let js = "";
  switch (halaman) {
    case "/scripts/app.example.js":
      fileJs = PUBLIC + "/scripts/app.example.js";
      js = fs.readFileSync(fileJs, "utf-8");
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.end(js);
      break;
    case "/scripts/car.example.js":
      fileJs = PUBLIC + "/scripts/car.example.js";
      js = fs.readFileSync(fileJs, "utf-8");
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.end(js);
      break;
    case "/scripts/main.example.js":
      fileJs = PUBLIC + "/scripts/main.example.js";
      js = fs.readFileSync(fileJs, "utf-8");
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.end(js);
      break;
    case "/scripts/binar.js":
      fileJs = PUBLIC + "/scripts/binar.js";
      js = fs.readFileSync(fileJs, "utf-8");
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.end(js);
      break;
    case "/css/landingpage.css":
      fileCss = PUBLIC + "/css/landingpage.css";
      css = fs.readFileSync(fileCss, "utf-8");
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(css);
      break;
    case "/css/carimobil.css":
      fileCss = PUBLIC + "/css/carimobil.css";
      css = fs.readFileSync(fileCss, "utf-8");
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(css);
      break;
    case "/cars":
      fileHtml = PUBLIC + "/carimobil.html";
      html = fs.readFileSync(fileHtml, "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
      break;
    case "/":
      fileHtml = PUBLIC + "/landingpage.html";
      html = fs.readFileSync(fileHtml, "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("404 Not Found");
      break;
  }
};

const server = http.createServer(onRequest);
server.listen(PORT, () => {
  console.log("running di", PORT);
});
