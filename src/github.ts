import { Err, Ok, Result } from "./errors";

export class ApiError extends Error {
  public code: number;
  public error: { error: { code: number; message: string; type: string; traceId: string; timestamp: string}; };
  constructor(code: number) {
    super();
    this.code = code;
    this.error = {
      error: {
        code: this.code,
        timestamp: new Date().toISOString(),
        message: this.message,
        type: 'ApiError',
        traceId: "423947203423"
      }
  }
}
}

export class StripeVirtualCardNotFoundError extends ApiError {

  constructor(virtualCardId: string) {
    super(500);
    this.name = StripeVirtualCardNotFoundError.name;
    this.message = `Unable to find Stripe Virtual Card: ${virtualCardId}`;
    this.error = {
      error: {
        code: this.code,
        timestamp: new Date().toISOString(),
        message: this.message,
        type: 'ApiError',
        traceId: "423947203423"
      }
  }
}
}

async function makeAxiosRequest(bool: Boolean = true): Promise<Result<number, Error>> {
  if(bool) {
    return new Err(new StripeVirtualCardNotFoundError("ic_dsds"))
  }
  else{
    return new Ok(5)
  }
}

export async function getRequest(){
  const request = await makeAxiosRequest(false)
  if(request.isErr()){
    throw request.error;
  }
  return request.unwrap()
}