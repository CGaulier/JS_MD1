
/**
 * 
 * Attendre le chargement du DOM
 * 
 */
    document.addEventListener('DOMContentLoaded', ()=>{
        // => Selectionner le formulaire et le placer dans une constante
        const fromConverter = document.querySelector('#fromConverter form');
        // => Selectionner le formulaire et le placer dans une constante
        const rawData = document.querySelector('#rawData');

        // => Capter la soumission du formulaire
        fromConverter.addEventListener('submit', (event)=>{
            event.preventDefault();

            const header = {
                method: 'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({input: rawData.value})
            }

            if( rawData.value.length !== 0 ){
                fetch( 'http://localhost:9876/api/d3', header )
                .then( data => {
                   return data.json() // une fois la donnée en brut je renvoie en json
                }) 
                .then(jsonData => console.log(jsonData))
                .catch(err => console.err(err));
            }
        })



    });
 //