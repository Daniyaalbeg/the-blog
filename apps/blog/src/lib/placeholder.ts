import { join } from 'node:path'
import sharp from 'sharp'

/**
 * A tiny version of an image in `public/`, inlined as a data URI. Shown blurred
 * while the real image loads. Runs at build time only.
 */
export async function placeholder(publicPath: string) {
	const file = join(process.cwd(), 'public', publicPath)
	const png = await sharp(file).resize(8, 8, { fit: 'cover' }).png().toBuffer()
	return `data:image/png;base64,${png.toString('base64')}`
}
