let sonic = document.getElementById('sonic');  // Видалено символ #
let thrones = document.getElementById('thrones');  
let deadpul = document.getElementById('deadpul');  
let squid = document.getElementById('squid');  
let hellboy = document.getElementById('hellboy');  
let starwars = document.getElementById('starwars');  
let redone = document.getElementById('redone');  
let skyscraper = document.getElementById('skyscraper');  

let blackElement = document.querySelector('.black');
let sectionElement = document.querySelector('section');

function change() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let  = document.createElement('div');
    .className = 'soniclay';
    .innerHTML = `
    <head>
    <link rel="stylesheet" href="action.css">
    </head>
        <main>
            <img  class="img" src="">

            <div class="name1"><span class="n1"></span><br/>
            <span class="inf"></span><br/><br/><br/>
            <span class="time"><b>Time watching: <br/>
            Year: <br/>
            Director: <br/>
            Stars: </b></span></div>
            <div class="nav"><span class="trailer">Trailer   </span><span class="movie">    Where to watch</span></div>
            <div>
            <iframe class="video" width="1035" height="582" src="https://www.youtube.com/embed/szby7ZHLnkA" title="Sonic The Hedgehog (2020) - New Official Trailer - Paramount Pictures" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </main>
    `;
    
    
    
    .style.display = 'flex';
    .style.flexDirection = 'column';  
    .style.alignItems = 'center';
    .style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild();
}
.addEventListener('click', change);