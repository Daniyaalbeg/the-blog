/**
 * Projects shown on the homepage, in display order.
 *
 * `pop` is the object that sticks out of the top of the card:
 * - `icon`: an 80px app-icon tile from /public/projects
 * - `orb` | `kangent`: hand-drawn in ProjectPop.astro
 */
export type ProjectPop =
	| { kind: 'icon'; src: string }
	| { kind: 'orb' }
	| { kind: 'kangent' }

export type Project = {
	name: string
	description: string
	url?: string
	pop: ProjectPop
}

export const projects: Project[] = [
	{
		name: 'Merrai',
		description: 'Memory for people. Currently in development.',
		url: 'https://merrai.co',
		pop: { kind: 'orb' },
	},
	{
		name: 'Friend Group Cup',
		description: 'A season of filmed mini-games for your friends. One champion.',
		pop: { kind: 'icon', src: '/projects/friend-group-cup.png' },
	},
	{
		name: 'Daily Drawers',
		description: 'Wikipedia as an explorable archive of overlapping drawers.',
		url: 'https://dailydrawers.daniyaalbeg.com',
		pop: { kind: 'icon', src: '/projects/daily-drawers.png' },
	},
	{
		name: 'Lafz',
		description: 'A trustworthy Urdu–English dictionary, rebuilt from Platts.',
		pop: { kind: 'icon', src: '/projects/lafz.png' },
	},
	{
		name: 'Rehbar 1',
		description: "Build, wire and fire Pakistan's first rocket from Sonmiani beach, 1962.",
		pop: { kind: 'icon', src: '/projects/rehbar.png' },
	},
	{
		name: 'Idler',
		description: 'An idle harbour game in Rust and wgpu, with a Mac screensaver.',
		pop: { kind: 'icon', src: '/projects/idler.png' },
	},
	{
		name: 'Airships',
		description: 'Build modular airships and fly them over a procedural world.',
		url: 'https://airships.danyaalbeg.workers.dev',
		pop: { kind: 'icon', src: '/projects/airships.png' },
	},
	{
		name: 'KinoBench',
		description: 'Which vision model knows movies best? A benchmark from film stills.',
		pop: { kind: 'icon', src: '/projects/kinobench.png' },
	},
	{
		name: 'Abshar Works',
		description: 'My studio, and home to Sticker Me. Abshar means waterfall.',
		url: 'https://absharworks.com',
		pop: { kind: 'icon', src: '/projects/abshar.png' },
	},
	{
		name: 'Kangent',
		description: 'Real-time Kanban boards shared by people and coding agents.',
		url: 'https://kangent-kangent-web-daniyaalbeg.danyaalbeg.workers.dev',
		pop: { kind: 'kangent' },
	},
]
