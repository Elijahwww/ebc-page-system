const { chromium } = require('playwright');
(async () => {
  const [,, shot, w, h, out] = process.argv;
  const b = await chromium.launch({ args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: +w, height: +h } });
  p.on('console', m => console.log('console:', m.text()));
  p.on('pageerror', e => console.log('err:', e.message));
  await p.goto(`http://127.0.0.1:8765/scene.html?shot=${shot}&w=${w}&h=${h}`);
  await p.waitForFunction(() => window.__done, null, { timeout: 120000 });
  await p.waitForTimeout(500);
  await p.screenshot({ path: out });
  await b.close();
})();
