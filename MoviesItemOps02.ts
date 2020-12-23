import * as AWS from 'aws-sdk';

const docClient = new AWS.DynamoDB.DocumentClient({
  region: 'us-west-2',
  endpoint: 'http://dynamodb.us-west-2.amazonaws.com',
});

let table = 'movies';

let year = 2021;
let title = 'Dune';

const params = {
  TableName: table,
  Key: {
    year: year,
    title: title,
  },
};

docClient.get(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('GetItem succeeded:', JSON.stringify(data, null, 2));
  }
});
