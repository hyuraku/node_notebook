
exports.handler = async (event) => {
  // TODO implement
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};


const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({
  apiVersion: '2012-08-10'
});


exports.handler = async (event) => {
  const type = event.type;
  if (type == 'all') {
    const params = {
      TableName: 'compare-yourself'
    };
    try{
      const data = await dynamodb.scan(params).promise();
      const items = data.Items.map(
        (dataField) => {
          return {
            age: +dataField.Age.N,
            height: +dataField.Height.N,
            income: +dataField.Income.N
          };
        }
      );
      return items
    }catch{
      console.log(err);
      return err;
    }
  } else if (type == 'single') {
    const params = {
      Key: {
        "UserId": {
          S: "user_0.012634276781234854"
        }
      },
      TableName: "compare-yourself"
    };
    try{

    }catch{
      console.log(err);
      return err;
    }
    dynamodb.getItem(params), function(err, data) {
      if (err) {
        
      } else {
        console.log(data);
        callback(null, [{
          age: +data.Item.Age.N,
          height: +data.Item.Height.N,
          income: +data.Item.Income.N
        }]);
      }
    });
  } else {
    return 'Something went wrong!';
  }
};

exports.handler = (event, context, callback) => {
  const type = event.type;
  if (type == 'all') {
    const params = {
      TableName: 'compare-yourself'
    };
    dynamodb.scan(params, function(err, data) {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        console.log(data);
        const items = data.Items.map(
          (dataField) => {
            return {
              age: +dataField.Age.N,
              height: +dataField.Height.N,
              income: +dataField.Income.N
            };
          }
        );
        callback(null, items);
      }
    });
  } else if (type == 'single') {
    const params = {
      Key: {
        "UserId": {
          S: "user_0.012634276781234854"
        }
      },
      TableName: "compare-yourself"
    };
    dynamodb.getItem(params, function(err, data) {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        console.log(data);
        callback(null, [{
          age: +data.Item.Age.N,
          height: +data.Item.Height.N,
          income: +data.Item.Income.N
        }]);
      }
    });
  } else {
    callback('Something went wrong!');
  }
};