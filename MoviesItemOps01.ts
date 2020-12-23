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
  Item: {
    year: year,
    title: title,
    info: {
      plot: 'Spice is king!',
      rating: 5,
    },
  },
};

console.log('Adding a new item...');
docClient.put(params, function (err, data) {
  if (err) {
    console.error(
      'Unable to add item. Error JSON:',
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log('Added item:', JSON.stringify(data, null, 2));
  }
});
