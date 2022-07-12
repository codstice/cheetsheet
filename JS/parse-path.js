/* path parsing - node.js */

const path = require('path');

path.sep; // "/", 경로 구분자, {Windows : "\", POSIX : "/"}
path.delimiter; // ":", 환경변수 구분자, {Windows : ";", POSIX : ":"}

path.dirname(__filename); // "/home/codstice/nodework"
path.extname(__filename); // ".js"
path.basename(__filename); // "parse-path.js"

path.parse(__filename) ;
{
  root:'/',
  dir:'/home/codstice/nodework',
  base:'parse-path.js',
  ext:'.js',
  name:'parse-path'
}

path.normalize(__filename); // "/home/codstice/nodework/parse-path.js", 경로 구분자를 Window와 POSIX중 현재 운영체제에 맞춰 알아서 재설정
path.relative(__filename); // "../../../.."
path.join(__dirname, '..', 'pywork'); // "/home/codstice/pywork"


/* url parsing - node.js, browser */

const url = new URL("https://test.com/api/getTicks?param1=foo&param2=bar");
url.searchParams.get('param1'); // foo
url.searchParams.delete('param1');
url.searchParams.append('param3','baz');
url.searchParams.has('page'); // false
url.searchParams.keys();
url.searchParams.values();
url.searchParams.forEach((value,key)=>{console.log(value,key)});

console.log(url);
{ 
  host: "test.com"
  hostname: "test.com"
  href: "https://test.com/api/getTicks?param2=2&param3=333"
  origin: "https://test.com"
  pathname: "/api/getTicks"
  port: ""
  protocol: "https:"
  hash: ""
}
