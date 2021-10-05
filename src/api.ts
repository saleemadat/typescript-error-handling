import { Err, Ok, Result } from "./errors";

export class ApiError extends Error {
  public code: number;
  public type: string;
  public traceId: string;
  public error: { error: { code: number; message: string; type: string; traceId: string; timestamp: string} };
  
  constructor(code: number, traceId: string, type: string) {
    super();
    this.code = code;
    this.type = type;
    this.traceId = traceId;
    this.error = {
      error: {
        code,
        timestamp: new Date().toISOString(),
        message: this.message,
        type,
        traceId
      }
  }
}
}

export class StripeVirtualCardNotFoundError extends ApiError {
  constructor(virtualCardId: string) {
    super(500, "traceId", "ApiError");
    this.name = StripeVirtualCardNotFoundError.name;
    this.message = `Unable to find Stripe Virtual Card: ${virtualCardId}`;
    this.error = {
      error: {
        code: this.code,
        timestamp: new Date().toISOString(),
        message: this.message,
        type: this.type,
        traceId: this.traceId
      }
  }
}
}

async function makeAxiosRequest(bool: Boolean = true): Promise<Result<number, Error>> {

  try{
    throw new Error();
    return new Ok(5)
  }
  catch(e){
    console.log(e)
    return new Err(new StripeVirtualCardNotFoundError("ic_dsds"))
  }
}

export async function getRequest(){
  const request = await makeAxiosRequest(false)
  
  if(request.isErr()){
    throw request.error;
  }
  return request.unwrap()
}