# Notes

1. Sync to previous animation, use `<`
 <pre>
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
 </pre>

2. Sync to previous animation when prev is halfway done, use `<50%`
 <pre>
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
 	"<50%"
 );
 </pre>
