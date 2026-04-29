const vscode = require('vscode');

class CatViewProvider {
  constructor(context) {
    this._context = context;
  }

  resolveWebviewView(webviewView) {
    webviewView.webview.options = { enableScripts: true };
    webviewView.webview.html = getWebviewContent();
  }
}

function activate(context) {
  const provider = new CatViewProvider(context);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider('catbuddy.catView', provider)
  );
}

function deactivate() {}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px 8px;
      font-family: var(--vscode-font-family);
      color: var(--vscode-foreground);
    }
    .cat-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
    .cat-name {
      font-size: 11px;
      opacity: 0.6;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    svg.cat {
      width: 100px;
      height: 100px;
      overflow: visible;
    }
  </style>
</head>
<body>
  <div class="cat-container">
    <svg class="cat" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Tail -->
      <path d="M 62 80 Q 90 85 88 68 Q 86 55 75 58"
            stroke="#c0853a" stroke-width="5" fill="none" stroke-linecap="round"/>
      <!-- Body -->
      <ellipse cx="50" cy="72" rx="22" ry="18" fill="#e8a44a"/>
      <!-- Head -->
      <circle cx="50" cy="45" r="20" fill="#e8a44a"/>
      <!-- Left ear -->
      <polygon points="33,30 28,12 42,26" fill="#e8a44a"/>
      <polygon points="34,28 30,16 40,26" fill="#f5c0a0"/>
      <!-- Right ear -->
      <polygon points="67,30 72,12 58,26" fill="#e8a44a"/>
      <polygon points="66,28 70,16 60,26" fill="#f5c0a0"/>
      <!-- Eyes -->
      <ellipse cx="43" cy="44" rx="4" ry="4.5" fill="#2a2a2a"/>
      <ellipse cx="57" cy="44" rx="4" ry="4.5" fill="#2a2a2a"/>
      <!-- Eye shine -->
      <circle cx="44.5" cy="42.5" r="1.2" fill="white"/>
      <circle cx="58.5" cy="42.5" r="1.2" fill="white"/>
      <!-- Nose -->
      <polygon points="50,50 48,53 52,53" fill="#e07090"/>
      <!-- Mouth -->
      <path d="M 48,53 Q 46,56 44,54"
            stroke="#c05070" stroke-width="1" fill="none" stroke-linecap="round"/>
      <path d="M 52,53 Q 54,56 56,54"
            stroke="#c05070" stroke-width="1" fill="none" stroke-linecap="round"/>
      <!-- Whiskers left -->
      <line x1="44" y1="51" x2="26" y2="49" stroke="#c0853a" stroke-width="0.8" opacity="0.7"/>
      <line x1="44" y1="53" x2="26" y2="54" stroke="#c0853a" stroke-width="0.8" opacity="0.7"/>
      <!-- Whiskers right -->
      <line x1="56" y1="51" x2="74" y2="49" stroke="#c0853a" stroke-width="0.8" opacity="0.7"/>
      <line x1="56" y1="53" x2="74" y2="54" stroke="#c0853a" stroke-width="0.8" opacity="0.7"/>
      <!-- Paws -->
      <ellipse cx="40" cy="88" rx="7" ry="5" fill="#d4933e"/>
      <ellipse cx="60" cy="88" rx="7" ry="5" fill="#d4933e"/>
    </svg>
    <div class="cat-name">Whiskers</div>
  </div>
</body>
</html>`;
}

module.exports = { activate, deactivate };
 