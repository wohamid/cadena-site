import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Flexera Migration - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'Flexera Migration',
    subtitle: 'Migrate to ServiceNow SAM Pro',
    description: 'Seamless transition from Flexera to native ServiceNow SAM',
  });
}
