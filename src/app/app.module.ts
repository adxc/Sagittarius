import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { SgrNavListComponent } from './sgr-nav-list/sgr-nav-list.component';
import { SgrWorkspaceComponent } from './sgr-workspace/sgr-workspace.component';
import { SgrFolderComponent } from './sgr-control/sgr-folder/sgr-folder.component';
import { SgrToolComponent } from './sgr-control/sgr-tool/sgr-tool.component';
import { SgrSearchComponent } from './sgr-control/sgr-search/sgr-search.component';
import { SgrNewsComponent } from './sgr-control/sgr-news/sgr-news.component';

@NgModule({
  declarations: [
    AppComponent,
    SgrNavListComponent,
    SgrWorkspaceComponent,
    SgrFolderComponent,
    SgrToolComponent,
    SgrSearchComponent,
    SgrNewsComponent,
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
