 /* importar a dependência do sqlite3 */

const sqlite3 = require('sqlite3').verbose()

/*criar o objeto que irá fazer operações no banco de dados*/
const db = new sqlite3.Database("./src/database/database.db")
/*no terminal -> node src/databse/db.js*/

module.exports = db /*exportação do banco de dados*/






/*COMENTÁRIOS*/


// const query = `
//     INSERT INTO places (
//         image,
//         name,
//         adress,
//         adress2,
//         state,
//         city,
//         items

//     ) VALUES (?, ?, ?, ?, ?, ?, ?);
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1567093321629-c23611f44d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//         "Colectoria",
//         "Avenida Jovita Feitosa",
//         "Nº 755",
//         "Ceará",
//         "Fortaleza",
//         "Resíduos Eletrônicos, Lâmpadas"
//      ]


//      function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Cadastri com sucesso")
//         console.log(this)
// }



//      db.run(query, values, afterInsertData)
// //     /*consultar dados na tabela*/
// //      db.all(`SELECT * FROM places`, function(err, rows)
// //      {
// //         if(err){
// //             return console.log(err)
// //         }

// //         console.log("Aqui estão os seus dados registrados: ")
// //         console.log(rows)
// //      })


// db.all(`SELECT * FROM places`, function(err, rows){
//     if(err){
//         return console.log(err)
//     }
//     console.log("Aqui estão os seus dados registrados: ")
//     console.log(rows)
// })


// db.run(`DELETE FROM places WHERE id = ?`, [23], function(err){
//     if(err)
//     {
//         return console.log(err)
//     }
//     console.log("Registro deletado com sucesso!")
// })

// db.serialize(()=>{
//     db.run(`DELETE FROM places`, function(err){
//         if(err){
//             console.log("deu merda")
//             return console.log(err)
            
//         }console.log("Registro deletado com sucesso!")
//     })
// })


// db.serialize(()=>{
//     db.run(query, values, afterInsertData)
//     /*consultar dados na tabela*/
//      db.all(`SELECT * FROM places`, function(err, rows)
//      {
//         if(err){
//             return console.log(err)
//         }

//         console.log("Aqui estão os seus dados registrados: ")
//         console.log(rows)
//      })

// })




/*utilizar o objeto de banco de dados, para nossas operações */

// db.serialize(()=> {
// //     /*criar uma tabela com comandos SQL*/
// //     db.run(`
// //         CREATE TABLE IF NOT EXISTS places (
// //             id INTEGER PRIMARY KEY AUTOINCREMENT,
// //             image TEXT,
// //             name TEXT,
// //             adress TEXT,
// //             adress2 TEXT,
// //             state TEXT,
// //             city TEXT,
// //             items TEXT
// //         );
// //     `)
// //     /*inserir dados na tabela*/
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         adress,
//         adress2,
//         state,
//         city,
//         items

//     ) VALUES (?, ?, ?, ?, ?, ?, ?);
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1567093321629-c23611f44d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//         "Colectoria",
//         "Avenida Jovita Feitosa",
//         "Nº 755",
//         "Ceará",
//         "Fortaleza",
//         "Resíduos Eletrônicos, Lâmpadas"
//      ]


//      function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Cadastri com sucesso")
//         console.log(this)

//      }
     

// //      /*deteltar um dado da tabela*/
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    //     if(err)
    //     {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")
    // })

//      db.run(query, values, afterInsertData)
// //     /*consultar dados na tabela*/
// //      db.all(`SELECT * FROM places`, function(err, rows)
// //      {
// //         if(err){
// //             return console.log(err)
// //         }

// //         console.log("Aqui estão os seus dados registrados: ")
// //         console.log(rows)
// //      })



// })
