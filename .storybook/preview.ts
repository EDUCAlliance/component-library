import type { Preview } from "@storybook/vue3"
import "../src/assets/main.css"

// FontAwesome global registration for Storybook
import { setup } from "@storybook/vue3"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas)
library.add(far)
library.add(fab)

setup((app) => {
  app.component("font-awesome-icon", FontAwesomeIcon)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
