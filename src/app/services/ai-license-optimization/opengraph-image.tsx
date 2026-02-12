import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'AI License Optimization - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'AI License Optimization',
    subtitle: 'Maximize ROI on Software Spend',
    description: 'AI-powered license optimization and cost reduction',
  });
}
