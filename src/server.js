
const express = require("express")

const server = express()

const db = require("./database/db.js")

server.use(express.static("public"))

server.use(express.urlencoded({extended: true}))

const nunjucks = require("nunjucks")

nunjucks.configure("src/views", {
    express: server,
    noCache: false

})

server.get("/", (req, res) =>{
    return res.render("index.html")

})

server.get("/create-point", (req, res) =>{

    return res.render("creat-point.html")
})

server.post("/save-point", (req, res)=>{

    console.log(req.body)

    const query = `
        INSERT INTO places(
            image,
            name,
            adress,
            adress2,
            state,
            city,
            items
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.adress,
        req.body.adress2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err){
        if(err)
        {
            return console.log(err)
        }
        
        return res.render("creat-point.html", { salved: true })
    }

    db.run(query, values, afterInsertData)

})

server.get("/search", (req, res) =>{

    const search = req.query.search

    if(search == ""){
        //pesquisa vazia
        return res.render("search-results.html", { places: -1})
    }else{
        db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
            if(err){
                return console.log(err)
            }

            return res.render("search-results.html", { places: rows})

        })
    
    }


})

server.listen(3001)

