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
  if (!apiBase || apiBase.includes('file://') || (window.location.hostname === 'localhost' && apiBase.includes('anavyainfotech.com'))) {
    apiBase = window.location.origin;
  }

  function initWidget() {
    if (document.getElementById('anavya-ai-widget-root')) return;

    // Create Container & Attach Shadow DOM to prevent host site CSS collision
    var container = document.createElement('div');
    container.id = 'anavya-ai-widget-root';
    document.body.appendChild(container);

  var shadow = container.attachShadow({ mode: 'open' });

  // Styles inside Shadow DOM (Modern Enterprise Glassmorphism UI)
  var style = document.createElement('style');
  style.textContent = `
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    
    /* Floating Action Bubble */
    .widget-bubble {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 12px 28px -6px rgba(29, 78, 216, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.15) inset;
      cursor: pointer;
      z-index: 999999;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .widget-bubble:hover {
      transform: scale(1.1) rotate(4deg);
      box-shadow: 0 16px 32px -4px rgba(29, 78, 216, 0.6), 0 0 0 2px rgba(255, 255, 255, 0.3) inset;
    }
    .widget-bubble svg { width: 28px; height: 28px; fill: currentColor; }

    /* Backdrop Overlay */
    .widget-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(9, 9, 11, 0.4);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 999998;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }
    .widget-backdrop.open {
      opacity: 1;
      pointer-events: all;
    }

    /* Main Chat Window Container */
    .widget-window {
      position: fixed;
      bottom: 100px;
      right: 28px;
      width: 390px;
      max-width: calc(100vw - 32px);
      height: 580px;
      max-height: calc(100vh - 120px);
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(0, 0, 0, 0.06);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      z-index: 999999;
      opacity: 0;
      transform: translateY(24px) scale(0.95);
      pointer-events: none;
      transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .widget-window.open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }

    @media (max-width: 640px) {
      .widget-window {
        bottom: auto;
        right: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -45%) scale(0.95);
        width: calc(100vw - 24px);
        height: calc(100vh - 60px);
        max-height: 600px;
        border-radius: 16px;
      }
      .widget-window.open {
        transform: translate(-50%, -50%) scale(1);
      }
    }

    /* Premium Header Bar */
    .widget-header {
      background: #09090b;
      color: #ffffff;
      padding: 16px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
    }
    .widget-header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .widget-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1d4ed8, #3b82f6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: 700;
      font-size: 14px;
      box-shadow: 0 0 12px rgba(29, 78, 216, 0.5);
      position: relative;
    }
    .widget-avatar-status {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      background: #22c55e;
      border: 2px solid #09090b;
      border-radius: 50%;
    }
    .widget-header-info { display: flex; flex-direction: column; gap: 2px; }
    .widget-header-title { font-size: 14px; font-weight: 700; color: #ffffff; letter-spacing: -0.01em; }
    .widget-header-subtitle { font-size: 11px; color: #a1a1aa; display: flex; align-items: center; gap: 5px; }
    .widget-pulse-dot { width: 6px; height: 6px; background: #22c55e; border-radius: 50%; display: inline-block; animate: pulse 2s infinite; }

    .widget-close {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: #a1a1aa;
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      transition: all 0.2s ease;
    }
    .widget-close:hover { background: rgba(255, 255, 255, 0.2); color: #ffffff; transform: rotate(90deg); }

    /* Messages Area */
    .widget-messages {
      flex: 1;
      padding: 20px 16px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 14px;
      background: #f8fafc;
      scroll-behavior: smooth;
    }
    .widget-messages::-webkit-scrollbar { width: 4px; }
    .widget-messages::-webkit-scrollbar-track { background: transparent; }
    .widget-messages::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }

    /* Message Bubbles */
    .message {
      max-width: 85%;
      padding: 12px 16px;
      border-radius: 14px;
      font-size: 13px;
      line-height: 1.55;
      word-break: break-word;
      animation: msgPop 0.25s ease-out forwards;
    }
    @keyframes msgPop {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .message.bot {
      align-self: flex-start;
      background: #ffffff;
      color: #0f172a;
      border: 1px solid #e2e8f0;
      border-top-left-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }
    .message.user {
      align-self: flex-end;
      background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
      color: #ffffff;
      border-top-right-radius: 4px;
      box-shadow: 0 4px 12px rgba(29, 78, 216, 0.25);
    }
    .message strong { font-weight: 700; color: inherit; }

    /* Footer Input Area */
    .widget-footer {
      padding: 14px 16px;
      background: #ffffff;
      border-top: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .widget-input {
      flex: 1;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 11px 16px;
      font-size: 13px;
      outline: none;
      background: #f8fafc;
      color: #0f172a;
      transition: all 0.2s ease;
    }
    .widget-input:focus { border-color: #1d4ed8; background: #ffffff; box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.12); }
    .widget-send {
      background: linear-gradient(135deg, #1d4ed8, #1e40af);
      color: #ffffff;
      border: none;
      border-radius: 10px;
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-shrink: 0;
      transition: all 0.2s ease;
      box-shadow: 0 4px 12px rgba(29, 78, 216, 0.3);
    }
    .widget-send:hover { transform: scale(1.05); background: linear-gradient(135deg, #1e40af, #1d4ed8); }
    .widget-send svg { width: 18px; height: 18px; fill: currentColor; }

    /* Footer Branding */
    .widget-branding {
      text-align: center;
      font-size: 10.5px;
      color: #94a3b8;
      padding: 8px;
      background: #ffffff;
      border-top: 1px solid #f1f5f9;
      letter-spacing: 0.02em;
    }
    .widget-branding a { color: #1d4ed8; text-decoration: none; font-weight: 700; }
  `;
  shadow.appendChild(style);

  // Floating Action Bubble HTML
  var bubble = document.createElement('div');
  bubble.className = 'widget-bubble';
  bubble.innerHTML = `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`;

  // Chat Window HTML
  var windowEl = document.createElement('div');
  windowEl.className = 'widget-window';
  windowEl.innerHTML = `
    <div class="widget-header">
      <div class="widget-header-left">
        <div class="widget-avatar">
          AI
          <span class="widget-avatar-status"></span>
        </div>
        <div class="widget-header-info">
          <div class="widget-header-title">Anavya AI Assistant</div>
          <div class="widget-header-subtitle">Online</div>
        </div>
      </div>
      <button class="widget-close">&times;</button>
    </div>
    <div class="widget-messages" id="widget-messages-list"></div>
    <div class="widget-footer">
      <input type="text" class="widget-input" id="widget-input-field" placeholder="Ask a question..." />
      <button class="widget-send" id="widget-send-btn">
        <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
      </button>
    </div>
    <div class="widget-branding">Powered by <a href="https://www.anavyainfotech.com" target="_blank">Anavya Infotech</a></div>
  `;

  // Backdrop Overlay Element
  var backdropEl = document.createElement('div');
  backdropEl.className = 'widget-backdrop';

  shadow.appendChild(backdropEl);
  shadow.appendChild(bubble);
  shadow.appendChild(windowEl);

  // Lead Conversational State Management
  var savedLeadName = "";
  var savedLeadContact = "";
  var tempLeadName = "";
  var chatHistory = [];
  try {
    savedLeadName = localStorage.getItem('__anavya_lead_name_' + siteId) || "";
    savedLeadContact = localStorage.getItem('__anavya_lead_contact_' + siteId) || "";
  } catch (e) {}

  // Lead State: 'ASK_NAME', 'ASK_CONTACT', 'COMPLETED'
  var leadState = (savedLeadName && savedLeadContact) ? 'COMPLETED' : 'ASK_NAME';
  var tempLeadName = savedLeadName;

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

  // Dynamic custom styling per tenant siteId
  var customBotName = "Alex AI Assistant";
  var customPrimaryColor = "#1d4ed8";
  var customWelcomeMsg = "Hello! How can I assist you with our services today?";

  try {
    var storedName = localStorage.getItem('__watsonx_bot_name_' + siteId);
    var storedWelcome = localStorage.getItem('__watsonx_bot_welcome_' + siteId);
    var storedColor = localStorage.getItem('__watsonx_bot_color_' + siteId);
    if (storedName) customBotName = storedName;
    if (storedWelcome) customWelcomeMsg = storedWelcome;
    if (storedColor) customPrimaryColor = storedColor;
  } catch (e) {}

  // Apply custom branding color dynamically to bubble, send button, header avatar & badge
  var dynamicCss = document.createElement('style');
  dynamicCss.textContent = `
    .widget-bubble { background-color: ${customPrimaryColor} !important; }
    .widget-bubble:hover { filter: brightness(0.9); }
    .message.user { background-color: ${customPrimaryColor} !important; }
    .widget-send { background-color: ${customPrimaryColor} !important; }
    .widget-header-badge { background-color: ${customPrimaryColor} !important; }
    .widget-avatar { background-color: ${customPrimaryColor} !important; }
  `;
  shadow.appendChild(dynamicCss);

  // Initial Bot Welcome Message based on lead state & tenant custom settings
  function initGreeting() {
    messagesList.innerHTML = '';
    
    // Update Header Bot Title & Avatar
    var titleEl = shadow.querySelector('.widget-header-title');
    if (titleEl) titleEl.textContent = customBotName;

    var avatarEl = shadow.querySelector('.widget-avatar');
    if (avatarEl && customBotName) {
      var initials = customBotName.split(' ').map(function(n) { return n[0]; }).join('').substring(0, 2).toUpperCase();
      avatarEl.childNodes[0].nodeValue = initials || 'AI';
    }

    var cleanWelcome = customWelcomeMsg || "How can I assist you with our services today?";
    appendMessage(cleanWelcome, 'bot');
  }
  initGreeting();

  // Interactivity Logic
  var isOpen = false;
  function toggleWidget(show) {
    isOpen = (typeof show === 'boolean') ? show : !isOpen;
    if (isOpen) {
      windowEl.classList.add('open');
      backdropEl.classList.add('open');
      shadow.getElementById('widget-input-field').focus();
    } else {
      windowEl.classList.remove('open');
      backdropEl.classList.remove('open');
    }
  }

  bubble.addEventListener('click', function() {
    toggleWidget();
  });

  backdropEl.addEventListener('click', function() {
    toggleWidget(false);
  });

  shadow.querySelector('.widget-close').addEventListener('click', function() {
    toggleWidget(false);
  });

  function handleSend() {
    var query = inputField.value.trim();
    if (!query) return;

    appendMessage(query, 'user');
    inputField.value = '';

    // Phone / Email Regex Auto-Detection
    var emailMatch = query.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    var phoneMatch = query.match(/(\+?\d{1,4}[\s-]?)?\(?\d{3,5}\)?[\s-]?\d{3,5}[\s-]?\d{3,5}/);
    var detectedContact = (emailMatch ? emailMatch[0] : (phoneMatch && phoneMatch[0].length >= 8 ? phoneMatch[0] : ""));

    if (detectedContact && detectedContact !== savedLeadContact) {
      savedLeadContact = detectedContact;
      var leadName = tempLeadName || savedLeadName || "Website Visitor";
      try {
        localStorage.setItem('__anavya_lead_contact_' + siteId, detectedContact);
        if (tempLeadName) localStorage.setItem('__anavya_lead_name_' + siteId, tempLeadName);
      } catch (e) {}

      fetch(apiBase + '/api/widget/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: leadName, phoneEmail: detectedContact, siteId: siteId }),
      }).catch(function() {});
    }

    // CONVERSATIONAL LEAD STEP 1: Ask for Name
    if (leadState === 'ASK_NAME') {
      tempLeadName = query;
      try {
        localStorage.setItem('__anavya_lead_name_' + siteId, tempLeadName);
      } catch (e) {}
      leadState = 'ASK_CONTACT';

      setTimeout(function() {
        appendMessage('Nice to meet you, ' + tempLeadName + '! What is your phone number or email address so we can connect with you?', 'bot');
      }, 400);
      return;
    }

    // CONVERSATIONAL LEAD STEP 2: Ask for Contact (Validate if Email or Phone)
    if (leadState === 'ASK_CONTACT') {
      var isEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(query);
      var isPhone = /(\+?\d{1,4}[\s-]?)?\(?\d{3,5}\)?[\s-]?\d{3,5}[\s-]?\d{3,5}/.test(query) && query.replace(/[^0-9]/g, "").length >= 7;

      if (!isEmail && !isPhone) {
        setTimeout(function() {
          appendMessage('Please enter a valid email address (e.g. name@company.com) or phone number so we can reach you.', 'bot');
        }, 300);
        return;
      }

      var contactVal = query;
      try {
        localStorage.setItem('__anavya_lead_contact_' + siteId, contactVal);
      } catch (e) {}
      leadState = 'COMPLETED';

      // Save lead to backend API
      fetch(apiBase + '/api/widget/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: tempLeadName, phoneEmail: contactVal, siteId: siteId }),
      }).catch(function() {});

      setTimeout(function() {
        appendMessage('Thank you, ' + tempLeadName + '! I have noted your contact details (' + contactVal + '). How can I assist you with our services today?', 'bot');
      }, 400);
      return;
    }

    // CONVERSATIONAL LEAD COMPLETED: Perform Normal AI Chat Query
    var botMsg = document.createElement('div');
    botMsg.className = 'message bot';
    botMsg.innerHTML = 'Thinking...';
    messagesList.appendChild(botMsg);
    messagesList.scrollTop = messagesList.scrollHeight;

    // Send API Query with Conversation History and Lead Context
    chatHistory.push({ role: 'user', content: query });

    fetch(apiBase + '/api/widget/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        siteId: siteId,
        message: query,
        history: chatHistory.slice(-6),
        visitorName: tempLeadName || savedLeadName || ''
      }),
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      var botResponseText = data.response || 'Thank you for your inquiry!';
      chatHistory.push({ role: 'assistant', content: botResponseText });
      botMsg.innerHTML = formatTextToHtml(botResponseText);
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
  }

  if (typeof window !== 'undefined') {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(function() { setTimeout(initWidget, 1000); });
    } else {
      setTimeout(initWidget, 2000);
    }
  }
})();
