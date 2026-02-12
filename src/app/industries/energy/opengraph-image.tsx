import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Energy & Utilities SAM - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'Energy & Utilities SAM',
    subtitle: 'Critical Infrastructure Software Management',
    description: 'Expert SAM for energy companies and utility providers',
  });
}
