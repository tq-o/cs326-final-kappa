import { createServer } from "http";
import { parse } from "url";
import { join } from "path";
import { writeFile, readFileSync, existsSync } from "fs";

createServer(async (req, res) => {
  const parsed = parse(req.url, true);
  // If the client did not request an API endpoint, we assume we need to fetch a file.
  // This is terrible security-wise, since we don't check the file requested is in the same directory.
  // This will do for our purposes.
  const filename =
    parsed.pathname === "/" ? "index.html" : parsed.pathname.replace("/", "");
  // const path = join("client/", filename);
  const path = filename;
  console.log("trying to serve " + path + "...");
  if (existsSync(path)) {
    if (filename.endsWith("html")) {
      res.writeHead(200, { "Content-Type": "text/html" });
    } else if (filename.endsWith("css")) {
      res.writeHead(200, { "Content-Type": "text/css" });
    } else if (filename.endsWith("js")) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
    } else {
      res.writeHead(200);
    }
    res.write(readFileSync(path));
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(8080);
