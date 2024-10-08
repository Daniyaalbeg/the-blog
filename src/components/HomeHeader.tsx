import { HeaderLink } from './HeaderLink'
import { ToggleTheme } from './ToggleTheme'
import { SITE_TITLE } from '../consts'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MobileNav } from './MobileNav'

const styles = {
	'--x': 0,
	'--y': 0,
	'--w': 0,
} as React.CSSProperties

export const HomeHeader = () => {
	const navContainerRef = useRef<HTMLDivElement>(null)

	const updateHoverElement = ({
		x,
		y,
		w,
	}: {
		x: number
		y: number
		w: number
	}) => {
		// Update css variables x and y
		navContainerRef.current?.style.setProperty('--x', `${x - 12}px`)
		navContainerRef.current?.style.setProperty('--y', `${y - 4}px`)
		navContainerRef.current?.style.setProperty('--w', `${w + 24}px`)
	}

	useEffect(() => {
		// On Mount set base x and y
		const x = navContainerRef.current?.getBoundingClientRect().left
		const y = navContainerRef.current?.getBoundingClientRect().top
		navContainerRef.current?.style.setProperty('--x', `${x}px`)
		navContainerRef.current?.style.setProperty('--y', `${y}px`)
	}, [])

	const isDev = process.env.NODE_ENV === 'development'

	const isMobile = window.innerWidth < 640

	return (
		<header className="flex flex-row justify-between items-center py-4">
			<div className="hidden group sm:flex sm:flex-row gap-1 dark:text-slate-300 text-slate-700 justify-center items-center">
				<a href="/">
					<h2 className="inline group-hover:text-[hsl(240,50%,50%)] group-hover:dark:text-[hsl(240,50%,60%)] text-xl transition-colors duration-200 ease-in-out pointer-events-none">
						{SITE_TITLE.slice(0, 1)}
					</h2>
					<h2 className="inline group-hover:skew-x-12 transition-transform duration-200 ease-in-out pointer-events-none">
						{SITE_TITLE.slice(1, SITE_TITLE.length)}
					</h2>
				</a>
			</div>
			<a className="sm:hidden" href="/">
				<h2 className="text-xs text-stone-700 dark:text-stone-300 font-semibold">
					<span className="group-hover:text-[hsl(240,50%,60%)] text-xl transition-colors duration-200 ease-in-out">
						{SITE_TITLE.slice(0, 1)}
					</span>
					{SITE_TITLE.slice(1, SITE_TITLE.length)}
				</h2>
			</a>
			{isMobile ? (
				<div>
					<MobileNav />
				</div>
			) : (
				<nav className="space-x-8 group" ref={navContainerRef} style={styles}>
					<motion.div className="w-[var(--w)] h-8 left-[var(--x)] top-[var(--y)] pointer-events-none absolute bg-stone-600/10 dark:bg-stone-300/10 rounded-lg transition-all duration-500 group-hover:opacity-100 opacity-0" />
					<HeaderLink updateHoverElement={updateHoverElement} href="/">
						Home
					</HeaderLink>
					{/* <HeaderLink updateHoverElement={updateHoverElement} href="/blog">
					Blog
				</HeaderLink> */}
					{isDev ? (
						<>
							<HeaderLink updateHoverElement={updateHoverElement} href="/about">
								About
							</HeaderLink>
							<HeaderLink
								updateHoverElement={updateHoverElement}
								href="/snippets"
							>
								Snippets
							</HeaderLink>
						</>
					) : null}
					<HeaderLink
						updateHoverElement={updateHoverElement}
						href="https://twitter.com/daniyaalbeg"
						target="_blank"
					>
						Twitter
					</HeaderLink>
					<HeaderLink
						updateHoverElement={updateHoverElement}
						href="https://github.com/daniyaalbeg"
						target="_blank"
					>
						GitHub
					</HeaderLink>
				</nav>
			)}
			{!isMobile ? (
				<div>
					<ToggleTheme />
				</div>
			) : null}
		</header>
	)
}
