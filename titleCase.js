function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function titleCase(str) {
  const newStrArr = [];
  const result = str.split(' ').map(word => {
    jsUcfirst(word.toLowerCase());
    newStrArr.push(jsUcfirst(word.toLowerCase()));
  });
  console.log(newStrArr.join(' '));
  return newStrArr.join(' ');
}

titleCase("I'm a little tea pot");
