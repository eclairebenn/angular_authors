import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  author = {"name": ""}
  message = "";
  vote = {"vote": ""};
  found = false;
  quoteSelected: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(this.id);
      this.getOneAuthor(this.id);
    });
  }

  getOneAuthor(id:any){
    let observable = this._httpService.getOneAuthor(id);
    observable.subscribe(data => {
      if(data['author']){
        this.found = true;
        this.author = data['author'];
      }
      else{
        this.found = false;
      }
      console.log("got data back from get one author", data);
    })
  }

  updateQuote(quote: any, val){
    quote.vote += val;
    let observable = this._httpService.updateQuote(quote, this.id)
    observable.subscribe(data => {
      console.log("got data back", data);
      this.quoteSelected = null;
      this.getOneAuthor(this.id);
      this.getOneAuthor(this.id);
    })
  }

  deleteQuote(quote:any){
    let observable = this._httpService.deleteQuote(quote, this.id);
    observable.subscribe(data => {
      console.log("got delete data back", data);
      this.getOneAuthor(this.id)
    })
  }


  // editAuthor(){
  //   console.log("my author obj before sending to edit author in service", this.author)
  //   let observable = this._httpService.editAuthor(this.author);
  //   observable.subscribe(data => {
  //     if(data['error']){
  //       this.message = data['error'];
  //     }
  //     else{
  //       this.message = "Success! You have edited author " + data['author'].name
  //     }
  //     console.log("got edit data back", data);
  //     this.getOneAuthor(this.id);
  //   })
  // }

}
