import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import {FormsModule} from "@angular/forms";
import { SpcedataComponent } from './spcedata/spcedata.component';
import { SpacealldataComponent } from './spacealldata/spacealldata.component';
import { SpaceAppComponent } from './space-app/space-app.component'
import { HttpClientModule } from '@angular/common/http'; 
import { SpaceserService } from './spaceser.service';
import { ButtonComponent } from './button/button.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SpcedataComponent,
    SpacealldataComponent,
    SpaceAppComponent,
    ButtonComponent
  ],
  imports: [BrowserAnimationsModule,
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule,MatInputModule,MatButtonModule,MatIconModule
  ],
  providers: [SpaceserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
