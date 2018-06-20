import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SgrNavListComponent } from './sgr-nav-list/sgr-nav-list.component';
import { SgrWorkspaceComponent } from './sgr-workspace/sgr-workspace.component';

@NgModule({
  declarations: [
    AppComponent,
    SgrNavListComponent,
    SgrWorkspaceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
