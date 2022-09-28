const main = () => {
  const iframe = document.getElementById('msBingFrame') as any;
  let counter = 0;
  let intervalId: number;

  const randomText = () => {
    return (Math.random() + 1).toString(36).substring(2);
  }

  const func = () => {
    const searchString = randomText();
    iframe.src = `https://www.bing.com/search?q=${searchString}`;
    counter++;
    console.log('counter', counter);
    // browser
    // 150 / 5 = 30 // search in bing
    // 20 / 5 = 4   // search via bing
    // mobile
    // 100 / 5 = 20
    if (counter === 35) {
      clearInterval(intervalId);
    }
  }

  intervalId = setInterval(func, 3000) as any;
}

main();
