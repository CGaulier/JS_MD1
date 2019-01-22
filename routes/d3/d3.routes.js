/**
 * Import et config
 */

    const express =  require('express');
    const d3Router = express.Router();
//

/**
 * Definition
 */
    class D3RouterClass {
        constructor(){}

            routes(){
                // chercher api/d3
                d3Router.get('/', (req, res)=>{
                    res.json( { msg: "Hello api" } );
                });
            }
            init(){
                this.routes();
                return d3Router

            }
    }
 //

 /**
  * export
  */
    module.exports = D3RouterClass;
  //