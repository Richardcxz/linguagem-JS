function hey(nome){
    return function(){
    console.log('eae '+nome);
    }
}
let nam = hey('Richard');

hey();
nam();