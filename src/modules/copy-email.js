/* ———— Copy Email ———— */
export function initCopyEmailClipboard(scope) {
  const buttons = scope.querySelectorAll('.copy-email-button');
  if (!buttons.length) return;
  const copyEmail = (button) => {
    const email =
      button.getAttribute('data-copy-email') ||
      button.querySelector('[data-copy-email-element]').textContent.trim();
    if (email) {
      navigator.clipboard.writeText(email).then(() => {
        button.setAttribute('data-copy-button', 'copied');
        button.setAttribute('aria-label', 'Email copied to clipboard!');
      });
    }
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
