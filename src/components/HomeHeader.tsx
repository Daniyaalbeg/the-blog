import { HeaderLink } from './HeaderLink'
import { ToggleTheme } from './ToggleTheme'
import { SITE_TITLE } from '../consts'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

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

	return (
		<header className="flex flex-row justify-between items-center py-4 px-8">
			<h2 className="hidden sm:block text-stone-700 dark:text-stone-300 font-semibold">
				{SITE_TITLE}
			</h2>
			<h2 className="sm:hidden text-xs text-stone-700 dark:text-stone-300 font-semibold">
				{SITE_TITLE}
			</h2>
			<nav className="space-x-8 group" ref={navContainerRef} style={styles}>
				<motion.div className="w-[var(--w)] h-8 left-[var(--x)] top-[var(--y)] pointer-events-none absolute bg-stone-600/10 dark:bg-stone-300/10 rounded-lg transition-all duration-500 group-hover:opacity-100 opacity-0" />
				<HeaderLink updateHoverElement={updateHoverElement} href="/">
					Home
				</HeaderLink>
				<HeaderLink updateHoverElement={updateHoverElement} href="/blog">
					Blog
				</HeaderLink>
				<HeaderLink updateHoverElement={updateHoverElement} href="/about">
					About
				</HeaderLink>
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
			<div>
				<ToggleTheme />
			</div>
		</header>
	)
}