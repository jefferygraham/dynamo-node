"use strict";
exports.__esModule = true;
var AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-west-2',
    endpoint: 'http://dynamodb.us-west-2.amazonaws.com'
});
var table = 'movies';
var year = 2021;
var title = 'Dune';
var params = {
    TableName: table,
    Item: {
        year: year,
        title: title,
        info: {
            plot: 'Spice is king!',
            rating: 5
        }
    }
};
console.log('Adding a new item...');
docClient.put(params, function (err, data) {
    if (err) {
        console.error('Unable to add item. Error JSON:', JSON.stringify(err, null, 2));
    }
    else {
        console.log('Added item:', JSON.stringify(data, null, 2));
    }
});
