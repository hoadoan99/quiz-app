import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/shared/quiz.service';

@Component({
  selector: 'app-quiz-quiz-details',
  templateUrl: './quiz-quiz-details.component.html',
  styleUrls: ['./quiz-quiz-details.component.css']
})
export class QuizQuizDetailsComponent implements OnInit {
  questions:any[]=[];
  count = 0;
  question!:any;
  duration!:number;
  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.postCodeIdStart().subscribe((res:any)=>{
      this.questions = res.questions;
      console.log(res);
      this.question = this.questions[0];
      this.duration = res.duration;
      });
  }
  buttonPrev(){
    this.count -= 1;
      this.question = this.questions[this.count];
  }
  buttonNext(){
      this.count += 1;
      this.question = this.questions[this.count];
  }

}
