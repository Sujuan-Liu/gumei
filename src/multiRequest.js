// 我先来，模拟图片加载过程 run in browser console
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image(100, 200);
    img.onload = function () {
      console.log(url, '加载完成');
      resolve(img);
    };
    img.onerror = function () {
      reject(new Error('Error at:' + url));
    };
    img.src = url;
  });
}
function multiRequest(urls, maxNum) {
  const firstMaxNum = urls.splice(0, maxNum);
  let promises = firstMaxNum.map((url, index) => {
    return loadImg(url).then(() => {
      return index;
    });
  });
  return urls
    .reduce((res, cur) => {
      return res
        .then(() => {
          return Promise.race(promises);
        })
        .then(idx => {
          promises[idx] = loadImg(cur).then(() => {
            return idx;
          });
        });
    }, Promise.resolve())
    .then(() => {
      return Promise.all(promises);
    });
}
const urls = [
  'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0515%2Fb678fb7bp00qt4hsk00wod200m80158g00it00yv.png&thumbnail=650x2147483647&quality=80&type=jpg',
  'https://yt-adp.ws.126.net/channel4/300250_aetc_20210326.jpg',
  'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0515%2Fa9723a8dj00qt4hsl0047d200u000u0g00g200g2.jpg&thumbnail=650x2147483647&quality=80&type=jpg',
  'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0515%2F3e7c1420j00qt4hsm000pd200m800hgg00it00er.jpg&thumbnail=650x2147483647&quality=80&type=jpg',
  'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0515%2Feba0cc15p00qt4hsm005yd200u000apg00it006p.png&thumbnail=650x2147483647&quality=80&type=jpg',
];
multiRequest(urls, 4).then(() => {
  console.log('finish');
});
