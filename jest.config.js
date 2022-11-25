module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'esbuild-jest',
  },
  roots: ["<rootDir>/src"],
  moduleDirectories: ["node_modules", "src"]
};