module.exports = {
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
  };
  