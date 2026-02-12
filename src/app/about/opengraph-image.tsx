import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'About Cadena - Boutique ServiceNow SAM Consultancy';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'About Cadena',
    subtitle: 'SAM is all we do. That\'s why we\'re better at it.',
    description: 'Boutique ServiceNow consultancy specializing exclusively in Software Asset Management',
  });
}
