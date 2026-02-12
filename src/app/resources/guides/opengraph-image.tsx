import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'SAM Guides & Resources - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'SAM Guides & Resources',
    subtitle: 'Expert Insights for Software Asset Management',
    description: 'Practical guides and best practices from Cadena SAM experts',
  });
}
