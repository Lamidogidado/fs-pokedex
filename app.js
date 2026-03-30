const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

// Add the version endpoint here
app.get('/version', (req, res) => {
  res.send('1') // change this string to '2', '3' etc. to verify new deploys
})

// Add a health check (good practice for CI/CD)
app.get('/health', (req, res) => {
  res.send('ok')
})

const start = async () => {
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
  })
}

start()