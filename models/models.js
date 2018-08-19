function selectItems(num, arr) {
  let returnArr = [];

  for (var i=0; i<arr.length; i++) {
    if(i === num) {
      return returnArr;
    }

    returnArr.push(arr[i]);
  }
}

// Work data
var works = [
  {
    id: 1,
    name: 'TripRiff',
    slug: 'tripriff',
    role: 'Product Manager / Front-End',
    img: 'tripriff-mockup.png',
    mockup: 'tripriff-mockup.png',
    summary: 'A platform for recording, sharing and gaining statistical insights into one\'s experiences around the world. Built by travelers, for travelers.',
    link: 'https://www.tripriff.com'
  },
  {
    id: 2,
    name: 'Cortex Game',
    slug: 'cortex-game',
    role: 'Product Manager / Front-End',
    img: 'cortex-mockup.png',
    mockup: 'cortex-mockup.png',
    summary: 'A fun and addictive game that leverages scientific research to improve working memory and fluid-intelligence (IQ).',
    link: 'http://www.cortexgame.com'
  },
  {
    id: 3,
    name: 'TreadStone Studios',
    slug: 'treadstone-studios',
    role: 'Co-Founder',
    img: 'treadstone.png',
    mockup: 'treadstone-mockup.png',
    summary: 'A website development company dedicated to providing clean and powerful designs to suit the needs of small-businesses and organizations.',
    link: 'https://www.treadstonestudios.com'
  },
  {
    id: 4,
    name: 'Concentric Sky',
    slug: 'concentric-sky',
    role: 'Front-End Intern',
    img: 'csky-mockup.png',
    mockup: 'csky-mockup.png',
    summary: 'An enterprise web and mobile app development firm providing end-to-end product solutions for clients such as National Geographic and the United Nations.',
    link: 'https://www.concentricsky.com/'
  },
  {
    id: 5,
    name: 'FemResources',
    slug: 'femresources',
    role: 'Website Designer',
    img: 'femresources.png',
    mockup: 'femresources.png',
    summary: 'A nonprofit committed to helping qualified technical women secure and keep the job they want, and helping employers attract, hire and advance tech women in their workforce.',
    link: 'https://www.femresources.org/'
  },
  {
    id: 6,
    name: 'IMDb Predictor',
    slug: 'imdb',
    role: 'Data Analyst / Developer',
    img: 'imdb.png',
    mockup: 'imdb-mockup.png',
    summary: 'A simple web app I created to supplement the final project in my business analytics class at Babson. The web app uses a multiple linear regression model with 12 variables to predict a movie\'s IMDb score.',
    link: 'http://imdb-scores.herokuapp.com/'
  }
];

var selectedWorks = selectItems(3, works);

module.exports = {
  Work: works,
  SelectedWork: selectedWorks
}
