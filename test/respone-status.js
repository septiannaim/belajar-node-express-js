// membuat aplikasi express
import express from "express";// import express module
import request from  "supertest"; 



const app = express();// membuat aplikasi express

// aplicarion secara default tidak berjalan
// untuk menjalankan aplikasi express harus menggunakan method listen

app.get("/", (req, res) => {
    if (req.query.name){
        res.status(200);
        res.send(`Hello ${req.query.name}`);
    }else{
        res.status(400);
        res.send(`Bad Request`);
    }
    
});


test("Tesst Query Parameter", async () => {
    let response = await request(app).get("/").query({ name: "Naim" });
    expect(response.text).toBe("Hello Naim");
    expect(response.status).toBe(200);

    response = await request(app).get("/");
    expect(response.status).toBe(400);
});


