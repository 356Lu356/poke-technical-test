export function countVowels(names: string[]): Record<string, number> {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelCount: Record<string, number> = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  names.forEach((name) => {
    name
      .toLowerCase()
      .split("")
      .forEach((char) => {
        if (vowels.includes(char)) {
          vowelCount[char]++;
        }
      });
  });

  return vowelCount;
}
