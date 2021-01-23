const fetch = require('node-fetch')
module.exports = async (req, res) => {
  const html = (await (await fetch('http://lsfd.gta.world/' + req.url)).text()).replace('</head>','<link media="all" href="/custom.css" rel="stylesheet" /></head>').replace(/https:\/\/lsfd.gta.world\//g,'https://vercel-custom-css-jkwrg0zu4.vercel.app/').replace(/.\/..\/styles/g,'https://lsfd.gta.world/')
  res.send(html)
  res.end()
}
