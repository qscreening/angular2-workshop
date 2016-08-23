import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ReposService {
  apiUrl: string = "https://api.github.com/";

  constructor(private _http: Http){

  }

  list(){
    return this._http.get(
                          this.apiUrl + "orgs/angular/repos"
                        )
                        .map((res: Response) => res.json())
  }
}
