/*iniciando o servidor*/
const express = require("express")
/*require é uma função e como argumento se 
passa 'express', que vai pedir
o EXPRESS para iniciar o servidor*/
const server = express()
/* const server será um objeto da função express() que possuirá
metodos que coordenarão o servidor */

/*Pegar o banco de dados que foi exportado*/
const db = require("./database/db.js")


/*CONFIGURAR EXPRESS PARA PEGAR A PASTA PUBLIC COMO PASTA COMUNS*/
server.use(express.static("public"))

/*habilitar o uso do req.body na nossa aplicação*/
server.use(express.urlencoded({extended: true}))

/* TEMPLATE ENGINE - NUNJUCKS */
const nunjucks = require("nunjucks")

/*informar as pastas que estão os arq HTML*/
nunjucks.configure("src/views", {
    express: server,
    noCache: true
    /*enquanto estiver em desenvolvimento retirar o cache*/

})


/*CRIANDO ROTAS*/
/* PG INICIAL */
/*req = requisição/pedido; res = resposta*/
server.get("/", (req, res) =>{
    //return res.sendFile(__dirname + "/views/index.html")/*envio via express*/
    return res.render("index.html")

})

server.get("/create-point", (req, res) =>{
    //return res.sendFile(__dirname + "/views/creat-point.html")/*envio*/
    //req.query: Query String da URL
    //console.log(req.query)
     
    
    return res.render("creat-point.html")
})

server.post("/save-point", (req, res)=>{

    //req.body: o corpo do nosso formulario
    console.log(req.body)

    /*inserir dados no banco de dados*/
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
        /*req.body é o objeto que contem os valores adquiridos pela url*/
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
    /*pegar conteudo da busca e filtrar*/

    const search = req.query.search

    if(search == ""){
        //pesquisa vazia
        return res.render("search-results.html", { places: -1})
    }else{
            /*pegar os dados do banco de dados*/
        db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
            if(err){
                return console.log(err)
            }

            //mostrar a página html com os dados do banco de dados
            return res.render("search-results.html", { places: rows})

        })
    
    }


     //return res.sendFile(__dirname + "/views/search-results.html")/*envio*/
})

server.listen(3001)
/*server vai ouvir a porta 3000*/

