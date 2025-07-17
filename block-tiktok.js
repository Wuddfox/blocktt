function removeTikTokLinks() {
  const tiktokSelectors = [
    'a[href*="tiktok.com"]',
    'a[href*="www.tiktok.com"]'
  ];

  tiktokSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      const parent = el.closest('div') || el.parentNode;
      if (parent) {
        parent.remove();
      } else {
        el.remove();
      }
    });
  });
}

// Run once on load
removeTikTokLinks();

// Run again periodically (to catch dynamically loaded content)
setInterval(removeTikTokLinks, 2000);
