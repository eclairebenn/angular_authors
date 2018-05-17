import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get('/authors');
  }
  getOneAuthor(id: any){
    return this._http.get('/authors/' + id)
  }
  addAuthor(newAuthor){
    return this._http.post('/authors', newAuthor);
  }
  editAuthor(updateAuthor){
    return this._http.put('/authors/' + updateAuthor._id, updateAuthor)
  }
  deleteAuthor(author: any){
    return this._http.delete('/remove/' + author._id);
  }

  addQuote(newQuote, authorId){
    return this._http.put('/authors/quote/'+ authorId, newQuote);
  }

  updateQuote(updateQuote, authorId){
    return this._http.put('quotes/'+ authorId, updateQuote)
  }

  deleteQuote(deleteQuote, authorId){
    return this._http.delete('remove/'+ authorId + '/'+ deleteQuote._id)
  }
}
