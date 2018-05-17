var authors = require('../controllers/authors.js');

module.exports = function(app){
    app.get('/authors', function(req, res) {
        authors.readAll(req, res);
    })
    app.get('/authors/:id', function(req, res) {
        authors.readOne(req, res);
    })    
    app.post('/authors', function(req, res) {
        authors.create(req, res);
    })
    app.put('/authors/:id', function(req, res){
        authors.update(req, res);
    })
    app.put('/authors/quote/:id', function(req, res){
        authors.addQuote(req, res);
    })
    app.put('/quotes/:authorId', function(req, res){
        authors.updateQuote(req, res);
    })
    app.delete('/remove/:authorId/:quoteId', function(req, res){
        authors.deleteQuote(req, res);
    })
    app.delete('/remove/:id', function(req, res) {
        authors.delete(req, res);
    })

}