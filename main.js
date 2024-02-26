const form = document.getElementById('form-campos');

let ValidaCampos = false;

function ValoresCampos (ValorA, ValorB) {
    return ValorA < ValorB;
}

form.addEventListener('submit',function(e) {
    e.preventDefault();


const CampoA = document.getElementById("Campo-A");
const CampoB = document.getElementById("Campo-B");
const valorA = Number(document.getElementById("Campo-A").value);
const ValorB = Number(document.getElementById("Campo-B").value);


const mensagemSucesso = `O valor está correto, o valor do campo B: <b>${ValorB}</b> ,é maior que o  valor do campo A: <b>${valorA}</b>`;
const mensagemError = `O valor está incorreto, o valor escolhido no campo B: <b>${ValorB}</b> ,é menor que o do campo A: <b>${valorA}</b>`;


const mSucesso = document.querySelector(".success-msg");
const mError = document.querySelector(".error-msg");

ValidaCampos = ValoresCampos (valorA, ValorB);
    if(ValidaCampos){
        mSucesso.innerHTML = mensagemSucesso;
        mSucesso.style.display = "block";
        mError.style.display = "none";

        CampoA.style.border = "";
        mError.innerHTML = "";

        CampoA.value = "";
        CampoB.value = "";

    } else {
      CampoA.style.border = "1px solid red";
      mError.innerHTML = mensagemError;
      mError.style.display = "block";
      mSucesso.style.display = "none";

      CampoB.value = "";

    }
});
