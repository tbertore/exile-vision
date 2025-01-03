import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: ['src/resources/schema/*'],
  generates: {
    'src/generated/graphql.ts': {
      plugins: ['typescript'],
    },
  },
}

export default config
