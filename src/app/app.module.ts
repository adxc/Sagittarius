import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { SgrNavListComponent } from './sgr-nav-list/sgr-nav-list.component';
import { SgrWorkspaceComponent } from './sgr-workspace/sgr-workspace.component';
import { SgrFolderComponent } from './sgr-control/sgr-folder/sgr-folder.component';
import { SgrToolComponent } from './sgr-control/sgr-tool/sgr-tool.component';
import { SgrSearchComponent } from './sgr-control/sgr-search/sgr-search.component';
import { SgrNewsComponent } from './sgr-control/sgr-news/sgr-news.component';
import { SgrFolderSizePipe } from './sgr-pipe/sgr-folder-size.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { SgrWorkspaceFolderComponent } from './sgr-workspace/sgr-workspace-folder/sgr-workspace-folder.component';
import { SgrTerminalComponent } from './sgr-terminal/sgr-terminal.component';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    SgrNavListComponent,
    SgrWorkspaceComponent,
    SgrFolderComponent,
    SgrToolComponent,
    SgrSearchComponent,
    SgrNewsComponent,
    SgrFolderSizePipe,
    SgrWorkspaceFolderComponent,
    SgrTerminalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    HttpClientModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
