import rule from "./no-compare-neg-zero.js";
import { RuleTester } from "eslint";

const ruleTester = new RuleTester();

ruleTester.run("no-compare-neg-zero", rule, {
  valid: [
    "x === 0",
    "0 === x",
    "x == 0",
    "0 == x",
    "x === '0'",
    "'0' === x",
    "x == '0'",
    "'0' == x",
    "x === '-0'",
    "'-0' === x",
    "x == '-0'",
    "'-0' == x",
    "x === -1",
    "-1 === x",
    "x < 0",
    "0 < x",
    "x <= 0",
    "0 <= x",
    "x > 0",
    "0 > x",
    "x >= 0",
    "0 >= x",
    "x != 0",
    "0 != x",
    "x !== 0",
    "0 !== x",
    "Object.is(x, -0)",
  ],

  invalid: [
    {
      code: "x === -0",
      errors: [
        {
          messageId: "unexpected",
          data: { operator: "===" },
          type: "BinaryExpression",
        },
      ],
    },
    {
      code: "-0 === x",
      errors: [
        {
          messageId: "unexpected",
          data: { operator: "===" },
          type: "BinaryExpression",
        },
      ],
    },
    {
      code: "x == -0",
      errors: [
        {
          messageId: "unexpected",
          data: { operator: "==" },
          type: "BinaryExpression",
        },
      ],
    },
    {
      code: "-0 == x",
      errors: [
        {
          messageId: "unexpected",
          data: { operator: "==" },
          type: "BinaryExpression",
        },
      ],
    },
    {
      code: "x > -0",
      errors: [
        {
          messageId: "unexpected",
          data: { operator: ">" },
          type: "BinaryExpression",
        },
      ],
    },
    {
      code: "-0 > x",
      errors: [
        {
          messageId: "unexpected",
          data: { operator: ">" },
          type: "BinaryExpression",
        },
      ],
    },
    {
      code: "x >= -0",
      errors: [
        {
          messageId: "unexpected",
          data: { operator: ">=" },
          type: "BinaryExpression",
        },
      ],
    },
    {
      code: "-0 >= x",
      errors: [
        {
          messageId: "unexpected",
          data: { operator: ">=" },
          type: "BinaryExpression",
        },
      ],
    },
    {
      code: "x < -0",
      errors: [
        {
          messageId: "unexpected",
          data: { operator: "<" },
          type: "BinaryExpression",
        },
      ],
    },
    {
      code: "-0 < x",
      errors: [
        {
          messageId: "unexpected",
          data: { operator: "<" },
          type: "BinaryExpression",
        },
      ],
    },
    {
      code: "x <= -0",
      errors: [
        {
          messageId: "unexpected",
          data: { operator: "<=" },
          type: "BinaryExpression",
        },
      ],
    },
    {
      code: "-0 <= x",
      errors: [
        {
          messageId: "unexpected",
          data: { operator: "<=" },
          type: "BinaryExpression",
        },
      ],
    },
  ],
});
