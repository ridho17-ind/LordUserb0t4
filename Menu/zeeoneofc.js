exports.allmenu = (namabot, pushname, sender, isOwner, isPrem, cekvipp, getLimit, limitawal, limit, balance, getBalance, simbolnya, petik, prefix) => {
return`Hello ${pushname}🤗 Saya ${namabot} Yang Paling Bagus

📛 Nama : ${pushname} 
🆔 Nomor : @${sender.split("@")[0]} 
📊 Status : ${isOwner?`Owner ⚔️`:isPrem?`Premium 🏅`:`Free User`} 
🎁 Expired Prem : ${isOwner?`Unlimited Owner`:isPrem ? `${cekvipp.days}d, ${cekvipp.hours}h, ${cekvipp.minutes}m, ${cekvipp.seconds}s`:'Not Premium'}
💳 Limit : ${isOwner?`Unlimited`: isPrem ? `Unlimited Premium` : getLimit(sender, limitawal, limit) +' / '+limitawal}
💠 Balance : ${getBalance(sender, balance)}


ℒ⃝👦 *Owner-Menu*
${simbolnya} ${prefix}bc
${simbolnya} ${prefix}exif
${simbolnya} ${prefix}ban
${simbolnya} ${prefix}unban
${simbolnya} ${prefix}block
${simbolnya} ${prefix}unblock
${simbolnya} ${prefix}clearall
${simbolnya} ${prefix}setbiobot
${simbolnya} ${prefix}setnamabot
${simbolnya} ${prefix}resetlimit
${simbolnya} ${prefix}cekapikey
${simbolnya} ${prefix}setthumb
${simbolnya} ${prefix}prem add @tag waktu
${simbolnya} ${prefix}prem del @tag waktu
${simbolnya} ${prefix}sewa add waktu
${simbolnya} ${prefix}sewa del
${simbolnya} ${prefix}auto ngetik/vn
${simbolnya} ${prefix}setprefix nopref/multi
${simbolnya}  > || x
${simbolnya}  =>
${simbolnya}  $
${simbolnya}  <

ℒ⃝🗃️ *Download-Menu*
${simbolnya} ${prefix}play [query]
${simbolnya} ${prefix}ytmp3 [url]
${simbolnya} ${prefix}ytmp4 [url]
${simbolnya} ${prefix}video [query]
${simbolnya} ${prefix}igdl [url]
${simbolnya} ${prefix}igstory [username]
${simbolnya} ${prefix}igphoto [url]
${simbolnya} ${prefix}igreel [url]
${simbolnya} ${prefix}igvideo [url]
${simbolnya} ${prefix}igtv [url]
${simbolnya} ${prefix}tiktok [url]
${simbolnya} ${prefix}tiktokaudio [url]
${simbolnya} ${prefix}tiktoknowm [url]
${simbolnya} ${prefix}mediafire [url]

ℒ⃝🖼️ *Convert-Menu*
${simbolnya} ${prefix}sticker
${simbolnya} ${prefix}swm
${simbolnya} ${prefix}take
${simbolnya} ${prefix}attp
${simbolnya} ${prefix}semoji 🐦
${simbolnya} ${prefix}toimg
${simbolnya} ${prefix}tomp4
${simbolnya} ${prefix}togif
${simbolnya} ${prefix}tomp3
${simbolnya} ${prefix}tovn
${simbolnya} ${prefix}tinyurl
${simbolnya} ${prefix}kontak
${simbolnya} ${prefix}tts Kode Bahasa Teks
${simbolnya} ${prefix}translate Kode Bahasa
${simbolnya} ${prefix}bass
${simbolnya} ${prefix}slow
${simbolnya} ${prefix}fast
${simbolnya} ${prefix}robot
${simbolnya} ${prefix}detikvn
${simbolnya} ${prefix}tupai
${simbolnya} ${prefix}vibrato

ℒ⃝🎨 *Editor-Menu*
${simbolnya} ${prefix}memegen teks atas | teks bawah
${simbolnya} ${prefix}stickmeme teks

ℒ⃝🔍 *Search-Menu*
${simbolnya} ${prefix}caripesan
${simbolnya} ${prefix}pinterest
${simbolnya} ${prefix}wikipedia
${simbolnya} ${prefix}playstore
${simbolnya} ${prefix}brainly
${simbolnya} ${prefix}yts

ℒ⃝🗂️ *Storage-Menu*
${simbolnya} ${prefix}addrespon
${simbolnya} ${prefix}delrespon
${simbolnya} ${prefix}listrespon
${simbolnya} ${prefix}listbadword
${simbolnya} ${prefix}addbadword
${simbolnya} ${prefix}delbadword
${simbolnya} ${prefix}addvn
${simbolnya} ${prefix}listvn
${simbolnya} ${prefix}delvn
${simbolnya} ${prefix}addimage
${simbolnya} ${prefix}listimage
${simbolnya} ${prefix}delimage
${simbolnya} ${prefix}addvideo
${simbolnya} ${prefix}listvideo
${simbolnya} ${prefix}delvideo
${simbolnya} ${prefix}addsticker
${simbolnya} ${prefix}liststicker
${simbolnya} ${prefix}delstik

ℒ⃝⛪ *Fun-Menu*
${simbolnya} ${prefix}slot
${simbolnya} ${prefix}truth
${simbolnya} ${prefix}dare
${simbolnya} ${prefix}voting @tag | alasan | waktu
${simbolnya} ${prefix}delvote
	vote
	devote
   
ℒ⃝👩‍👩‍👧‍👧 *Group-Menu*
${simbolnya} ${prefix}chatinfo
${simbolnya} ${prefix}afk reason
${simbolnya} ${prefix}hidetag
${simbolnya} ${prefix}notif
${simbolnya} ${prefix}infogc
${simbolnya} ${prefix}jadian
${simbolnya} ${prefix}listonline
${simbolnya} ${prefix}tagall
${simbolnya} ${prefix}ceksewa
${simbolnya} ${prefix}add 628XX
${simbolnya} ${prefix}kick
${simbolnya} ${prefix}promote
${simbolnya} ${prefix}demote
${simbolnya} ${prefix}resetlink
${simbolnya} ${prefix}linkgc
${simbolnya} ${prefix}grup [open/close]
${simbolnya} ${prefix}antibadword [on/off]
${simbolnya} ${prefix}antilink [on/off]
${simbolnya} ${prefix}antitroli [on/off]

ℒ⃝😋 *Anime-Menu* 
${simbolnya} ${prefix}loli
${simbolnya} ${prefix}neko
${simbolnya} ${prefix}waifu
${simbolnya} ${prefix}shinobu
${simbolnya} ${prefix}megumin
${simbolnya} ${prefix}bully
${simbolnya} ${prefix}cuddle
${simbolnya} ${prefix}cry
${simbolnya} ${prefix}hug
${simbolnya} ${prefix}awoo
${simbolnya} ${prefix}kiss
${simbolnya} ${prefix}lick
${simbolnya} ${prefix}pat
${simbolnya} ${prefix}smug
${simbolnya} ${prefix}bonk
${simbolnya} ${prefix}yeet
${simbolnya} ${prefix}blush
${simbolnya} ${prefix}smile
${simbolnya} ${prefix}wave
${simbolnya} ${prefix}highfive
${simbolnya} ${prefix}handhold
${simbolnya} ${prefix}nom
${simbolnya} ${prefix}bite
${simbolnya} ${prefix}glomp
${simbolnya} ${prefix}slap
${simbolnya} ${prefix}kill
${simbolnya} ${prefix}happy
${simbolnya} ${prefix}wink
${simbolnya} ${prefix}poke
${simbolnya} ${prefix}dance
${simbolnya} ${prefix}cringe
   
ℒ⃝📊 *Limit-Menu*
${simbolnya} ${prefix}topbalance
${simbolnya} ${prefix}toplimit
${simbolnya} ${prefix}limit
${simbolnya} ${prefix}level
${simbolnya} ${prefix}balance
${simbolnya} ${prefix}buylimit Nominal
${simbolnya} ${prefix}giftlimit @tag | nominal
${simbolnya} ${prefix}buyprem [need 1k limit]
   
ℒ⃝🎨 *Maker-Menu*
${simbolnya} ${prefix}nuliskanan
${simbolnya} ${prefix}nuliskiri
${simbolnya} ${prefix}foliokanan
${simbolnya} ${prefix}foliokiri
${simbolnya} ${prefix}naruto
${simbolnya} ${prefix}shadow
${simbolnya} ${prefix}lovemsg
${simbolnya} ${prefix}doubleheart
${simbolnya} ${prefix}coffecup
${simbolnya} ${prefix}lovetext
${simbolnya} ${prefix}butterfly
${simbolnya} ${prefix}romantic
${simbolnya} ${prefix}smoke
${simbolnya} ${prefix}burnpaper
${simbolnya} ${prefix}grass

ℒ⃝🏷️ *Others-Menu*
${simbolnya} ${prefix}pantun
${simbolnya} ${prefix}faktaunik
${simbolnya} ${prefix}styletext
${simbolnya} ${prefix}donasi
${simbolnya} ${prefix}asupan
${simbolnya} ${prefix}nulis
${simbolnya} ${prefix}getnumber
${simbolnya} ${prefix}getpic
${simbolnya} ${prefix}inspect
${simbolnya} ${prefix}wame 
${simbolnya} ${prefix}towame`
}
