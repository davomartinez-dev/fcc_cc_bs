function confirmEnding(str, target) {
  const result = str.slice(target.length * -1);
  return result === target ? true : false;
}

confirmEnding('Bastian', 'n');
