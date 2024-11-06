const app = Vue.createApp({
    data() {
        return {
            preguntas: [
                { text: "¿Cuál es tu bebida favorita?", opc: [
                    { text: "Cerveza", ptos: 1 },
                    { text: "Tequila", ptos: 2 },
                    { text: "Agua de Horchata", ptos: 3 },
                    { text: "Refresco", ptos: 4 }
                ]},
                { text: "¿Qué comida prefieres?", opc: [
                    { text: "Tacos", ptos: 1 },
                    { text: "Elotes", ptos: 2 },
                    { text: "Churros", ptos: 3 },
                    { text: "Ceviche", ptos: 4 }
                ]},
                { text: "¿Cuál es tu lugar ideal para salir?", opc: [
                    { text: "La playa", ptos: 1 },
                    { text: "El bosque", ptos: 2 },
                    { text: "Una fiesta", ptos: 3 },
                    { text: "El cine", ptos: 4 }
                ]},
                { text: "¿Qué estilo de música prefieres?", opc: [
                    { text: "Rock", ptos: 1 },
                    { text: "Pop", ptos: 2 },
                    { text: "Reggaetón", ptos: 3 },
                    { text: "Salsa", ptos: 4 }
                ]},
                { text: "¿Te consideras más?", opc: [
                    { text: "Aventurero/a", ptos: 1 },
                    { text: "Relajado/a", ptos: 2 },
                    { text: "Divertido/a", ptos: 3 },
                    { text: "Pensativo/a", ptos: 4 }
                ]},
                { text: "¿Cuál es tu pasatiempo favorito?", opc: [
                    { text: "Leer", ptos: 1 },
                    { text: "Hacer deporte", ptos: 2 },
                    { text: "Ver series", ptos: 3 },
                    { text: "Cocinar", ptos: 4 }
                ]},
                { text: "¿Cómo prefieres pasar tus vacaciones?", opc: [
                    { text: "Explorando nuevas ciudades", ptos: 1 },
                    { text: "Disfrutando en la naturaleza", ptos: 2 },
                    { text: "Descansando en casa", ptos: 3 },
                    { text: "Haciendo actividades extremas", ptos: 4 }
                ]},
                { text: "¿Qué te describe mejor?", opc: [
                    { text: "Curioso/a", ptos: 1 },
                    { text: "Calmado/a", ptos: 2 },
                    { text: "Impulsivo/a", ptos: 3 },
                    { text: "Reservado/a", ptos: 4 }
                ]},
                { text: "¿Cuál es tu película favorita?", opc: [
                    { text: "Terror", ptos: 1 },
                    { text: "Comedia", ptos: 2 },
                    { text: "Acción", ptos: 3 },
                    { text: "Drama", ptos: 4 }
                ]},
                { text: "¿Qué mascota prefieres?", opc: [
                    { text: "Perro", ptos: 1 },
                    { text: "Gato", ptos: 2 },
                    { text: "Pájaro", ptos: 3 },
                    { text: "Pez", ptos: 4 }
                ]}
            ],
            respuestas: Array(10).fill(null),
            personaje: "",
            descripcion: "",
            imagen:'',
        };
    },
    methods: {
        result() {
            const totalPtos = this.respuestas.reduce((sum, ptos) => sum + ptos, 0);
            
            if (totalPtos <= 10) {
                this.personaje = "Doofy Gilmore";
                this.descripcion = "Eres Doofy, el personaje divertido y algo despistado.";
                this.imagen="https://th.bing.com/th/id/OIP.7zoIDV106et47UNKrNWKGwHaFZ?w=234&h=180&c=7&r=0&o=5&pid=1.7";
            } else if (totalPtos <= 20) {
                this.personaje = "Cindy Campbell";
                this.descripcion = "Eres Cindy, la protagonista valiente y decidida.";
                this.imagen="https://th.bing.com/th/id/OIP.bL6hvmodnkOjzqEgKuHYDwAAAA?w=255&h=176&c=7&r=0&o=5&pid=1.7"
            } else if (totalPtos <= 30) {
                this.personaje = "Shorty Meeks";
                this.descripcion = "Eres Shorty, relajado y siempre listo para pasarla bien.";
                this.imagen="https://th.bing.com/th/id/OIP.1ADWqQQpRx3OQ8YkCOsRgwHaEK?w=299&h=180&c=7&r=0&o=5&pid=1.7"
            } else if (totalPtos <= 35) {
                this.personaje = "Maestra Mann";
                this.descripcion = "Eres la Maestra Mann, directa y con un humor único.";
                this.imagen="https://th.bing.com/th/id/OIP.spNc_zCzGtLKlZAs-2boawAAAA?w=273&h=180&c=7&r=0&o=5&pid=1.7"
            } else if (totalPtos <= 40) {
                this.personaje = "Gail Hailstorm";
                this.descripcion = "Eres Gail, intrépida y con un sentido del drama inigualable.";
                this.imagen="https://th.bing.com/th/id/OIP.3KKIUTOqO0FEj2g8CXzmogHaEK?w=311&h=180&c=7&r=0&o=5&pid=1.7"
            } else {
                this.personaje = "Greg Phillipe";
                this.descripcion = "Eres Greg, encantador y siempre tratando de impresionar.";
                this.imagen="https://th.bing.com/th/id/OIP.qSTsUG3OTEkN4QrEZO9wHwHaFZ?w=250&h=182&c=7&r=0&o=5&pid=1.7"
            }
        },
        resetQuiz() {
            this.respuestas = Array(10).fill(null);
            this.personaje = "";
            this.descripcion = "";
        }
    }
});

app.mount("#app");