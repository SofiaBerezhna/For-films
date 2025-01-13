let jumanji = document.getElementById('jumanji');  // Видалено символ #
let dora = document.getElementById('dora');  
let hobbit = document.getElementById('hobbit');  
let jungle = document.getElementById('jungle');  
let lion = document.getElementById('lion');  
let chrinicles = document.getElementById('chrinicles');  
let pirate = document.getElementById('pirate');  
let cruise = document.getElementById('cruise');  

let blackElement = document.querySelector('.black');
let sectionElement = document.querySelector('section');

function jumchange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let jum = document.createElement('div');
    jum.className = 'soniclay';
    jum.innerHTML = `
    <head>
    <link rel="stylesheet" href="action.css">
    </head>
        <main>
            <img  class="img" src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13499680_p_v12_bg.jpg">

            <div class="name1"><span class="n1">Jumanji: Welcome to the Jungle</span><br/>
            <span class="inf">Four teenagers are sucked into a magical video game, and the only<br/>
             way they can escape is to work together to finish the game.</span><br/><br/><br/>
            <span class="time"><b>Time watching: 1h 59m<br/>
            Year: 2017<br/>
            Director: Jake Kasdan<br/>
            Stars: Dwayne Johnson, Karen Gillan, Kevin Hart</b></span></div>
            <div class="nav"><span class="trailer">Trailer   </span><span class="movie">    Where to watch</span></div>
            <div>
            <iframe class="video" width="1128" height="634" src="https://www.youtube.com/embed/2QKg5SZ_35I" title="JUMANJI: WELCOME TO THE JUNGLE - Official Trailer (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </main>
    `;
    
    
    
    jum.style.display = 'flex';
    jum.style.flexDirection = 'column';  
    jum.style.alignItems = 'center';
    jum.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(jum);
}
jumanji.addEventListener('click', jumchange);


function dorachange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let dor = document.createElement('div');
    dor.className = 'soniclay';
    dor.innerHTML = `
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
    
    
    
    dor.style.display = 'flex';
    dor.style.flexDirection = 'column';  
    dor.style.alignItems = 'center';
    dor.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(dor);
}
dora.addEventListener('click', dorachange);



function hobbitchange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let hob = document.createElement('div');
    hob.className = 'soniclay';
    hob.innerHTML = `
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
    
    
    
    hob.style.display = 'flex';
    hob.style.flexDirection = 'column';  
    hob.style.alignItems = 'center';
    hob.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(hob);
}
hobbit.addEventListener('click', hobbitchange);





function junglechange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let jun = document.createElement('div');
    jun.className = 'soniclay';
    jun.innerHTML = `
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
    
    
    
    jun.style.display = 'flex';
    jun.style.flexDirection = 'column';  
    jun.style.alignItems = 'center';
    jun.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(jun);
}
jungle.addEventListener('click', junglechange);





function lionchange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let lio = document.createElement('div');
    lio.className = 'soniclay';
    lio.innerHTML = `
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
    
    
    
    lio.style.display = 'flex';
    lio.style.flexDirection = 'column';  
    lio.style.alignItems = 'center';
    lio.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(lio);
}
lion.addEventListener('click', lionchange);





function chrinicleschange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let chrinic = document.createElement('div');
    chrinic.className = 'soniclay';
    chrinic.innerHTML = `
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
    
    
    
    chrinic.style.display = 'flex';
    chrinic.style.flexDirection = 'column';  
    chrinic.style.alignItems = 'center';
    chrinic.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(chrinic);
}
chrinicles.addEventListener('click', chrinicleschange);




function piratechange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let pirat = document.createElement('div');
    pirat.className = 'soniclay';
    pirat.innerHTML = `
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
    
    
    
    pirat.style.display = 'flex';
    pirat.style.flexDirection = 'column';  
    pirat.style.alignItems = 'center';
    pirat.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(pirat);
}
pirate.addEventListener('click', piratechange);