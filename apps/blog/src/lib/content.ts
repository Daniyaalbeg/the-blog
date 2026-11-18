import { getCollection, type CollectionEntry } from 'astro:content'

/** Posts, newest first. */
export async function getPosts(): Promise<CollectionEntry<'blog'>[]> {
	const posts = await getCollection('blog')
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}

/** Shorts, newest first. Drafts only appear in `astro dev`. */
export async function getShorts(): Promise<CollectionEntry<'shorts'>[]> {
	const shorts = await getCollection(
		'shorts',
		({ data }) => import.meta.env.DEV || !data.draft
	)
	return shorts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

export function formatDate(date: Date, style: 'long' | 'short' = 'long'): string {
	return date.toLocaleDateString('en-GB', {
		day: 'numeric',
		month: style === 'long' ? 'long' : 'short',
		year: style === 'long' ? 'numeric' : undefined,
		timeZone: 'UTC',
	})
}

/** Rough reading time from the raw MDX source, ignoring imports and tags. */
export function readingMinutes(source: string | undefined): number {
	const prose = (source ?? '')
		.replace(/^import .*$/gm, '')
		.replace(/<[^>]+>/g, ' ')
		.replace(/```[\s\S]*?```/g, ' ')
	const words = prose.split(/\s+/).filter(Boolean).length
	return Math.max(1, Math.round(words / 220))
}
