import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Insurance SAM - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'Insurance SAM',
    subtitle: 'Mitigate Software License Risk',
    description: 'Expert SAM for insurance companies and underwriters',
  });
}
