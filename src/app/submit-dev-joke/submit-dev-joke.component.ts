import { Component, OnInit } from '@angular/core';
import { DevJokeService } from 'src/app/dev-joke.service';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Submit-Dev-Joke component that takes Joke details from User and
 * Post it Node.js Serverless API
 */
@Component({
  selector: 'app-submit-dev-joke',
  templateUrl: './submit-dev-joke.component.html',
  styleUrls: ['./submit-dev-joke.component.css'],
})
export class SubmitDevJokeComponent {
  // Properties
  show: boolean = false;
  msg: string = '';

  constructor(private fb: FormBuilder, private jokeSvc: DevJokeService) {}

  // Reactive Form Group with Required Validators for Question & Punchline
  devJokeForm = this.fb.group({
    name: [''],
    twitter: [''],
    question: ['', Validators.required],
    punchline: ['', Validators.required],
  });

  /**
   * Post Joke data to Node.js Serverless API using Joke Service
   * Only when the Form has been filled wit all required fields
   */
  postData() {
    if (
      this.devJokeForm.get('question').value.trim().length === 0 ||
      this.devJokeForm.get('punchline').value.trim().length === 0
    ) {
      this.devJokeForm.get('question').setValue('');
      this.devJokeForm.get('punchline').setValue('');
      return;
    }
    if (this.devJokeForm.valid) {
      this.show = true;
      this.msg = '⏳⏳⏳';
      this.jokeSvc.addJoke(this.devJokeForm.value).subscribe(
        (data) => {},
        (err) => {
          this.msg = err;
        }
      );
    }
  }
}
