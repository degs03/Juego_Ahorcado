const PAL = ['Probar', 'Esteril', 'Cancer', 'Asqueroso', 'Candado', 'Variar', 'Luchar', 'Insalubre', 'Recluso', 'Volar', 'Gestion', 'Arquitecto', 'Pandemia', 'Mariquita', 'Entretenimiento', 'Niñera', 'Picante'];
const BUT = document.getElementById('but');
const PARR = document.getElementById('pala');
const IMG = document.getElementById('imagen');
const RET = document.getElementById('ret');
let PALA= PAL [Math.floor((Math.random() * PAL.length))];
const LET= PALA.split(' ')
const RE = document.getElementById('resultado');
const BUTL = document.querySelectorAll('#letras button');
let error ;
let correcto ;
console.log(PALA)//muetra la palabra que va a salir por consola
const mostrar_palabra = (()=>{
    for (let i = 0; i < PALA.length ; i++){
            const contenido_letra = document.createElement('span');
            PARR.appendChild(contenido_letra);
    }
});
const iniciar = () =>{ /*resetea todas las variables del juego*/
    for(let i = 0; i < BUTL.length; i++){
        BUTL[i].disabled = false;
    }
    RE.innerHTML = '';
    BUT.disabled = true;
    IMG.src = 'img/img0.png'
    error = 0;
    correcto = 0;
    document.getElementById('');/*llama a esta funcion al tocar iniciar*/
    PARR.innerHTML = '';
    mostrar_palabra();
};
const clicklet = (accion) =>{
    const span = document.querySelectorAll('#pala span');// va la palabra y busca los spans
    const button = accion.target;/*para saber cual de todas las letras
    llamo a la funcion*/
    button.disabled = true;/*una vez utilizada, se desabilita*/
    const letra = button.innerHTML.toUpperCase();
    const palabra = PALA.toUpperCase(); 
    let acerto = false;
    for (let i = 0; i <palabra.length; i++){
        if(letra == palabra[i]){//La variable i es la posicion de la letra en la palabra
            acerto = true;//que coincide con el span al que tenemos que mostrarle la letra
            span [ i ].innerHTML = letra;//muestra la letra
            correcto ++;
        }
    }
    if(acerto==false){//si la letra no existe, entonces cuenta como un error
        error++;
        const source = `img/img${error}.png`;
        IMG.src = source;  
    } 
    if (error == 6){
        RE.innerHTML = ("PERDISTE, LA PALABRA ERA " + PALA.toLocaleUpperCase() );
        termina();
    }else if (correcto ==PALA.length){
        RE.innerHTML = "GANASTE";
        termina();
    }
};
for(let i = 0; i < BUTL.length; i++){
    BUTL[i].addEventListener('click', clicklet);
}
const termina =()=>{ /*resetea todas las variables del juego*/
    for(let i = 0; i < BUTL.length; i++){
        BUTL[ i ].disabled = true;
    }
};
termina();
BUT.addEventListener('click', iniciar);