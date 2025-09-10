// membuat aplikasi express
import express from "express";// import express module
import request from  "supertest"; 



const app = express();// membuat aplikasi express

// aplicarion secara default tidak berjalan
// untuk menjalankan aplikasi express harus menggunakan method listen

app.get("/", (req, res) => {
    res.set({
        "X-powered-by": "ExpressJS",
        "X-Author": "Naim"
    })
    res.send(`Hello Response`);
});


test("Test Response Headers", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello Response");
    expect(response.get("X-powered-by")).toBe("ExpressJS");
    expect(response.get("X-Author")).toBe("Naim");
});


