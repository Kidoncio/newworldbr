import type { Config } from '@jest/types'

const makeModuleNameMapper = (srcPath, tsconfigPath) => {
  // Get paths from tsconfig
  const { paths } = require(tsconfigPath).compilerOptions

  const aliases = {}

  // Iterate over paths and convert them into moduleNameMapper format
  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '/(.*)')
    const path = paths[item][0].replace('/*', '/$1')

    aliases[key] = srcPath + '/' + path
  })

  return aliases
}

const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    ...makeModuleNameMapper('<rootDir>', './tsconfig.json'),
    'react-i18next': '<rootDir>/__mocks__/react-i18next.ts',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
}

export default config
