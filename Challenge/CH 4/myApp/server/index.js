import http from "node:http";
import fs from "node:fs";

const PUBLIC = "./public";

const ambilNumberImage = (url) => {
  const alamat = url;
  const anu = alamat.split("/")[2];
  const number = anu.split(".")[0].slice(3);
  return number;
};

const { PORT = 3000 } = process.env;

const onRequest = (req, res) => {
  const halaman = req.url;
  let html = "";
  let fileHtml = "";
  let fileCss = "";
  let css = "";
  let fileJs = "";
  let js = "";
  let fileImg = "";
  let img = "";
  switch (halaman) {
    case "/images/car01.min.jpg":
      fileImg = PUBLIC + "/images/car01.min.jpg";
      img = fs.createReadStream(fileImg);
      res.writeHead(200, { "Content-Type": "image/jpg" });
      img.pipe(res);
      break;
      case "/images/car02.min.jpg":
      fileImg = PUBLIC + "/images/car02.min.jpg";
      img = fs.createReadStream(fileImg);
      res.writeHead(200, { "Content-Type": "image/jpg" });
      img.pipe(res);
      break;
      case "/images/car03.min.jpg":
      fileImg = PUBLIC + "/images/car03.min.jpg";
      img = fs.createReadStream(fileImg);
      res.writeHead(200, { "Content-Type": "image/jpg" });
      img.pipe(res);
      break;
      case "/images/car04.min.jpg":
      fileImg = PUBLIC + "/images/car04.min.jpg";
      img = fs.createReadStream(fileImg);
      res.writeHead(200, { "Content-Type": "image/jpg" });
      img.pipe(res);
      break;
      case "/images/car05.min.jpg":
      fileImg = PUBLIC + "/images/car05.min.jpg";
      img = fs.createReadStream(fileImg);
      res.writeHead(200, { "Content-Type": "image/jpg" });
      img.pipe(res);
      break;
      case "/images/car06.min.jpg":
      fileImg = PUBLIC + "/images/car06.min.jpg";
      img = fs.createReadStream(fileImg);
      res.writeHead(200, { "Content-Type": "image/jpg" });
      img.pipe(res);
      break;
      case "/images/car07.min.jpg":
      fileImg = PUBLIC + "/images/car07.min.jpg";
      img = fs.createReadStream(fileImg);
      res.writeHead(200, { "Content-Type": "image/jpg" });
      img.pipe(res);
      break;
      case "/images/car08.min.jpg":
      fileImg = PUBLIC + "/images/car08.min.jpg";
      img = fs.createReadStream(fileImg);
      res.writeHead(200, { "Content-Type": "image/jpg" });
      img.pipe(res);
      break;
      case "/images/car09.min.jpg":
      fileImg = PUBLIC + "/images/car09.min.jpg";
      img = fs.createReadStream(fileImg);
      res.writeHead(200, { "Content-Type": "image/jpg" });
      img.pipe(res);
      break;
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
