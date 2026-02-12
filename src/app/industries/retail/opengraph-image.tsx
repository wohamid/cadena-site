import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Retail SAM - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'Retail SAM',
    subtitle: 'Streamline Multi-Location Software',
    description: 'Expert SAM for retail chains and e-commerce platforms',
  });
}
