import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Technology SAM - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'Technology SAM',
    subtitle: 'Scale Your Software Asset Management',
    description: 'Expert SAM for technology companies and software vendors',
  });
}
