const express = require('express') // this loads the express library into this file



const app = express()
// setup Express config
app.set('view engine', 'ejs') // tell express whenever we render a view it should be using EJS as the engine to create the view. **Make sure you've installed ejs with `npm install ejs`
app.set('views', 'views') // tell express our view templates sit in a directory called "templates". By default express will think the views are inside a directory called "views" (this is convention too)


const DOMAIN = 'localhost' 
const PORT = 4000 

app.listen(PORT, DOMAIN, () => {
  // when the app starts listening this callback gets invoked
  console.log(`Server is listening on ${DOMAIN}:${PORT}`)
})
