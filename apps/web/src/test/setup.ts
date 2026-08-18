import "@testing-library/jest-dom/vitest";

Object.defineProperty(globalThis, "AbortController", {
  configurable: true,
  value: window.AbortController,
});
Object.defineProperty(globalThis, "AbortSignal", {
  configurable: true,
  value: window.AbortSignal,
});

if (!HTMLDialogElement.prototype.showModal) {
  HTMLDialogElement.prototype.showModal = function showModal() {
    this.open = true;
  };
}

if (!HTMLDialogElement.prototype.close) {
  HTMLDialogElement.prototype.close = function close() {
    this.open = false;
  };
}
