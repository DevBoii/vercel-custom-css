const fetch = require('node-fetch')
module.exports = async (req, res) => {
  const html = (
    await (await fetch('http://lsfd.gta.world/' + req.url)).text()
  ).replace(
    '</head>',
    '<style>body, html{background-color:black;}</style></head>'
  )

  res.send(html)
  res.end()
}
