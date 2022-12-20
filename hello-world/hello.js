// Lambda function code

module.exports.handler = async (event) => {
  console.log("Event: ", event);
  let responseMessage = "Success!";

  if (event.queryStringParameters && event.queryStringParameters["Name"]) {
    responseMessage = "Success, hello " + event.queryStringParameters["Name"] + "!";
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  };
};
