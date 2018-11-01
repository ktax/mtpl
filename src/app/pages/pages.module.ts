import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [CommonModule, ComponentsModule],
  declarations: [HomeComponent, OfferComponent, EquipmentComponent, ContactComponent],
})
export class PagesModule {}
