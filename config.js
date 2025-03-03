

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1015298973415768155", ""], 
  mongodbUri : "mongodb+srv://Veex:<db_password>@cluster0.upxjg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "XX",
      password: "enteryourcustompass",
      host: "180.188.226.76",
      port:  7019,
      secure: false
    }
  ]
}
