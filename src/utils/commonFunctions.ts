function resolveImagePath(image: string): string {
  return image.startsWith('http') ? image : new URL('../assets/' + image, import.meta.url).href
}

export { resolveImagePath }
