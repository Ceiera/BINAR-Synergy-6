import http from "node:http";
import fs from "node:fs";

const PUBLIC = "./public";

const { PORT = 3000 } = process.env;

const onRequest = (req, res) => {
  const halaman = req.url;

  const routes = [
    { path: "/images/", contentType: "image/jpg" },
    { path: "/scripts/", contentType: "text/javascript" },
    { path: "/css/", contentType: "text/css" },
    { path: "/cars", contentType: "text/html" },
    { path: "/", contentType: "text/html" },
  ];

  const route = routes.find((r) => halaman.startsWith(r.path));
  let fileHtml = "";
  let html = "";
  switch (route.path) {
    case "/images/":
      const fileImg = PUBLIC + req.url;
      const img = fs.createReadStream(fileImg);
      res.writeHead(200, { "Content-Type": "image/jpg" });
      img.pipe(res);
      break;
    case "/scripts/":
      const fileJs = PUBLIC + req.url;
      const js = fs.readFileSync(fileJs, "utf-8");
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.end(js);
      break;
    case "/css/":
      const fileCss = PUBLIC + req.url;
      const css = fs.readFileSync(fileCss, "utf-8");
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
