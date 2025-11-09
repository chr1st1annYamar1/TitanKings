function magazine(){
	window.location.href="pages/magazine.html";
}
function clubs(){
	window.location.href="pages/clubs.html";
}
function updates(){
	window.location.href="pages/updates.html"
}
function whatsapp(){
	window.location.href="pages/whatsapp.html";
}
function instagram(){
	window.location.href="pages/instagram.html";
}
function reels(){
	window.location.href="pages/reels.html";
}
function home(){
	window.location.href="..//index.html";
}
function download(){
window.location.href="https://drive.google.com/file/d/1ZXBkFllGZfKa922Lfx4pZ5Qvtcc62IUt/view?usp=drivesdk";
}
function Hide(){
document.getElementById("ad").style="display:none;";
}
function hide(){
document.getElementById("download").innerHTML="New update available for TitanKings App.";
}
document.getElementById("download").innerHTML="Download TitanKings Mobile app for enhanced performance.";
    const slider = document.getElementById("slider");
    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");

    leftBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -300, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      slider.scrollBy({ left: 300, behavior: "smooth" });
    });
    