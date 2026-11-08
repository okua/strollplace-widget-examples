"use strict";

const storageKey = "strollplace-albuquerque-moving-checklist-v1";
const tasks = Array.from(document.querySelectorAll("[data-task]"));
const progress = document.getElementById("progress");
const progressBar = document.getElementById("progress-bar");
const storageNote = document.getElementById("storage-note");

function showStorageUnavailable() {
  storageNote.textContent = "Browser saving is unavailable. Your checks work while this page stays open.";
}

function updateProgress() {
  const completed = tasks.filter((task) => task.checked).length;
  progress.textContent = `${completed} of ${tasks.length} complete`;
  progressBar.value = completed;
}

try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
  if (Array.isArray(saved)) {
    tasks.forEach((task) => {
      task.checked = saved.includes(task.dataset.task);
    });
  }
} catch {
  showStorageUnavailable();
}
updateProgress();

tasks.forEach((task) => {
  task.addEventListener("change", () => {
    updateProgress();
    try {
      localStorage.setItem(storageKey, JSON.stringify(tasks.filter((item) => item.checked).map((item) => item.dataset.task)));
    } catch {
      showStorageUnavailable();
    }
  });
});

document.getElementById("print").addEventListener("click", () => window.print());

document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const code = button.closest("details").querySelector("code");
    const status = document.getElementById("copy-status");
    try {
      await navigator.clipboard.writeText(code.textContent);
      button.textContent = "Copied!";
      status.textContent = "Embed code copied. Include the widget script only once per page.";
      setTimeout(() => { button.textContent = "Copy embed code"; }, 2500);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = "Automatic copying is unavailable. The code is selected; use your browser's Copy command.";
    }
  });
});
