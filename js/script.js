//creiamo l'array con le immagini e prendiamo la classe che ci serve
const listItem = document.getElementsByClassName('list-item');
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
//mettiamo le immagini nell'html 
images.forEach((curimage) => {
    for (i = 0; i < listItem.length; i++){
        listItem[i].innerHTML += `
                                <div class="item">
                                    <img src="${curimage.image}" alt="">
                                    <div class = "text-img">
                                        <h2>${curimage.title}</h2>
                                        <h3>${curimage.text}</h3>
                                    </div>
                                </div>`
    }
})

const leftItemArray = document.querySelectorAll('.left-slide .item');
const rightItemArray = document.querySelectorAll('.slider .item')
const rightImgArray = document.querySelectorAll('.slider .item img')

let itemArrayIndex = 0
leftItemArray[itemArrayIndex].classList.add('active')
rightItemArray[itemArrayIndex].classList.add('border-opacity')
rightImgArray[itemArrayIndex].classList.add('filter')

//implementiamo la freccia in alto
const upbtn = document.querySelector('.up-slide')
upbtn.addEventListener('click', function() {
    clearInterval(interval)
    slideDown()
    interval = setInterval(slideDown, 3000)
})

// implementiamo la freccia in basso
const dwnbtn = document.querySelector('.down-slide');
dwnbtn.addEventListener('click', function(){
    clearInterval(interval)
    slideUp()
    interval = setInterval(slideDown, 3000)
})

let interval = setInterval(slideDown, 3000)
mouseOverOut()

//implementiamo il click sulle thumbnails
// for(i = 0; i< rightImgArray.length; i++){
//     const curItem = rightImgArray[i]
//     curItem.addEventListener('click', function(){
//         clearInterval(interval)
//     slideDown()
//     })
// } 

//implementazione button start
document.getElementById('start').addEventListener('click', function(){
    clearInterval(interval)
    interval = setInterval(slideDown, 3000)
})

//implementazione button stop
document.getElementById('stop').addEventListener('click', function(){
    clearInterval(interval)
})

//implementazione button reverse
document.getElementById('reverse').addEventListener('click', function(){
    clearInterval(interval)
    interval = setInterval(slideUp, 3000)
})
///////////////////////////////////////////////////////////////////////////
//FUNCTION
function slideDown(){
        // togliere active da quello corrente
        leftItemArray[itemArrayIndex].classList.remove('active')
        rightItemArray[itemArrayIndex].classList.remove('border-opacity')
        rightImgArray[itemArrayIndex].classList.remove('filter')
        
        //condizione
        if (itemArrayIndex < images.length - 1){
                itemArrayIndex++;
                // aggiungere active a quello successivo
            } else {
                itemArrayIndex = 0
            }
        // aggiungere active a quello successivo
        leftItemArray[itemArrayIndex].classList.add('active')
        rightItemArray[itemArrayIndex].classList.add('border-opacity')
        rightImgArray[itemArrayIndex].classList.add('filter')
        
}

function slideUp(){
    // togliere active da quello corrente
    leftItemArray[itemArrayIndex].classList.remove('active')
    rightItemArray[itemArrayIndex].classList.remove('border-opacity')
    rightImgArray[itemArrayIndex].classList.remove('filter')
    
    // condizione
    if(itemArrayIndex > 0 ){
        // decremento l'index
        itemArrayIndex--;
        // aggiungere active a quello precedente
    } else {
        itemArrayIndex = images.length - 1
    }
    // aggiungere active a quello successivo
    leftItemArray[itemArrayIndex].classList.add('active')
    rightItemArray[itemArrayIndex].classList.add('border-opacity')
    rightImgArray[itemArrayIndex].classList.add('filter')
}

function mouseOverOut (){
    for (let i = 0; i < leftItemArray.length; i++) {
        const currentItem = leftItemArray[i];
        currentItem.addEventListener('mouseover', function(){
            clearInterval(interval)
        })
        currentItem.addEventListener('mouseout', function(){
            interval = setInterval(slideDown, 3000)
        })
    }
}
