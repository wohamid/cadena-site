import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Healthcare SAM - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'Healthcare SAM',
    subtitle: 'HIPAA-Compliant Software Asset Management',
    description: 'Expert SAM for healthcare organizations and medical systems',
  });
}
