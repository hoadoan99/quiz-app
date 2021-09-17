import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/shared/quiz.service';

@Component({
  selector: 'app-quiz-input',
  templateUrl: './quiz-input.component.html',
  styleUrls: ['./quiz-input.component.css']
})
export class QuizInputComponent implements OnInit {
  codeId:any;
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {

  }
    // this.quizService.setCodeId(this.codeId)

  onSubmit(value:any){
    console.log(this.codeId);
    this.quizService.postCodeIdStart().subscribe((res:any)=>{
        console.log(res);
    })
  }


}
