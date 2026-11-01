(function () {
  if (window.__ANAVYA_AI_WIDGET_LOADED__) return;
  window.__ANAVYA_AI_WIDGET_LOADED__ = true;

  // Extract siteId from script tag
  var scriptTag = document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].src && scripts[i].src.indexOf('widget.js') !== -1) {
        return scripts[i];
      }
    }
    return scripts[scripts.length - 1];
  })();
  var scriptSiteId = scriptTag ? scriptTag.getAttribute('data-site-id') : null;
  var currentHost = window.location.hostname || '';
  var isAnavyaHost = currentHost.includes('anavyainfotech') || currentHost === 'localhost' || currentHost === '127.0.0.1';
  var siteId = scriptSiteId || (isAnavyaHost ? 'anavya-infotech' : currentHost.replace(/[^a-zA-Z0-9.-]/g, '-').toLowerCase());
  var pageTitle = document.title ? document.title.split(/[-|•]/)[0].trim() : siteId;
  var brandName = isAnavyaHost ? 'Anavya Infotech' : (pageTitle || currentHost);
  var apiBase = scriptTag && scriptTag.src ? new URL(scriptTag.src).origin : '';
  if (apiBase.includes('file://') || apiBase === 'null' || !apiBase) {
    apiBase = window.location.origin || 'https://www.anavyainfotech.com';
  }

  function initWidget() {
    if (document.getElementById('anavya-ai-widget-root')) return;

    var container = document.createElement('div');
    container.id = 'anavya-ai-widget-root';
    container.setAttribute('data-lenis-prevent', 'true');
    document.body.appendChild(container);

    var shadow = container.attachShadow({ mode: 'open' });

    var style = document.createElement('style');
    style.textContent = `
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
      }

      /* Floating Action Bubble - Minimal & Modern */
      .widget-bubble {
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        background: #09090b;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 4px 10px -2px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        z-index: 999999;
        transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
      }
      .widget-bubble:hover {
        transform: scale(1.05);
        box-shadow: 0 14px 30px -5px rgba(0, 0, 0, 0.35);
      }
      .widget-bubble svg {
        width: 24px;
        height: 24px;
        stroke: #ffffff;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      /* Notification Dot */
      .widget-unread-badge {
        position: absolute;
        top: 2px;
        right: 2px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #2563eb;
        border: 2px solid #09090b;
      }

      /* Backdrop Overlay for mobile */
      .widget-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(2px);
        z-index: 999998;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.25s ease;
      }
      .widget-backdrop.open {
        opacity: 1;
        pointer-events: all;
      }

      /* Chat Window - Stripe/Linear Style Clean Design */
      .widget-window {
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 380px;
        max-width: calc(100vw - 32px);
        height: 560px;
        max-height: calc(100vh - 48px);
        background: #ffffff;
        border: 1px solid #e4e4e7;
        border-radius: 16px;
        box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(0, 0, 0, 0.04);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        z-index: 999999;
        opacity: 0;
        transform: translateY(12px) scale(0.98);
        pointer-events: none;
        transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
      }
      .widget-window.open {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: all;
      }

      @media (max-width: 640px) {
        .widget-window {
          bottom: 0;
          right: 0;
          width: 100vw;
          height: 100vh;
          max-width: 100vw;
          max-height: 100vh;
          border-radius: 0;
          border: none;
        }
      }

      /* Clean Header */
      .widget-header {
        padding: 16px 20px;
        background: #ffffff;
        border-bottom: 1px solid #f4f4f5;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .widget-header-left {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .widget-avatar {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: #f4f4f5;
        border: 1px solid #e4e4e7;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 13px;
        color: #09090b;
        position: relative;
      }
      .widget-avatar-status {
        position: absolute;
        bottom: -1px;
        right: -1px;
        width: 8px;
        height: 8px;
        background: #10b981;
        border: 2px solid #ffffff;
        border-radius: 50%;
      }
      .widget-header-info {
        display: flex;
        flex-direction: column;
      }
      .widget-header-title {
        font-size: 14px;
        font-weight: 600;
        color: #09090b;
        letter-spacing: -0.01em;
      }
      .widget-header-subtitle {
        font-size: 11px;
        color: #71717a;
      }

      .widget-header-actions {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .widget-header-btn {
        background: transparent;
        border: none;
        color: #71717a;
        cursor: pointer;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.15s ease;
      }
      .widget-header-btn:hover {
        background: #f4f4f5;
        color: #09090b;
      }
      .widget-header-btn svg {
        width: 16px;
        height: 16px;
        stroke: currentColor;
        fill: none;
        stroke-width: 2;
      }

      /* Messages Area */
      .widget-messages {
        flex: 1;
        padding: 20px 18px;
        overflow-y: auto;
        overscroll-behavior: contain;
        display: flex;
        flex-direction: column;
        gap: 14px;
        background: #fafafa;
      }
      .widget-messages::-webkit-scrollbar {
        width: 4px;
      }
      .widget-messages::-webkit-scrollbar-thumb {
        background: #e4e4e7;
        border-radius: 4px;
      }

      /* Message Bubbles */
      .message {
        max-width: 84%;
        padding: 10px 14px;
        font-size: 13.5px;
        line-height: 1.5;
        word-break: break-word;
        animation: fadeIn 0.2s ease-out;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .message.bot {
        align-self: flex-start;
        background: #ffffff;
        color: #18181b;
        border: 1px solid #e4e4e7;
        border-radius: 12px 12px 12px 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      }
      .message.user {
        align-self: flex-end;
        background: #09090b;
        color: #ffffff;
        border-radius: 12px 12px 4px 12px;
      }

      /* Quick Action Chips */
      .widget-chips-container {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 4px;
        align-self: flex-start;
      }
      .widget-chip {
        background: #ffffff;
        color: #27272a;
        border: 1px solid #e4e4e7;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .widget-chip:hover {
        background: #f4f4f5;
        border-color: #d4d4d8;
        color: #09090b;
      }

      /* Typing Indicator - Seamless transparent floating dots inside message flow */
      .widget-typing-box {
        display: none;
        align-self: flex-start;
        align-items: center;
        gap: 5px;
        padding: 4px 6px;
        margin: 2px 0 6px 4px;
        background: transparent;
      }
      .widget-typing-box.active {
        display: flex;
      }
      .typing-dot {
        width: 7px;
        height: 7px;
        background: #2563eb;
        border-radius: 50%;
        animation: typingBlink 1.2s infinite ease-in-out both;
      }
      .typing-dot:nth-child(1) { animation-delay: -0.32s; }
      .typing-dot:nth-child(2) { animation-delay: -0.16s; }
      .typing-dot:nth-child(3) { animation-delay: 0s; }
      @keyframes typingBlink {
        0%, 80%, 100% { opacity: 0.25; transform: scale(0.85); }
        40% { opacity: 1; transform: scale(1.15); }
      }

      /* Input Footer */
      .widget-footer {
        padding: 12px 16px;
        background: #ffffff;
        border-top: 1px solid #f4f4f5;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .widget-input {
        flex: 1;
        border: 1px solid #e4e4e7;
        border-radius: 24px;
        padding: 10px 16px;
        font-size: 13.5px;
        outline: none;
        background: #fafafa;
        color: #09090b;
        transition: all 0.15s ease;
      }
      .widget-input::placeholder {
        color: #a1a1aa;
      }
      .widget-input:focus {
        border-color: #a1a1aa;
        background: #ffffff;
      }
      .widget-send {
        background: #09090b;
        color: #ffffff;
        border: none;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
        transition: opacity 0.15s ease, transform 0.15s ease;
      }
      .widget-send:hover {
        opacity: 0.85;
      }
      .widget-send svg {
        width: 15px;
        height: 15px;
        fill: #ffffff;
      }

      /* Minimal Brand Footer */
      .widget-branding {
        text-align: center;
        font-size: 11px;
        color: #a1a1aa;
        padding: 6px;
        background: #ffffff;
      }
      .widget-branding a {
        color: #71717a;
        text-decoration: none;
        font-weight: 500;
      }
      .widget-branding a:hover {
        color: #09090b;
      }
    `;
    shadow.appendChild(style);

    // Floating Bubble
    var bubble = document.createElement('div');
    bubble.className = 'widget-bubble';
    bubble.innerHTML = `
      <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      <span class="widget-unread-badge" id="widget-badge" style="display:none;"></span>
    `;

    // Chat Window
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
            <div class="widget-header-title">${brandName} Assistant</div>
            <div class="widget-header-subtitle">Typical reply in few seconds</div>
          </div>
        </div>
        <div class="widget-header-actions">
          <button class="widget-header-btn" id="widget-reset-btn" title="Clear chat">
            <svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M3 21v-5h5"></path></svg>
          </button>
          <button class="widget-header-btn widget-close" title="Close">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
      <div class="widget-messages" id="widget-messages-list" data-lenis-prevent="true">
        <div class="widget-typing-box" id="widget-typing-box">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      </div>
      <div class="widget-footer">
        <input type="text" class="widget-input" id="widget-input-field" placeholder="Write a message..." />
        <button class="widget-send" id="widget-send-btn" title="Send">
          <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </div>
      <div class="widget-branding">Powered by <a href="https://www.anavyainfotech.com" target="_blank">Anavya Infotech</a></div>
    `;

    windowEl.addEventListener('wheel', function(e) { e.stopPropagation(); }, { passive: true });
    windowEl.addEventListener('touchmove', function(e) { e.stopPropagation(); }, { passive: true });

    var backdropEl = document.createElement('div');
    backdropEl.className = 'widget-backdrop';

    shadow.appendChild(backdropEl);
    shadow.appendChild(bubble);
    shadow.appendChild(windowEl);

var savedLeadName = "";
    var savedLeadPhone = "";
    var savedLeadEmail = "";
    var chatHistory = [];
    var userTurnCount = 0;
    var pendingLeadStep = null;

    try {
      savedLeadName = localStorage.getItem('__anavya_lead_name_' + siteId) || "";
      savedLeadPhone = localStorage.getItem('__anavya_lead_phone_' + siteId) || "";
      savedLeadEmail = localStorage.getItem('__anavya_lead_email_' + siteId) || "";
    } catch (e) {}

    var interestKeywordsRegex = /price|pricing|cost|quote|hire|consult|service|build|website|app|seo|package|deal|contact|call|phone|number|whatsapp|demo|trial|buy|order|rate|kitna|daam|rupee|₹|\$|interested|want to|need|development/i;

    var messagesList = shadow.getElementById('widget-messages-list');
    var inputField = shadow.getElementById('widget-input-field');
    var sendBtn = shadow.getElementById('widget-send-btn');
    var typingBox = shadow.getElementById('widget-typing-box');
    var badgeEl = shadow.getElementById('widget-badge');

    function formatTextToHtml(text) {
      if (!text) return "";
      return text
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/\*(.*?)\*/g, '$1')
        .replace(/\n\n/g, '<br/><br/>')
        .replace(/\n/g, '<br/>');
    }

    function appendMessage(text, sender) {
      var msg = document.createElement('div');
      msg.className = 'message ' + sender;
      msg.innerHTML = formatTextToHtml(text);
      if (typingBox && typingBox.parentNode === messagesList) {
        messagesList.insertBefore(msg, typingBox);
      } else {
        messagesList.appendChild(msg);
      }
      messagesList.scrollTop = messagesList.scrollHeight;

      if (sender === 'bot' && !isOpen && badgeEl) {
        badgeEl.style.display = 'block';
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
      if (typingBox && typingBox.parentNode === messagesList) {
        messagesList.insertBefore(containerEl, typingBox);
      } else {
        messagesList.appendChild(containerEl);
      }
      messagesList.scrollTop = messagesList.scrollHeight;
    }

    function showTyping(show) {
      if (show) {
        messagesList.appendChild(typingBox);
        typingBox.classList.add('active');
      } else {
        typingBox.classList.remove('active');
      }
      messagesList.scrollTop = messagesList.scrollHeight;
    }

    function saveSessionChat() {
      try {
        var sessionData = {
          html: messagesList.innerHTML,
          history: chatHistory,
          turnCount: userTurnCount,
          pendingStep: pendingLeadStep,
          leadName: savedLeadName,
          leadPhone: savedLeadPhone,
          leadEmail: savedLeadEmail
        };
        sessionStorage.setItem('__watsonx_session_' + siteId, JSON.stringify(sessionData));
      } catch (e) {}
    }

    function restoreSessionChat() {
      try {
        var raw = sessionStorage.getItem('__watsonx_session_' + siteId);
        if (raw) {
          var parsed = JSON.parse(raw);
          if (parsed && parsed.html) {
            messagesList.innerHTML = parsed.html;
            if (!messagesList.contains(typingBox)) {
              messagesList.appendChild(typingBox);
            }
            chatHistory = parsed.history || [];
            userTurnCount = parsed.turnCount || 0;
            pendingLeadStep = parsed.pendingStep || null;
            if (parsed.leadName) savedLeadName = parsed.leadName;
            if (parsed.leadPhone) savedLeadPhone = parsed.leadPhone;
            if (parsed.leadEmail) savedLeadEmail = parsed.leadEmail;
            messagesList.scrollTop = messagesList.scrollHeight;
            return true;
          }
        }
      } catch (e) {}
      return false;
    }

    function initGreeting() {
      messagesList.innerHTML = '';
      messagesList.appendChild(typingBox);
      setTimeout(function() {
        appendMessage("Hi! Welcome to " + brandName + ". I am here to help you. May I know your name please?", 'bot');
        pendingLeadStep = 'AWAITING_NAME';
      }, 250);
    }

    var restored = restoreSessionChat();
    if (!restored) {
      initGreeting();
    }

    var isOpen = false;
    function toggleWidget(open) {
      isOpen = (typeof open === 'boolean') ? open : !isOpen;
      if (isOpen) {
        windowEl.classList.add('open');
        backdropEl.classList.add('open');
        if (badgeEl) badgeEl.style.display = 'none';
        setTimeout(function() { inputField.focus(); }, 150);
      } else {
        windowEl.classList.remove('open');
        backdropEl.classList.remove('open');
      }
    }

    bubble.addEventListener('click', function() { toggleWidget(true); });
    shadow.querySelector('.widget-close').addEventListener('click', function() { toggleWidget(false); });
    backdropEl.addEventListener('click', function() { toggleWidget(false); });

    var resetBtn = shadow.getElementById('widget-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function() {
        try {
          sessionStorage.removeItem('__watsonx_session_' + siteId);
        } catch (e) {}
        chatHistory = [];
        userTurnCount = 0;
        savedLeadName = "";
        savedLeadPhone = "";
        savedLeadEmail = "";
        pendingLeadStep = null;
        try {
          localStorage.removeItem('__anavya_lead_name_' + siteId);
          localStorage.removeItem('__anavya_lead_phone_' + siteId);
          localStorage.removeItem('__anavya_lead_email_' + siteId);
        } catch(e) {}
        initGreeting();
      });
    }

    function submitCapturedLead(name, phone, email, notes) {
      fetch(apiBase + '/api/widget/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || "Website Visitor",
          phoneEmail: phone || email || "N/A",
          siteId: siteId,
          notes: notes || "Sales bot lead"
        }),
      }).catch(function() {});
    }

    function askAI(query) {
      showTyping(true);
      chatHistory.push({ role: 'user', content: query });

      fetch(apiBase + '/api/widget/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          siteId: siteId,
          message: query,
          history: chatHistory.slice(-6),
          visitorName: savedLeadName || '',
          pageUrl: window.location.href,
          pageTitle: document.title || ''
        }),
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        showTyping(false);
        var botResponseText = data.response || 'Thank you for reaching out. How else can we assist your business today?';
        chatHistory.push({ role: 'assistant', content: botResponseText });
        appendMessage(botResponseText, 'bot');
      })
      .catch(function() {
        showTyping(false);
        appendMessage('Sorry, I am having trouble connecting right now. Please feel free to reach out via our contact page.', 'bot');
      });
    }

    function handleSend() {
      var query = inputField.value.trim();
      if (!query) return;

      appendMessage(query, 'user');
      inputField.value = '';
      userTurnCount++;

      // Detect email & phone in message
      var emailMatch = query.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      var phoneMatch = query.match(/(?:\+?\d{1,4}[\s-]?)?(?:\(?\d{3,5}\)?[\s-]?)?\d{3,5}[\s-]?\d{3,5}/);
      var cleanPhone = phoneMatch ? phoneMatch[0].replace(/[^0-9+]/g, "") : "";
      var detectedEmail = emailMatch ? emailMatch[0] : "";
      var detectedPhone = (cleanPhone.length >= 10) ? cleanPhone : "";

      // STEP 1: Awaiting Name
      if (pendingLeadStep === 'AWAITING_NAME') {
        // Clean name (remove "my name is", "i am", etc.)
        var cleanName = query.replace(/^(my\s*name\s*is|i\s*am|this\s*is|naam|mera\s*naam)\s*/i, '').trim();
        if (cleanName.length > 30) cleanName = cleanName.split(' ').slice(0, 3).join(' ');
        savedLeadName = cleanName || query;
        try { localStorage.setItem('__anavya_lead_name_' + siteId, savedLeadName); } catch (e) {}

        // Check if user also provided phone or email upfront
        if (detectedPhone) {
          savedLeadPhone = detectedPhone;
          try { localStorage.setItem('__anavya_lead_phone_' + siteId, savedLeadPhone); } catch (e) {}
        }
        if (detectedEmail) {
          savedLeadEmail = detectedEmail;
          try { localStorage.setItem('__anavya_lead_email_' + siteId, savedLeadEmail); } catch (e) {}
        }

        if (!savedLeadPhone) {
          pendingLeadStep = 'AWAITING_PHONE';
          showTyping(true);
          setTimeout(function() {
            showTyping(false);
            appendMessage('Pleasure to meet you, ' + savedLeadName + '! What is your mobile / WhatsApp number so our technical team can share project scope details?', 'bot');
          }, 350);
          return;
        } else if (!savedLeadEmail) {
          pendingLeadStep = 'AWAITING_EMAIL';
          showTyping(true);
          setTimeout(function() {
            showTyping(false);
            appendMessage('Thank you, ' + savedLeadName + '. And what is your official email address to send our portfolio and proposal?', 'bot');
          }, 350);
          return;
        } else {
          pendingLeadStep = null;
          submitCapturedLead(savedLeadName, savedLeadPhone, savedLeadEmail);
          showTyping(true);
          setTimeout(function() {
            showTyping(false);
            appendMessage('Great! I have noted your contact details. How can I help you today? Feel free to ask about our web development, AI software, mobile apps, or SEO services.', 'bot');
          }, 350);
          return;
        }
      }

      // STEP 2: Awaiting Phone
      if (pendingLeadStep === 'AWAITING_PHONE') {
        if (detectedPhone || query.replace(/[^0-9]/g, "").length >= 7) {
          savedLeadPhone = detectedPhone || query.trim();
          try { localStorage.setItem('__anavya_lead_phone_' + siteId, savedLeadPhone); } catch (e) {}

          if (detectedEmail) {
            savedLeadEmail = detectedEmail;
            try { localStorage.setItem('__anavya_lead_email_' + siteId, savedLeadEmail); } catch (e) {}
          }

          if (!savedLeadEmail) {
            pendingLeadStep = 'AWAITING_EMAIL';
            showTyping(true);
            setTimeout(function() {
              showTyping(false);
              appendMessage('Got it! And what is your email address so we can email you our proposal and pricing deck?', 'bot');
            }, 350);
            return;
          } else {
            pendingLeadStep = null;
            submitCapturedLead(savedLeadName, savedLeadPhone, savedLeadEmail);
            showTyping(true);
            setTimeout(function() {
              showTyping(false);
              appendMessage('Thank you, ' + savedLeadName + '. Your details are saved. What solution are you looking to build or explore with us today?', 'bot');
            }, 350);
            return;
          }
        } else {
          // If user asked a question instead of giving phone number, answer with AI but politely ask for phone again
          showTyping(true);
          fetch(apiBase + '/api/widget/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ siteId: siteId, message: query, history: chatHistory.slice(-4), visitorName: savedLeadName, pageUrl: window.location.href, pageTitle: document.title || '' }),
          })
          .then(function(res) { return res.json(); })
          .then(function(data) {
            showTyping(false);
            var reply = (data.response || '') + '\n\nCould you also share your contact number so we can connect directly?';
            appendMessage(reply, 'bot');
          })
          .catch(function() {
            showTyping(false);
            appendMessage('Could you please provide your phone number so our team can contact you?', 'bot');
          });
          return;
        }
      }

      // STEP 3: Awaiting Email
      if (pendingLeadStep === 'AWAITING_EMAIL') {
        if (detectedEmail || query.includes('@')) {
          savedLeadEmail = detectedEmail || query.trim();
          try { localStorage.setItem('__anavya_lead_email_' + siteId, savedLeadEmail); } catch (e) {}
          pendingLeadStep = null;
          submitCapturedLead(savedLeadName, savedLeadPhone, savedLeadEmail);

          showTyping(true);
          setTimeout(function() {
            showTyping(false);
            appendMessage('Thank you, ' + savedLeadName + '! Our team has your contact info. What services or project requirements would you like to discuss today?', 'bot');
          }, 350);
          return;
        } else {
          // If they typed something else, answer using AI knowledge base and remind about email
          showTyping(true);
          fetch(apiBase + '/api/widget/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ siteId: siteId, message: query, history: chatHistory.slice(-4), visitorName: savedLeadName, pageUrl: window.location.href, pageTitle: document.title || '' }),
          })
          .then(function(res) { return res.json(); })
          .then(function(data) {
            showTyping(false);
            var reply = (data.response || '') + '\n\nCould you also share your email so our engineers can follow up with a proposal?';
            appendMessage(reply, 'bot');
          })
          .catch(function() {
            showTyping(false);
            appendMessage('Could you share your email address so our team can follow up?', 'bot');
          });
          return;
        }
      }

      // If user spontaneously types phone or email during regular conversation, capture it
      if (detectedPhone && !savedLeadPhone) {
        savedLeadPhone = detectedPhone;
        try { localStorage.setItem('__anavya_lead_phone_' + siteId, savedLeadPhone); } catch (e) {}
        submitCapturedLead(savedLeadName, savedLeadPhone, savedLeadEmail);
      }
      if (detectedEmail && !savedLeadEmail) {
        savedLeadEmail = detectedEmail;
        try { localStorage.setItem('__anavya_lead_email_' + siteId, savedLeadEmail); } catch (e) {}
        submitCapturedLead(savedLeadName, savedLeadPhone, savedLeadEmail);
      }

      // NORMAL CONSULTATIVE SALES AI QUERY
      askAI(query);
    }

    sendBtn.addEventListener('click', handleSend);
    inputField.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') handleSend();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidget);
  } else {
    initWidget();
  }
})();
