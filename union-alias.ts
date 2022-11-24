type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor // This is a literal type
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);

/** . ENUMS */

enum LoadingState {
  preLoadin = "Preloading",
  loading = "Loading",
  loaded = "Loaded",
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log("ENUM: ", isLoading(LoadingState.preLoadin) ? "true" : "false");

/**
 * Literal Type
 */

enum Conversion {
  AS_NUMBER = "asNumber",
  AS_STRING = "asString",
}

function combineThings(
  input1: number | string,
  input2: number | string,
  conversion: Conversion.AS_NUMBER | Conversion.AS_STRING
) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    conversion === "asNumber"
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

console.log("Number: ", combineThings("100", "250", Conversion.AS_NUMBER));
console.log("String: ", combineThings(100, 250, Conversion.AS_STRING));

/**
 * Aliastype
 */
