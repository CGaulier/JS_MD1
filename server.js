/**
 * Configuration Import
 * - Importer tous les modules
 */
    // => NodeJS
    require('dotenv').config();
    const express = require('express');
    const path = require('path');
    const ejs = require('ejs');
    const bodyParser = require('body-parser');

    // => Inner
    const FrontRouterClass = require('./routes/front/front.routes');
    const D3RouterClass = require('./routes/d3/d3.routes')

//

 /**
  * 
  Configuration 
  - Definition du server
  */
    const server = express();
    const port = process.env.PORT;

    class ServerClass {
        init(){
            // -> Client folder
            server.set( 'views', __dirname + '/www');
            server.use( express.static(path.join(__dirname, 'www')) );

            // -> View engine
            server.engine( 'html', ejs.renderFile );
            server.set( 'view engine', 'html' );

            // -> set Body-parser notre server est censé reccup des données dans le body des requetes
            server.use( bodyParser.json({ limit: '10mb' })); // données max de 10mb
            server.use( bodyParser.urlencoded( { extended: true } ) )

            // = > Routers
            // Router D3 tjrs au dessus de l'autre
            const d3Router = new D3RouterClass();
            const frontRouter = new FrontRouterClass();
            server.use( '/api/d3', d3Router.init() ); // nom d'acces
            server.use( '/', frontRouter.init() );


            // -> start server
            this.launch();

        }
        launch(){
            server.listen( port, () => {
                console.log(`Server listening on port ${port}`)
            } ); // async une fois que le server a repondu je reccup la donnée

        }
    }
//

  /**
   * 
   * Lancer le server
   */
    new ServerClass().init();

  //