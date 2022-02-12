function bola(tamanho, formato, estado){
    this.tamanho = tamanho;
    this.formato = formato;
    this.estado = estado;
}

let abola = new bola('grande', 'quadrada', 'nova');

let bbola = Object.create(bola);

console.log(abola);

let teste = [1,2,3,4,5];
teste = teste.join('--');
console.log(teste);

function c (v){
    v = teste.join('--');
}

let filtro = ((x) => {if (x<3) return x; });
console.log(filtro);