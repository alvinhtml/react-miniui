module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended",  //规则默认都是关闭的，使用 eslint:recommended 启用推荐规则。参见 http://eslint.cn/docs/rules/
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "flowtype"
    ],
    "settings": {
        "react": {
            "version": "detect" //React版本
        }
    },
    "rules": {
      "flowtype/define-flow-type": 1,
      "flowtype/use-flow-type": 1
    }
};
