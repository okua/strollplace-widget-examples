"use strict";

const sign = document.querySelector("#sign");
const title = document.querySelector("#sign-title");
const direction = document.querySelector("#sign-direction");
const hours = document.querySelector("#sign-hours");
const address = document.querySelector("#sign-address");
const previewHours = document.querySelector("#preview-hours");
const previewAddress = document.querySelector("#preview-address");
const arrow = document.querySelector("#sign-arrow");

function updateSign() {
  const hourText = hours.value.trim();
  const addressText = address.value.trim();
  const arrowText = direction.value === "none" ? "" : ` with ${direction.value} arrow`;

  title.textContent = `Open house sign${arrowText}`;
  previewHours.textContent = hourText;
  previewAddress.textContent = addressText;
  previewHours.setAttribute("font-size", hourText.length > 28 ? "40" : "56");
  previewAddress.setAttribute("font-size", addressText.length > 37 ? "30" : "44");
  arrow.setAttribute("visibility", direction.value === "none" ? "hidden" : "visible");
  arrow.setAttribute("transform", direction.value === "left" ? "translate(1100 0) scale(-1 1)" : "");
}

for (const input of [direction, hours, address]) {
  input.addEventListener("input", updateSign);
}
updateSign();

document.querySelector("#print-sign").addEventListener("click", () => window.print());

document.querySelector("#download-sign").addEventListener("click", () => {
  const svg = new XMLSerializer().serializeToString(sign);
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `open-house-sign-${direction.value}.svg`;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
});
