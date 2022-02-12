const teste = ['aaaaa','bbbbb','ccccc','ddddd'];

for(let v in teste){
    console.log(v);
}

for(let i in teste){
    console.log(teste[i]);
}
// for of, forEach

teste.forEach(function(v,i){
    console.log(v,i);
});

try {
//testando algo
} catch(e) {
//oq fazer se der erro
    throw('dssadas');
} finally {
//sempre executado
setInterval(function(){})
setTimeout(function(){})
}