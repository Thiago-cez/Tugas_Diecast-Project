const carrinhosMainLine = [
    {
        id: 0,
        nome:"Nissan Patrol Custom",
        img:"images/Nissan-Patrol-Custom.jpg",
        marca: "Nissan",
        lote:"A",
        ano: "20233",
    },
    {
        id: 1,
        nome:"Ford Escort RS2000",
        img:"images/Ford-Escort-RS2000.jpg",
        marca: "Ford ",
        lote:"A",
        ano: "2023",
    },
    {
        id: 2,
        nome:"LB Super Silhouette Nissan Silvia (s15)",
        img:"images/LB-Super-Silhouette-Nissan-Silvia.jpg",
        marca: "Nissan",
        lote:"A",
        ano: "2023",
    },
    {
        id: 3,
        nome:"Ford Sierra",
        img:"images/Ford-Sierra.jpg",
        marca: "Ford",
        lote:"A",
        ano: "2023",
    },
    {
        id: 4,
        nome:"Subaru WRX",
        img:"/images/Subaru-WRX.jpg",
        marca: "Subaru",
        lote:"A",
        ano: "2023",
    },
    {
        id: 5,
        nome:"Standard Kart",
        img:"/images/Standard-Kart.jpg",
        marca: "Fantasia",
        lote:"B",
        ano: "2023",
    },
    {
        id: 6,
        nome:"Mustang SVO",
        img:"/images/Mustang-SVO.jpg",
        marca: "Ford",
        lote:"B",
        ano: "2023",
    },
    {
        id: 7,
        nome:"Kool Kombi",
        img:"images/Kool-Kombi.jpg",
        marca: "Wolksvagem",
        lote:"B",
        ano: "2023",
    },
    {
        id: 8,
        nome:"Rodger Dodger",
        img:"/images/Rodger-Dodger.jpg",
        marca: "Fantasia",
        lote:"B",
        ano: "2023",
    },
    {
        id: 9,
        nome:"Skyline GT-R[R32]",
        img:"/images/Skyline-GT-R[R32].jpg",
        marca: "Nissan",
        lote:"C",
        ano: "2023",
    },
    {
        id: 10,
        nome:"Aston Martin Vantage GTE",
        img:"images/Aston-Martin-Vantage-GTE.jpg",
        marca: "Aston Martin",
        lote:"C",
        ano: "2023",
    },
];

const carrinhosPremiun = [
    {
        id: 0,
        nome:"",
        img:"",
        marca: "",
        lote:"",
        ano: "",
    }
]

inicializar = () => {
    var containerCarrinhos = document.getElementById("carrinhos");
    carrinhosMainLine.map((val)=> {
        console.log(val.nome);
        containerCarrinhos.innerHTML += `
                <div class="produto-single" >
                    <img src="`+val.img+`"/>
                    <p>` +val.nome+ `</p>
                    <a key="` +val.id+ `" href=""> Adicionar a Coleção</a>
                </div>
        `;
    })
}
inicializar();