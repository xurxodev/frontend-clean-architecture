import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";

import "primeflex/primeflex.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Splitbutton from "primevue/splitbutton";
import ProgressSpinner from "primevue/progressspinner";
import Card from "primevue/card";

const app = createApp(App);

app.use(PrimeVue);

app.component("Toolbar", Toolbar);
app.component("Button", Button);
app.component("Splitbutton", Splitbutton);
app.component("ProgressSpinner", ProgressSpinner);
app.component("Card", Card);

app.mount("#app");
