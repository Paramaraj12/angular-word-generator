import "./polyfills";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppRoutingModule } from "./app/app-routing.module";

platformBrowserDynamic()
  .bootstrapModule(AppRoutingModule)
  .then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window["ngRef"]) {
      window["ngRef"].destroy();
    }
    window["ngRef"] = ref;

    // Otherwise, log the boot error
  })
  .catch(err => console.error(err));
