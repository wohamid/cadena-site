import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Consumer Goods SAM - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'Consumer Goods SAM',
    subtitle: 'Optimize Your Software Supply Chain',
    description: 'Expert SAM for consumer goods manufacturers and retailers',
  });
}
