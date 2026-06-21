export const GOOGLE_FONTS = {
  preconnect: "https://fonts.googleapis.com",
  preconnectStatic: "https://fonts.gstatic.com",
  stylesheet:
    "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:wght@400..900&display=swap",
} as const;

export const FONT_STACKS = {
  inter:
    '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  playfair: '"Playfair Display", Georgia, "Times New Roman", serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
} as const;
