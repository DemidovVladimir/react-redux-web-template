const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const {
    Stitch,
    AnonymousCredential,
} = require('mongodb-stitch-server-sdk');

nextApp.prepare().then(() => {
    nextApp.prepare().then(async () => {
        const client = Stitch.initializeDefaultAppClient('crossroad-zyama', {});
        const app = express();
        try{
            await client.auth.loginWithCredential(new AnonymousCredential());
            app.locals.stitch = client
        } catch(error) {
            client.close();
        };
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use('/api/posts', require('./routes/index'));
        app.get('*', (req,res) => {
            return handle(req,res) // for all the react stuff
        })

        app.listen(PORT, function(){
            console.log("Сервер ожидает подключения...");
        });
    })
})