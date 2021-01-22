const fetch = require('node-fetch')
module.exports = async (req, res) => {
  const html = (await (await fetch('http://lsfd.gta.world/' + req.url)).text()).replace('</head>','<link media="all" href="/custom.css" rel="stylesheet" /></head>').replaceall('./../','https://lsfd.gta.world/')
  res.send(html)
  res.end()
}
