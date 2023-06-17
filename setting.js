const chalk = require('chalk')
const fs = require('fs')


// edit thumb ada di file string/ppbot.js

global.owner = ['62895632014165'] // pakai nomor owner
global.ownernomer = "62895632014165" // pakai nomor owner
global.socialmedia = "IG: indr.ra_" // ini ig buat di ownerjy
global.yutub = "YT: -"// sama
global.lokasi = "Indonesia, Jawatimur, Lumajang"//

global.packgename = "by" 
global.author = "Ndr" 

global.title = 'SakuraMD'//Tittle reply 
global.body = 'ehheee' //body reply

global.welcome = false 
global.left = false


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})