const fs = require('fs')
const folderName = process.argv[2] || 'Project'
try {
  fs.mkdirSync(folderName)
  fs.writeFileSync(
    `${folderName}/index.html`,
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <script src="app.js"></script>
  </body>
</html>`
  )
  fs.writeFileSync(`${folderName}/styles.css`, '')
  fs.writeFileSync(`${folderName}/app.js`, '')
  console.log(`${folderName}, created with all 3 basic files.`)
} catch (e) {
  console.log('Something went wrong!')
  console.log(e)
}
