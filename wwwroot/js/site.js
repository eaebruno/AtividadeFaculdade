let valorDigitado = document.querySelector("#valorEmTempo")


let Horas_Minutos = document.getElementsByName("tempoSelecionado")

let aviso = document.querySelector("#aviso");


let btnConverter = document.querySelector("#btnConverter")
let btnLimpar = document.querySelector("#btnLimpar")


let TempoSelecionado = ""
let Converte = ""
let valorEmTempo = 0.00


function mensagemFormatada(Converte) {
  isNaN(valorEmTempo) ? valorEmTempo = 0 : ""
  console.log("Moeda Convertida " + Converte)
  aviso.textContent = "O valor de " + valorEmTempo + " " + TempoSelecionado + " convertido vira " + Converte + " "
}

/* VERIFICAR SE FOI DIGITADO ALGUM VALOR PARA PODER CONVERTER */
function bloquearBotao() {
  if (valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
    btnConverter.setAttribute("disabled", "disabled")
    btnConverter.style.background = "#ccc"
    btnConverter.style.cursor = "not-allowed"
  }
}

// REATIVAR BOTAO
function ativarBotao() {
  if (valorDigitado.value > 0) {
    btnConverter.removeAttribute("disabled")
    btnConverter.style.background = "#32CD32"
    btnConverter.style.cursor = "pointer"
  } else {
    console.log("Não ativou")
  }
}


btnConverter.addEventListener('click', function () {

    valorEmTempo = parseFloat(valorDigitado.value)
  
    console.log('Escolha a conversao')
    for (let i = 0; i < Horas_Minutos.length; i++) {
      if (Horas_Minutos[i].checked) {
        TempoSelecionado = Horas_Minutos[i].value
        console.log(TempoSelecionado) //
      }
    }
  
    switch (TempoSelecionado) {
  
      case "Horas":
        Converte = valorEmTempo * 60
        mensagemFormatada(parseFloat(Converte.toFixed(2)) + " Minutos ")
        break
  
      case "Minutos":
        Converte = valorEmTempo / 60
        mensagemFormatada(parseFloat(Converte.toFixed(2)) + " Horas ")
        break
  
  
      default:
        aviso.textContent = "Escolha uma conversão!"
  
        isNaN(Converte) ? Converte = 0 : ""
    }
  })
  
  btnLimpar.addEventListener("click", function () {
    valorDigitado.focus()
    valorDigitado.value = ""
    aviso.textContent = "Digite um número e escolha a conversão."
    Horas_Minutos[0].checked = false
    Horas_Minutos[1].checked = false //
  
  })