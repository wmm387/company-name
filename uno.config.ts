import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['flex-cc', 'flex justify-center items-center'],
    ['flex-sc', 'flex justify-start items-center'],
    ['flex-ss', 'flex justify-start items-start'],
    ['flex-bc', 'flex justify-between items-center'],
    ['flex-ac', 'flex justify-around items-center'],
    ['flex-ec', 'flex justify-end items-center'],
    ['flex-col-cc', 'flex flex-col justify-center items-center'],
    ['flex-col-cs', 'flex flex-col justify-center items-start'],
    ['flex-col-ss', 'flex flex-col justify-start items-start'],
    ['flex-col-sc', 'flex flex-col justify-start items-center'],
    ['flex-col-bc', 'flex flex-col justify-between items-center'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
