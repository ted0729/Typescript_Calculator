export const validateDivisionByZero = (expression: string): boolean => {
  return !expression.includes("/0");
};

export const validateInput = (expression: string): boolean => {
  return !(
    /[+\-*/^]$/g.test(expression) ||
    (expression.match(/\(/g) || []).length !==
      (expression.match(/\)/g) || []).length
  );
};

export const validateResultBounds = (result: number): boolean => {
  return result > Number.MIN_SAFE_INTEGER && result < Number.MAX_SAFE_INTEGER;
};
