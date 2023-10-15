function longestCommonSubstring(strings) {
  if (strings.length === 0) return '';

  let result = '';

  for (let i = 0; i < strings[0].length; i++) {
    for (let j = i + 1; j <= strings[0].length; j++) {
      let substring = strings[0].substring(i, j);

      if (strings.every(str => str.includes(substring)) && substring.length > result.length) {
        result = substring;
      }
    }
  }

  return result;
}

const strings = process.argv.slice(2);
console.log(longestCommonSubstring(strings));