import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  authors = [];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors(){
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log("Got all author data back", data);
      this.authors = data['authors'];
    })
  }

  deleteAuthor(author: any){
    console.log("this is the author obj", author)
    let observable = this._httpService.deleteAuthor(author);
    observable.subscribe(data => {
      console.log("got delete data back", data);
      this.getAllAuthors();
    })
  }

}
