
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://127.0.0.1:3000/api/graphql/",
  documents: "src/**/*.graphql",
  generates: {
    "src/graphql/generated/": {
      preset: 'client-preset',
      plugins: ['typescript','typescript-operations','typescript-graphql-request']
    }
  }
};

export default config;
