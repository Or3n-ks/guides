document.querySelectorAll('[data-copy-target]').forEach((button) => {
  button.addEventListener('click', async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    const status = button.parentElement.querySelector('.copy-status');
    if (!target || !status) return;
    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      status.textContent = button.dataset.copySuccess;
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(target);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = button.dataset.copyFallback;
    }
  });
});
