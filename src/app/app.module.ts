import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CreateTestComponent,
    AddQuestionComponent,
    QuizComponent,
    HomeComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
