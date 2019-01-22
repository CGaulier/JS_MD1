/**
 * Import et config
 */

    const express =  require('express');
    const frontRouter = express.Router();
//

/**
 * Definition
 */
    class FrontRouterClass {
        constructor(){}

            routes(){
                // définir la homepage
                frontRouter.get('/', (req, res)=>{
                    res.render('index');
                });
                // def nouvelle page
                frontRouter.get('/convert', (req, res)=>{
                    res.render('convert');
                });
            }
            init(){
                this.routes();
                return frontRouter

            }
    }
 //

 /**
  * export
  */
    module.exports = FrontRouterClass;
  //