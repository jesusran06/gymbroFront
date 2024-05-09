// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VTimePicker } from 'vuetify/lib/labs/components.mjs'
// import * as components from 'vuetify/components';
// import * as directives from 'vuetify/directives';
// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  components: {
    VTimePicker,
  },
  // directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#020408',
          secondary: '#9c27b0',
          accent: '#ffeb3b',
        }

      }
    }
  }
}
)
