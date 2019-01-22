/**
 * Import et config
 */
    const d3 = require('d3');
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
                d3Router.post('/convert', (req, res)=>{
                    // convertir un csv en json avec d3
                    let jsonData = d3.csvParse(req.body.input); // on envoit un objet et on le parse en json

                    // regex to check num value
                    const regexNumeric = /(\d+(\.\d+)?)/;

                    const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
                    

                    // faire une boucle pour changer les str en INT 
                    for( let i = 0; i < jsonData.length; i++ ){
                        console.log( jsonData[i] )
    
                        let item = jsonData[i] ;
                        
                        //=> Boucle sur un objet
                        for( let prop in item ){
                            //=> Vérifier les valeurs numériques
                            if( regexNumeric.test(item[prop]) && !regexDate.test(item[prop])){
                                item[prop] = +item[prop];
                            }
                            else if( regexDate.test(item[prop]) ){
                                item[prop] = new Date(item[prop]);
                            }
                        }
                    }

                    res.json({msg: 'Post data', data: jsonData})
                })
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