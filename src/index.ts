import randomWords from 'random-words';

const main = () => {
  const iframe = document.getElementById('msBingFrame') as HTMLIFrameElement;
  let counter = 0;
  let intervalId: number;

  const getRandomDelay = () => {
    // Generate a random delay between 10,000 and 25,000 milliseconds
    return Math.floor(Math.random() * (25000 - 10000 + 1)) + 10000;
  }

  const randomText = () => {
    // Generate a random number between 1 and 10
    const wordCount = Math.floor(Math.random() * 10) + 1; 
    const randomWordsArray = randomWords(wordCount);

    // Join words until the length is at least 100 symbols
    while (randomWordsArray.join(' ').length < 100) {
      randomWordsArray.push(randomWords(1)[0]);
    }

    return randomWordsArray.join(' ');
  }

  const func = () => {
    const searchString = randomText();
    iframe.src = `https://www.bing.com/search?q=${searchString}&PC=U316&FORM=CHROMN`;
    counter++;
    console.log('counter', counter);

    if (counter === 35) {
      clearInterval(intervalId);
    } else {
      // Schedule the next search with a random delay
      const delay = getRandomDelay();
      setTimeout(func, delay);
    }
  }

  // Start the initial search
  const initialDelay = getRandomDelay();
  setTimeout(func, initialDelay);
}

main();
