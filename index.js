const express = require("express")
const showdata = require("./showdata")

const app = express()

app.set("view engine", "pug")

app.use(express.static("public"))

app.get("/", (request, response) => {
  response.render("index", { showdata })
})

app.all("*", (request, response) => {
  return response.sendStatus(404)
})

app.listen(8182, () => {
  console.log("Listening on 8182...")//eslint-disable-line no-console
})
