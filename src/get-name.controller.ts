import { Request, ResponseObject, ResponseToolkit, RouteOptions } from '@hapi/hapi';
import { getRequest } from './github';

const log = console.log

export async function putWalletsAccountsHandler(request: Request, opt: ResponseToolkit): Promise<ResponseObject> {
  let response: ResponseObject;
  try {
    log(putWalletsAccountsHandler.name);
    const data = await getRequest();
    response = opt.response({data}).code(200);
  } catch (err) {
    response = opt.response(err.error).code(err.code || 500);
  }
  return response;
}

export const putWalletsAccountsHandlerOptions: RouteOptions = {
  handler: putWalletsAccountsHandler,
};
