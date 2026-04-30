// app/utils/imageOptimization.ts

/**
 * Generate optimized image URL untuk NuxtImage
 */
export function getOptimizedImageUrl(
  path: string,
  options: {
    width?: number
    height?: number
    quality?: number
    format?: 'webp' | 'avif' | 'jpg' | 'png'
  } = {}
) {
  const {
    width,
    height,
    quality = 80,
    format = 'webp'
  } = options
  
  const params = new URLSearchParams()
  
  if (width) params.append('w', width.toString())
  if (height) params.append('h', height.toString())
  params.append('q', quality.toString())
  params.append('f', format)
  
  return `${path}?${params.toString()}`
}

/**
 * Get responsive image sizes untuk modern devices
 */
export function getResponsiveImageSizes(baseWidth: number) {
  const sizes = [320, 640, 960, 1280, 1920]
  return sizes.filter(size => size <= baseWidth)
}

/**
 * Generate srcset string untuk images
 */
export function generateSrcSet(
  path: string,
  baseWidth: number,
  options: {
    quality?: number
    format?: string
  } = {}
) {
  const sizes = getResponsiveImageSizes(baseWidth)
  
  return sizes
    .map(width => {
      const url = getOptimizedImageUrl(path, { width, ...options })
      return `${url} ${width}w`
    })
    .join(', ')
}

/**
 * Get image dimensions untuk aspect ratio preservation
 */
export const IMAGE_DIMENSIONS = {
  hero: { width: 1200, height: 800 },
  projectCover: { width: 800, height: 600 },
  blogCover: { width: 1200, height: 630 },
  thumbnail: { width: 300, height: 300 },
  gallery: { width: 600, height: 400 }
}

export function getImageDimensions(type: keyof typeof IMAGE_DIMENSIONS) {
  return IMAGE_DIMENSIONS[type]
}
