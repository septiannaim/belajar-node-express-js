// membuat aplikasi express
import express from "express";// import express module
import request from  "supertest"; 



const app = express();// membuat aplikasi express

// aplicarion secara default tidak berjalan
// untuk menjalankan aplikasi express harus menggunakan method listen

app.get("/", (req, res) => {
    res.send(`Hell0 Response`);
});


test("Tesst Query Parameter", async () => {
    const response = await request(app).get("/").query({ name: "World" });
    expect(response.text).toBe("Hell0 Response");
});


