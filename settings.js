require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAHlvI1sditHtTwQAAHIHAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVGkG5WtVVC7TIxRvifWseIgSIQsAQVJjyv09hd0*Pw+5sL08hSZ3zne+SH4DkuEQuqsHwBygovkKG2iWrCwSGQK+iCFHQBSFkEAyBMF*wkj8iB0o9KOBtHUuyoCv25Mgjtb7sZrNajqSe1dtpL+DRBUV1THHwh4Km3zP9i7JpDvEypetJit3qrhA5zCaTwheZZKV7tQi5o6e8gEdbEWKKSTwqEpQhClMX1QuI6dfg4*nKuDIkHyvbH4iT4xT3Svv4ShNOGDm1EarT3u4qOIlI9l+Dvxh7maJIkrEcR1kmnUjq5Bv3sIlG4ymMqdZxNtHah*uK997glzgmKLRDRBhm9Zd5v2iiWs1sU2jsLO2bQSdrEiFkJ9qYBjd2bq*TAYHyQnN2068Bd4LmBqGcz71Z*9K407t7U+*jFF*6UK2urqIXuugxc84n09+BL+iHV87*h*fcMCvNSxRVq80yW5lJM+ISVOYk2nPOtI9dTFIXz1k1yL8Gv9otoTjKB3CZ3e8Isc0+3fHCtTbtxeYgrKY5XJXaDXuycfuED1lF*0hyjH19O16NB27jy70LFElF+9zR3DYu2TOaXs2jcDcvZ3Ge1MrJu1TOWCZQJQmp*PhWO+udZimcOhic7eSeQse2eifv5TnRGdV2CIb8owsoinHJKGQ4J+1en1e7AIZXHwUUsSe94PCq7yPihXMUX9euIBpX0ThZVnkwT1BNHFd2tG0wKu2TPHoBXVDQPEBliUILlyyn9RSVJYxRCYZ*f+8Cgu7sTbi23YDvggjTkq1JVaQ5DD9U*TiEQZBXhPk1CYx2gSgYcp*biDFM4rLlsSKQBgm+IiOBrATDCKYl+jUhoigEQ0Yr9Cu1Rh62xA*kQ19bmEvQBdlTEByCIeiLgsxzfWnADYShov5Vfru1ZWFRfCOIgS5In9d4oS8qKieKgiLwHNfebA8evxC2BUPEIE5LMATG4ijfFU0fzcYrIViPx9o51oxYA58TfVjjjXqdO1HOau6W0BnZnSq47GZr3c+dIMutGXyVZ*rSyu*5VhgpL*9QBAxB4*G3ADqbySU+zvaTRXJe4ULrwSvWL6Kw1JLJcbqyJW8w3qKDcjfSoxVtrBFneWZyY1gVgnhpHFSCDKl3piW*9kNDa33UBSG64gD93iyvzQ6+SZOSu6Xb9f6Y0SRavsYnouuv+pFpPr8U56jfjNByJ4bNgKPFdT4u*dIyr3DdX0CSRojbbXmpkbKoviWbsYnfTfsMTfr+WOGnnVqt2t8Io2f2CWwV*G*t3oC3FuMe3d9qvL8m*5JI3QttSdUVZdlZJMaCEjdtNtr6Yuyci95s407jrZfSFJqVvgCPx*cuKFLIopxmYAggCWmOQ9AFNK9az9okyv*QzNBtW3+fPIUl0z5zsMIZKhnMCjDkZVFSOVlVlLdbC5oXFiyT1pmukFhCa+paKwqfQfYRK6C1n27dweMnUEsBAhQDFAAACAgAeW8jWx2K0e1PBAAAcgcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAdwQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254710263034',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Unscripted2189',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 33,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
