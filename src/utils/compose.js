/**
 * Useful function for composing HOCs
 *
 * @example
 * export default compose(
 *  hoc1,
 *  hoc2
 * )(MyComponent);
 */
export const compose = (...funcs) => (Component) => {
  return funcs.reduceRight((comp, f) => f(comp), Component);
};
