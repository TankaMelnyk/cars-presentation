import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { AuthorInfoComponent } from './pages/author-info/author-info.component';
import { DetailsComponent } from './pages/details/details.component';
import { FooterComponent } from './common/blocks/footer/footer.component';
import { HeaderComponent } from './common/blocks/header/header.component';
import { RouterModule } from "@angular/router";
import { CardComponent } from './common/blocks/card/card.component';
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { MatIconModule,
         MatCardModule,
         MatButtonModule,
         MatInputModule,
         MatExpansionModule,
         MatCheckboxModule,
         MatTabsModule,
         MatMenuModule,
         MatSelectModule,
         MatTableModule } from '@angular/material';
import { HoverDirective } from "./hover.directive";
import { SearchComponent } from './common/elements/search/search.component';
import { SidebarComponent } from './common/blocks/sidebar/sidebar.component';
import { SliderComponent } from './common/blocks/slider/slider.component';
import { CarouselModule } from 'ngx-bootstrap';
import { TableComponent } from './common/blocks/table/table.component';
import { CarsLoaderService } from "./services/cars-loader.service";
import { VideoComponent } from './common/blocks/video/video.component';
import { BannerSliderComponent } from './common/blocks/banner-slider/banner-slider.component';
import { SortingSelectComponent } from './common/elements/sorting-select/sorting-select.component';
import { SortingDirectionComponent } from './common/elements/sorting-direction/sorting-direction.component';
import { LoadingComponent } from './common/blocks/loading/loading.component';
import { NotFoundComponent } from './common/blocks/not-found/not-found.component';
import { NoConnectionComponent } from './common/blocks/no-connection/no-connection.component';

const routes = [
  {path: '', component: MainComponent},
  {path: 'author-info', component: AuthorInfoComponent},
  {path: 'details/:id', component: DetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthorInfoComponent,
    DetailsComponent,
    FooterComponent,
    HeaderComponent,
    CardComponent,
    HoverDirective,
    SearchComponent,
    SidebarComponent,
    SliderComponent,
    TableComponent,
    VideoComponent,
    BannerSliderComponent,
    SortingSelectComponent,
    SortingDirectionComponent,
    LoadingComponent,
    NotFoundComponent,
    NoConnectionComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTabsModule,
    CarouselModule.forRoot(),
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule
  ],
  providers: [
    CarsLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
