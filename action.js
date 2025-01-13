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

function sonchange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let sonla = document.createElement('div');
    sonla.className = 'soniclay';
    sonla.innerHTML = `
    <head>
    <link rel="stylesheet" href="action.css">
    </head>
        <main>
            <img  class="img" src="https://schwarzenbek.cineprog.net/images/Breite_400px_RGB/p_67970.jpg">

            <div class="name1"><span class="n1">Sonic the Hedgehog</span><br/>
            <span class="inf">The world needed a hero -- it got a hedgehog. Powered with incredible speed, Sonic <br/>
            embraces his new home on Earth -- until he accidentally knocks out the power grid, sparking the <br/>
             attention of uncool evil genius Dr. Robotnik. Now, it's supervillain vs. supersonic in an all-out<br/>
            race across the globe to stop Robotnik from using Sonic's unique power to achieve world domination.</span><br/><br/><br/>
            <span class="time"><b>Time watching: 1h 40m<br/>
            Year: 2020<br/>
            Director: Jeff Fowler<br/>
            Stars: Jim Carrey, Ben Schwartz</b></span></div>
            <div class="nav"><span class="trailer">Trailer   </span><span class="movie">    Where to watch</span></div>
            <div>
            <iframe class="video" width="1035" height="582" src="https://www.youtube.com/embed/szby7ZHLnkA" title="Sonic The Hedgehog (2020) - New Official Trailer - Paramount Pictures" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </main>
    `;
    
    
    
    sonla.style.display = 'flex';
    sonla.style.flexDirection = 'column';  
    sonla.style.alignItems = 'center';
    sonla.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(sonla);
}
sonic.addEventListener('click', sonchange);

let movie = document.querySelector('.movie');  
let video = document.querySelector('.video');  
let trailer = document.querySelector('.trailer')



function switching() {
  video.style.display = "none";  
  //  // Створюємо посилання
   let link = document.createElement('a');
   link.href = 'https://www.bilibili.tv/en/video/4786356875955712';  // Посилання на ресурс
   link.textContent = 'Watch full movie here';  // Текст посилання
  link.target = '_blank';  // Відкрити в новій вкладці
  link.style.fontSize = '20px';  // Додаємо стиль для кращого вигляду
 link.style.color = '#0066cc';
 link.style.textDecoration = 'none';

   video.appendChild(link);  // Додаємо посилання в контейнер
}

movie.addEventListener('click', switching());



function lordchange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let lord = document.createElement('div');
    lord.className = 'lordlay';
    lord.innerHTML = `
    <head>
    <link rel="stylesheet" href="action.css">
    </head>
        <main>
            <img  class="img" src="https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg">

            <div class="name1"><span class="n1">Game of Thrones</span><br/>
            <span class="inf">Nine noble families fight for control over the lands<br/>
            of Westeros, while an ancient enemy returns after being dormant for millennia.</span><br/><br/><br/>
            <span class="time"><b>Time watching: 8 seasons<br/>
            Year: 2011-2019<br/>
            Director: David Beniof<br/>
            Stars: Emilia Clarke, Peter Dinklage, Kit Harington</b></span></div>
            <div class="nav"><span class="trailer">Trailer   </span><span class="movie">    Where to watch</span></div>
            <div>
            <iframe class="video" width="1035" height="582" src="https://www.youtube.com/embed/KPLWWIOCOOQ" title="Game of Thrones | Official Series Trailer (HBO)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </main>
    `;
    
    
    
    lord.style.display = 'flex';
    lord.style.flexDirection = 'column';  
    lord.style.alignItems = 'center';
    lord.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(lord);
}

thrones.addEventListener('click', lordchange);



function deadchange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let pool = document.createElement('div');
    pool.className = 'deadlay';
    pool.innerHTML = `
    <head>
    <link rel="stylesheet" href="action.css">
    </head>
        <main>
            <img  class="img" src="https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_.jpg">

            <div class="name1"><span class="n1">Deadpool & Wolverine</span><br/>
            <span class="inf">Deadpool is offered a place in the Marvel Cinematic Universe by<br/>
            the Time Variance Authority, but instead recruits a variant of Wolverine to save<br/>
            his universe from extinction.</span><br/><br/><br/>
            <span class="time"><b>Time watching: 2h 8m<br/>
            Year: 2024<br/>
            Director: SHawn Levy<br/>
            Stars: Ryan Relnolds, Hugh Jackman, Emma Corrin</b></span></div>
            <div class="nav"><span class="trailer">Trailer   </span><span class="movie">    Where to watch</span></div>
            <div>
            <iframe class=" video" width="1128" height="634" src="https://www.youtube.com/embed/73_1biulkYk" title="Deadpool &amp; Wolverine | Official Trailer | In Theaters July 26" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </main>
    `;
    
    
    
    pool.style.display = 'flex';
    pool.style.flexDirection = 'column';  
    pool.style.alignItems = 'center';
    pool.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(pool);
}

deadpul.addEventListener('click', deadchange);


function squidchange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let squid1 = document.createElement('div');
    squid1.className = 'squidlay';
    squid1.innerHTML = `
    <head>
    <link rel="stylesheet" href="action.css">
    </head>
        <main>
            <img  class="img" src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20492218_b_v8_ae.jpg">

            <div class="name1"><span class="n1">Squid Game</span><br/>
            <span class="inf">Hundreds of cash-strapped players accept a strange invitation<br/>
            to compete in children's games. Inside, a tempting prize awaits with deadly high stakes:<br/>
            a survival game that has a whopping 45.6 billion-won prize at stake.</span><br/><br/><br/>
            <span class="time"><b>Time watching: 2 seasons<br/>
            Year: 2021-2025<br/>
            Director: Hwang Dong-hyuk<br/>
            Stars: Lee Jung-jae, Greg Chun, Wi Ha-joon</b></span></div>
            <div class="nav"><span class="trailer">Trailer   </span><span class="movie">    Where to watch</span></div>
            <div>
            <iframe class="video" width="1128" height="634" src="https://www.youtube.com/embed/oqxAJKy0ii4" title="Squid Game | Official Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </main>
    `;
    
    
    
    squid1.style.display = 'flex';
    squid1.style.flexDirection = 'column';  
    squid1.style.alignItems = 'center';
    squid1.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(squid1);
}

squid.addEventListener('click', squidchange);



function hellchange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let hell = document.createElement('div');
    hell.className = 'helllay';
    hell.innerHTML = `
    <head>
    <link rel="stylesheet" href="action.css">
    </head>
        <main>
            <img  class="img" src="https://m.media-amazon.com/images/M/MV5BZDJiNzA3NGMtMGMzOS00MTE1LThlMjgtMmFjZTc5MDg3MzUxXkEyXkFqcGc@._V1_.jpg">

            <div class="name1"><span class="n1">Hellboy</span><br/>
            <span class="inf">A demon raised from infancy after being conjured by and rescued<br/>
            from the Nazis, grows up to become a defender against the forces of darkness.</span><br/><br/><br/>
            <span class="time"><b>Time watching: 2h 2m<br/>
            Year: 2004<br/>
            Director: Guillermo del Toro<br/>
            Stars: Ron Perlman, Doug Jones, Selma Blair</b></span></div>
            <div class="nav"><span class="trailer">Trailer   </span><span class="movie">    Where to watch</span></div>
            <div>
            <iframe class="video" width="1128" height="634" src="https://www.youtube.com/embed/kA9vtXbbhVs" title="Hellboy (2004) - Official® Trailer [HD]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </main>
    `;
    
    
    
    hell.style.display = 'flex';
    hell.style.flexDirection = 'column';  
    hell.style.alignItems = 'center';
    hell.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(hell);
}

hellboy.addEventListener('click', hellchange);



function starchange() {
    blackElement.style.display = 'none';
    sectionElement.style.display = 'none';

    let star = document.createElement('div');
    star.className = 'starlay';
    star.innerHTML = `
    <head>
    <link rel="stylesheet" href="action.css">
    </head>
        <main>
            <img  class="img" src="https://static.wikia.nocookie.net/starwars/images/f/fd/Star_Wars_Episode_VII_The_Force_Awakens.jpg/revision/latest?cb=20151018162823">

            <div class="name1"><span class="n1">Starwars: The Force Awakens</span><br/>
            <span class="inf">As a new threat to the galaxy rises, Rey, a desert scavenger, and<br/>
            Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope<br/>
             of restoring peace.</span><br/><br/><br/>
            <span class="time"><b>Time watching: 2h 18m<br/>
            Year: 2015<br/>
            Director: J.J. Abrams<br/>
            Stars: Daisy Ridley, John Boyega, Oscar Isaac</b></span></div>
            <div class="nav"><span class="trailer">Trailer   </span><span class="movie">    Where to watch</span></div>
            <div>
            <iframe class="video"width="1128" height="634" src="https://www.youtube.com/embed/sGbxmsDFVnE" title="Star Wars: The Force Awakens Trailer (Official)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </main>
    `;
    
    
    
    star.style.display = 'flex';
    star.style.flexDirection = 'column';  
    star.style.alignItems = 'center';
    star.style.backgroundColor = '#F5F5F5'; 
    document.body.appendChild(star);
}

starwars.addEventListener('click', starchange);