
export default function  profTitle(title) {
  let space = false
  let firstWord = '';
  let secondWord = '';
  for (let i = 0; i < title.length; i ++) {
    if (space !== true) {
        firstWord += title[i]
        if (title[i]=== ' ') {
          space = true;
        }
    } else {
      secondWord += title[i]
    }
  }
  return [firstWord.trim(), secondWord]
}
