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
    name: 'Cortex Game',
    slug: 'cortex-game',
    role: 'Product Manager / Front-End',
    img: 'cortex-mockups.png'
  },
  {
    id: 2,
    name: 'TreadStone Studios',
    slug: 'treadstone-studios',
    role: 'Graphic Design',
    img: 'treadstone-mockups.png'
  },
  {
    id: 3,
    name: 'TripRiff',
    slug: 'tripriff',
    role: 'Product Manager',
    img: 'cortex-mockups.png'
  },
  {
    id: 4,
    name: 'Lorem Ipsum',
    slug: 'lorem-ipsum2',
    role: 'blah blah',
    img: 'cortex-mockups.png'
  },
  {
    id: 5,
    name: 'Lorem Ipsum',
    slug: 'lorem-ipsum3',
    role: 'blah blah',
    img: 'cortex-mockups.png'
  },
];

var selectedWorks = selectItems(3, works);

module.exports = {
  Work: works,
  SelectedWork: selectedWorks
}
