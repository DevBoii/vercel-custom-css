const fetch = require('node-fetch')
module.exports = async (req, res) => {
  const html = (await (await fetch('http://lsfd.gta.world/' + req.url)).text()).replace('</head>','<link media="all" href="/custom.css" rel="stylesheet" /></head>')
  const html = (await (await fetch('http://lsfd.gta.world/' + req.url)).text()).replace('./','http://lsfd.gta.world/' /></head>')
  res.send(html)
  res.end()
}
