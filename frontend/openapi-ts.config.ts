import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "../openapi-spec/api-spec.json",
  output: "src/client",
});
