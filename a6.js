let bola = {
    tam : 'teste'
}

let bbola = Object.create(bola);

console.log(bbola.tam);

console.log(Object.getPrototypeOf(bbola));