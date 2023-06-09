// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['mocks', '/next.config.js'],
  collectCoverage: true,
  setupFiles: ['jest-canvas-mock'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  coverageReporters: ['html', 'text', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 20.0,
      branches: 20.0,
      functions: 20.0,
      lines: 20.0
    }
  },
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
