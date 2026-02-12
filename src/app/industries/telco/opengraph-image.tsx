import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Telecommunications SAM - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'Telecommunications SAM',
    subtitle: 'Manage Complex Network Software',
    description: 'Expert SAM for telecom providers and network operators',
  });
}
