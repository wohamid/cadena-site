import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Cadena - ServiceNow SAM Pro Experts';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
        {/* Top: Logo area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              background: '#ccff00',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                stroke="#004040"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                stroke="#004040"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span style={{ color: 'white', fontSize: '32px', fontWeight: 700 }}>
            Cadena
          </span>
        </div>

        {/* Middle: Main text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
          <h1
            style={{
              color: 'white',
              fontSize: '64px',
              fontWeight: 700,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            ServiceNow SAM Pro
            <span style={{ color: '#ccff00' }}> Experts</span>
          </h1>
          <p
            style={{
              color: '#a0a0a0',
              fontSize: '28px',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Implementations • Migrations • Audit Defense • AI Governance
          </p>
        </div>

        {/* Bottom: ServiceNow Partner badge + URL */}
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
            <span style={{ color: '#ccff00', fontSize: '18px', fontWeight: 600 }}>
              ServiceNow Partner
            </span>
          </div>
          <span style={{ color: '#666', fontSize: '24px' }}>cadena.co</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
