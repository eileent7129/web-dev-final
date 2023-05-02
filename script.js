feather.replace();


let like = document.getElementById("like");
let dislike = document.getElementById("dislike");

let trendVideos;
let	recommendedVideos;
let newVideo;
like.addEventListener("click", buttonClicked);

function buttonClicked() {
	console.log("like button clicked");
	this.style.fill = "white";
	this.style.color = "white";
}


$("#like").click(buttonClicked);

function buttonClicked() {
	console.log("like button clicked");
	$("#like").fadeOut();
	$("#dislike").fadeOut();
	$(".skip").fadeOut();

}