const express = require('express')
const app = express()
const PORT = 8089
const path = require('path')

app.use(express.static('build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => console.log('no issues'))