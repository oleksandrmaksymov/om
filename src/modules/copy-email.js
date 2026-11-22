/* ———— Copy Email ————
   Copies the address from [data-copy-email] (or [data-copy-email-element]); if copying fails → mailto. */
export function initCopyEmailClipboard(scope) {
  const buttons = scope.querySelectorAll('.copy-email-button');
  if (!buttons.length) return;
  const copyEmail = (button) => {
    const email =
      button.getAttribute('data-copy-email') ||
      button.querySelector('[data-copy-email-element]').textContent.trim();
    if (!email) return;
    /* Main: copy to the clipboard. Fallback (browser has no clipboard access or refuses it —
       e.g. in-app browsers of Instagram / LinkedIn): open a new mail to the same address,
       so the click never does nothing. */
    const openMail = () => { window.location.href = 'mailto:' + email; };
    if (!navigator.clipboard || !navigator.clipboard.writeText) { openMail(); return; }
    navigator.clipboard.writeText(email).then(() => {
      button.setAttribute('data-copy-button', 'copied');
      button.setAttribute('aria-label', 'Email copied to clipboard!');
    }, openMail);
  };
  const handleInteraction = (e) => {
    if (
      e.type === 'click' ||
      (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' '))
    ) {
      e.preventDefault();
      copyEmail(e.currentTarget);
    }
  };
  buttons.forEach((button) => {
    button.addEventListener('click', handleInteraction);
    button.addEventListener('keydown', handleInteraction);
    button.addEventListener('mouseleave', () => {
      button.removeAttribute('data-copy-button');
      button.blur();
      button.setAttribute('aria-label', 'Copy email to clipboard');
    });
    button.addEventListener('blur', () => {
      button.removeAttribute('data-copy-button');
      button.setAttribute('aria-label', 'Copy email to clipboard');
    });
  });
}
