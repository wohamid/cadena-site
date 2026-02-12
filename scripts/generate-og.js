const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
  const width = 1200;
  const height = 630;
  
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#004040');
  gradient.addColorStop(1, '#002828');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Load and draw logo
  try {
    const logoPath = path.join(__dirname, '../public/images/logo-white.png');
    const logo = await loadImage(logoPath);
    ctx.drawImage(logo, 80, 60, 200, 50);
  } catch (e) {
    // Draw text fallback if logo fails
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px system-ui, sans-serif';
    ctx.fillText('Cadena', 80, 95);
  }
  
  // Main title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 56px system-ui, sans-serif';
  ctx.fillText('ServiceNow SAM Pro', 80, 280);
  
  // Accent text
  ctx.fillStyle = '#ccff00';
  ctx.font = 'bold 56px system-ui, sans-serif';
  ctx.fillText('Experts', 80, 350);
  
  // Subtitle
  ctx.fillStyle = '#a0a0a0';
  ctx.font = '28px system-ui, sans-serif';
  ctx.fillText('Implementations • Migrations • Audit Defense • AI Governance', 80, 420);
  
  // ServiceNow Partner badge
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.roundRect(80, 520, 220, 50, 8);
  ctx.fill();
  
  ctx.fillStyle = '#ccff00';
  ctx.font = '600 18px system-ui, sans-serif';
  ctx.fillText('ServiceNow Partner', 100, 552);
  
  // URL
  ctx.fillStyle = '#666666';
  ctx.font = '24px system-ui, sans-serif';
  ctx.fillText('cadena.co', 1020, 552);
  
  // Save to public folder
  const outputPath = path.join(__dirname, '../public/og-image.png');
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  
  console.log('OG image generated:', outputPath);
}

generateOGImage().catch(console.error);
