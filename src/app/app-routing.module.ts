import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTestComponent } from './create-test/create-test.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [{
    path: '', redirectTo: 'quiz', pathMatch: 'full'
  }, {
    path: 'home', component: HomeComponent
  }, {
    path: 'create', component: CreateTestComponent
  }, {
    path: 'add-question', component: AddQuestionComponent
  }, {
    path: 'quiz', component: QuizComponent
  }, {
    path: 'questions', component: QuestionsComponent
  }, {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
