import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'AI Software Asset Management - Cadena';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'AI Software Asset Management',
    subtitle: 'Put Your SAM on Autopilot',
    description: 'Leverage ServiceNow AI to automate your SAM program',
  });
}
