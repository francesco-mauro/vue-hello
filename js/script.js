const { createApp } = Vue;


createApp({
    data() {
        return {
            message: "questo messaggio sono finalmente riuscito a stamparlo in pagina",
            myImg: "./img/Patata.png"
        }
    },
}).mount(`#app`)