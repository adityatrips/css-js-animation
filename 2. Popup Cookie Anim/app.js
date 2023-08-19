const tl = gsap.timeline({
	defaults: {
		duration: 0.5,
		ease: "power1.inOut",
	},
});
const button = document.querySelector(".button");

tl.fromTo(
	".cookie-container",
	{
		scale: 0,
	},
	{
		scale: 1,
	}
);
tl.fromTo(
	".cookie",
	{
		opacity: 0,
		x: -50,
		rotation: "-45deg",
	},
	{
		opacity: 1,
		x: 0,
		rotation: "0deg",
		ease: "elastic.out(1, 0.4)",
		duration: 1,
	},
	"<50%"
);

tl.fromTo(
	".text",
	{
		x: 30,
		opacity: 0,
	},
	{
		x: 0,
		opacity: 1,
	},
	"<"
);

tl.fromTo(
	".cookie",
	{
		y: 0,
		rotation: 0,
	},
	{
		y: -20,
		yoyo: true,
		repeat: -1,
		rotation: "-20deg",
	}
);

tl.fromTo(
	"#crumbs",
	{
		y: 0,
		rotation: 0,
	},
	{
		y: -20,
		yoyo: true,
		repeat: -1,
		rotation: "-20deg",
	},
	"<"
);

button.addEventListener("click", () => {
	gsap.to(".cookie-container", {
		opacity: 0,
		y: 100,
		duration: 0.5,
		ease: "power1.out",
	});
});
