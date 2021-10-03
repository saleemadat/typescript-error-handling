abstract class ResultBase<T, E> {
  protected constructor(
    private readonly isError: boolean,
    protected readonly value?: T,
    protected readonly error?: E
  ) {}

  isErr(): this is Err<T, E> {
    return this.isError;
  }

  isOk(): this is Ok<T, E> {
    return !this.isError;
  }

  expect(message: string): T {
    if (!this.isOk()) {
      throw new Error(message);
    }
    return this.value;
  }

  unwrap(): T {
    return this.expect('Tried to unwrap Result in an error state');
  }

  unwrapOr(value: T): T {
    return this.isOk() ? this.value : value;
  }
}

export class Ok<T, E> extends ResultBase<T, E> {
  readonly value!: T;
  constructor(value: T) {
    super(false, value);
  }
}

export class Err<T, E> extends ResultBase<T, E> {
  readonly error!: E;
  constructor(error: E) {
    super(true, undefined, error);
  }
}

export type Result<T, E> = Ok<T, E> | Err<T, E>;

export namespace Result {
  export function ok<T, E>(value: T): Result<T, E> {
    return new Ok(value);
  }

  export function err<T, E>(error: E): Result<T, E> {
    return new Err(error);
  }
}
