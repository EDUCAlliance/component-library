import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"

library.add(fas, far)

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount("#app")
