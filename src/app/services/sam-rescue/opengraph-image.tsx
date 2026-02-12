import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'SAM Rescue - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'SAM Rescue',
    subtitle: 'Fix Your Failed Implementation',
    description: 'Turn your struggling SAM program into a strategic asset',
  });
}
