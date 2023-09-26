const marvel = document.querySelector(".marvel");
const articles = marvel.querySelectorAll("article");
const opens = marvel.querySelectorAll(".open");
const closes = document.querySelectorAll(".close");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

for (let i = 0; i < 2; i++) { marvel.prepend(marvel.lastElementChild); }


next.addEventListener("click", () => {
    marvel.append(marvel.firstElementChild);
})


prev.addEventListener("click", () => {
    marvel.prepend(marvel.lastElementChild);
})


opens.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.target.closest("article").classList.add("on");

        for (let ele of articles)
            !ele.classList.contains("on") && ele.classList.add("hide");
    })
})

closes.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.target.closest("article").classList.remove("on");
        for (let el of articles) el.classList.remove("hide");
    })
})

// //youtube------------------------------------------------------
// //key : AIzaSyCnc0X2GA589D0hjsq9tTEbfvvPLHddpw0
// //list : PLwCWtKkR2SGMCgiaQKRtajpNf7bSUaihP

// let key = "AIzaSyCnc0X2GA589D0hjsq9tTEbfvvPLHddpw0";
// let list = "PLwCWtKkR2SGMCgiaQKRtajpNf7bSUaihP";
// let num = 5;

// let vid = marvel.querySelector("article .character .vid");
// const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${list}&maxResults=${num}`;

// fetch(url)
//     .then((data)=>{
//         return data.json();
//     })
//     .then((json)=>{
//         let items = json.items;

//         let result = "";

//         items.map((el)=>{
//             result += `
//                 <artlcle>
//                     <a href="${el.snippet.resourceId.videoId}">
//                         <img src="${el.snippet.thumbnails.medium.url}">
//                     </a>
//                     <h1>${el.snippet.title}</h1>
//                 </artlcle>
//             `;
//         })
//         vid.innerHTML = result;
//     })

//     vid.addEventListener("click",()=>{
//         e.preventDefault();

//         let vidId = e.target.closest("article").querySelector("a").getAttribute("href");

//         let pop = document.createElement("figure");
//         pop.innerHTML = `
//             <iframe src="https://www.youtube.com/embed/${vidId}">
//         `;
//         vid.append(pop);
//     })
