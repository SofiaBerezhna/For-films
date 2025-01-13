let enola = document.getElementById('enola');  // Видалено символ #
let nile = document.getElementById('nile');  
let sherlock = document.getElementById('sherlock');  
let knives = document.getElementById('knives');  
let venice = document.getElementById('venice');  
let glass = document.getElementById('glass');  
let indian = document.getElementById('indian');  
let christmas = document.getElementById('christmas');  

let blackElement = document.querySelector('.black');
let sectionElement = document.querySelector('section');       

function enolachange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let enol = document.createElement('div');
    enol.className = 'soniclay';
    enol.innerHTML = `
    <head>
    <link rel="stylesheet" href="action.css">
    </head>
        <main>
            <img  class="img" src="https://upload.wikimedia.org/wikipedia/ru/thumb/e/ed/%D0%AD%D0%BD%D0%BE%D0%BB%D0%B0_%D0%A5%D0%BE%D0%BB%D0%BC%D1%81.jpg/640px-%D0%AD%D0%BD%D0%BE%D0%BB%D0%B0_%D0%A5%D0%BE%D0%BB%D0%BC%D1%81.jpg">

            <div class="name1"><span class="n1">Enola Holmes</span><br/>
            <span class="inf">When Enola Holmes, Sherlock's sister, discovers her mother<br/>
            is missing, she endeavors to find her, becoming a super-sleuth in her own right<br/>
             as she outwits her famous brother and unravels a dangerous conspiracy.</span><br/><br/><br/>
            <span class="time"><b>Time watching: 2h 3m<br/>
            Year: 2020<br/>
            Director: Harry Bradbeer<br/>
            Stars: Millie Bobby Brown, Henry Cavill</b></span></div>
            <div class="nav"><span class="trailer">Trailer   </span><span class="movie">    Where to watch</span></div>
            <div>
<iframe class="video" width="1128" height="634" src="https://www.youtube.com/embed/1d0Zf9sXlHk" title="Enola Holmes | Official Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            </div>
            </main>
    `;
    
    
    
    enol.style.display = 'flex';
    enol.style.flexDirection = 'column';  
    enol.style.alignItems = 'center';
    enol.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(enol);
}
enola.addEventListener('click', enolachange);


function nilechange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let nil = document.createElement('div');
    nil.className = 'soniclay';
    nil.innerHTML = `
    <head>
    <link rel="stylesheet" href="action.css">
    </head>
        <main>
            <img  class="img" src="https://lumiere-a.akamaihd.net/v1/images/p_20cs_deathonthenile_22532_4516b236.jpeg?region=0%2C0%2C540%2C810">

            <div class="name1"><span class="n1">Death on the Nile</span><br/>
            <span class="inf">While on vacation on the Nile, Hercule Poirot must investigate<br/>
             the murder of a young heiress.</span><br/><br/><br/>
            <span class="time"><b>Time watching: 2h 7m<br/>
            Year: 2022<br/>
            Director: Kenneth Branagh<br/>
            Stars: Tom Bateman, Annette Bening, Kenneth Branagh</b></span></div>
            <div class="nav"><span class="trailer">Trailer   </span><span class="movie">    Where to watch</span></div>
            <div>
            <iframe class="video" width="1128" height="634" src="https://www.youtube.com/embed/dZRqB0JLizw" title="Official Trailer | Death on the Nile | 20th Century Studios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            </div>
            </main>
    `;
    
    
    
    nil.style.display = 'flex';
    nil.style.flexDirection = 'column';  
    nil.style.alignItems = 'center';
    nil.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(nil);
}
nile.addEventListener('click', nilechange);



function sherlockchange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let sherloc = document.createElement('div');
    sherloc.className = 'soniclay';
    sherloc.innerHTML = `
    <head>
    <link rel="stylesheet" href="action.css">
    </head>
        <main>
            <img  class="img" src="https://filmlibrary.ie/cdn/shop/products/sherlock-holmes-a-game-of-shadows-0-poster_1024x1024.jpg?v=1605649463">

            <div class="name1"><span class="n1">Sherlock Holmes: A Game of Shadows</span><br/>
            <span class="inf">Detective Sherlock Holmes is on the trail of criminal mastermind Professor Moriarty,<br/>
            who is carrying out a string of random crimes across Europe.</span><br/><br/><br/>
            <span class="time"><b>Time watching: 2h 9m<br/>
            Year: 2011<br/>
            Director: Guy Ritchie<br/>
            Stars: Robert Downey, Jr.Jude, LawJared Harris</b></span></div>
            <div class="nav"><span class="trailer">Trailer   </span><span class="movie">    Where to watch</span></div>
            <div>
            <iframe class="video" width="1128" height="634" src="https://www.youtube.com/embed/LbHoG5L5syg" title="Sherlock Holmes - Game of Shadows trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            </div>
            </main>
    `;
    
    
    
    sherloc.style.display = 'flex';
    sherloc.style.flexDirection = 'column';  
    sherloc.style.alignItems = 'center';
    sherloc.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(sherloc);
}
sherlock.addEventListener('click', sherlockchange);




function kniveschange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let knive = document.createElement('div');
    knive.className = 'soniclay';
    knive.innerHTML = `
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
    
    
    
    knive.style.display = 'flex';
    knive.style.flexDirection = 'column';  
    knive.style.alignItems = 'center';
    knive.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(knive);
}
knives.addEventListener('click', kniveschange);




function venicechange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let venic = document.createElement('div');
    venic.className = 'soniclay';
    venic.innerHTML = `
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
    
    
    
    venic.style.display = 'flex';
    venic.style.flexDirection = 'column';  
    venic.style.alignItems = 'center';
    venic.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild();
}
venice.addEventListener('click', venicechange);




function glasschange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let glas = document.createElement('div');
    glas.className = 'soniclay';
    glas.innerHTML = `
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
    
    
    
    glas.style.display = 'flex';
    glas.style.flexDirection = 'column';  
    glas.style.alignItems = 'center';
    glas.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(glas);
}
glass.addEventListener('click', glasschange);
0

