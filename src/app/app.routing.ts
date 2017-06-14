import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";
const appRoutes = [
{path:"",component:HomeComponent},
{path:"about",component:AboutComponent},
{path:"contact",component:ContactComponent},
{path:"**",component:NotFoundComponent}

];
export const appRouting=RouterModule.forRoot(appRoutes);