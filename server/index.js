const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production' //true false
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler() //part of next config
const MongoClient = require('mongodb').MongoClient;

nextApp.prepare().then(() => {
    nextApp.prepare().then(() => {
        const uri = "mongodb+srv://vitya:SVEta230583_@vitynadovity-qomx5.mongodb.net/test?retryWrites=true";
        const mongoClient = new MongoClient(uri, { useNewUrlParser: true });

        let dbClient;
        const app = express()
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use('/api/posts', require('./routes/index'));
        app.get('*', (req,res) => {
            return handle(req,res) // for all the react stuff
        })

        mongoClient.connect(function(err, client){
            if(err) return console.log(err);
            dbClient = client;
            app.locals.collection = client.db("test").collection("users");
            app.listen(PORT, function(){
                console.log("Сервер ожидает подключения...");
            });
        });
    })
})