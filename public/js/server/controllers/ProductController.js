var Product = require("../models/ProductModel");


exports.list = function list(request, response) {
    Product.find(function(err, records) {
        if (err)
            return console.log(err);
        //console.log(records);
        return response.json(records);    
    });
}

exports.create = function create(request, response) {  
    let tempBody = request.body;
    let tempRecord = new Product(tempBody);
    tempRecord.save();
    return response.json(tempRecord);
}

