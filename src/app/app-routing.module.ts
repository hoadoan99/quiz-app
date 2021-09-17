import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizInputComponent } from './components/quiz-input/quiz-input.component';
import { QuizQuizDetailsComponent } from './components/quiz-quiz-details/quiz-quiz-details.component';
import { QuizQuizOverviewComponent } from './components/quiz-quiz-overview/quiz-quiz-overview.component';
import { QuizQuizResultComponent } from './components/quiz-quiz-result/quiz-quiz-result.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/quiz-input',
    pathMatch: 'full',
  },
  {
    path: 'quiz-input',
    component: QuizInputComponent,
  },

  {
    path: 'quiz-overview', component: QuizQuizOverviewComponent
  },
  {
    path: 'quiz-details', component: QuizQuizDetailsComponent
  },
  {
    path: 'quiz-result', component: QuizQuizResultComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
