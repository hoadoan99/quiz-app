import { Component, OnInit } from '@angular/core';
import { QuizService } from './../../shared/quiz.service';

@Component({
  selector: 'app-quiz-quiz-overview',
  templateUrl: './quiz-quiz-overview.component.html',
  styleUrls: ['./quiz-quiz-overview.component.css']
})
export class QuizQuizOverviewComponent implements OnInit {
  testName!:string;
  duration!:number;
  passScore!:number;
  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.postCodeIdStart().subscribe((res:any)=>{
    // console.log(res);
    this.testName = res.testName;
    this.duration = res.duration;
    this.passScore = res.passScore;
    });
  }

}
