function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }
  const result = str.substring(0, num) + '...';
  console.log(result);
  return result;
}

// truncateString('A-tisket a-tasket A green and yellow basket', 8);
truncateString(
  'A-tisket a-tasket A green and yellow basket',
  'A-tisket a-tasket A green and yellow basket'.length,
);
