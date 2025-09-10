// membuat aplikasi express
import express from "express";// import express module
import request from  "supertest"; 



const app = express();// membuat aplikasi express

// aplicarion secara default tidak berjalan
// untuk menjalankan aplikasi express harus menggunakan method listen

app.get("/", (req, res) => {
    const type = req.get("accept");
    res.send(`Hello ${type}`);
});


test("Tesst Query Parameter", async () => {
    const response = await request(app).get("/").
    set("Accept", "text/plain");
    expect(response.text).toBe("Hello text/plain");
});


