/**
 * Application entry point
 */

require('module-alias/register')
import express = require('express')

const app = express()
const port = process.env.PORT

app.get('/', (req, res)=>{
    res.send("ICO (Initial coin offering) for our CCE (Crypto currency exchange)\n")
});

const server = app.listen(port, (err) => {
    if (err) {
        return console.error(err)
    }
    console.log(`Listening http://127.0.0.1:${port}`)
})