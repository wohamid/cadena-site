import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Industries We Serve - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'Industries We Serve',
    subtitle: 'SAM Expertise Across Sectors',
    description: 'Deep expertise in regulated and complex industries where SAM isn\'t optional',
  });
}
