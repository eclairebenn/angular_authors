var mongoose = require('mongoose');

module.exports = function(){

    const QuoteSchema = new mongoose.Schema({
        quote: {type: String, required: [true, "Quote content is required"], minlength: [4, "Quote must be at least 4 characters"]},
        vote: {type: Number, default: 0}
    }, {timestamps: true})

    const AuthorSchema = new mongoose.Schema({
        name : {
            type : String, 
            required: [true,"Author name is required"], 
            minlength: [4, "Author name must be at least 4 characters"], 
            unique: [true, "Author name must be unique"],
            validate: {
                validator: function(name){
                    var nameRegex = /^[a-zA-Z]+$/;
                    return nameRegex.test(name);
                },
                message: 'Name must not contain numbers or special charcters'
            },},
        quotes: [QuoteSchema]
    }, {timestamps: true})
    

    var Author = mongoose.model('authors', AuthorSchema);
    var Quote = mongoose.model('quotes', QuoteSchema);
    return {author: Author, quote: Quote};
}