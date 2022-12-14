const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvem = document.querySelector('.nuvem');
const butao = document.querySelector('.reset');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft; //posicao do tudo 
    const nuvemPosition = nuvem.offsetLeft; //posicao do tudo 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    
    console.log(marioPosition);

    if (pipePosition <= 125 &&pipePosition > 0  && marioPosition < 82) {
        
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        nuvem.style.animation = 'none'
        nuvem.style.left = `${nuvemPosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        butao.style.left = '50%'

        mario.src = './imagem/game-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }

},10)




document.addEventListener('keydown', jump);
document.addEventListener('click', jump);