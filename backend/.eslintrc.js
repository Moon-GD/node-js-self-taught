module.exports = {
  // eslint가 올바르게 동작하기 위해서 prettier가 마지막에 extends 되어야 함
  // 추가로 eslint-config-prettier도 dev-dependency로 설치되어야 함
  extends: ['airbnb-base', 'plugin:node/recommended', 'prettier'],
};
