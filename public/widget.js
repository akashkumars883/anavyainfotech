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
    container.setAttribute('data-lenis-prevent', 'true');
    document.body.appendChild(container);

  var shadow = container.attachShadow({ mode: 'open' });

  // Styles inside Shadow DOM (Modern Enterprise Glassmorphic Blue & White UI)
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
      transform: scale(1.08) rotate(4deg);
      box-shadow: 0 16px 32px -4px rgba(29, 78, 216, 0.6), 0 0 0 2px rgba(255, 255, 255, 0.3) inset;
    }
    .widget-bubble svg { width: 28px; height: 28px; fill: currentColor; }

    /* Unread Red Notification Badge */
    .widget-unread-badge {
      position: absolute;
      top: -2px;
      right: -2px;
      background: #ef4444;
      color: #ffffff;
      font-size: 11px;
      font-weight: 800;
      width: 21px;
      height: 21px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #ffffff;
      box-shadow: 0 3px 8px rgba(239, 68, 68, 0.5);
      animation: badgePulse 2s infinite;
    }
    @keyframes badgePulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
    }

    /* Backdrop Overlay */
    .widget-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(9, 9, 11, 0.35);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      z-index: 999998;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }
    .widget-backdrop.open {
      opacity: 1;
      pointer-events: all;
    }

    /* Main Chat Window Container - Bespoke Floating Enterprise Window */
    .widget-window {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 400px;
      max-width: calc(100vw - 32px);
      height: 560px;
      max-height: calc(100vh - 48px);
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(29, 78, 216, 0.08);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      z-index: 999999;
      opacity: 0;
      transform: translateY(20px) scale(0.96);
      pointer-events: none;
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
    }
    .widget-window.open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }

    @media (max-width: 640px) {
      .widget-window {
        bottom: 12px;
        right: 12px;
        width: calc(100vw - 24px);
        height: calc(100vh - 24px);
        max-height: 560px;
        border-radius: 14px;
      }
    }

    /* Premium Bespoke Corporate Header Bar */
    .widget-header {
      background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%);
      color: #ffffff;
      padding: 14px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
      box-shadow: 0 4px 14px rgba(15, 23, 42, 0.2);
    }
    .widget-header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .widget-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1d4ed8;
      font-weight: 800;
      font-size: 13.5px;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15);
      position: relative;
    }
    .widget-avatar-status {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      background: #22c55e;
      border: 2px solid #ffffff;
      border-radius: 50%;
    }
    .widget-header-info { display: flex; flex-direction: column; gap: 1px; }
    .widget-header-title { font-size: 14.5px; font-weight: 700; color: #ffffff; letter-spacing: -0.01em; }
    .widget-header-subtitle { font-size: 11px; color: #dbeafe; display: flex; align-items: center; gap: 5px; font-weight: 500; }
    .widget-pulse-dot { width: 6px; height: 6px; background: #4ade80; border-radius: 50%; display: inline-block; animate: pulse 2s infinite; }

    .widget-header-actions {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .widget-header-btn {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(4px);
      border: none;
      color: #ffffff;
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .widget-header-btn:hover { background: rgba(255, 255, 255, 0.28); transform: scale(1.08); }
    .widget-close {
      font-size: 18px;
    }
    .widget-close:hover { transform: rotate(90deg); }

    /* Messages Area (Clean Slate Tone) */
    .widget-messages {
      flex: 1;
      padding: 18px 16px;
      overflow-y: auto;
      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;
      touch-action: pan-y;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: #f8fafc;
      scroll-behavior: smooth;
    }
    .widget-messages::-webkit-scrollbar { width: 4px; }
    .widget-messages::-webkit-scrollbar-track { background: transparent; }
    .widget-messages::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }

    /* Message Bubbles - Custom Bespoke Radius */
    .message {
      max-width: 86%;
      padding: 11px 15px;
      font-size: 13.5px;
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
      border-radius: 16px 16px 16px 4px;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
    }
    .message.user {
      align-self: flex-end;
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      color: #ffffff;
      border-radius: 16px 16px 4px 16px;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
    }
    .message strong { font-weight: 700; color: inherit; }

    /* Interactive Quick Action Chips */
    .widget-chips-container {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      margin-top: 6px;
      margin-bottom: 2px;
      align-self: flex-start;
    }
    .widget-chip {
      background: #ffffff;
      color: #1d4ed8;
      border: 1px solid #bfdbfe;
      padding: 7px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 6px rgba(29, 78, 216, 0.08);
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .widget-chip:hover {
      background: #1d4ed8;
      color: #ffffff;
      border-color: #1d4ed8;
      transform: translateY(-1.5px);
      box-shadow: 0 4px 10px rgba(29, 78, 216, 0.25);
    }

    /* Animated 3-Dot Typing Indicator */
    .widget-typing-box {
      display: none;
      align-self: flex-start;
      background: #ffffff;
      border: 1px solid #dbeafe;
      border-top-left-radius: 4px;
      padding: 10px 14px;
      border-radius: 14px;
      box-shadow: 0 3px 10px rgba(29, 78, 216, 0.05);
      align-items: center;
      gap: 5px;
    }
    .widget-typing-box.active {
      display: flex;
    }
    .typing-dot {
      width: 6px;
      height: 6px;
      background: #2563eb;
      border-radius: 50%;
      animation: typingBounce 1.4s infinite ease-in-out both;
    }
    .typing-dot:nth-child(1) { animation-delay: -0.32s; }
    .typing-dot:nth-child(2) { animation-delay: -0.16s; }
    @keyframes typingBounce {
      0%, 80%, 100% { transform: scale(0.3); opacity: 0.4; }
      40% { transform: scale(1); opacity: 1; }
    }

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
      border: 1px solid #cbd5e1;
      border-radius: 10px;
      padding: 11px 16px;
      font-size: 13.5px;
      outline: none;
      background: #f8fafc;
      color: #0f172a;
      transition: all 0.2s ease;
    }
    .widget-input:focus { border-color: #2563eb; background: #ffffff; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15); }
    .widget-send {
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
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
    .widget-send:hover { transform: scale(1.05); background: linear-gradient(135deg, #1d4ed8, #1e40af); }
    .widget-send svg { width: 18px; height: 18px; fill: currentColor; }

    /* Footer Branding */
    .widget-branding {
      text-align: center;
      font-size: 11px;
      color: #64748b;
      padding: 8px;
      background: #f0f9ff;
      border-top: 1px solid #e0f2fe;
      letter-spacing: 0.02em;
    }
    .widget-branding a { color: #1d4ed8; text-decoration: none; font-weight: 700; }
  `;
  shadow.appendChild(style);

  // Floating Action Bubble HTML
  var bubble = document.createElement('div');
  bubble.className = 'widget-bubble';
  bubble.innerHTML = `
    <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    <span class="widget-unread-badge" id="widget-badge" style="display:none;">1</span>
  `;

  // Chat Window HTML
  var windowEl = document.createElement('div');
  windowEl.className = 'widget-window';
  windowEl.setAttribute('data-lenis-prevent', 'true');
  windowEl.innerHTML = `
    <div class="widget-header">
      <div class="widget-header-left">
        <div class="widget-avatar">
          AI
          <span class="widget-avatar-status"></span>
        </div>
        <div class="widget-header-info">
          <div class="widget-header-title">Anavya AI Assistant</div>
          <div class="widget-header-subtitle"><span class="widget-pulse-dot"></span> Online</div>
        </div>
      </div>
      <div class="widget-header-actions">
        <a href="https://wa.me/917508657479" target="_blank" class="widget-header-btn" title="Chat on WhatsApp">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.486 1.332 5.006L2 22l5.127-1.341a9.97 9.97 0 004.884 1.275h.004c5.507 0 9.99-4.479 9.99-9.985 0-2.667-1.038-5.174-2.924-7.06C17.197 3.037 14.686 2 12.012 2zm5.836 14.333c-.244.688-1.222 1.296-1.996 1.365-.528.047-1.218.086-3.535-.87-2.966-1.223-4.883-4.238-5.031-4.436-.148-.198-1.206-1.605-1.206-3.061 0-1.457.763-2.172 1.034-2.467.271-.295.592-.369.789-.369.197 0 .394.002.566.01.182.008.428-.069.669.51.246.591.838 2.043.912 2.191.074.148.123.32.025.516-.098.197-.148.32-.295.492-.148.172-.311.384-.444.516-.148.148-.302.308-.13.603.172.295.766 1.264 1.644 2.046 1.129 1.006 2.083 1.319 2.378 1.467.295.148.468.123.64-.074.172-.197.739-.861.936-1.157.197-.295.394-.246.665-.148.271.098 1.724.813 2.02 1.01.295.197.492.295.566.418.074.123.074.713-.17 1.401z"/></svg>
        </a>
        <a href="tel:+916201231875" class="widget-header-btn" title="Call Us Direct">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        </a>
        <button class="widget-header-btn" id="widget-reset-btn" title="Reset Conversation">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
        </button>
        <button class="widget-header-btn widget-close">&times;</button>
      </div>
    </div>
    <div class="widget-messages" id="widget-messages-list" data-lenis-prevent="true"></div>
    <div class="widget-typing-box" id="widget-typing-box">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span style="font-size: 11.5px; color: #64748b; margin-left: 4px; font-weight: 500;">Alex is typing...</span>
    </div>
    <div class="widget-footer">
      <input type="text" class="widget-input" id="widget-input-field" placeholder="Ask a question..." />
      <button class="widget-send" id="widget-send-btn">
        <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
      </button>
    </div>
    <div class="widget-branding">Powered by <a href="https://www.anavyainfotech.com" target="_blank">Anavya Infotech</a></div>
  `;

  // Prevent smooth scroll (Lenis) collision when scrolling inside chatbot
  windowEl.addEventListener('wheel', function(e) { e.stopPropagation(); }, { passive: true });
  windowEl.addEventListener('touchmove', function(e) { e.stopPropagation(); }, { passive: true });

  // Backdrop Overlay Element
  var backdropEl = document.createElement('div');
  backdropEl.className = 'widget-backdrop';

  shadow.appendChild(backdropEl);
  shadow.appendChild(bubble);
  shadow.appendChild(windowEl);

  // Lead Conversational State Management
  var savedLeadName = "";
  var savedLeadContact = "";
  var chatHistory = [];
  var userTurnCount = 0;
  var pendingLeadStep = null; // null | 'AWAITING_NAME' | 'AWAITING_CONTACT'

  try {
    savedLeadName = localStorage.getItem('__anavya_lead_name_' + siteId) || "";
    savedLeadContact = localStorage.getItem('__anavya_lead_contact_' + siteId) || "";
  } catch (e) {}

  var interestKeywordsRegex = /price|pricing|cost|quote|hire|consult|service|build|website|app|seo|package|deal|contact|call|phone|number|whatsapp|demo|trial|buy|order|rate|kitna|daam|rupee|₹|\$|interested|want to|need|development/i;

  var messagesList = shadow.getElementById('widget-messages-list');
  var inputField = shadow.getElementById('widget-input-field');
  var sendBtn = shadow.getElementById('widget-send-btn');
  var typingBox = shadow.getElementById('widget-typing-box');
  var badgeEl = shadow.getElementById('widget-badge');

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

    // Show unread badge if bot bhej raha hai & window is closed
    if (sender === 'bot' && !isOpen && badgeEl) {
      badgeEl.style.display = 'flex';
    }

    saveSessionChat();
  }

  function renderQuickChips(chipsList) {
    var containerEl = document.createElement('div');
    containerEl.className = 'widget-chips-container';
    chipsList.forEach(function(chip) {
      var btn = document.createElement('button');
      btn.className = 'widget-chip';
      btn.innerHTML = chip.label;
      btn.addEventListener('click', function() {
        containerEl.remove();
        inputField.value = chip.prompt;
        handleSend();
      });
      containerEl.appendChild(btn);
    });
    messagesList.appendChild(containerEl);
    messagesList.scrollTop = messagesList.scrollHeight;
  }

  function showTyping(show) {
    if (show) {
      typingBox.classList.add('active');
    } else {
      typingBox.classList.remove('active');
    }
    messagesList.scrollTop = messagesList.scrollHeight;
  }

  // Multi-Page Session Continuity via sessionStorage
  function saveSessionChat() {
    try {
      var sessionData = {
        html: messagesList.innerHTML,
        history: chatHistory,
        turnCount: userTurnCount,
        step: pendingLeadStep
      };
      sessionStorage.setItem('__watsonx_session_' + siteId, JSON.stringify(sessionData));
    } catch (e) {}
  }

  function loadSessionChat() {
    try {
      var raw = sessionStorage.getItem('__watsonx_session_' + siteId);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed.html && parsed.html.length > 20) {
          messagesList.innerHTML = parsed.html;
          chatHistory = parsed.history || [];
          userTurnCount = parsed.turnCount || 0;
          pendingLeadStep = parsed.step || null;

          // Re-attach click listeners to quick chips if any exist in restored html
          var restoredChips = shadow.querySelectorAll('.widget-chip');
          restoredChips.forEach(function(chip) {
            chip.addEventListener('click', function() {
              var parent = chip.closest('.widget-chips-container');
              if (parent) parent.remove();
              inputField.value = chip.textContent.trim();
              handleSend();
            });
          });
          messagesList.scrollTop = messagesList.scrollHeight;
          return true;
        }
      }
    } catch (e) {}
    return false;
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
    .widget-avatar { color: ${customPrimaryColor} !important; }
  `;
  shadow.appendChild(dynamicCss);

  // Initial Bot Welcome Message & Quick Chips
  function initGreeting() {
    var restored = loadSessionChat();
    if (restored) return;

    messagesList.innerHTML = '';
    
    var titleEl = shadow.querySelector('.widget-header-title');
    if (titleEl) titleEl.textContent = customBotName;

    var avatarEl = shadow.querySelector('.widget-avatar');
    if (avatarEl && customBotName) {
      var initials = customBotName.split(' ').map(function(n) { return n[0]; }).join('').substring(0, 2).toUpperCase();
      avatarEl.childNodes[0].nodeValue = initials || 'AI';
    }

    var cleanWelcome = customWelcomeMsg || "Hello! How can I assist you with our web development, SEO, or AI automation solutions today?";
    appendMessage(cleanWelcome, 'bot');

    // Default Quick Reply Action Chips
    renderQuickChips([
      { label: "💰 Pricing & Packages", prompt: "What are your pricing packages?" },
      { label: "🚀 Custom Project Quote", prompt: "I need a custom website quote." },
      { label: "📈 SEO Services", prompt: "Tell me about your SEO plans." },
      { label: "📞 Book Free Call", prompt: "I want to schedule a consultation call." }
    ]);
  }
  initGreeting();

  // Interactivity Logic
  var isOpen = false;
  function toggleWidget(show) {
    isOpen = (typeof show === 'boolean') ? show : !isOpen;
    if (isOpen) {
      windowEl.classList.add('open');
      backdropEl.classList.add('open');
      if (badgeEl) badgeEl.style.display = 'none';
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

  // Reset Conversation Event
  var resetBtn = shadow.getElementById('widget-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      try {
        sessionStorage.removeItem('__watsonx_session_' + siteId);
      } catch (e) {}
      chatHistory = [];
      userTurnCount = 0;
      pendingLeadStep = null;
      initGreeting();
    });
  }

  function handleSend() {
    var query = inputField.value.trim();
    if (!query) return;

    appendMessage(query, 'user');
    inputField.value = '';
    userTurnCount++;

    // Phone / Email Regex Auto-Detection
    var emailMatch = query.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    var phoneMatch = query.match(/(\+?\d{1,4}[\s-]?)?\(?\d{3,5}\)?[\s-]?\d{3,5}[\s-]?\d{3,5}/);
    var detectedContact = (emailMatch ? emailMatch[0] : (phoneMatch && phoneMatch[0].replace(/[^0-9]/g, "").length >= 7 ? phoneMatch[0] : ""));

    // Case 1: User is answering Step 1 (AWAITING_NAME)
    if (pendingLeadStep === 'AWAITING_NAME') {
      savedLeadName = query;
      try {
        localStorage.setItem('__anavya_lead_name_' + siteId, savedLeadName);
      } catch (e) {}

      if (detectedContact) {
        savedLeadContact = detectedContact;
        try {
          localStorage.setItem('__anavya_lead_contact_' + siteId, savedLeadContact);
        } catch (e) {}
        pendingLeadStep = null;

        fetch(apiBase + '/api/widget/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: savedLeadName, phoneEmail: savedLeadContact, siteId: siteId }),
        }).catch(function() {});

        setTimeout(function() {
          appendMessage('Thank you, ' + savedLeadName + '! I have saved your contact details (' + savedLeadContact + '). Our team will reach out to you shortly. Feel free to ask any other questions!', 'bot');
        }, 400);
        return;
      }

      pendingLeadStep = 'AWAITING_CONTACT';
      setTimeout(function() {
        appendMessage('Nice to meet you, ' + savedLeadName + '! Could you please share your Phone Number or Email address so our team can reach out with full details?', 'bot');
      }, 400);
      return;
    }

    // Case 2: User is answering Step 2 (AWAITING_CONTACT)
    if (pendingLeadStep === 'AWAITING_CONTACT') {
      var contactVal = detectedContact || query;
      var isEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(contactVal);
      var isPhone = /(\+?\d{1,4}[\s-]?)?\(?\d{3,5}\)?[\s-]?\d{3,5}[\s-]?\d{3,5}/.test(contactVal) && contactVal.replace(/[^0-9]/g, "").length >= 7;

      if (isEmail || isPhone) {
        savedLeadContact = contactVal;
        try {
          localStorage.setItem('__anavya_lead_contact_' + siteId, savedLeadContact);
        } catch (e) {}
        pendingLeadStep = null;

        fetch(apiBase + '/api/widget/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: savedLeadName || "Website Visitor", phoneEmail: savedLeadContact, siteId: siteId }),
        }).catch(function() {});

        setTimeout(function() {
          appendMessage('Thank you ' + (savedLeadName ? savedLeadName : '') + '! I have saved your contact details (' + savedLeadContact + '). Our team will connect with you shortly. Feel free to ask any other questions!', 'bot');
        }, 400);
        return;
      }
    }

    // Auto-save contact details if detected anywhere in general query
    if (detectedContact && detectedContact !== savedLeadContact) {
      savedLeadContact = detectedContact;
      try {
        localStorage.setItem('__anavya_lead_contact_' + siteId, savedLeadContact);
      } catch (e) {}

      fetch(apiBase + '/api/widget/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: savedLeadName || "Website Visitor", phoneEmail: savedLeadContact, siteId: siteId }),
      }).catch(function() {});

      if (!savedLeadName && !pendingLeadStep) {
        pendingLeadStep = 'AWAITING_NAME';
        setTimeout(function() {
          appendMessage('Thanks for sharing your contact details! May I also know your Name so we know who to ask for?', 'bot');
        }, 500);
      }
    }

    // PERFORM AI CHAT QUERY WITH TYPING INDICATOR
    showTyping(true);
    chatHistory.push({ role: 'user', content: query });

    fetch(apiBase + '/api/widget/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        siteId: siteId,
        message: query,
        history: chatHistory.slice(-6),
        visitorName: savedLeadName || ''
      }),
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      showTyping(false);
      var botResponseText = data.response || 'Thank you for your inquiry!';
      chatHistory.push({ role: 'assistant', content: botResponseText });
      appendMessage(botResponseText, 'bot');

      // STEP-BY-STEP INTEREST-BASED LEAD CAPTURE TRIGGER
      if (!savedLeadContact && !pendingLeadStep) {
        var isInterested = interestKeywordsRegex.test(query) || userTurnCount >= 2;
        if (isInterested) {
          setTimeout(function() {
            if (!savedLeadName) {
              pendingLeadStep = 'AWAITING_NAME';
              appendMessage('By the way, may I know your Name so our team can assist you personally and send you full details?', 'bot');
            } else {
              pendingLeadStep = 'AWAITING_CONTACT';
              appendMessage('Thanks ' + savedLeadName + '! Could you share your Phone Number or Email address so we can reach out with a detailed proposal?', 'bot');
            }
          }, 800);
        }
      }
    })
    .catch(function(err) {
      showTyping(false);
      appendMessage('Sorry, I am having trouble connecting right now.', 'bot');
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
