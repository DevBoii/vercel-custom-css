const fetch = require('node-fetch')
module.exports = async (req, res) => {
  const html = (
    await (await fetch('http://lsfd.gta.world/' + req.url)).text()
  ).replace(
    '</head>',
    '<meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>SFM Forum</title> <link rel="alternate" type="application/atom+xml" title="SFM Forum" href="/app.php/feed"> <link rel="alternate" type="application/atom+xml" title="SFM Forum" href="/app.php/feed/topics"> <link href="http://lsfd.gta.world/styles/prosilver/theme/stylesheet.css?assets_version=16" rel="stylesheet"> <link href="http://lsfd.gta.world/assets/css/font-awesome.min.css?assets_version=16" rel="stylesheet"> <link href="http://lsfd.gta.world/styles/we_fd/theme/stylesheet.css?assets_version=16" rel="stylesheet"> <link href="http://lsfd.gta.world/styles/prosilver/theme/responsive.css?assets_version=16" rel="stylesheet"> <link href="http://lsfd.gta.world/styles/we_fd/theme/responsive.css?assets_version=16" rel="stylesheet"></head>'
  )

  res.send(html)
  res.end()
}
