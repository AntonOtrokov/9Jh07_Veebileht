//Kood kirjutatud LiveBlogger tutoriali abil
//Määrab muutujad vastavalt vajalikele classidele
const YTPlayerOverlay = document.querySelector(".youtube-player-overlay")
const YTLinks = document.querySelectorAll(".youtube-link")
const YTPlayerPopup = document.querySelector(".youtube-player-popup iframe")

//Vajutades video asukohale lisab youtube ID video lingi otsa ja avab selle video popupina
YTLinks.forEach(link =>{
    link.addEventListener("click", () =>{
        YTPlayerOverlay.classList.add("active");
        let videoLink = `https://www.youtube.com/embed/${link.dataset.link}`;
        console.log(videoLink);
        YTPlayerPopup.src = videoLink;
    });
});

//Vajutades videost mööda paneb popupi kinni ja lõpetab ka tagataustal selle mängimise
YTPlayerOverlay.addEventListener("click",()=>{
    YTPlayerOverlay.classList.remove("active");
    YTPlayerPopup.src = ""
})