import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MainHeaderSectionComponent } from './main-header-section/main-header-section.component';
import { DescriptionHalfComponent } from './description-half/description-half.component';
import { ImageHalfComponent } from './image-half/image-half.component';
import { DescriptionWithImageComponent } from './description-with-image/description-with-image.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationComponent } from './application/application.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContraindicationsComponent } from './contraindications/contraindications.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OfferComponent } from './offer/offer.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    MenuComponent,
    MainHeaderSectionComponent,
    DescriptionHalfComponent,
    ImageHalfComponent,
    DescriptionWithImageComponent,
    ApplicationListComponent,
    ApplicationComponent,
    ChecklistComponent,
    FooterComponent,
    ContactFormComponent,
    ContraindicationsComponent,
    OfferComponent,
    ButtonComponent,
  ],
  exports: [
    MenuComponent,
    MainHeaderSectionComponent,
    DescriptionHalfComponent,
    ImageHalfComponent,
    DescriptionWithImageComponent,
    ApplicationListComponent,
    ChecklistComponent,
    FooterComponent,
    ContactFormComponent,
    ContraindicationsComponent,
    OfferComponent,
    ButtonComponent,
  ],
})
export class ComponentsModule {}
