import { platformBrowserDynamic  } from "@angular/platform-browser-dynamic";    

import { AppModule } from "./app/app.module"; // Import the root module of the application

platformBrowserDynamic()
  .bootstrapModule(AppModule) // Bootstrap the application using the root module
  .catch((err) => console.error(err)); // Catch and log any errors during bootstrap