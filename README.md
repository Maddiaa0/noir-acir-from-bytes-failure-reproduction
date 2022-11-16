# noir-acir-issue-reproduction

TLDR; test.acir cannot be deserialized when it contains a right shift. It fails in the wasm with the error:

```
panicked at 'called `Result::unwrap()` on an `Err` value: LengthMismatch(4)', crates/acir/src/circuit/mod.rs:30:9
```

In `test/test.ts` there is a minimal reproduction file which illustrates the issue. One test using `compile` from `@noir-lang/noir_wasm` succeeds, however `acir_from_bytes` from the same library will fail.

If you switch the `>>` operator in `main.nr` to `<<` the test using `acir_from_bytes` will pass.
The right shift operator does not serialise correctly when being converted into the acir format.
