/**
 * PORTFOLIO LAUNCHPAD CORE APPLICATION LOGIC (2-COLUMN LAYOUT)
 * Dynamic SVG rendering, CONFIG integration, dynamic hiding of missing fields,
 * email clipboard copy (without mailto redirect), & optional auto-redirection.
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.CONFIG || {};

  // Built-in SVG Icons
  const SVG_ICONS = {
    globe: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"/></svg>`,
    "file-text": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
    book: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    externalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    copy: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
  };

  function getIcon(name) {
    return SVG_ICONS[name] || SVG_ICONS.globe;
  }

  // Toast Notification
  const toast = document.getElementById("toast");
  function showToast(message) {
    if (!toast) return;
    toast.innerHTML = `${SVG_ICONS.check} <span>${message}</span>`;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  // 1. Render Status Badge (Left Column)
  const statusEl = document.getElementById("status-badge");
  if (config.statusBadge && config.statusBadge.show && config.statusBadge.text) {
    statusEl.innerHTML = `
      <span class="status-dot ${config.statusBadge.status || 'online'}"></span>
      <span>${config.statusBadge.text}</span>
    `;
    statusEl.style.display = "inline-flex";
  } else if (statusEl) {
    statusEl.style.display = "none";
  }

  // 2. Render Avatar / Profile Photo (Left Column)
  const avatarContainer = document.getElementById("avatar-container");
  if (config.photo && config.photo.show && config.photo.url && config.photo.url.trim() !== "") {
    avatarContainer.innerHTML = `
      <img src="${config.photo.url}" alt="${config.photo.alt || config.name || 'Avatar'}" class="avatar-img" />
    `;
    avatarContainer.style.display = "block";
  } else if (avatarContainer) {
    avatarContainer.style.display = "none";
  }

  // 3. Render Name, Title, Bio (Left Column)
  const nameEl = document.getElementById("user-name");
  if (config.name && config.name.trim() !== "") {
    nameEl.textContent = config.name;
  } else if (nameEl) nameEl.style.display = "none";

  const titleEl = document.getElementById("user-title");
  if (config.title && config.title.trim() !== "") {
    titleEl.textContent = config.title;
  } else if (titleEl) titleEl.style.display = "none";

  const bioEl = document.getElementById("user-bio");
  if (config.bio && config.bio.trim() !== "") {
    bioEl.textContent = config.bio;
  } else if (bioEl) bioEl.style.display = "none";

  // 4. Render Location Pill (Left Column)
  const locationEl = document.getElementById("location-pill");
  if (config.location && config.location.trim() !== "") {
    locationEl.innerHTML = `${SVG_ICONS.mapPin} <span>${config.location}</span>`;
    locationEl.style.display = "inline-flex";
  } else if (locationEl) locationEl.style.display = "none";

  // 5. Render Primary Featured Hero Card (Right Column)
  const heroContainer = document.getElementById("featured-container");
  if (config.primaryFeatured && config.primaryFeatured.enabled && config.primaryFeatured.url) {
    heroContainer.innerHTML = `
      <a href="${config.primaryFeatured.url}" target="_blank" rel="noopener noreferrer" class="featured-card">
        <div class="featured-content">
          ${config.primaryFeatured.badge ? `<span class="featured-badge">${config.primaryFeatured.badge}</span>` : ""}
          <h2 class="featured-title">${config.primaryFeatured.title || 'Visit Portfolio'}</h2>
        </div>
        <div class="featured-cta">
          <span>${config.primaryFeatured.buttonText || 'Launch'}</span>
          ${SVG_ICONS.arrowRight}
        </div>
      </a>
    `;
    heroContainer.style.display = "block";
  } else if (heroContainer) {
    heroContainer.style.display = "none";
  }

  // 6. Render Secondary Action Cards List (Right Column)
  const cardsContainer = document.getElementById("action-cards-list");
  if (cardsContainer && Array.isArray(config.links)) {
    cardsContainer.innerHTML = "";
    
    const activeLinks = config.links.filter(link => {
      if (!link.enabled) return false;
      if (link.isEmail) return link.emailAddress || link.url;
      return link.url && link.url.trim() !== "";
    });

    activeLinks.forEach(link => {
      const card = document.createElement("a");
      card.className = "action-card";
      
      // If it's an Email card, prevent redirect navigation and handle clipboard copy
      if (link.isEmail) {
        card.href = "javascript:void(0)";
        card.removeAttribute("target");
        card.setAttribute("role", "button");
      } else {
        card.href = link.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
      }

      const iconSvg = getIcon(link.icon);

      card.innerHTML = `
        <div class="card-icon-box">
          ${iconSvg}
        </div>
        <div class="card-info">
          <div class="card-header-row">
            <span class="card-title">${link.title}</span>
            ${link.badge ? `<span class="card-badge">${link.badge}</span>` : ""}
          </div>
          ${link.description ? `<span class="card-desc">${link.description}</span>` : ""}
        </div>
        <div class="card-action-btn">
          ${link.isEmail ? SVG_ICONS.copy : SVG_ICONS.externalLink}
        </div>
      `;

      if (link.isEmail && link.emailAddress) {
        card.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (navigator.clipboard) {
            navigator.clipboard.writeText(link.emailAddress);
            showToast(`Copied ${link.emailAddress} to clipboard!`);
          } else {
            // Fallback for older browsers
            const tempInput = document.createElement("input");
            tempInput.value = link.emailAddress;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            showToast(`Copied ${link.emailAddress} to clipboard!`);
          }
        });
      }

      cardsContainer.appendChild(card);
    });

    if (activeLinks.length === 0) {
      cardsContainer.style.display = "none";
    }
  }

  // 7. Render Auto-Redirect Countdown (if enabled)
  let timerInterval = null;
  const redirectContainer = document.getElementById("auto-redirect-container");
  if (config.autoRedirect && config.autoRedirect.enabled && config.autoRedirect.targetUrl) {
    let timeLeft = config.autoRedirect.delaySeconds || 5;
    
    redirectContainer.innerHTML = `
      <div class="auto-redirect-bar">
        <span class="redirect-text">
          🚀 Redirecting to <strong>${config.autoRedirect.targetName || 'Portfolio'}</strong> in <span id="countdown">${timeLeft}</span>s...
        </span>
        <button id="cancel-redirect-btn" class="cancel-redirect-btn">Cancel</button>
      </div>
    `;
    redirectContainer.style.display = "block";

    const countdownEl = document.getElementById("countdown");
    const cancelBtn = document.getElementById("cancel-redirect-btn");

    timerInterval = setInterval(() => {
      timeLeft--;
      if (countdownEl) countdownEl.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        window.location.href = config.autoRedirect.targetUrl;
      }
    }, 1000);

    if (cancelBtn) {
      cancelBtn.addEventListener("click", () => {
        clearInterval(timerInterval);
        redirectContainer.style.display = "none";
        showToast("Auto-redirection cancelled.");
      });
    }
  } else if (redirectContainer) {
    redirectContainer.style.display = "none";
  }

  // 8. Render Footer (Right Column Bottom)
  const footerEl = document.getElementById("hub-footer");
  if (config.footer && config.footer.show && config.footer.text) {
    footerEl.textContent = config.footer.text;
    footerEl.style.display = "block";
  } else if (footerEl) {
    footerEl.style.display = "none";
  }
});


