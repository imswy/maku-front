// uno.config.ts
import {
  defineConfig,
  presetWind,
  presetIcons,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [presetWind(),presetIcons({
    collections: {
      // mdi: () => import('@iconify/vue').then(i => i.default),
    }
  }), presetAttributify()],
  transformers: [transformerVariantGroup(), transformerDirectives()]
})
