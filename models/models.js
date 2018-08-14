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
    img: 'tripriff-mockups.png'
  },
  {
    id: 2,
    name: 'Cortex Game',
    slug: 'cortex-game',
    role: 'Product Manager / Front-End',
    img: 'cortex-mockups.png'
  },
  {
    id: 3,
    name: 'TreadStone Studios',
    slug: 'treadstone-studios',
    role: 'Graphic Design',
    img: 'treadstone-mockups.png'
  },
  {
    id: 4,
    name: 'Concentric Sky',
    slug: 'concentric-sky',
    role: 'Front-End',
    img: 'cortex-mockups.png'
  },
  {
    id: 5,
    name: 'FemResources',
    slug: 'femresources',
    role: 'Website Design',
    img: 'cortex-mockups.png'
  },
  {
    id: 6,
    name: 'IMDb Predictor',
    slug: 'imdb',
    role: 'Developer',
    img: 'cortex-mockups.png'
  },
  {
    id: 7,
    name: 'MBTA Helper',
    slug: 'mbta',
    role: 'Developer',
    img: 'cortex-mockups.png'
  },
];

var selectedWorks = selectItems(3, works);

module.exports = {
  Work: works,
  SelectedWork: selectedWorks
}
