// membuat aplikasi express
import express from "express";// import express module
import request from  "supertest"; 



const app = express();// membuat aplikasi express

// aplicarion secara default tidak berjalan
// untuk menjalankan aplikasi express harus menggunakan method listen

app.get("/", (req, res) => {
    res.send("Hello World");
});


test("Tesst ExpressJs", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello World");
});


