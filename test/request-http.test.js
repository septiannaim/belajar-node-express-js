// membuat aplikasi express
import express from "express";// import express module
import request from  "supertest"; 



const app = express();// membuat aplikasi express

// aplicarion secara default tidak berjalan
// untuk menjalankan aplikasi express harus menggunakan method listen

app.get("/", (req, res) => {
    res.send(`Hello ${req.query.name}`);
});


test("Tesst Query Parameter", async () => {
    const response = await request(app).get("/").query({ name: "World" });
    expect(response.text).toBe("Hello World");
});


