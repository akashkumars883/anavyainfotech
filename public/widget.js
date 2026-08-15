(function () {
  if (window.__ANAVYA_AI_WIDGET_LOADED__) return;
  window.__ANAVYA_AI_WIDGET_LOADED__ = true;

  // Extract siteId from script tag
  var scriptTag = document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();
  var siteId = scriptTag ? (scriptTag.getAttribute('data-site-id') || 'demo') : 'demo';
  var apiBase = scriptTag ? (scriptTag.src ? new URL(scriptTag.src).origin : '') : '';
  if (!apiBase || apiBase.includes('file://')) {
    apiBase = window.location.origin;
  }

  // Create Container & Attach Shadow DOM to prevent host site CSS collision
  var container = document.createElement('div');
  container.id = 'anavya-ai-widget-root';
  document.body.appendChild(container);

  var shadow = container.attachShadow({ mode: 'open' });

  // Styles inside Shadow DOM
  var style = document.createElement('style');
  style.textContent = `
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    .widget-bubble {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #1d4ed8;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 25px -5px rgba(29, 78, 216, 0.4);
      cursor: pointer;
      z-index: 999999;
      transition: transform 0.3s ease, background-color 0.2s ease;
    }
    .widget-bubble:hover { transform: scale(1.08); background: #1e40af; }
    .widget-bubble svg { width: 26px; height: 26px; fill: currentColor; }

    .widget-window {
      position: fixed;
      bottom: 92px;
      right: 24px;
      width: 380px;
      max-width: calc(100vw - 32px);
      height: 540px;
      max-height: calc(100vh - 120px);
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.2);
      border: 1px solid #e4e4e7;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      z-index: 999999;
      opacity: 0;
      transform: translateY(20px) scale(0.95);
      pointer-events: none;
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    .widget-window.open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }

    .widget-header {
      background: #09090b;
      color: #ffffff;
      padding: 16px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #27272a;
    }
    .widget-header-title { font-size: 14px; font-weight: 700; letter-spacing: -0.01em; display: flex; align-items: center; gap: 8px; }
    .widget-header-badge { font-size: 10px; text-transform: uppercase; background: #1d4ed8; color: #fff; padding: 2px 8px; border-radius: 4px; font-weight: 800; }
    .widget-close { background: none; border: none; color: #a1a1aa; cursor: pointer; padding: 4px; font-size: 18px; line-height: 1; }
    .widget-close:hover { color: #ffffff; }

    .widget-messages {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: #fafafa;
    }
    .message {
      max-width: 90%;
      padding: 12px 14px;
      border-radius: 8px;
      font-size: 13px;
      line-height: 1.6;
      word-break: break-word;
    }
    .message.bot {
      align-self: flex-start;
      background: #ffffff;
      color: #18181b;
      border: 1px solid #e4e4e7;
    }
    .message.user {
      align-self: flex-end;
      background: #1d4ed8;
      color: #ffffff;
    }
    .message strong { font-weight: 700; color: inherit; }
    .message br { display: block; content: ""; margin-top: 4px; }

    .widget-footer {
      padding: 12px 16px;
      background: #ffffff;
      border-top: 1px solid #e4e4e7;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .widget-input {
      flex: 1;
      border: 1px solid #e4e4e7;
      border-radius: 6px;
      padding: 10px 12px;
      font-size: 13px;
      outline: none;
      background: #f4f4f5;
      color: #18181b;
    }
    .widget-input:focus { border-color: #1d4ed8; background: #ffffff; }
    .widget-send {
      background: #1d4ed8;
      color: #ffffff;
      border: none;
      border-radius: 6px;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-shrink: 0;
    }
    .widget-send:hover { background: #1e40af; }
    .widget-send svg { width: 16px; height: 16px; fill: currentColor; }

    .widget-branding {
      text-align: center;
      font-size: 10px;
      color: #a1a1aa;
      padding: 6px;
      background: #ffffff;
      border-top: 1px solid #f4f4f5;
    }
    .widget-branding a { color: #1d4ed8; text-decoration: none; font-weight: 600; }
  `;
  shadow.appendChild(style);

  // Floating Chat Bubble HTML
  var bubble = document.createElement('div');
  bubble.className = 'widget-bubble';
  bubble.innerHTML = `<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>`;

  // Chat Window HTML
  var windowEl = document.createElement('div');
  windowEl.className = 'widget-window';
  windowEl.innerHTML = `
    <div class="widget-header">
      <div class="widget-header-title">
        <span>Anavya AI Assistant</span>
        <span class="widget-header-badge">Online</span>
      </div>
      <button class="widget-close">&times;</button>
    </div>
    <div class="widget-messages" id="widget-messages-list">
      <div class="message bot">Hello! I am your AI assistant. Ask me anything about our services, SEO pricing, or software development offerings!</div>
    </div>
    <div class="widget-footer">
      <input type="text" class="widget-input" id="widget-input-field" placeholder="Ask about pricing, services..." />
      <button class="widget-send" id="widget-send-btn">
        <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
      </button>
    </div>
    <div class="widget-branding">Powered by <a href="https://anavyainfotech.com" target="_blank">Anavya AI</a></div>
  `;

  shadow.appendChild(bubble);
  shadow.appendChild(windowEl);

  // Interactivity Logic
  var isOpen = false;
  bubble.addEventListener('click', function() {
    isOpen = !isOpen;
    if (isOpen) {
      windowEl.classList.add('open');
      shadow.getElementById('widget-input-field').focus();
    } else {
      windowEl.classList.remove('open');
    }
  });

  shadow.querySelector('.widget-close').addEventListener('click', function() {
    isOpen = false;
    windowEl.classList.remove('open');
  });

  var messagesList = shadow.getElementById('widget-messages-list');
  var inputField = shadow.getElementById('widget-input-field');
  var sendBtn = shadow.getElementById('widget-send-btn');

  function formatTextToHtml(text) {
    if (!text) return "";
    var formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\n/g, '<br/>');
    return formatted;
  }

  function appendMessage(text, sender) {
    var msg = document.createElement('div');
    msg.className = 'message ' + sender;
    msg.innerHTML = formatTextToHtml(text);
    messagesList.appendChild(msg);
    messagesList.scrollTop = messagesList.scrollHeight;
  }

  function handleSend() {
    var query = inputField.value.trim();
    if (!query) return;

    appendMessage(query, 'user');
    inputField.value = '';

    // Typing indicator placeholder
    var botMsg = document.createElement('div');
    botMsg.className = 'message bot';
    botMsg.innerHTML = 'Thinking...';
    messagesList.appendChild(botMsg);
    messagesList.scrollTop = messagesList.scrollHeight;

    // Send API Query
    fetch(apiBase + '/api/widget/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ siteId: siteId, message: query }),
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      botMsg.innerHTML = formatTextToHtml(data.response || 'Thank you for your inquiry!');
      messagesList.scrollTop = messagesList.scrollHeight;
    })
    .catch(function(err) {
      botMsg.innerHTML = 'Sorry, I am having trouble connecting right now.';
      messagesList.scrollTop = messagesList.scrollHeight;
    });
  }

  sendBtn.addEventListener('click', handleSend);
  inputField.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') handleSend();
  });
})();
