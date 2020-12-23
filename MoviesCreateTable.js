"use strict";
exports.__esModule = true;
var AWS = require("aws-sdk");
AWS.config.update({
    region: 'us-west-2'
});
var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
var params = {
    TableName: 'movies',
    KeySchema: [
        { AttributeName: 'year', KeyType: 'HASH' },
        { AttributeName: 'title', KeyType: 'RANGE' },
    ],
    AttributeDefinitions: [
        { AttributeName: 'year', AttributeType: 'N' },
        { AttributeName: 'title', AttributeType: 'S' },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};
dynamodb.createTable(params, function (err, data) {
    if (err) {
        console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2));
    }
    else {
        console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2));
    }
});
