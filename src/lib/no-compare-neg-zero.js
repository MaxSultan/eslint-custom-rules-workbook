export default {
  meta: {
    type: "problem",
    docs: {
      description: "Don't compare against negative zero",
      recommended: true,
    },
    fixable: null,
    messages: {
      unexpected:
        "Do not use the '{{operator}}' operator to compare against -0.",
    },
  },
  create(context) {
    return {
      Program(node) {
        context.report({
          node,
          messageId: "unexpected",
          data: { operator: "?" },
        });
      },
    };
  },
};
