import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Cadena - ServiceNow SAM Pro Experts';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'ServiceNow SAM Pro Experts',
    subtitle: 'Implementations • Migrations • Audit Defense',
    description: 'Boutique consultancy specializing exclusively in Software Asset Management',
  });
}
