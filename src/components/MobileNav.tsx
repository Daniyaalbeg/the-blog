import React from 'react'
import { motion } from 'framer-motion'
import { HeaderLink } from './HeaderLink'
import { ToggleTheme } from './ToggleTheme'

export const MobileNav = () => {
	const [showMobileNav, setShowMobileNav] = React.useState(false)
	const ref = React.useRef<HTMLDivElement>(null)
	const toggleMobileNav = () => {
		setShowMobileNav((v) => !v)
	}

	const closeMobileNav = () => {
		setShowMobileNav(false)
	}

	useOutsideAlerter(ref, closeMobileNav)

	const isDev = process.env.NODE_ENV === 'development'

	return (
		<>
			<button
				onClick={toggleMobileNav}
				className="w-10 h-10 grid items-center justify-center"
			>
				<svg
					viewBox="0 0 10 10"
					className="text-slate-800 dark:text-slate-300 w-8 h-8"
					xmlns="http://www.w3.org/2000/svg"
				>
					<motion.path
						d="M 2 3 L 8 3"
						stroke="currentColor"
						strokeWidth="0.7"
						strokeLinecap="round"
						animate={
							showMobileNav ? { rotate: 45, translateY: 2 } : { rotate: 0 }
						}
					/>
					<motion.path
						d="M 2 7 L 8 7"
						stroke="currentColor"
						strokeWidth="0.7"
						strokeLinecap="round"
						animate={
							showMobileNav ? { rotate: -45, translateY: -2 } : { rotate: 0 }
						}
					/>
				</svg>
			</button>
			{showMobileNav && (
				<nav
					ref={ref}
					className="w-full fixed top-20 left-0 backdrop-blur-md h-64 z-10 flex flex-col justify-center items-center gap-3 px-8"
				>
					<HeaderLink updateHoverElement={undefined} href="/">
						Home
					</HeaderLink>
					{/* <HeaderLink href="/blog">
					Blog
				</HeaderLink> */}
					{isDev ? (
						<>
							<HeaderLink href="/about">About</HeaderLink>
							<HeaderLink href="/snippets">Snippets</HeaderLink>
						</>
					) : null}
					<HeaderLink href="https://twitter.com/daniyaalbeg" target="_blank">
						Twitter
					</HeaderLink>
					<HeaderLink href="https://github.com/daniyaalbeg" target="_blank">
						GitHub
					</HeaderLink>
					<ToggleTheme />
				</nav>
			)}
		</>
	)
}

// Taken from https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
function useOutsideAlerter(
	ref: React.RefObject<HTMLDivElement>,
	cb: () => void
) {
	React.useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event: MouseEvent) {
			console.log(event)
			if (ref.current && !ref.current.contains(event.target as Node)) {
				cb()
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref])
}
