/**
 * Hook para lazy loading de imágenes
 */
export function useLazyImage(src: string, placeholder: string = 'https://via.placeholder.com/150'): string {
  // En una implementación real, esto usaría IntersectionObserver
  // Por ahora, retornamos la imagen directamente
  return src || placeholder;
}

/**
 * Función para optimizar imágenes
 */
export function getOptimizedImageUrl(url: string, _width?: number): string {
  // En producción, esto podría usar un servicio de optimización de imágenes
  // El parámetro width está prefijado con _ para indicar que no se usa actualmente
  return url;
}
