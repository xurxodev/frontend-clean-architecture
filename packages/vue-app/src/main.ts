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
import Sidebar from "primevue/sidebar";
import Divider from "primevue/divider";
import InputNumber from "primevue/inputnumber";

const app = createApp(App);

app.use(PrimeVue);

app.component("Toolbar", Toolbar);
app.component("Button", Button);
app.component("Splitbutton", Splitbutton);

app.component("ProgressSpinner", ProgressSpinner);
app.component("Card", Card);

app.component("Sidebar", Sidebar);
app.component("Divider", Divider);
app.component("InputNumber", InputNumber);

app.mount("#app");
