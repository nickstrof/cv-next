import createImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { dataset, projectId } from './sanity.api'

const imageBuilder = projectId && dataset
  ? createImageUrlBuilder({ projectId, dataset })
  : null

export const urlFor = (source: SanityImageSource): string | null => {
  if (!imageBuilder) return null
  return imageBuilder.image(source).auto('format').fit('max').url() || null
}


// export const urlFor = (source: SanityImageSource, width = 800, height = 600) => {
//   if (!imageBuilder) return null;
//   return imageBuilder.image(source).width(width).height(height).auto('format').url() || null;
// };
