# Mise en place d'un server js
- npm init -y
- npm i -s express dotenv ejs path body-parser d3
- créer un .gitignore ->ce qu'on veut pas sur notre github
- créer un .env -> a mettre dans le gitignore

## Taffer sur server
- on commence par importer le dotenv
- puis express (const)
- puis path (const)
- puis ejs (const)
- const bodyParser (const)
- dans la definition du server : const server = express()
- puis port = process.env.PORT; le port est def dans .env
- faire une class au meme endroit de type ServerClass avec 3 trucs
- faire le launch 
- faire un dossier routes contenant un dossier d3 et un autre front
- faire dans front front.routes.js
- revenir dans server et mettre le router correspondant. 

## Faire la page et le code
- compléter les route si besoin
- puis dans www
- index.html faire une page sympa et un lien script vers js/app.js
- capter les infos du form
- reccup les données
- dans la routes d3 : il reccupère les données du body