import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Life Sciences SAM - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'Life Sciences SAM',
    subtitle: 'FDA-Compliant Software Management',
    description: 'Expert SAM for pharmaceutical and biotech companies',
  });
}
