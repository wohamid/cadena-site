import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'SAM Pro Implementation - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'SAM Pro Implementation',
    subtitle: 'Built Right From Day One',
    description: 'Full lifecycle SAM Pro implementation by career practitioners',
  });
}
