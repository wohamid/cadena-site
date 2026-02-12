import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Banking & Finance SAM - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'Banking & Finance SAM',
    subtitle: 'Compliance-Ready Software Asset Management',
    description: 'Expert SAM for financial services and banking institutions',
  });
}
