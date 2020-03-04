const ELECTRIC = 'ELECTRIC';
const FIRE = 'FIRE';
const WATER = 'WATER';


export const ROLES = {
	[ELECTRIC]: {name: 'Electric', hourCost: 10},
	[FIRE]: {name: 'Fire', hourCost: 15},
	[WATER]: {name: 'Water', hourCost: 22},
}

export const USERS = [
	{
		name: 'Pikachu',
	    role: ROLES[ELECTRIC],
	    description: 'It occasionally uses an electric shock to recharge a fellow Pikachu that is in a weakened state',
	    img_url: ''
	},
	{
		name: 'Magnemite',
	    role: ROLES[ELECTRIC],
	    description: 'The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.',
	    img_url: ''
	},
	{
		name: 'Charmander',
	    role: ROLES[FIRE],
	    description: 'The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.',
	    img_url: ''
	},
	{
		name: 'Arkanine',
	    role: ROLES[FIRE],
	    description: 'The sight of it running over 6,200 miles in a single day and night has captivated many people.',
	    img_url: ''
	},
	{
		name: 'Squirtle',
	    role: ROLES[WATER],
	    description: 'It shelters itself in its shell then strikes back with spouts of water at every opportunity.',
	    img_url: ''
	},
	{
		name: 'Vaporeon',
	    role: ROLES[WATER],
	    description: 'Its cell composition is similar to water molecules. As a result, it cant be seen when it melts away into water.',
	    img_url: ''
	},
	{
		name: 'Lapras',
	    role: ROLES[WATER],
	    description: 'Able to understand human speech and very intelligent, it loves to swim in the sea with people on its back.',
	    img_url: ''
	}
]