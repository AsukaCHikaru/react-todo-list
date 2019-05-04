// This function removes spaces before str, but remains spaces in it
// ex: "  test" => "test", 
//     "  test test" => "test test"

export default function handleSpace(str) {
  if(RegExp(/./).exec(str)[0]===' ') return str.replace(/\s+(.+)/, '$1');
  else return str;
}

