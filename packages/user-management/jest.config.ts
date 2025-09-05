import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  coverageProvider: "v8",
  fakeTimers: {
    "enableGlobally": false
  },
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.[jt]sx?$": "esbuild-jest",
  },
};

export default config;
