import { SpeakerService } from './speakers/speaker.service';
import { CountdownService } from './countdown/countdown.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TimeBoxComponent } from './countdown/time-box/time-box.component';
import { SpeakerDetailComponent } from './speakers/speaker-detail/speaker-detail.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		CountdownComponent,
		AboutUsComponent,
		SpeakersComponent,
		NewsletterFormComponent,
		MainBannerComponent,
		MainPageComponent,
		TimeBoxComponent,
		SpeakerDetailComponent,
		FooterComponent
	],
	imports: [
		MdButtonModule,
		MdDialogModule,
		FlexLayoutModule,
		BrowserAnimationsModule,
		BrowserModule
	],
	entryComponents: [ SpeakerDetailComponent ],
	providers: [ CountdownService, SpeakerService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }