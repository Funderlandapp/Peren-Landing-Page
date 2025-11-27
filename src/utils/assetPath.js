export const assetPath = (path = '') => {
  if (!path) return path
  const cleanedPath = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${cleanedPath}`
}

