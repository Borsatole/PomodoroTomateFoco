var som_play = document.querySelector("#som_play")
var som_pause = document.querySelector("#som_pause")
var som_end = document.querySelector("#som_fim")

var definir_confirmar = document.querySelector("#definir_confirmar")
var input_time = document.querySelector("#input_time")
var btn_close = document.querySelector("#modal_fechar")

definir_confirmar.addEventListener("click",()=>{
    timer.textContent = input_time.value
    btn_close.click()
})

var botoes_select = document.querySelectorAll(".btns");
var timer = document.querySelector("#timer");
var btn_play = document.querySelector(".btn_play");
var titulo = document.querySelector("title");

var isStopped = false; // Variável global para controlar a parada do cronômetro
var countdownTimeout; // Variável para armazenar o ID do timeout

btn_play.addEventListener("click", play);


botoes_select[0].addEventListener("click", () => {
    if (botoes_select[0].className == "btns") {
        botoes_select[0].className = "btns selecionado";
        botoes_select[1].className = "btns";
        botoes_select[2].className = "btns";
        botoes_select[3].className = "btns";

        // Codigo para colocar no timer
        timer.textContent = "25:00";
        titulo.innerText  = `${timer.textContent} - TomateFoco`
    }
});

botoes_select[1].addEventListener("click", () => {
    if (botoes_select[1].className == "btns") {
        botoes_select[1].className = "btns selecionado";
        botoes_select[0].className = "btns";
        botoes_select[2].className = "btns";
        botoes_select[3].className = "btns";

        // Codigo para colocar no timer
        timer.textContent = "05:00";
        titulo.innerText  = `${timer.textContent} - TomateFoco`
    }
});

botoes_select[2].addEventListener("click", () => {
    if (botoes_select[2].className == "btns") {
        botoes_select[2].className = "btns selecionado";
        botoes_select[1].className = "btns";
        botoes_select[0].className = "btns";
        botoes_select[3].className = "btns";

        // Codigo para colocar no timer
        timer.textContent = "15:00";
        titulo.innerText  = `${timer.textContent} - TomateFoco`
    }
});

botoes_select[3].addEventListener("click", () => {
    if (botoes_select[3].className == "btns") {
        botoes_select[3].className = "btns selecionado";
        botoes_select[1].className = "btns";
        botoes_select[0].className = "btns";
        botoes_select[2].className = "btns";

        // Codigo para colocar no timer
        timer.textContent = "30:00";
        titulo.innerText  = `${timer.textContent} - TomateFoco`
    }
});


function play() {
    if (btn_play.textContent === "Play") {
        som_play.play();
        btn_play.innerHTML = `<i class='bx bxs-skip-next-circle'></i>Pause`;

        var minutos = Number(timer.textContent.split(":")[0]);
        var segundos = Number(timer.textContent.split(":")[1]);
        isStopped = false; // Resetar isStopped para false quando iniciar a contagem regressiva
        regressiva(minutos, segundos);
    } else {
        btn_play.innerHTML = `<i class='bx bxs-caret-right-circle'></i>Play`;
        som_pause.play();
        isStopped = true; // Definir isStopped para true quando o botão é "Stop"
        clearTimeout(countdownTimeout); // Limpar o timeout
    }
}

function regressiva(minutos, segundos) {
    var min = minutos;
    var seg = segundos;

    

    function atualizarTempo() {
        if (!isStopped) {
            if (min > 0 || seg > 0) {
                if (seg === 0) {
                    seg = 59;
                    min--;
                } else {
                    seg--;
                }

                var minFormatado = min.toString().padStart(2, "0");
                var segFormatado = seg.toString().padStart(2, "0");

                document.getElementById('timer').textContent = minFormatado + ":" + segFormatado;
                titulo.innerText  = `${timer.textContent} - TomateFoco`

                countdownTimeout = setTimeout(atualizarTempo, 1000); // Armazenar o ID do timeout
            } else {
                document.getElementById('timer').textContent = "00:00";
                btn_play.innerHTML = `<i class='bx bx-play'></i>Play`;
                som_end.play();
                window.navigator.vibrate(200);
                timer.textContent = "25:00"
            }
        }
    }

    atualizarTempo();
}

