import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Audit Defense - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'Audit Defense',
    subtitle: 'Survive Any Software Audit',
    description: 'Proactive audit preparation and defense strategies',
  });
}
