/**
 * Returns the longest of the given strings.
 *
 * @param {...String} args The strings.
 * @return {String} The longest string.
 */
function longestString(...args) {
  if (!args.length) {
    return null;
  }

  return args.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    '',
  );
}

module.exports = longestString;
