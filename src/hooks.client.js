// src/hooks.client.js
import { theme } from '$lib/stores/theme';

export const handleClientInit = () => {
  const storedTheme = localStorage.getItem('theme') || 'light';
  theme.set(storedTheme);
};

export function handleError(error) {
  console.error("Client error:", error);
}

export function init() {
  console.log("Initializing app...");
}
