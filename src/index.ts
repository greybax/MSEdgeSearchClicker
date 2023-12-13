import randomWords from 'random-words';

const startSearch = () => {
  const iframe = document.getElementById('msBingFrame') as HTMLIFrameElement;
  const minDelayInput = document.getElementById('minDelay') as HTMLInputElement;
  const maxDelayInput = document.getElementById('maxDelay') as HTMLInputElement;
  const searchLimitInput = document.getElementById('searchLimit') as HTMLInputElement;

  var counter = 0;
  let intervalId: number;

  const getRandomDelay = () => {
    // Generate a random delay between user-defined minimum and maximum
    const minDelay = parseInt(minDelayInput.value, 10);
    const maxDelay = parseInt(maxDelayInput.value, 10);
    return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
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

    if (counter >= parseInt(searchLimitInput.value, 10)) {
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
};

startSearch()
