import { acir_from_bytes, compile } from "@noir-lang/noir_wasm";
import { readFileSync } from "fs";
import { resolve } from "path";

/**
 * NOTE:
 *
 * If there is no test.acir inside the build folder run `make comp` or cd into circuits and run `nargo compile test`
 *
 */

describe("Reproduction", () => {
  it("Compile from @noir-lang/noir_wasm works with >> (rsh)", async () => {
    const cirPath = resolve(__dirname, "../circuits/src/main.nr");
    const compiled = compile(cirPath);
    const acir = compiled.circuit;
    console.log(acir);
  });

  it("acir_from_bytes from @noir-lang/noir_wasm does not work with >> (rsh)", async () => {
    const acirPath = resolve(__dirname, "../circuits/build/test.acir");
    const file = readFileSync(acirPath);

    const acir = acir_from_bytes(file);
    console.log(acir);
  });
});
