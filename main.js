console.log('Andrea');

//passiamo express
const express = require('express')
const app = express()
//selezioniamo la porta
const port = 3505
//ciò che rendiamo pubblico
app.use(express.static('public'));
//andiamo a fare la chiamata col metodo get
app.get('/', (req, res) => {
    //ciò che andiamo a inviare
res.send('Server del mio blog!')
console.log('Andrea')
})
app.listen(port, () => {
    console.log(`La mia porta è ${port}`)
    })

app.get('/bacheca', (req, res) =>{
//creiamo l'array
    const dolci = [
        {
            titolo: "dolceUno",
            contenuto: "ciambellone",
            immagine: "img/ciambellone.jpeg",
            tags: ["crema","pistacchio","cioccolato"],
        }, {
            titolo: "dolceDue",
            contenuto: "crackersDolci",
            immagine: "img/cracker_barbabietola.jpeg",
            tags: ["crackers","barbabietola"],
        }, {
            titolo: "dolceTre",
            contenuto: "paneFritto",
            immagine: "img/pane_fritto_dolce.jpeg",
            tags: ["pane","olio","frittura"],
        }, {
            titolo: "dolceQuattro",
            contenuto: "pastaBarbabietola",
            immagine: "img/pasta_barbabietola.jpeg",
            tags: ["pasta","barbabietola"],
        }, {
            titolo: "dolceCinque",
            contenuto: "tortaPaesena",
            immagine: "img/torta_paesana.jpeg",
            tags: ["torta","zucchero","uova"],
        },
    ];
    //andiamo a passare in json l'array di oggetti
    res.json(dolci)
})