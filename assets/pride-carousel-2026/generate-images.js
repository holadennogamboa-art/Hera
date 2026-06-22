#!/usr/bin/env node

/**
 * Generate carousel slide images from HTML
 * Usage: node generate-images.js
 *
 * Requirements:
 * - npm install puppeteer
 *
 * This script converts HTML slides to PNG images optimized for Instagram
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const VIEWPORT = {
  width: 1080,
  height: 1920,
  deviceScaleFactor: 1
};

const slides = [
  {
    id: 1,
    filename: 'slide-1-hero.jpg',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { margin: 0; padding: 0; overflow: hidden; }
          .slide {
            width: 1080px;
            height: 1920px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(102, 126, 234, 0.5)),
                        url('./slide-1-hero.jpg') center/cover;
            background-attachment: fixed;
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
          }
          h1 {
            font-size: 44px;
            font-weight: 700;
            margin-bottom: 10px;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
          }
          p {
            font-size: 18px;
            font-weight: 300;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
          }
        </style>
      </head>
      <body>
        <div class="slide">
          <div>
            <h1>Libertad en Movimiento</h1>
            <p>La libertad no tiene un solo camino</p>
          </div>
        </div>
      </body>
      </html>
    `
  },
  {
    id: 2,
    filename: 'slide-2-flow.png',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { margin: 0; padding: 0; }
          .slide {
            width: 1080px;
            height: 1920px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
            padding: 40px;
          }
          .video-placeholder {
            width: 500px;
            height: 500px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            font-size: 80px;
          }
          h2 {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 15px;
          }
          p {
            font-size: 16px;
            font-weight: 300;
          }
        </style>
      </head>
      <body>
        <div class="slide">
          <div class="video-placeholder">▶️</div>
          <h2>Fluir sin Miedo</h2>
          <p>Movimiento, energía, libertad auténtica</p>
        </div>
      </body>
      </html>
    `
  },
  {
    id: 3,
    filename: 'slide-3-data.png',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { margin: 0; padding: 0; }
          .slide {
            width: 1080px;
            height: 1920px;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            text-align: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
            padding: 40px;
          }
          .data-box {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 30px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            width: 100%;
            max-width: 400px;
          }
          .stat {
            font-size: 48px;
            font-weight: 700;
            margin-bottom: 10px;
          }
          .stat-text {
            font-size: 16px;
            font-weight: 300;
            line-height: 1.5;
          }
          .story {
            font-size: 15px;
            line-height: 1.8;
            font-weight: 300;
            font-style: italic;
            max-width: 400px;
          }
        </style>
      </head>
      <body>
        <div class="slide">
          <div class="data-box">
            <div class="stat">1 de 4</div>
            <div class="stat-text">personas LGBTQ+ viven escondiendo su verdadero yo</div>
          </div>
          <p class="story">"Tu historia importa. Tu identidad es válida. Tu voz merece ser escuchada. Porque ser tú mismo no es un acto de rebeldía, es un acto de valentía."</p>
        </div>
      </body>
      </html>
    `
  },
  {
    id: 4,
    filename: 'slide-4-cta.png',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { margin: 0; padding: 0; }
          .slide {
            width: 1080px;
            height: 1920px;
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
            padding: 40px;
          }
          .emoji {
            font-size: 80px;
            margin-bottom: 20px;
          }
          h2 {
            font-size: 40px;
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.2;
          }
          p {
            font-size: 16px;
            font-weight: 300;
            margin-bottom: 30px;
            line-height: 1.6;
          }
          .cta-btn {
            background: white;
            color: #4facfe;
            padding: 14px 40px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 16px;
            border: none;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <div class="slide">
          <div class="emoji">📢</div>
          <h2>¿Cuál es tu historia?</h2>
          <p>Comparte tu verdad. Inspira otros. Crea comunidad.</p>
          <button class="cta-btn">Ir al Link Bio</button>
        </div>
      </body>
      </html>
    `
  },
  {
    id: 5,
    filename: 'slide-5-manifesto.png',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { margin: 0; padding: 0; }
          .slide {
            width: 1080px;
            height: 1920px;
            background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            text-align: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
            padding: 40px;
          }
          h2 {
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 30px;
            line-height: 1.3;
          }
          .quote-mark {
            font-size: 60px;
            margin-bottom: 10px;
            opacity: 0.8;
          }
          .quote {
            font-size: 18px;
            font-weight: 400;
            line-height: 1.8;
            margin-bottom: 30px;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
          }
          .author {
            font-size: 14px;
            font-weight: 600;
            opacity: 0.9;
          }
        </style>
      </head>
      <body>
        <div class="slide">
          <h2>Orgullo es Libertad</h2>
          <div class="quote-mark">"</div>
          <div class="quote">El orgullo no es un mes. Es cada día eligiendo ser libre, auténtico y verdaderamente tú mismo, sin disculpas.</div>
          <div class="author">— Hera Community</div>
        </div>
      </body>
      </html>
    `
  },
  {
    id: 6,
    filename: 'slide-6-closing.png',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { margin: 0; padding: 0; }
          .slide {
            width: 1080px;
            height: 1920px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            text-align: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
            padding: 40px;
          }
          .rainbow {
            font-size: 60px;
            margin-bottom: 20px;
          }
          h2 {
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.3;
          }
          .hashtags {
            font-size: 16px;
            font-weight: 600;
            margin: 30px 0;
            line-height: 2;
            letter-spacing: 0.5px;
          }
          p {
            font-size: 14px;
            font-weight: 300;
            opacity: 0.95;
          }
        </style>
      </head>
      <body>
        <div class="slide">
          <div class="rainbow">🌈</div>
          <h2>Únete al Movimiento</h2>
          <div class="hashtags">
            #OrguloLGBTQ+<br>
            #HeraPride2026<br>
            #LibertadEnMovimiento
          </div>
          <p>Síguenos y sé parte de la comunidad</p>
        </div>
      </body>
      </html>
    `
  }
];

async function generateImages() {
  console.log('🎨 Iniciando generación de imágenes del carrusel...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const slide of slides) {
    try {
      console.log(`📸 Generando Slide ${slide.id}: ${slide.filename}...`);

      const page = await browser.newPage();
      await page.setViewport(VIEWPORT);
      await page.setContent(slide.html);

      const outputPath = path.join(__dirname, slide.filename);
      const extension = slide.filename.split('.').pop().toLowerCase();

      await page.screenshot({
        path: outputPath,
        type: extension === 'jpg' ? 'jpeg' : 'png',
        quality: extension === 'jpg' ? 95 : undefined
      });

      const fileSize = (fs.statSync(outputPath).size / 1024).toFixed(2);
      console.log(`✅ Slide ${slide.id} generado: ${slide.filename} (${fileSize} KB)\n`);

      await page.close();
    } catch (error) {
      console.error(`❌ Error generando slide ${slide.id}:`, error.message);
    }
  }

  await browser.close();
  console.log('🎉 ¡Carrusel completado! Todos los slides han sido generados.');
  console.log('\n📋 Próximos pasos:');
  console.log('1. Verifica que todas las imágenes se generaron correctamente');
  console.log('2. Abre "INSTAGRAM-GUIDE.md" para instrucciones de publicación');
  console.log('3. Sube las imágenes a Instagram en orden (slide-1 a slide-6)');
}

generateImages().catch(console.error);
