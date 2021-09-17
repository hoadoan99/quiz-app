import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuizService } from 'src/app/shared/quiz.service';
import { Router } from '@angular/router';

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
  form!: FormGroup;
  answerOptions:any;
  options:any;
  timer = 1800;
  constructor(private route: Router,private quizService: QuizService) {
    this.form = new FormGroup({
      choice: new FormControl()
    });
  }

  ngOnInit(): void {
    this.quizService.postCodeIdStart().subscribe((res:any)=>{
      this.questions = res.questions;
      console.log(res);
      this.question = this.questions[0];
      this.duration = res.duration;
      console.log(res.options);

        for (const [key, value] of Object.entries(this.question.options)) {
          console.log(`${key}: ${value}`);
          this.options.push({
            key: {key},
            value: {value},
          });
        }
      });

  }
  buttonPrev(){
     this.count -= 1;
     if (this.count <= 0) {
       this.count = 0 ;
       this.question = this.questions[this.count];
    }else{
      this.question = this.questions[this.count];
    }
    // this.form.reset();
    // console.log(this.myForm);

  }
  buttonNext(){
    this.count += 1;

    if (this.count > 19) {
      this.count = 19 ;
      this.question = this.questions[this.count];
    }else{
     this.question = this.questions[this.count];
   }
   this.form.reset();
  }
  buttonSubmit(){
  this.route.navigate(['/quiz-result']);
  }

}
