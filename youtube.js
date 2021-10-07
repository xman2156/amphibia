var youtube = document.getElementById("youtube");		
var source = "https://img.youtube.com/vi/YwWBa3L7lSo/sddefault.jpg";	
var image = new Image();

image.src = source;
image.addEventListener("load", function() {
	youtube.appendChild(image);
});
		
youtube.addEventListener( "click", function() {
	var iframe = document.createElement( "iframe" );
	iframe.setAttribute("frameborder", "0");
	iframe.setAttribute("allowfullscreen", "");
	iframe.setAttribute("src", "https://www.youtube.com/embed/YwWBa3L7lSo?autoplay=1");
	this.innerHTML = "";
	this.appendChild(iframe);
});	