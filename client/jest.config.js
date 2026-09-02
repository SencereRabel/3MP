/** @type {import('jest').Config} */
export default {
  testEnvironment: "jsdom",
  preset: "ts-jest",

  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.app.json",
      },
    ],
  },

  moduleNameMapper: {
    "\\.(png|jpg|jpeg|gif|svg|webp|ico)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
