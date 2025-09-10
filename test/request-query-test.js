// membuat aplikasi express
import express from "express";// import express module
import request from  "supertest"; 



const app = express();// membuat aplikasi express

// aplicarion secara default tidak berjalan
// untuk menjalankan aplikasi express harus menggunakan method listen

app.get(`/hello/world`, (req, res) => {
   res.send(`Hello ${req.query.firstname} ${req.query.lastname}`);
});


test("Test request URL", async () => {
    const response = await request(app).get("/hello/world")
    .query({ firstname: "naim", lastname: "sidi" });
    expect(response.text).toBe("Hello naim sidi");
});


