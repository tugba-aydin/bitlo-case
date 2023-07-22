import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent, FooterComponent, HeaderComponent],
  exports:[HeaderComponent,FooterComponent]
})
export class CoreModule { }
