const projects = [
	{
		src: "image/weather.png",
		alt: "weather",
		title: "Weather App",
		url: "file:///C:/Users/crystal/Desktop/website/weather%20app/index.html",
		description:
			"The Weather App - You can use it everyday. All you have to type is City and State. It will give you date, temperature for a high and a low for that day.",
	},
	{
		src: "image/resume.png",
		alt: "resume",
		title: "My Resume",
		url: "file:///C:/Users/crystal/Desktop/website/index.html#page-top",
		description:
			"Showing my resume online. Made it all nice with color's,  icons, past history, my goals, work history. Share sites that use.",
	},
	{
		src: "image/guess.png",
		alt: "guess",
		title: "Guessing Game- GetHub Link",
		url: "https://github.com/Quinn7979/NumGame",
		description:
			"You are play with the computer to guess the number the computer pick from 1 to 20. The number is new each time the game is played. It will tell you how many times it took for you to guess the correct number.",
	},
];

const projectsList = document.getElementById("projects-section");

projects.forEach((project) => {
	const listItem = document.createElement("div");
	listItem.className = "project";
	const pic = document.createElement("img");
	pic.setAttribute("src", project.src);
	pic.setAttribute("alt", project.alt);

	const title = document.createElement("h3");
	title.textContent = project.title || "Untitled Project";
	title.classList.add("title");

	const description = document.createElement("p");
	description.textContent = project.description || "No description available.";
	description.classList.add("description");
	pic.classList.add("project-img");

	const showUrl = document.createElement("p");
	const visibleLink = document.createElement("a");
	visibleLink.href = project.url ? project.url : "#";
	visibleLink.textContent = "Click here";
	showUrl.classList.add("link");

	showUrl.appendChild(visibleLink);
	listItem.appendChild(title);
	listItem.appendChild(description);
	listItem.appendChild(showUrl);
	projectsList.appendChild(listItem);
	listItem.appendChild(pic);
});
