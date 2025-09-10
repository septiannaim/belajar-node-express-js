// membuat aplikasi express
import express from "express";// import express module
import request from  "supertest"; 



const app = express();// membuat aplikasi express

// aplicarion secara default tidak berjalan
// untuk menjalankan aplikasi express harus menggunakan method listen

app.get("/", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(`<html><head></head><body><h1>Hello world</h1></body></html>`);
});


test("Test Response Headers", async () => {
    const response = await request(app).get("/");
    expect(response.get('Content-Type')).toContain('text/html');
    expect(response.text).toBe(`<html><head></head><body><h1>Hello world</h1></body></html>`);
});


