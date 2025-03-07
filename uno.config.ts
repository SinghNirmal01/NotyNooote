import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(), // Default UnoCSS utilities
    presetIcons(), // Enables icon utilities
    presetAttributify(), // Allows attribute-based styling
  ],
});