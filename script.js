
function cliqueBotao (){ //função que faz a navegação aparecer ao clicar no toggle button
    var navegacao = document.getElementById('alternavegacao')
    if(navegacao.className == 'navegacao'){
        navegacao.className = 'navegacao2'
    }
    else if(navegacao.className == 'navegacao2'){
        navegacao.className = 'navegacao'
    }
}