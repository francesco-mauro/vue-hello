const { createApp } = Vue;


createApp({
    data() {
        return {
            message: "questo messaggio sono finalmente riuscito a stamparlo in pagina",
        }
    },
}).mount(`#app`)