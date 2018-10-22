'use strict';

const http = require(`http`);
const {parse} = require(`url`);
const {extname} = require(`path`);
const path = require(`path`);
const fs = require(`fs`);
const {promisify} = require(`util`);
const {extensionToContentType} = require(`../../utils`);

module.exports = {
  name: `server`,
  description: `Start static http server`,
  execute(port = `3000`) {
    const hostname = `127.0.0.1`;

    const stat = promisify(fs.stat);
    const readFile = promisify(fs.readFile);

    const showFile = async (filePath, res) => {
      const file = await readFile(filePath);
      const extName = extname(filePath);
      const contentType = await extensionToContentType(extName);
      res.setHeader(`Content-Type`, contentType);
      res.end(file);
    };

    const server = http.createServer((req, res) => {
      const urlPath = parse(req.url).path;
      const serverPath = path.join(__dirname, `../../static`, urlPath);
      (async () => {
        try {
          const pathStat = await stat(serverPath);
          if (pathStat.isDirectory()) {
            await showFile(`${serverPath}index.html`, res);
          } else {
            await showFile(serverPath, res);
          }
        } catch (error) {
          res.writeHead(404, `Not found`);
          res.end();
        }
      })().catch((error) => {
        res.writeHead(500, error.message, {'content-type': `text/plain`});
        res.end(error.message);
      });
    });

    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
  },
};
