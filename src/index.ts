import { generate } from "random-words";

const main = () => {
  const iframe = document.getElementById('msBingFrame') as HTMLIFrameElement;
  let counter = 0;

  const randomText = () => {
    const wordCount = Math.floor(Math.random() * 10) + 1;
    const generatedText = generate(wordCount);
    
    // Type guard: check if generatedText is an array
    if (Array.isArray(generatedText)) {
      return generatedText.join(' ');
    } else {
      // If it's a single string, just return it
      return generatedText;
    }
  }

  const func = () => {
    const searchString = randomText();
    iframe.src = `https://www.bing.com/search?q=${searchString}&PC=U316&form=ASDSBZ`;
    // Random interval between 20s and 90s
    const randomInterval = Math.floor(Math.random() * 70) * 1000 + 20000;

    counter++;
    console.log(`counter: ${counter}, wait: ${randomInterval}ms`);

    if (counter % 3 === 0) {
      console.log('Waiting for 4 minutes...');
      setTimeout(func, 4 * 60 * 1000); // wait for 4 minutes
    } else if (counter < 35) {
      // browser
      // 150 / 5 = 30 // search in bing
      // 20 / 5 = 4   // search via bing
      // mobile
      // 100 / 5 = 20
      setTimeout(func, randomInterval);
    }
  }

  func();
}

main();