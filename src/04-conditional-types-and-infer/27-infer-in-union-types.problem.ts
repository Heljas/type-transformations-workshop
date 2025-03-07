import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

type GetParserResult<T> = T extends () => infer TCallResult
  ? TCallResult
  : T extends
      | { parse: () => infer TPropertyCallResult }
      | { extract: () => infer TPropertyCallResult }
  ? TPropertyCallResult
  : never;

type GetParserResult2<T> = T extends
  | (() => infer TResult)
  | { parse: () => infer TResult }
  | { extract: () => infer TResult }
  ? TResult
  : never;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>
];
