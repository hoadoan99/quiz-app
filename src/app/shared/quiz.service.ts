import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  codeId!: string;
  constructor(private http:HttpClient) {
  }

  setCodeId(value:string){
      this.codeId = value;
  }

  postCodeIdStart(){
    return this.http.post('http://localhost:3000/api/quiz/start',{
      code:"fafafa"
    });


  }

}
