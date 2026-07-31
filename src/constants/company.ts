export const company = {
  name: "Maucco",
  fullName: "Maucco Consultoria e Assessoria Ambiental",
  phone: "5592981651939",
  phoneLabel: "+55 (92) 98165-1939",
  email: "contato@maucco.com",
  instagram: "@mauccobr",
  address: "Manaus, Amazonas",
} as const;

export function createWhatsappUrl(message: string) {
  return `https://wa.me/${company.phone}?text=${encodeURIComponent(message)}`;
}
