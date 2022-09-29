let weight = document.querySelector('#weight');
let height_ = document.querySelector('#height_');
let result = document.querySelector('#result')
let imc_result = document.querySelector('#imc_result')

function imc_calc(){

    let res = weight.value / (height_.value/100) ** 2;

    if (res < 18.5) {
        result.innerHTML = `${res.toFixed(1)} - Abaixo do peso normal`
    } else if (res < 24.9) {
        result.innerHTML = `${res.toFixed(1)} - Peso Normal`
    }else if (res < 29.9) {
        result.innerHTML = `${res.toFixed(1)} - Excesso de peso`
    }else if (res < 34.9) {
        result.innerHTML = `${res.toFixed(1)} - Obsidade grau I`
    }else if (res < 39.9) {
        result.innerHTML = `${res.toFixed(1)} - Obsidade grau II`
    }else if (res > 40) {
        result.innerHTML = `${res.toFixed(1)} - Obesidade grau III`
    }
    
    imc_result.classList.remove('hide')

}