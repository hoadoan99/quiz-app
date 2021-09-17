import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/shared/quiz.service';

@Component({
  selector: 'app-quiz-input',
  templateUrl: './quiz-input.component.html',
  styleUrls: ['./quiz-input.component.css']
})
export class QuizInputComponent implements OnInit {
  codeId:any;
  status = false;
  codeWrong = false;
  constructor(private route: Router,private quizService:QuizService) { }

  ngOnInit(): void {

  }
    // this.quizService.setCodeId(this.codeId)

  onSubmit(value:any){
      if (value.codeId != undefined &&  value.codeId != null && value.codeId != ' ' && this.codeId == 'fafafa' ) {
        this.quizService.setCodeId(value.codeId)
        this.route.navigate(['/quiz-overview']);
        this.status = false;
        this.codeWrong = false;
      }  else{
      this.status = true;
      this.codeWrong = true;
      }
      //  console.log(value.code);
    // this.quizService.postCodeIdStart().subscribe((res:any)=>{
    //     console.log(res);
    // })
  }


}
