import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  author = {"name": ""};
  id: any;
  quote = {"quote": ""};
  message= [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getOneAuthor(this.id);
    });
  }

  getOneAuthor(id:any){
    let observable = this._httpService.getOneAuthor(id);
    observable.subscribe(data => {
      this.author = data['author'];
      console.log("got data back from get one author", data);
    })
  }

  addQuote(){
    console.log("the quote to send is ", this.quote);
    let observable = this._httpService.addQuote(this.quote, this.id);
    observable.subscribe(data => {
      console.log("got add product data back", data);
      this.quote = {"quote": ""};
      if(data['error']){
        console.log(data['error'].errors)
        this.message = [];
        for(let item in data['error'].errors){
          console.log("the quote error message is", data['error'].errors[item].message)
          this.message.push(data['error'].errors[item].message);
        }        
      }
      else{
        this._router.navigateByUrl('/quotes/' + this.id)
      }
    })
  }

}
