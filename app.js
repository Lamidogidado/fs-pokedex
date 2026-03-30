const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

// Add the version endpoint here
app.get('/version', (req, res) => {
  res.send('2') // change this string to '2', '3' etc. to verify new deploys
})

// Add a health check (good practice for CI/CD)
app.get('/health', (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const _unused = { req, res }
  throw new Error('intentional crash')
})
const start = async () => {
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
  })
}

start()