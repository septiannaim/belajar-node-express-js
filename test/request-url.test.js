// membuat aplikasi express
import express from "express";// import express module
import request from  "supertest"; 



const app = express();// membuat aplikasi express

// aplicarion secara default tidak berjalan
// untuk menjalankan aplikasi express harus menggunakan method listen

app.get(`/hello/world`, (req, res) => {
    res.json({
            path: req.path,
            originalUrl: req.originalUrl,
            hostname: req.hostname,
            protocol: req.protocol,
            secure: req.secure,
        })
});


test("Test request URL", async () => {
    const response = await request(app).get("/hello/world")
    .query({ name: "naim" });
    expect(response.body).toEqual({
        path: "/hello/world",
        originalUrl: "/hello/world?name=naim",
        hostname: "127.0.0.1",
        protocol: "http",
        secure: false,
    });
});


