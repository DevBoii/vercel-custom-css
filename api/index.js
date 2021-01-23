const fetch = require('node-fetch')
module.exports = async (req, res) => {
  const html = (await (await fetch('http://lsfd.gta.world/' + req.url)).text()).replace('</head>','<link media="all" href="/custom.css" rel="stylesheet" /></head>').replace(/https:\/\/lsfd.gta.world\//g,'./../').replace(/.\/..\/styles\//g,'https://lsfd.gta.world/styles/')
  res.send(html)
  res.end()
}
