function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every(letter => {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

// mutation(['hello', 'hey']);
mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']); //true
mutation(['hello', 'Hello']); //true
mutation(['Mary', 'Army']); //true
