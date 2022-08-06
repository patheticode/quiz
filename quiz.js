const express = require ('express')
const port = process.env.PORT || 3000
const app = express()

app.use(express.static("views"))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {

    res.render('index')

})

app.listen(port)