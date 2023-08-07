import React, { useEffect } from 'react'
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

	// To close menu when clicks are registered outside specific div
	// useOutsideAlerter(ref, closeMobileNav)

	useEffect(() => {
		const handleScrollListener = () => {
			setShowMobileNav(false)
		}

		window.addEventListener('scroll', handleScrollListener)

		return () => {
			window.removeEventListener('scroll', handleScrollListener)
		}
	}, [])

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
				<motion.nav
					style={{ transformOrigin: 'top right' }}
					initial={{ opacity: 0, scale: 0.7 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ type: 'spring', stiffness: 300, damping: 30 }}
					ref={ref}
					className="fixed top-20 left-8 right-8 h-64 z-10 flex flex-col justify-center items-center gap-3 px-8] dark:bg-blue-950/50 bg-white/30 backdrop-blur-lg rounded-xl"
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.7 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'spring', delay: 0 }}
					>
						<HeaderLink updateHoverElement={undefined} href="/">
							Home
						</HeaderLink>
					</motion.div>
					{/* <HeaderLink href="/blog">
					Blog
				</HeaderLink> */}
					{/* <HeaderLink href="/about">About</HeaderLink>
					<HeaderLink href="/snippets">Snippets</HeaderLink> */}
					<motion.div
						initial={{ opacity: 0, scale: 0.7 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'spring', delay: 0.08 }}
					>
						<HeaderLink href="https://twitter.com/daniyaalbeg" target="_blank">
							Twitter
						</HeaderLink>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0.7 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'spring', delay: 0.16 }}
					>
						<HeaderLink href="https://github.com/daniyaalbeg" target="_blank">
							GitHub
						</HeaderLink>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0.7 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'spring', delay: 0.24 }}
					>
						<ToggleTheme />
					</motion.div>
				</motion.nav>
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
