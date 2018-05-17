var models = require('../models/author.js')();
var Author = models.author;
var Quote = models.quote;

module.exports = {
    readAll: function(req, res){
        Author.find({}).sort('name').exec()
        .then(authors => {
            res.json({msg: "Success", authors: authors});
        })
        .catch(err => {
            res.json({msg: "Error", error: err});
        })
    },
    readOne: function(req, res){
        Author.findByIdAndUpdate(
            req.params.id,
            {$push: {
                quotes: {
                    $each: [],
                    $sort: {vote: -1}
                }
            }}
        )
        .then(author => {
            res.json({msg: "Success", author: author});
        })
        .catch(err => {
            res.json({msg: "Error", error: err});
        })
    }, 
    create: function(req, res){
        var newAuthor = new Author({
            name: req.body.name
        });
        newAuthor.save()
        .then(added => {
            res.redirect('/authors/' + added._id);
        })
        .catch(err => {
            console.log(err);
            res.json({msg: "Error", error: err});
        })
    },
    update: function(req, res){
        Author.findByIdAndUpdate(req.params.id, {
            $set: 
            {
                name: req.body.name,
            }
        }, { runValidators: true }).exec()
        .then(author => {
            res.redirect(303,'/authors/' + author._id);
        })
        .catch(err => {
            res.json({msg: "Error", error: "Cannot find the author with the given id"});
        })
    },
    addQuote: function(req, res){
        var newQuote = new Quote({
            quote: req.body.quote
        });
        newQuote.save()
        .then(quote => {
            Author.findByIdAndUpdate(req.params.id, {
                $push:{quotes: quote}
            }, { runValidators: true }).exec()
            .then(author => {
                res.redirect(303,'/authors/' + author._id);
            })
            .catch(err => {
                res.json({msg: "Error in pushing to the author doc!", error: err});
            })
        })
        .catch(err => {
            res.json({msg: "Error in creating quote!", error: err});
        })
    },
    updateQuote: function(req, res){
        Author.findOneAndUpdate(
            {"_id": req.params.authorId, "quotes._id": req.body._id},
            {
                $set: {
                    "quotes.$.vote": req.body.vote
                }
            }
        ).exec()
        .then(quote => {
            res.json({msg: "Success", quote: quote});
        })
        .catch(err => {
            res.json({msg: "Error", error: err});
        })
    },
    deleteQuote: function(req, res){
        Author.findById(req.params.authorId)
        .then(author => {
            author.quotes.id(req.params.quoteId).remove();
            author.save()
            .then(auth => {
                res.redirect(303, '/authors/' + req.params.authorId);
            })
            .catch(err => {
                res.json({msg: "Error saving author", error: err});
            })
        })
        .catch(err => {
            res.json({msg: "Error finding author", error: err});
        })
    },
    delete: function(req, res){
        Author.remove({_id: req.params.id})
        .then(author => {
            res.redirect(303,'/authors');
        })
        .catch(err => {
            res.json({msg: "Error", error: err});
        })
    },

}