import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Angular service to get and post Dev Jokes
 */
@Injectable({
  providedIn: 'root',
})
export class DevJokeService {
  constructor(private http: HttpClient) {}

  /**
   * Get Random Joke from Node.js Serverless API
   *
   * @returns Joke JSON
   */
  getRandomjoke() {
    return this.http.get('https://backend-omega-seven.vercel.app/api/getjoke');
  }

  /**
   * Post Joke to Node.js Serverless API
   *
   * @param jokeJson
   * @returns
   */
  addJoke(jokeJson: any) {
    return this.http
      .post('https://backend-omega-seven.vercel.app/api/addjoke', jokeJson)
      .pipe(catchError(this.getError));
  }

  getError(error: any) {
    if (error.status === 201) {
      return throwError('Woo hoo, joke submitted🎉');
    } else {
      return throwError('Uh ho, something went wrong');
    }
  }
}
