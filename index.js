// @import module
const http = require("http") 

// @createServer
const server = http.createServer((req, res) => {
    console.log("Request received.", req.url, req.method, req.headers)
    res.end("Hello Milady")
})

// @listen
const PORT = 2000
server.listen(PORT, () => console.log(`Hey, server is running on port ${PORT}.`))