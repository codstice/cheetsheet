/* readfile synchronous, blocking */
(()=>{
  const fs = require('fs');

  console.log('시작');
  let data = fs.readFileSync('./readme1.txt');
  console.log('1번', data.toString());
  data = fs.readFileSync('./readme2.txt');
  console.log('2번', data.toString());
  data = fs.readFileSync('./readme3.txt');
  console.log('3번', data.toString());
})();


/* readfile asynchronous, non-blocking in sequence */
(()=>{
  const fs = require('fs');
  const path = require('path');

  const filepath1 = path.resolve(__dirname, 'readme1.txt');
  const filepath2 = path.resolve(__dirname, 'readme2.txt');
  
  (async () => {
    try{
      let data = await fs.promises.readFile(filepath1, 'utf8');
      console.log(data);
      data = await fs.promises.readFile(filepath2, 'utf8');
      console.log(data);
      console.log('subsequent working...');
    }catch(e){
      console.error(e);
    }
  })();
  (()=>console.log('independent working...'))();
})();


/* striming in sequence */
(()=>{
  const fs = require('fs');

  const readStream = fs.createReadStream('./readme.txt', { highWaterMark: 16 }); // bytes;
  const data = [];

  readStream.on('data', (chunk) => { //
    data.push(chunk);
    console.log('data :', chunk, chunk.length);
  });

  readStream.on('end', () => {
    console.log('end :', Buffer.concat(data).toString());
  });

  readStream.on('error', (err) => {
    console.log('error :', err);
  });
})();
