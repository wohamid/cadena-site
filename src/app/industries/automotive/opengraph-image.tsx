import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Automotive SAM - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'Automotive SAM',
    subtitle: 'Drive Software Compliance Forward',
    description: 'Expert SAM for automotive manufacturers and suppliers',
  });
}
