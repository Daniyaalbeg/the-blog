import { useRef } from 'react'

// Extend native a tag props
interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string
	children: React.ReactNode
	updateHoverElement: ({ x, y, w }: { x: number; y: number; w: number }) => void
}

export const HeaderLink = ({ href, children, updateHoverElement }: Props) => {
	const ref = useRef<HTMLAnchorElement>(null)

	if (typeof window === 'undefined') {
		return null
	}

	const pathname = window.location.pathname
	const isActive = href === pathname || href === pathname.replace(/\/$/, '')

	const onMouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (!ref.current) return
		const x = ref.current.getBoundingClientRect().left
		const y = ref.current.getBoundingClientRect().top
		const w = ref.current.getBoundingClientRect().width
		updateHoverElement({ x, y, w })
	}

	return (
		<a
			href={href}
			ref={ref}
			onMouseEnter={onMouseEnter}
			className={`text-stone-700 dark:text-stone-300 inline-block ${
				isActive ? 'font-bold underline' : ''
			}`}
		>
			{children}
		</a>
	)
}
