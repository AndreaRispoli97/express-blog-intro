console.log('Andrea');


const express = require('express')
const app = express()
const port = 3500
app.get('/', (req, res) => {
res.send('Hello World!')
console.log('Andrea')
})
app.listen(port, () => {
    console.log(`La mia porta è ${port}`)
    })