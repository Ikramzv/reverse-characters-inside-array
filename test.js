const arr = [
  "f",
  "i",
  "n",
  "e",
  "",
  "p",
  "e",
  "a",
  "r",
  "",
  "h",
  "e",
  "l",
  "l",
  "o",
  "",
  "p",
  "i",
  "n",
  "e",
  "a",
  "p",
  "p",
  "l",
  "e",
  "",
  "b",
  "",
  "c",
  "u",
  "c",
  "u",
  "m",
  "b",
  "e",
  "r",
  "",
  "c",
  "a",
  "t",
];

function reverse(letters) {
  let start = 0;
  let end = letters.length - 1;
  let pre = 0;
  let endBlock = letters.length - 1;
  while (start < end) {
    if (letters[end - 1] !== "") end--;
    if (letters[start + 1] !== "") start++;
    if (letters[start + 1] !== "" && letters[end - 1] !== "") {
      start++;
      end--;
    }

    if (letters[end - 1] === "" && letters[start + 1] === "") {
      let last = end;
      while (pre <= start && last <= endBlock) {
        const storePre = letters[pre];
        const storeLast = letters[last];
        [letters[pre], letters[last]] = [storeLast, storePre];
        pre++;
        last++;
      }
      while (pre <= start) {
        let current = pre;
        while (current < endBlock) {
          const store = letters[current];
          [letters[current], letters[current + 1]] = [
            letters[current + 1],
            store,
          ];
          current++;
        }
        start--;
      }
      while (last <= endBlock) {
        last++;
        const storeLast = letters[last - 1];
        let current = start + 1;
        let store = letters[current];
        while (current < last - 1) {
          const innerStore = letters[current + 1];
          letters[current + 1] = store;
          store = innerStore;
          current++;
        }
        start++;
        letters[start] = storeLast;
      }
      while (letters[endBlock] !== "") {
        endBlock--;
      }
      while (letters[start] !== "") {
        start++;
      }
      start++;
      endBlock--;
      pre = start;
      end = endBlock;
    }
  }

  return letters;
}

console.log(reverse(arr));
