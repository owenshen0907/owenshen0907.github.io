"use strict";
const printButton = document.querySelector("[data-print]");
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener("click", () => window.print());
}
const copyButton = document.querySelector("[data-copy-email]");
const copyStatus = document.querySelector("[data-copy-status]");
if (copyButton && copyStatus) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    copyButton.disabled = true;
    copyStatus.textContent = "";
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(copyButton.dataset.copyEmail);
      copyStatus.textContent = "邮箱地址已复制";
    } catch {
      copyStatus.textContent = "未能复制，请长按或选中上方邮箱地址复制。";
    } finally {
      copyButton.disabled = false;
    }
  });
}
