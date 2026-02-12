import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Defense & Government SAM - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'Defense & Government SAM',
    subtitle: 'FedRAMP-Ready Software Asset Management',
    description: 'Expert SAM for defense contractors and government agencies',
  });
}
