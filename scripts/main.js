const version = "1.54";
const cacheName = `jb-${ version }`;

const orientations = {
	PORTRAIT: 1,
	LANDSCAPE: 2,
	SQUARE: 3
};
Object.freeze(orientations);

const photos = [
	{
		'date': 'July 8, 2022',
		'description': '',
		'file': '2022/07/08/2-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'July 8, 2022',
		'description': '',
		'file': '2022/07/08/1-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'July 6, 2022',
		'description': '',
		'file': '2022/07/06/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 4, 2022',
		'description': '',
		'file': '2022/07/04/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 3, 2022',
		'description': '',
		'file': '2022/07/03/3-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'July 3, 2022',
		'description': '',
		'file': '2022/07/03/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 3, 2022',
		'description': '',
		'file': '2022/07/03/1-250.mp4',
		'orientation': orientations.PORTRAIT,
		'type': 'video',
	},
	{
		'date': 'July 2, 2022',
		'description': '',
		'file': '2022/07/02/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 2, 2022',
		'description': '',
		'file': '2022/07/02/1-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 30, 2022',
		'description': '',
		'file': '2022/06/30/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 25, 2022',
		'description': '',
		'file': '2022/06/25/3-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 25, 2022',
		'description': '',
		'file': '2022/06/25/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 25, 2022',
		'description': '',
		'file': '2022/06/25/1-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 23, 2022',
		'description': '',
		'file': '2022/06/23/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 22, 2022',
		'description': '',
		'file': '2022/06/22/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 18, 2022',
		'description': '',
		'file': '2022/06/18/3-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 18, 2022',
		'description': '',
		'file': '2022/06/18/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 18, 2022',
		'description': '',
		'file': '2022/06/18/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 16, 2022',
		'description': '',
		'file': '2022/06/16/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 12, 2022',
		'description': '',
		'file': '2022/06/12/3-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 12, 2022',
		'description': '',
		'file': '2022/06/12/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 12, 2022',
		'description': '',
		'file': '2022/06/12/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 10, 2022',
		'description': '',
		'file': '2022/06/10/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 10, 2022',
		'description': '',
		'file': '2022/06/10/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 2, 2022',
		'description': '',
		'file': '2022/06/02/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'May 30, 2022',
		'description': '',
		'file': '2022/05/30/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 29, 2022',
		'description': '',
		'file': '2022/05/29/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 27, 2022',
		'description': '',
		'file': '2022/05/27/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 23, 2022',
		'description': '',
		'file': '2022/05/23/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 22, 2022',
		'description': '',
		'file': '2022/05/22/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 20, 2022',
		'description': '',
		'file': '2022/05/20/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'May 19, 2022',
		'description': '',
		'file': '2022/05/19/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'May 18, 2022',
		'description': '',
		'file': '2022/05/18/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 15, 2022',
		'description': '',
		'file': '2022/05/15/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 15, 2022',
		'description': '',
		'file': '2022/05/15/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 13, 2022',
		'description': '',
		'file': '2022/05/13/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 13, 2022',
		'description': '',
		'file': '2022/05/13/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 11, 2022',
		'description': '',
		'file': '2022/05/11/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 10, 2022',
		'description': '',
		'file': '2022/05/10/250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 7, 2022',
		'description': '',
		'file': '2022/05/07/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 6, 2022',
		'description': '',
		'file': '2022/05/06/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 6, 2022',
		'description': '',
		'file': '2022/05/06/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 5, 2022',
		'description': '',
		'file': '2022/05/05/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 4, 2022',
		'description': 'Harry Kane-abelle',
		'file': '2022/05/04/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 28, 2022',
		'description': 'Purple fox hat',
		'file': '2022/04/28/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 23, 2022',
		'description': 'Slide race',
		'file': '2022/04/23/4-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 23, 2022',
		'description': 'Family selfie at Withernsea lighthouse',
		'file': '2022/04/23/3-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 23, 2022',
		'description': 'At the top of Withernsea lighthouse',
		'file': '2022/04/23/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 23, 2022',
		'description': 'Fashionista\'s in Withernsea',
		'file': '2022/04/23/1-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'April 21, 2022',
		'description': 'Practising with our new chopsticks',
		'file': '2022/04/21/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 17, 2022',
		'description': 'Jumping in the beach hole',
		'file': '2022/04/17/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 15, 2022',
		'description': 'Documenting the squeezy flowers',
		'file': '2022/04/15/250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 11, 2022',
		'description': 'Smiley scooting',
		'file': '2022/04/11/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 11, 2022',
		'description': 'Scooty scooty scoo',
		'file': '2022/04/11/1-250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 9, 2022',
		'description': 'Poorly Annabelle asleep on the floor',
		'file': '2022/04/09/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'April 8, 2022',
		'description': 'Standing in the rain',
		'file': '2022/04/08/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 3, 2022',
		'description': 'Working hard',
		'file': '2022/04/03/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 1, 2022',
		'description': 'Foxy outfit',
		'file': '2022/04/01/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 31, 2022',
		'description': 'Nature crown at Outdoor Explorers',
		'file': '2022/03/31/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 30, 2022',
		'description': 'Family photo',
		'file': '2022/03/30/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 30, 2022',
		'description': 'Roller pram',
		'file': '2022/03/30/1-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'March 24, 2022',
		'description': 'Football at Withernsea park',
		'file': '2022/03/24/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 22, 2022',
		'description': 'Crazy hair #2',
		'file': '2022/03/22/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 22, 2022',
		'description': 'Crazy hair',
		'file': '2022/03/22/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 20, 2022',
		'description': 'Exhausted girls',
		'file': '2022/03/20/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'March 18, 2022',
		'description': 'Foxy outfit',
		'file': '2022/03/18/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 15, 2022',
		'description': 'Trying on her new sandals',
		'file': '2022/03/15/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 10, 2022',
		'description': 'Daddy and Annabelle selfie',
		'file': '2022/03/10/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 5, 2022',
		'description': 'Fox cupcake',
		'file': '2022/03/05/250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 3, 2022',
		'description': 'Dressing as Rosa Parks for World Book Day',
		'file': '2022/03/03/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 1, 2022',
		'description': 'Gotta knit \'em all!',
		'file': '2022/03/01/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'February 20, 2022',
		'description': 'Noodling around',
		'file': '2022/02/20/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 19, 2022',
		'description': 'Fox Sleepover',
		'file': '2022/02/19/2-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'February 19, 2022',
		'description': 'Edna Mode Lookalike',
		'file': '2022/02/19/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 8, 2022',
		'description': 'Having fun baking',
		'file': '2022/02/08/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 29, 2022',
		'description': 'Going backpacking',
		'file': '2022/01/29/3-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 29, 2022',
		'description': 'Climbing the wiggly stairs',
		'file': '2022/01/29/2-250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 29, 2022',
		'description': 'Family photo at the climbing centre',
		'file': '2022/01/29/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 25, 2022',
		'description': 'Relacing at soft play',
		'file': '2022/01/25/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 24, 2022',
		'description': 'Preparing a photoshoot',
		'file': '2022/01/24/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 23, 2022',
		'description': 'Doctor Annabelle is here to see you',
		'file': '2022/01/23/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 18, 2022',
		'description': 'Silly photos at Bert\'s',
		'file': '2022/01/18/3-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'January 18, 2022',
		'description': 'Waving at the ray',
		'file': '2022/01/18/2-500.gif',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'January 18, 2022',
		'description': 'Visiting The Deep',
		'file': '2022/01/18/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 15, 2022',
		'description': 'Wearing AirPods',
		'file': '2022/01/15/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 11, 2022',
		'description': 'Relaxing with our goggles',
		'file': '2022/01/11/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 30, 2021',
		'description': 'Walking like a cool dude... In Withernsea',
		'file': '2021/12/30/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 29, 2021',
		'description': 'Walking like a cool dude',
		'file': '2021/12/29/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 29, 2021',
		'description': 'Phillip!',
		'file': '2021/12/29/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 25, 2021',
		'description': 'Enjoying our new presents',
		'file': '2021/12/25/2-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'December 25, 2021',
		'description': 'Christmas morning!',
		'file': '2021/12/25/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 23, 2021',
		'description': 'Carrot face paint',
		'file': '2021/12/23/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 16, 2021',
		'description': 'Visiting the christmas garden in Burstwick',
		'file': '2021/12/16/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 16, 2021',
		'description': 'Carrot car!',
		'file': '2021/12/16/1-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'December 15, 2021',
		'description': 'Fun photos with Mummy',
		'file': '2021/12/15/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'December 9, 2021',
		'description': 'Fashion show for a new birthday dress',
		'file': '2021/12/09/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 3, 2021',
		'description': 'Listening to Kanye West on her headphones',
		'file': '2021/12/03/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'November 30, 2021',
		'description': 'Fully decorated tree',
		'file': '2021/11/30/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'November 30, 2021',
		'description': 'Decorating our christmas tree',
		'file': '2021/11/30/1-250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'November 24, 2021',
		'description': 'Outdoor Explorers in Paull',
		'file': '2021/11/24/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'November 22, 2021',
		'description': 'Trying on our new goggles',
		'file': '2021/11/22/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'November 21, 2021',
		'description': 'Blowing the candles',
		'file': '2021/11/21/5-250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'November 21, 2021',
		'description': 'Learning about wallabies',
		'file': '2021/11/21/4-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'November 21, 2021',
		'description': 'Seeing the warty pigs at Yorkshire Wildlife Park',
		'file': '2021/11/21/3-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'November 21, 2021',
		'description': 'Annabelle getting on her new bike',
		'file': '2021/11/21/2-500.gif',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'November 21, 2021',
		'description': 'Birthday breakfast',
		'file': '2021/11/21/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'November 14, 2021',
		'description': 'Babyccino!',
		'file': '2021/11/14/4-250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'November 14, 2021',
		'description': 'Watching our pizzas get made',
		'file': '2021/11/14/3-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'November 14, 2021',
		'description': 'Chilling in a sink',
		'file': '2021/11/14/2-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'November 14, 2021',
		'description': 'Looking resplendent at William\'s Den',
		'file': '2021/11/14/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'November 10, 2021',
		'description': 'Treehugger Annabelle',
		'file': '2021/11/10/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'November 9, 2021',
		'description': 'Daddies birthday meal',
		'file': '2021/11/09/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'November 8, 2021',
		'description': 'Family meet up',
		'file': '2021/11/08/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'November 6, 2021',
		'description': 'Annabelle posing for a photo',
		'file': '2021/11/06/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'November 6, 2021',
		'description': 'Playing on the bouncy castle at Arlo\'s party',
		'file': '2021/11/06/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 31, 2021',
		'description': 'Testing out the puddle suit',
		'file': '2021/10/31/250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 30, 2021',
		'description': 'Dressing up as a Witch for Halloween',
		'file': '2021/10/30/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 29, 2021',
		'description': 'There\'s two Filberts!',
		'file': '2021/10/29/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 29, 2021',
		'description': 'Fantastic Ms. Fox',
		'file': '2021/10/29/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 25, 2021',
		'description': 'First day in the office',
		'file': '2021/10/25/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 23, 2021',
		'description': 'Sundown Adventureland: Losing grip in the big park',
		'file': '2021/10/23/7-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 23, 2021',
		'description': 'Sundown Adventureland: Riding the flying pig',
		'file': '2021/10/23/6-500.gif',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'October 23, 2021',
		'description': 'Sundown Adventureland: Riding the ostrich',
		'file': '2021/10/23/5-250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 23, 2021',
		'description': 'Sundown Adventureland: Playing in the sand park',
		'file': '2021/10/23/4-250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 23, 2021',
		'description': 'Sundown Adventureland: Crossing the wiggely bridge',
		'file': '2021/10/23/3-250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 23, 2021',
		'description': 'Sundown Adventureland: Riding the fox roundabout',
		'file': '2021/10/23/2-250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 23, 2021',
		'description': 'Sundown Adventureland: Riding the rocking elephant',
		'file': '2021/10/23/1-250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 22, 2021',
		'description': 'Puddle suit at the park',
		'file': '2021/10/22/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 21, 2021',
		'description': 'Puddle suit selfie',
		'file': '2021/10/21/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 17, 2021',
		'description': 'Pointing to the Humber Bridge',
		'file': '2021/10/17/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 17, 2021',
		'description': 'Humber Hug',
		'file': '2021/10/17/1-250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 16, 2021',
		'description': 'Riding a tractor at Sandy Bottoms Pumpkin Patch',
		'file': '2021/10/16/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'October 12, 2021',
		'description': 'Mummy Photoshoot: Shock',
		'file': '2021/10/12/4-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 12, 2021',
		'description': 'Mummy Photoshoot: Happiness',
		'file': '2021/10/12/3-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 12, 2021',
		'description': 'Mummy Photoshoot: Depression',
		'file': '2021/10/12/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 12, 2021',
		'description': 'Mummy Photoshoot: Introspection',
		'file': '2021/10/12/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 10, 2021',
		'description': 'Annabelle being silly outside Nann\'s house',
		'file': '2021/10/10/2-250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 10, 2021',
		'description': 'Annabelle visiting Great Grandma',
		'file': '2021/10/10/1-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'October 9, 2021',
		'description': 'Mummy Photoshoot: In awe',
		'file': '2021/10/09/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 9, 2021',
		'description': 'Mummy Photoshoot: Cool dude!',
		'file': '2021/10/09/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'October 7, 2021',
		'description': 'Playing with the parasol on the way to the lake',
		'file': '2021/10/07/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'September 26, 2021',
		'description': 'Playing with stones on the way to see the horses',
		'file': '2021/09/26/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'September 18, 2021',
		'description': 'Cool dude Annabelle by a cool car',
		'file': '2021/09/18/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'September 17, 2021',
		'description': 'Selfie time!',
		'file': '2021/09/17/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'September 16, 2021',
		'description': 'Playing at the soft play park',
		'file': '2021/09/16/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'September 14, 2021',
		'description': 'Peek-a-boo with Filbert',
		'file': '2021/09/14/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'September 13, 2021',
		'description': 'Annabelle upset on a forest walk near the Humber Bridge',
		'file': '2021/09/13/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'September 13, 2021',
		'description': 'She\'s got the whole world in her hands...',
		'file': '2021/09/13/1-250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'September 8, 2021',
		'description': 'Visiting Hornsea beach',
		'file': '2021/09/08/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'September 7, 2021',
		'description': 'Poorly Annabelle cuddling Mummy',
		'file': '2021/09/07/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'September 6, 2021',
		'description': 'Poorly Annabelle trying to sleep',
		'file': '2021/09/06/250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'September 5, 2021',
		'description': 'Running through fields of grass',
		'file': '2021/09/05/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'September 4, 2021',
		'description': 'Swinging high and swinging low...',
		'file': '2021/09/04/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'September 4, 2021',
		'description': 'Riding on the East Park train',
		'file': '2021/09/04/1-250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'September 2, 2021',
		'description': 'Taking Baby\'s pram to the park',
		'file': '2021/09/02/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'August 29, 2021',
		'description': 'Annabelle hoovering the hallway',
		'file': '2021/08/29/250.gif',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'August 28, 2021',
		'description': 'Mummy and Annabelle being silly!',
		'file': '2021/08/28/500.gif',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'August 27, 2021',
		'description': 'Exhausted Annabelle',
		'file': '2021/08/27/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'August 24, 2021',
		'description': 'Annabelle testing the cake batter',
		'file': '2021/08/24/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'August 23, 2021',
		'description': 'Trying on Mummy\'s new mask',
		'file': '2021/08/23/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'August 22, 2021',
		'description': 'Staring at the Humber from The Deep',
		'file': '2021/08/22/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'August 21, 2021',
		'description': 'Playing with Filbert at the soft play',
		'file': '2021/08/21/3-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'August 21, 2021',
		'description': 'Babyccino break at Starbucks',
		'file': '2021/08/21/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'August 21, 2021',
		'description': 'Katsu Curry lunch at Trinity Market',
		'file': '2021/08/21/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'August 20, 2021',
		'description': 'Art Attack at the beach',
		'file': '2021/08/20/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'August 12, 2021',
		'description': 'Cool dude Annabelle!',
		'file': '2021/08/12/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'August 7, 2021',
		'description': 'Reading some new books at the library',
		'file': '2021/08/07/3-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'August 7, 2021',
		'description': 'Another babyccino...',
		'file': '2021/08/07/2-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'August 7, 2021',
		'description': 'Splashing at the Splash Pad',
		'file': '2021/08/07/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'August 5, 2021',
		'description': 'Babyccino time with Daddy',
		'file': '2021/08/05/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'August 4, 2021',
		'description': 'Annabelle looking cool in her nerd glasses',
		'file': '2021/08/04/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'August 2, 2021',
		'description': 'Setting up our bunny rabbit picnic',
		'file': '2021/08/02/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'August 1, 2021',
		'description': 'Annabelle would rather eat a lemon than pizza',
		'file': '2021/08/01/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 30, 2021',
		'description': 'Excited to sit in a wheelchair',
		'file': '2021/07/30/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 28, 2021',
		'description': 'Seeing hail for the first time',
		'file': '2021/07/28/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'July 28, 2021',
		'description': 'Playing in the flower garden',
		'file': '2021/07/28/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 26, 2021',
		'description': 'Would you like your babyccino for on the floor or to go?',
		'file': '2021/07/26/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 25, 2021',
		'description': 'Have you been in an accident that wasn\'t your fault?',
		'file': '2021/07/25/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 24, 2021',
		'description': 'Practising for Annabelle\'s driving test',
		'file': '2021/07/24/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 23, 2021',
		'description': 'Lovely lunch in Colchester',
		'file': '2021/07/23/500.gif',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'July 22, 2021',
		'description': 'Getting a well earned lunch',
		'file': '2021/07/22/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 19, 2021',
		'description': 'Playing in the digger',
		'file': '2021/07/19/4-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'July 19, 2021',
		'description': 'Interesting ironing technique!',
		'file': '2021/07/19/3-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'July 19, 2021',
		'description': 'Firefighter Annabelle',
		'file': '2021/07/19/2-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'July 19, 2021',
		'description': 'Lovely afternoon tea',
		'file': '2021/07/19/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 18, 2021',
		'description': 'Practising for Ninja Warrior',
		'file': '2021/07/18/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 17, 2021',
		'description': 'Running with a controller, why not!',
		'file': '2021/07/17/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 16, 2021',
		'description': 'Row row row your pirate ship...',
		'file': '2021/07/16/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 14, 2021',
		'description': 'A refreshing cuppa after a long day',
		'file': '2021/07/14/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 9, 2021',
		'description': 'Taking Philbert to A&E',
		'file': '2021/07/09/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 4, 2021',
		'description': 'A very cautious cook',
		'file': '2021/07/04/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 2, 2021',
		'description': 'Tired after a long day of travelling',
		'file': '2021/07/02/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'July 1, 2021',
		'description': 'Such a comfy seat',
		'file': '2021/07/01/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 30, 2021',
		'description': 'First time playing minigolf',
		'file': '2021/06/30/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 28, 2021',
		'description': 'Visiting the meerkats',
		'file': '2021/06/28/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 28, 2021',
		'description': 'Swimming in the pool',
		'file': '2021/06/28/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 26, 2021',
		'description': 'If Jesus can walk on water, can he swim on land? Annabelle can!',
		'file': '2021/06/26/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 25, 2021',
		'description': 'Enjoying the Isle of Wight ferry trip',
		'file': '2021/06/25/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 24, 2021',
		'description': 'Harry Potter cosplay',
		'file': '2021/06/24/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 22, 2021',
		'description': 'Playing in a suitcase, why not?',
		'file': '2021/06/22/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 21, 2021',
		'description': 'Excited by her pushchair',
		'file': '2021/06/21/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 20, 2021',
		'description': 'Annabelle at East Park visiting the wallabies',
		'file': '2021/06/20/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 16, 2021',
		'description': 'Fun in the sun',
		'file': '2021/06/16/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 14, 2021',
		'description': 'Wet hair selfie!',
		'file': '2021/06/14/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 10, 2021',
		'description': 'Annabelle and Daddy selfie',
		'file': '2021/06/10/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 9, 2021',
		'description': 'Enjoying a little bike ride',
		'file': '2021/06/09/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 8, 2021',
		'description': 'Sorry, tootz. We gotta go see a Tramp named Oline',
		'file': '2021/06/08/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 7, 2021',
		'description': 'The wheels on the bus go round and round...',
		'file': '2021/06/07/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 5, 2021',
		'description': 'Hornsea-lfie!',
		'file': '2021/06/05/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 3, 2021',
		'description': 'Overjoyed to see a Filbert truck',
		'file': '2021/06/03/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 3, 2021',
		'description': 'Yoghurt hair selfie',
		'file': '2021/06/03/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 31, 2021',
		'description': 'Annabelle phone home!',
		'file': '2021/05/31/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 31, 2021',
		'description': 'I came in like a wrecking ball!',
		'file': '2021/05/31/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 26, 2021',
		'description': 'Learning about yoga with Llamaste',
		'file': '2021/05/26/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 24, 2021',
		'description': 'This is flying, it\'s falling with style',
		'file': '2021/05/24/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 24, 2021',
		'description': 'Getting stuck under the cot',
		'file': '2021/05/24/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 22, 2021',
		'description': 'Visiting Pink Pig Farm 🐷',
		'file': '2021/05/22/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 21, 2021',
		'description': 'Cleaning up the house',
		'file': '2021/05/21/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 17, 2021',
		'description': 'Fun with Little Sebastian',
		'file': '2021/05/17/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 17, 2021',
		'description': 'Annabelle and Daddy selfie',
		'file': '2021/05/17/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 12, 2021',
		'description': 'Ready for some baking',
		'file': '2021/05/12/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 12, 2021',
		'description': 'Making some buzy bees',
		'file': '2021/05/12/2-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'May 9, 2021',
		'description': 'Who me?',
		'file': '2021/05/09/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 9, 2021',
		'description': 'Drying as Princess Elsa',
		'file': '2021/05/09/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 8, 2021',
		'description': 'Colouring on our new desk',
		'file': '2021/05/08/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'April 23, 2021',
		'description': 'Fun at the park with Grandad',
		'file': '2021/04/23/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 22, 2021',
		'description': 'Going down the big slide',
		'file': '2021/04/22/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 21, 2021',
		'description': 'Colouring in our big girl pants',
		'file': '2021/04/21/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 20, 2021',
		'description': 'Laying down to draw, Michelangelo would be proud',
		'file': '2021/04/20/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 18, 2021',
		'description': 'Relaxing at the park',
		'file': '2021/04/18/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 17, 2021',
		'description': 'Seaside selfie',
		'file': '2021/04/17/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 16, 2021',
		'description': 'Looking regal after swimming',
		'file': '2021/04/16/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 15, 2021',
		'description': 'Trying on our swim jacket',
		'file': '2021/04/15/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 13, 2021',
		'description': 'Anything can be a swing if you are determined enough',
		'file': '2021/04/13/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'April 10, 2021',
		'description': 'Family nap',
		'file': '2021/04/10/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 8, 2021',
		'description': 'Playing with 2 Filberts',
		'file': '2021/04/08/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 7, 2021',
		'description': 'Preparing our rice for dinner',
		'file': '2021/04/07/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 3, 2021',
		'description': 'Reading and blanket time',
		'file': '2021/04/03/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 29, 2021',
		'description': '"Playing" in the garden',
		'file': '2021/03/29/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'March 24, 2021',
		'description': 'Fun at the park',
		'file': '2021/03/24/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 19, 2021',
		'description': 'Dressing up as Boo',
		'file': '2021/03/19/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 18, 2021',
		'description': 'Isn\t it bad luck to open an umbrella indoors?',
		'file': '2021/03/18/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 17, 2021',
		'description': 'Brushing up on Transport Phenomena',
		'file': '2021/03/17/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'March 16, 2021',
		'description': 'Interesting use of chopsticks',
		'file': '2021/03/16/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 12, 2021',
		'description': 'Laying down colouring',
		'file': '2021/03/12/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'March 11, 2021',
		'description': 'Enjoying our new reading chair',
		'file': '2021/03/11/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 10, 2021',
		'description': 'Annabelle with a big bump on her head',
		'file': '2021/03/10/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 10, 2021',
		'description': 'Annabelle playing perfectly well with a big bump on her head',
		'file': '2021/03/10/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 27, 2021',
		'description': 'Seaside expedition',
		'file': '2021/02/27/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 25, 2021',
		'description': 'Reading a wedding invitation by herself',
		'file': '2021/02/25/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 17, 2021',
		'description': 'Playing on Daddy\'s shoulders',
		'file': '2021/02/17/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 14, 2021',
		'description': 'Colouring on an envelope',
		'file': '2021/02/14/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 9, 2021',
		'description': 'Snow day selfie',
		'file': '2021/02/09/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 6, 2021',
		'description': 'Getting trollied',
		'file': '2021/02/06/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 2, 2021',
		'description': 'Hanging out with Bertie Bloomer in the kitchen',
		'file': '2021/02/02/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 28, 2021',
		'description': 'Excited to play with a passport',
		'file': '2021/01/28/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 24, 2021',
		'description': 'Fun in Daddy\s wardrobe',
		'file': '2021/01/24/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 16, 2021',
		'description': 'Playing in a puddle',
		'file': '2021/01/16/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 1, 2021',
		'description': 'Practising downward facing dog',
		'file': '2021/01/01/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 27, 2020',
		'description': 'Family walk selfie',
		'file': '2020/12/27/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 25, 2020',
		'description': 'Christmas morning',
		'file': '2020/12/25/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 25, 2020',
		'description': 'Meeting Philip the Fox',
		'file': '2020/12/25/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 16, 2020',
		'description': 'Annabelle sleeping with Daddy',
		'file': '2020/12/16/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'December 14, 2020',
		'description': 'Annabelle and Mummy making dinner',
		'file': '2020/12/14/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 11, 2020',
		'description': 'Going for a walk down the road',
		'file': '2020/12/11/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 9, 2020',
		'description': 'Showing off our new shoes',
		'file': '2020/12/09/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'December 3, 2020',
		'description': 'Rock and roll glockenspiel',
		'file': '2020/12/03/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 1, 2020',
		'description': 'Clinically depressed at the supermarket',
		'file': '2020/12/01/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
];
photos.sort((a, b) => {
	return new Date(b.date) - new Date(a.date);
});

caches.open(cacheName).then(cache => {
	return cache.addAll(photos.map(photo => `images/photos/${ photo.file }`));
})

// Constant Elements
const $grid = document.querySelector('.grid');
const $observer = document.querySelector('#observer');
const $updateSnackbar = document.querySelector('#update-snackbar');
const $updateSnackbarAction = $updateSnackbar.querySelector('.snackbar__action');
const $updateSnackbarClose = $updateSnackbar.querySelector('.snackbar__close');
const $installSnackbar = document.querySelector('#install-snackbar');
const $installSnackbarAction = $installSnackbar.querySelector('.snackbar__action');
const $installSnackbarClose = $installSnackbar.querySelector('.snackbar__close');

// Variable Elements
let $gridItems = [];

// Constants
const msnry = new Masonry($grid, {
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition: true
});
const photosPerPage = 6;

// Variables
let appInstalled = true
let appStandalone = false;
let currentPage = 1;
let deferredPrompt;
let firstLoad = true;
let userScrolled = false;

document.addEventListener('DOMContentLoaded', () => {

	loadPhotos();
	
	if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
		console.log('display-mode is standalone');
		appStandalone = true;
	}

	// Add events

	$updateSnackbarClose.addEventListener('click', (event) => {
		$updateSnackbar.ariaHidden = true;
	});

	$installSnackbarClose.addEventListener('click', (event) => {
		$installSnackbar.ariaHidden = true;
	});

	window.addEventListener('scroll', () => {
		// Open snackbar upon first scroll
		if (!appInstalled && !appStandalone && !userScrolled) {
			userScrolled = true;
			$installSnackbar.ariaHidden = false;
		}
	});
});

function loadPhotos() {
	photos.slice(Math.max((currentPage - 1) * photosPerPage, 0), currentPage * photosPerPage).forEach(photo => {
		createPhotoElement(photo);
	});

	imagesLoaded($grid, () => {
		new Masonry($grid, {
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true
		});

		showPhotos();

		if (firstLoad) {
			firstLoad = false;
			let observer = new IntersectionObserver(loadMorePhotos, {});
			observer.observe($observer);
		}
	});
}

function loadMorePhotos(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			currentPage++;
			loadPhotos();
		}
	});
}

function showPhotos() {
	const $gridItems = document.querySelectorAll('div.grid-item[aria-hidden="true"]');
	$gridItems.forEach($gridItem => {
		$gridItem.ariaHidden = false;
	});
}

function createPhotoElement(photo) {
	const $gridItem = document.createElement('div');
	$gridItem.ariaHidden = true;
	$gridItem.classList.add('grid-item');
	if (photo.orientation === orientations.LANDSCAPE || photo.orientation === orientations.SQUARE) {
		$gridItem.dataset.width = '2';
	}

	const $gridItemContent = document.createElement('div');
	$gridItemContent.classList.add('grid-item-content');
	$gridItem.appendChild($gridItemContent);

	let $gridItemMedia;
	if (photo.type === 'video') {
		$gridItemMedia = document.createElement('video');
		$gridItemMedia.autoplay = true;
		$gridItemMedia.loop = true;
		$gridItemMedia.muted = true;

		const $gridItemVideoSource = document.createElement('source');
		$gridItemVideoSource.src = `images/photos/${ photo.file }`;
		$gridItemVideoSource.type = 'video/mp4';
		$gridItemMedia.appendChild($gridItemVideoSource);
	} else {
		$gridItemMedia = document.createElement('img');
		$gridItemMedia.src = `images/photos/${ photo.file }`;
		$gridItemMedia.alt = photo.description;
	}
	
	$gridItemMedia.classList.add('grid-item-photo');
	if (photo.orientation === orientations.PORTRAIT) {
		$gridItemMedia.height = '333';
		$gridItemMedia.width = '250';
	}
	else if (photo.orientation === orientations.LANDSCAPE) {
		$gridItemMedia.height = '375';
		$gridItemMedia.width = '500';
	}
	else if (photo.orientation === orientations.SQUARE) {
		$gridItemMedia.height = '500';
		$gridItemMedia.width = '500';
	}
	$gridItemContent.appendChild($gridItemMedia);

	const $photoOverlay = document.createElement('div');
	$photoOverlay.classList.add('photo-overlay');
	$gridItemContent.appendChild($photoOverlay);

	const $photoOverlayText = document.createElement('div');
	$photoOverlayText.classList.add('photo-overlay-text');
	$photoOverlayText.innerHTML = new Date(photo.date).toDateString();
	$photoOverlay.appendChild($photoOverlayText);

	$observer.insertAdjacentElement('beforebegin', $gridItem);
	$gridItems.push($grid);
}

// https://developers.google.com/web/ilt/pwa/lab-offline-quickstart#52_activating_the_install_prompt
window.addEventListener('beforeinstallprompt', (event) => {

	// The application is not installed
	appInstalled = false;

	// Prevent Chrome 67 and earlier from automatically showing the prompt
	event.preventDefault();

	// Stash the event so it can be triggered later.
	deferredPrompt = event;

	// Attach the install prompt to a user gesture
	$installSnackbarAction.addEventListener('click', (event) => {

		// Show the prompt
		deferredPrompt.prompt();

		// Wait for the user to respond to the prompt
		deferredPrompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
				console.log('User accepted the A2HS prompt');
			}
			else {
				console.log('User dismissed the A2HS prompt');
			}
			deferredPrompt = null;
		});
	});
});

// When the app is installed it should remove the install snackbar
window.addEventListener('appinstalled', (event) => {
	console.log('a2hs installed');
	appInstalled = true;
	appStandalone = true;
	$installSnackbar.ariaHidden = true;
});