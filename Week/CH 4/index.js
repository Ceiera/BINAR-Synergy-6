import http from "node:http";
import fs from "node:fs";

const PUBLIC = './public'


const { PORT = 3000} = process.env



const onRequest = (req, res ) => {
    const htmlFile = PUBLIC+'/index.html'
    const html = fs.readFileSync(htmlFile, 'utf-8')
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(html)
}

const server = http.createServer(onRequest)
server.listen(PORT, ()=> {
    console.log('running di', PORT);
})