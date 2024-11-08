"use strict";
const texto = {
    ipsum: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae, in ac urna congue posuere, sed dictum sapien at ligula interdum posuere.",
        "Integer ac ligula a magna pellentesque suscipit id vitae lorem aenean feugiat, ornare varius justo et sapien auctor, nec tempor metus justo et aliquam urna.",
        "Aliquam sit amet dui nec ligula ultrices ultricies ac non elit varius, congue aenean interdum sed metus sit amet, quisque fermentum libero a erat viverra posuere.",
        "Nullam scelerisque quam sed risus fermentum, vel fermentum lacus fringilla dui, quisque sollicitudin erat a justo tempor, ornare pharetra sapien vel ultricies lacus varius.",
    ],
    italiano: [
        "Non ci sono frutti proibiti nella vita, ma ci sono molti che ci portano a riflessioni profonde. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        "Ogni passo che facciamo nella vita è una scoperta, una porta che si apre verso un mondo di possibilità. Spesso ci troviamo di fronte a decisioni complesse, intrecci di destino e circostanze che sfidano la nostra comprensione. In questi momenti, è essenziale fermarsi, ascoltare il cuore e comprendere ciò che davvero conta.",
        "Esiste un tempo per ogni cosa, e talvolta la vita ci sorprende con percorsi che non avremmo mai immaginato. Ci sono momenti in cui ogni passo sembra sfidare la nostra volontà, e altri in cui tutto scorre senza sforzo. Ma è proprio nell'alternanza tra la calma e la tempesta che scopriamo il nostro vero potenziale.",
        "Non tutti i giorni sono uguali, e ogni istante porta con sé un'opportunità unica per crescere e migliorare. È facile perdersi nelle distrazioni, ma chi trova il coraggio di fermarsi e riflettere scopre il valore della propria strada. Vivere pienamente significa apprezzare ogni momento, guardare oltre le apparenze.",
        "Ogni scelta che compiamo definisce il nostro cammino, ed è nelle piccole decisioni quotidiane che si nasconde la grandezza della nostra esistenza. Le sfide e i momenti di dubbio ci insegnano a comprendere meglio noi stessi, e ci mostrano la forza che non sapevamo di avere. La vita è una danza continua tra luci e ombre.",
    ],
    frances: [
        "Il n'y a pas de fruits défendus dans la vie, mais il y a beaucoup de réflexions profondes. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        "La vie est un voyage fait de choix et de découvertes. Chaque pas que nous faisons nous ouvre des portes, et il nous appartient de décider lesquelles franchir. Parfois, nous trouvons de la clarté dans les instants les plus simples; d’autres fois, des questions profondes surgissent sans réponse facile.",
        "Le bonheur véritable ne se trouve pas dans les possessions, mais dans les expériences, les souvenirs et les relations que nous cultivons. À travers les hauts et les bas, nous découvrons que la vie est un équilibre délicat entre les défis et les moments de joie. Il est essentiel de rester attentif, de prendre du recul.",
        "Chaque jour est une opportunité de découvrir quelque chose de nouveau sur le monde et sur nous-mêmes. En vivant pleinement, en observant attentivement, et en prenant le temps de réfléchir, nous apprenons à voir la beauté qui nous entoure. Parfois, il faut traverser des moments difficiles pour vraiment apprécier la lumière.",
        "La vie est un ensemble de chemins entrelacés, chacun offrant une nouvelle leçon ou une expérience unique. Nous avançons souvent sans savoir ce qui nous attend, mais c’est cette incertitude qui rend le voyage fascinant. Apprendre à accepter l’inconnu et à accueillir chaque étape avec gratitude nous permet de grandir.",
    ],
};
const formatos = [
    {
        nombre: "parrafo",
        cantidadMaxima: 100,
        funcion: (tipoTexto, cantidad) => {
            return Array.from({ length: cantidad }, () => obtenerTexto(tipoTexto)).join("<br>");
        },
    },
    {
        nombre: "palabra",
        cantidadMaxima: 5000,
        funcion: (tipoTexto, cantidad) => {
            const palabras = obtenerTexto(tipoTexto).split(" ");
            console.log(palabras);
            if (cantidad > palabras.length) {
                const repetidas = Array.from({ length: Math.ceil(cantidad / palabras.length) }, () => obtenerTexto(tipoTexto))
                    .flat()
                    .slice(0, cantidad);
                return repetidas.join(" ");
            }
            const palabrasCortadas = palabras.slice(0, cantidad);
            console.log(palabrasCortadas);
            return palabrasCortadas.join(" ");
        },
    },
    {
        nombre: "letra",
        cantidadMaxima: 20000,
        funcion: (tipoTexto, cantidad) => {
            const letras = obtenerTexto(tipoTexto).split("");
            if (cantidad > letras.length) {
                let repetidas = Array.from({ length: Math.ceil(cantidad / letras.length) }, () => obtenerTexto(tipoTexto))
                    .flat()
                    .slice(0, cantidad);
                return repetidas.join("");
            }
            const letrasCortadas = letras.slice(0, cantidad);
            return letrasCortadas.join("");
        },
    },
];
const resultadoDiv = document.getElementById("resultado");
const boton = document.querySelector("button");
const errorMensaje = document.querySelector(".error");
function obtenerTexto(tipoTexto) {
    const contenido = texto[tipoTexto];
    const numeroAleatorio = Math.floor(Math.random() * contenido.length);
    return contenido[numeroAleatorio];
}
boton === null || boton === void 0 ? void 0 : boton.addEventListener("click", function (e) {
    e.preventDefault();
    errorMensaje.classList.add("invisible");
    const tipoTexto = document.getElementById("tipoTexto")
        .value;
    const tipoFormato = document.getElementById("tipoValor").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const formato = formatos.find((formato) => formato.nombre === tipoFormato);
    if (1 <= cantidad && cantidad <= formato.cantidadMaxima) {
        resultadoDiv.innerHTML = formato.funcion(tipoTexto, cantidad);
    }
    else {
        resultadoDiv.innerHTML = "";
        errorMensaje.classList.remove("invisible");
    }
});
