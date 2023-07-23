import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type DefaultsType = typeof fakeDataDefaults;

export type StringType = DefaultsType["String"];
export type IntType = DefaultsType["Int"];
export type FloatType = DefaultsType["Float"];
export type BooleanType = DefaultsType["Boolean"];
export type IDType = DefaultsType["ID"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>
];
