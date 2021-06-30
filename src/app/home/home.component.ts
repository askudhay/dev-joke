import { Component, OnInit } from '@angular/core';
import { DevJokeService } from 'src/app/dev-joke.service';

/**
 * Home component that displays Random API fetched from Node.js
 * Serverless API
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  questionStr: string = '';
  punchLineStr: string = '';
  constructor(private jokeSvc: DevJokeService) {}

  /**
   * Get Joke and display on the Page when this component is mounted
   */
  ngOnInit() {
    this.getJoke();
  }

  /**
   * Invokes Angular Dev Joke Service to get Joke
   */
  getJoke() {
    this.questionStr = '⏳⏳⏳';
    this.punchLineStr = '';
    this.jokeSvc.getRandomjoke().subscribe(
      (data: any) => (
        console.log(data),
        (this.questionStr = data[0].question),
        (this.punchLineStr = data[0].punchline)
      ),
      (err: any) => {
        this.questionStr = 'Uh ho, something went wrong😔';
      }
    );
  }

  /**
   * Open Twitter URL with Tweet details (Content, Hashtag)
   */
  tweetJoke() {
    let msg =
      this.questionStr +
      '\n\n' +
      this.punchLineStr +
      '\n\n' +
      'More Dev jokes => https://dev-joke.vercel.app/' +
      '\n\n';
    let url =
      'https://twitter.com/intent/tweet?text=' +
      escape(msg) +
      '&hashtags=' +
      'devjoke';
    window.open(url);
  }
}
