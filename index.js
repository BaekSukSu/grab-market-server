var http = require("http"); // common js의 문법 모듈 import
var hostname = "127.0.0.1"; // 내부 IP(내 컴퓨터 IP 주소)
var port = 8080;

// 서버를 만들어주는 명령어: http.createServer
const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;
  if (path === "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const products = JSON.stringify([
        {
          name: "농구공",
          price: 5000,
        },
      ]);
      res.end(products);
    } else if (method === "POST") {
      res.end("생성되었습니다!");
    }
  }
  res.end("Good Bye");
});

server.listen(port, hostname); // 해당 포트 번호와 hostname으로 요청을 기다리고 있다.

console.log("grab market server on!");
