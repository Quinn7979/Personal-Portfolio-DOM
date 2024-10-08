const projects = [
	{
		src: "image/weather.png",
		alt: "weather",
		title: "Weather App",
		url: "file:///C:/Users/crystal/Desktop/website/weather%20app/index.html",
		description:
			"The Weather App is use to check weather everyday. All you have to type is City and State. It will give you date, temperature for a high and a low for that Day.",
	},
	{
		src: "image/resume.png",
		alt: "resume",
		title: "My Resume",
		url: "file:///C:/Users/crystal/Desktop/website/index.html#page-top",
		description:
			"Showing my resume online is making it all nice with color's, icons, past history, my goals, work history also sharing sites that use.",
	},
	{
		src: "image/guess.png",
		alt: "guess",
		title: "Guessing Game- GetHub Link",
		url: "https://github.com/Quinn7979/NumGame",
		description:
			"You are play with the computer. The computer pick's a number from 1 to 20. Each time you play the number is different. It will tell you how many times it took for you to guess the correct number.",
	},
];

const projectsList = document.getElementById("projects-section");

projects.forEach((project) => {
	const listItem = document.createElement("div");
	listItem.className = "project";
	const pic = document.createElement("img");
	pic.setAttribute("src", project.src);
	pic.setAttribute("alt", project.alt);

	const textCard = document.createElement("div");
	textCard.classList.add("card-text");

	const title = document.createElement("h3");
	title.textContent = project.title || "Untitled Project";
	title.classList.add("title");
	textCard.appendChild(title);

	const description = document.createElement("div");
	description.textContent = project.description || "No description available.";
	// description.classList.add("description");
	description.classList.add("description-section");
	console.log(description.classList);
	pic.classList.add("project-img");
	textCard.appendChild(description);

	title.addEventListener("click", () => {
		title.classList.toggle("active");
		console.log(description.classList);
		description.classList.toggle("active");
		console.log(description.classList);
	});

	const showUrl = document.createElement("p");
	const visibleLink = document.createElement("a");
	visibleLink.href = project.url ? project.url : "#";
	visibleLink.textContent = "Click here";
	showUrl.classList.add("link");
	showUrl.appendChild(visibleLink);
	textCard.appendChild(showUrl);

	listItem.appendChild(pic);
	listItem.appendChild(textCard);
	projectsList.appendChild(listItem);
});
