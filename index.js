const express = require('express') // this loads the express library into this file


const app = express()



const DOMAIN = 'localhost' 
const PORT = 4000 

app.listen(PORT, DOMAIN, () => {
  // when the app starts listening this callback gets invoked
  console.log(`Server is listening on ${DOMAIN}:${PORT}`)
})
