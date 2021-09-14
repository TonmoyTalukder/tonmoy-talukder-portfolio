const btn = document.querySelector("button.mobile-menu-button");
				const menu = document.querySelector(".mobile-menu");

				btn.addEventListener("click", () => {
					menu.classList.toggle("hidden");
				});


let home = () => {
	location.replace("index.html")
}
let  researchAndPublications = () => {
	location.replace("research-and-publications.html")
}
let projects = () => {
	location.replace("projects.html")
}
let resume = () => {
	location.replace("resume.html")
}
let blog = () => {
	location.replace("blog.html")
}
let contact = () => {
	location.replace("contact.html")
}