import { ImageResponse } from 'next/og';
import { getGuideBySlug, categories } from '@/lib/guides';

export const runtime = 'edge';
export const alt = 'Cadena Guide';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Base64 encoded white Cadena logo
const LOGO_BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB7IAAAElCAYAAABppa2kAAAACXBIWXMAACxKAAAsSgF3enRNAAAgAElEQVR4nOzd4XUbR9KF4Vt7/J/6IiA2AnIjIByBuBEIikB0BIIiEB2BoAhMReBhBCYjMBjBihH092MK0ggmKYAEUNU973MOj71erVFLoDEzfburrZQiAAAAAAAAAAAAAACy+Fd0AQAAAAAAAAAAAAAADBFkAwAAAAAAAAAAAABSIcgGAAAAAAAAAAAAAKRCkA0AAAAAAAAAAAAASIUgGwAAAAAAAAAAAACQCkE2AAAAAAAAAAAAACAVgmwAAAAAAAAAAAAAQCoE2QAAAAAAAAAAAACAVAiyAQAAAAAAAAAAAACpEGQDAAAAAAAAQDpmdsHMTqPrAAAAABCDIBsAAAAAAACArN5I6gizAQAAgHESZAMAAAAAAAAYqiMRZgMAAACjRJANAAAAAAAAYMgIswEAAIARIsgGAAAAAAAAMHSE2QAAAMDIEGQDAAAAAACgBYTZAAAAwIgQZAMAAAAAAKAVhNkAAADASBBkAwAAAAAAoDaE2QAAAMAIEGQDAAAAAAAAtCPITm4WXQAAYKBKKdE1AEBFkA0AAAAAAGD4Mkz6AQAAAAAAAAxAKeW267q3kv4TXQsAAAAAAACArGbRBQAAAAAAAADYq1l0AQAAAAAAAADCzaILAAAAAAAAADAMgmwAAAAAAAAAAGBQCLIBAAAAAAAAAC0iyAYAAAAAAAAAAGMmyAYAAAAAAAAAAEM2iy4AAAAAAAAAwOAIsgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAq/x9p1P/Rfy9JcAAAAABJRU5ErkJggg==';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  
  if (!guide) {
    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #004040 0%, #002828 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <span style={{ color: 'white', fontSize: '48px' }}>Guide Not Found</span>
        </div>
      ),
      { ...size }
    );
  }

  const categoryLabel = categories[guide.category]?.label || guide.category;

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #004040 0%, #002828 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top: Cadena Logo + Category */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <img
            src={LOGO_BASE64}
            alt="Cadena"
            width={180}
            height={45}
            style={{ objectFit: 'contain' }}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(204, 255, 0, 0.2)',
              padding: '8px 16px',
              borderRadius: '20px',
            }}
          >
            <span style={{ color: '#ccff00', fontSize: '16px', fontWeight: 600 }}>
              {categoryLabel}
            </span>
          </div>
        </div>

        {/* Middle: Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '1000px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#ccff00',
              fontSize: '20px',
              fontWeight: 500,
            }}
          >
            <span>📖</span>
            <span>SAM Guide</span>
          </div>
          <h1
            style={{
              color: 'white',
              fontSize: guide.title.length > 50 ? '40px' : '48px',
              fontWeight: 700,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {guide.title}
          </h1>
          <p
            style={{
              color: '#a0a0a0',
              fontSize: '22px',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.4,
              maxWidth: '900px',
            }}
          >
            {guide.description.length > 120 
              ? guide.description.substring(0, 120) + '...'
              : guide.description}
          </p>
        </div>

        {/* Bottom: Read time + URL */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255,255,255,0.1)',
              padding: '12px 20px',
              borderRadius: '8px',
            }}
          >
            <span style={{ color: 'white', fontSize: '16px' }}>
              ⏱️ {guide.readTime} read
            </span>
          </div>
          <span style={{ color: '#666', fontSize: '22px' }}>cadena.co/resources/guides</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
