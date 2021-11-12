import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('HTTP trigger function processed a request.');
  const name = req.query.name || (req.body && req.body.name);
  const responseMessage = `Hello, ${name}. This HTTP triggered function executed successfully!`;
  context.bindings.outputBlob = JSON.stringify(req, null, 2);
  context.res = {
    body: responseMessage,
  };
};

export default httpTrigger;
