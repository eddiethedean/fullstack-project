const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');

const creds = require("./db");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    try {
        res.sendFile(path.join(__dirname + '/client/login.html'));
    } catch(err){
        res.send(err);
    }
    
})


app.post("/create_user", (req,res) => {
    creds.connect(async() => {
    try{
        const data = await creds.query(`INSERT INTO users(user_name, password) VALUES ('${req.body.user_name}','${req.body.password}')`)
        res.send(`Inserted New user with ${req.body.user_name} ${req.body.password}`);
     
    }catch(err){
        res.send(err);
    };
});
    
});


app.get("/read_user", (req,res) => {
    try{
        creds.connect(async() => {
        const data = await creds.query(`SELECT * FROM users`);
        res.send (data);    
            });
    }catch(err){
res.send(err);
    };
    
});


app.get("/read_rides", (req,res) => {
    try{
        creds.connect(async() => {
        const data = await creds.query(`SELECT * FROM rides`);
        res.send (data);    
            });
    }catch(err){
res.send(err);
    };
    
});


app.put("/update_itinerary/:id", (req,res) => {
    const id = req.params.id;
    try{
        creds.connect(async() => {
        const data = await creds.query(`SELECT * FROM rides WHERE id = ${id}`);
        for (i in data.rows){
            await creds.query(`INSERT INTO itinerary(ride_name, ride_url) VALUES ('${data.rows[0].ride_name}', '${data.rows[0].ride_url}')`)
            res.send (data); 
        };   
            });
    }catch(err){
res.send(err);
    };
    
});


app.get("/read_itinerary", (req,res) => {
    try{
        creds.connect(async() => {
        const data = await creds.query(`SELECT * FROM itinerary`);
        res.send (data);    
            });
    }catch(err){
res.send(err);
    };
});

app.delete("/delete_id/:id", (req,res) => {
    const id = req.params.id;
    try{
        creds.connect(async() => {
        const data = await creds.query(`DELETE FROM itinerary WHERE id = ${id}`);
        res.send (data);    
            });
    }catch(err){
res.send(err);
    };
    
});

app.use( '/client', express.static(path.resolve(__dirname, "client")));
app.listen(PORT, console.log(`Listening on port ${PORT}`));