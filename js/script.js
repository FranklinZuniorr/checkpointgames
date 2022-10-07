// Barra de categorias.
iniciar();

function iniciar(){
    cat = ["Hardware", "Periférico", "Games", "Computadores", "Smartphones", "Tv"];
    x = 0;
    catt = cat.length/2;
    
    bar = ["" + cat[0+x], "" + cat[1+x], "" + cat[2+x]];
    ct1.innerHTML = bar[0];
    ct2.innerHTML = bar[1];
    ct3.innerHTML = bar[2];

}

function mais(a = 0){

    if(a == 1 && x < catt){
        x++;
        console.log(x);
        bar = ["" + cat[0+x], "" + cat[1+x], "" + cat[2+x]];
        ct1.innerHTML = bar[0];
        ct2.innerHTML = bar[1];
        ct3.innerHTML = bar[2];
    }

    else if(a == 2 && x > 0){
        x = x - 1;
        bar = ["" + cat[0+x], "" + cat[1+x], "" + cat[2+x]];
        ct1.innerHTML = bar[0];
        ct2.innerHTML = bar[1];
        ct3.innerHTML = bar[2];
    }

}
// Barra de categorias.