const Database = require("./db");

const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  await saveOrphanage(db, {
        lat: "-27.222633", 
        lng: "-49.6555874",
        name: "Lar dos meninos",
        about: "Preste assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9898265475",
        images: [

            "https://source.unsplash.com/random?sig=10",

            "https://source.unsplash.com/random?sig=11"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 08h até as 18h",
        open_on_weekends: "0"
  });

  //consultar dados da tabela orphanages
  // const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  // console.log(selectedOrphanages);

  //consultar apenas um orfanato
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  // console.log(orphanage);

  // //deletar um dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
});
