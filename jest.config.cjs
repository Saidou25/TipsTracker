
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    // Other Jest configurations
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Mock CSS imports
      '\\.(png|jpg|jpeg|gif|svg)$': 'identity-obj-proxy', // Mock image files
    },
    transformIgnorePatterns: [
      "/node_modules/(?!firebase|@firebase|other-packages-to-transform)"
    ],
};
