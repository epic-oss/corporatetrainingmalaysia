export function getCurrentYear(): number {
  return new Date().getFullYear()
}

export function processTemplateVariables(text: string): string {
  const currentYear = getCurrentYear()
  // Support both {{year}} and {{currentYear}} patterns
  return text
    .replace(/\{\{year\}\}/g, currentYear.toString())
    .replace(/\{\{currentYear\}\}/g, currentYear.toString())
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2 $3')
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function capitalizeWords(text: string): string {
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
