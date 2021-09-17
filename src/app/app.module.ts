import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizInputComponent } from './components/quiz-input/quiz-input.component';
import { QuizQuizDetailsComponent } from './components/quiz-quiz-details/quiz-quiz-details.component';
import { QuizQuizResultComponent } from './components/quiz-quiz-result/quiz-quiz-result.component';
import { QuizQuizOverviewComponent } from './components/quiz-quiz-overview/quiz-quiz-overview.component';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './components/timer/timer.component';
import { CountdownModule } from 'ngx-countdown';
import { ReactiveFormsModule } from '@angular/forms';
// Materials
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    QuizInputComponent,
    QuizQuizDetailsComponent,
    QuizQuizResultComponent,
    QuizQuizOverviewComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CountdownModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
