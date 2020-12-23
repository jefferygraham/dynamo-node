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
    Key: {
        year: year,
        title: title
    }
};
docClient.get(params, function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('GetItem succeeded:', JSON.stringify(data, null, 2));
    }
});
