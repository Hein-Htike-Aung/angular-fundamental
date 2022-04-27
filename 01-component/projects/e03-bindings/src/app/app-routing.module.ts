import { TwoWayComponent } from './two-way/two-way.component';
import { EventsComponent } from './events/events.component';
import { AttributesComponent } from './attributes/attributes.component';
import { PropertiesComponent } from './properties/properties.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: InterpolationComponent},
  {path: 'properties', component: PropertiesComponent},
  {path: 'attributes', component: AttributesComponent},
  {path: 'events', component: EventsComponent},
  {path: 'two-way', component: TwoWayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
