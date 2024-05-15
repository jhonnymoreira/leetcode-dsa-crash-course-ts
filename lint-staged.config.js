/** @type {import('lint-staged').Config} */
const config = {
  '*.ts': 'eslint --fix',
  '**/*': 'prettier --write --ignore-unknown',
};

export default config;
