const express = require("express");
const app = express();
const cors= require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//add a brand



//delete a brand



//add a model


//delete a model


//add a watch
app.post("/watchstore", async(req, res)=>{
    try {
        const {watch_serial, year_created, water_resit, color, size, quantity, review, model, brand} = req.body;
        const newWatch = await pool.query(
            "INSERT INTO watches (watch_serial, year_created, water_resit, color, size, quantity, review, model, brand) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
            [watch_serial, year_created, water_resit, color, size, quantity, review, model, brand]
        );
        
        res.json(newWatch.rows[0]);
    }catch(err){
        console.log(err.message);
    }
});

//delete a watch
app.delete("/watchstore/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        const deletewatch = await pool.query("delete from watches where watch_serial = $1",
         [id]);
        res.json("watch deleted");
    }catch(err){
        console.log(err.message);
    }

});


//update a watch
app.put("/watchstore/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        const {color} = req.body;
        const updateWatch = await pool.query("update watches set color = $1 where watch_serial = $2", 
        [color, id]);
        res.json("watch updated");
    }catch(err){
        console.log(err.message);
    }
});
//see all watch
app.get("/watchstore", async(req, res)=>{
    try{
        const allwatches = await pool.query("select * from watches");
        res.json(allwatches.rows);
    }catch(err){
        console.log(err.message);
    }

});
//search a watch by id
app.get("/watchstore/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        const watch = await pool.query("select * from watches where watch_serial = $1", [id]);
        res.json(watch.rows[0]);
    }catch(err){
        console.log(err.message);
    }

});



//search a watch by brand


//search a watch by model





app.listen(5000, () =>{
    console.log("sever start at port 5000");
});
