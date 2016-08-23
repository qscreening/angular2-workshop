import { Component } from "@angular/core";
import { ReposService } from "./repos.service";

@Component({
  selector: 'repo-list',
  template: `<h3>Fetching Angular organization repos using GitHub API </h3>
              <div class="row">
                <div *ngFor="let repo of reposList" class="panel panel-default">
                  <div class="panel-heading">
                    <h3 class="panel-title">{{repo.name}}</h3>
                  </div>
                  <div class="panel-body">
                    {{repo.description}}
                  </div>
                </div>
              </div>

            `,
  providers: [ReposService]
})
export class RepoListComponent {
  reposList: any;
  constructor(private _repos: ReposService){
    this._repos.list().subscribe(
                                  (data) => {this.reposList = data},
                                  (err) => {console.log(err)}
                                )
  }



}
