//hashtag chama um id
const nome = document.querySelector('#nome')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

function imc(){
    if(nome.value !==''){
        const valorimc = (peso.value / (altura.value**2)).toFixed(1);
                if(valorimc <= 18){
                    resultado.textContent = `${nome.value}, você possui ${valorimc} de IMC. Você está abaixo do peso ideal`
                } else if(valorimc > 18 && valorimc <= 25){
                    resultado.textContent = `${nome.value}, você possui ${valorimc} de valor. Você está no peso ideal`
                } else if (valorimc > 25 && valorimc < 30){
                    resultado.textContent = `${nome.value}, você possui ${valorimc} de valor. Você está levemente acima do peso`
                } else{
                    resultado.textContent = `${nome.value}, você possui ${valorimc} de valor. Você está obeso(a)`
                }
    }else {
        alert('preencha o campo vazio')
    }
}

calcular.addEventListener('click',imc)