import { execSync, spawn } from 'node:child_process';
import { rmSync } from 'node:fs';

function run(cmd) {
  try {
    return execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'] }).toString().trim();
  } catch (e) {
    return '';
  }
}

function killPort(port) {
  // macOS/Linux: list PIDs listening on a port
  const outA = run(`lsof -tiTCP:${port} -sTCP:LISTEN`);
  const outB = run(`lsof -ti :${port}`);
  const out = [outA, outB].filter(Boolean).join('\n');
  if (!out) return;
  const pids = Array.from(
    new Set(out.split('\n').map((s) => s.trim()).filter(Boolean)),
  );
  for (const pid of pids) {
    try {
      // Use OS kill to avoid Node permission edge cases.
      run(`kill -9 ${pid}`);
    } catch {
      // ignore
    }
  }
}

// Kill a wider range since Next may have hopped ports previously.
for (let port = 3000; port <= 3020; port++) killPort(port);

// Extra safety: kill common Next dev processes that may not show up by port.
run(`pkill -f "next dev" || true`);
run(`pkill -f "node.*next" || true`);

try {
  rmSync('.next', { recursive: true, force: true });
} catch {
  // ignore
}

function isPortFree(port) {
  // If lsof returns anything, something owns the port.
  const out = run(`lsof -tiTCP:${port} -sTCP:LISTEN`);
  return !out;
}

function pickPort(start, end) {
  for (let port = start; port <= end; port++) {
    if (isPortFree(port)) return port;
  }
  return start;
}

const port = pickPort(3000, 3020);
if (port !== 3000) {
  // eslint-disable-next-line no-console
  console.log(`⚠️  Port 3000 busy. Starting dev server on ${port} instead.`);
}

// Start a single fixed-port dev server so you don't chase ports.
const child = spawn(
  'npx',
  ['next', 'dev', '-p', String(port)],
  {
    stdio: 'inherit',
    env: { ...process.env, WATCHPACK_POLLING: 'true' },
    shell: process.platform === 'win32',
  },
);
child.on('exit', (code) => process.exit(code ?? 0));

