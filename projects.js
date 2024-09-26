const projects = [
	{
		title: "My First Project",
		url: "file:///C:/Users/crystal/Desktop/website/weather%20app/index.html",
		description:
			"Its a Weather App. You can still use it everyday. All you have to type is City and State. It will give you Date, Temp for a high and a low for that day.",
	},
	{
		title: "My Second Project",
		url: "file:///C:/Users/crystal/Desktop/website/index.html#page-top",
		description:
			"This is showing my resume online. Making it all nice with color's,  icons, past history, my goals, work history. Share what other sites I use.",
	},
	{
		title: "My Third Project",
		url: "file:///C:/Users/crystal/Documents/GitHub/NumGame/GuessGame",
		description:
			"Guessing Game, you are play with the computer to guess the number the computer pick from 1 to 20. I have set it up where it will be differenet number each time the game played. It will also let you know if your guess was to high or low. Then at the end of the game. It will tell you how many times it took for you to guess the correct number.",
	},
];

const projectsList = document.getElementById("projects-list");

projects.forEach((project) => {
	const listItem = document.createElement("li");
	listItem.className = "project";

	const title = document.createElement("h3");
	title.textContent = project.title || "Untitled Project";

	const description = document.createElement("p");
	description.textContent = project.description || "No description available.";

	const showUrl = document.createElement("p");
	const visibleLink = document.createElement("a");
	visibleLink.href = project.url ? project.url : "#";
	visibleLink.textContent = project.url;

	showUrl.appendChild(visibleLink);
	listItem.appendChild(title);
	listItem.appendChild(description);
	listItem.appendChild(showUrl);
	projectsList.appendChild(listItem);
});
