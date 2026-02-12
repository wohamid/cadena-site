import { generateOGImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Cadena SAM Services';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOGImage({
    title: 'SAM Services',
    subtitle: 'Expert ServiceNow SAM Pro Implementation',
    description: 'Implementations • Migrations • Rescue • Audit Defense • AI Optimization',
  });
}
