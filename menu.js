// Get the elements



const topicsHeading = document.getElementById('topic-heading');
const topicsDropdown = document.getElementById('topics-dropdown');

topicsHeading.addEventListener('click', () => {
  if (topicsDropdown.style.display === 'none' || topicsDropdown.style.display === '') {
    topicsDropdown.style.display = 'flex';
    sec4.style.position="relative";
  
     sec4.style.justifyitems="flex-end";
  } else {
    topicsDropdown.style.display = 'none';
    sec4.style.position="absolute";
  }
});




const resourcesHeading = document.getElementById('resources-heading');
const resourcesDropdown = document.getElementById('resource-dropdown');


resourcesHeading.addEventListener('click', () => {
  if (resourcesDropdown.style.display === 'none' || resourcesDropdown.style.display === '') {
    resourcesDropdown.style.display = 'flex';
    sec4.style.position="relative";
  } else {
    resourcesDropdown.style.display = 'none';
    sec4.style.position="absolute";
  }
});



const internetCultureHeading = document.getElementById('internet-culture-head');
const internetCultureDropdown = document.getElementById('internet-culture-dropdown');


internetCultureHeading.addEventListener('click', () => {
  if (internetCultureDropdown.style.display === 'none' || internetCultureDropdown.style.display === '') {
    internetCultureDropdown.style.display = 'block';
  } else {
    internetCultureDropdown.style.display = 'none';
  }
});


const gamesHead = document.getElementById('games-head');
const gamesdropdown = document.getElementById('games-dropdown');


gamesHead.addEventListener('click', () => {
  if (gamesdropdown.style.display === 'none' || gamesdropdown.style.display === '') {
    gamesdropdown.style.display = 'block';
  } else {
    gamesdropdown.style.display = 'none';
  }
});



const QAHead = document.getElementById('Q&As-head');
const QAsDropdown = document.getElementById('QAs-dropdown');

QAHead.addEventListener('click', () => {
  if (QAsDropdown.style.display === 'none' || QAsDropdown.style.display === '') {
    QAsDropdown.style.display = 'block';
  } else {
    QAsDropdown.style.display = 'none';
  }
});




const technologyHead = document.getElementById('technology-head');
const technologyDropdown = document.getElementById('technology-dropdown');

technologyHead.addEventListener('click', () => {
  if (technologyDropdown.style.display === 'none' || technologyDropdown.style.display === '') {
    technologyDropdown.style.display = 'block';
  } else {
    technologyDropdown.style.display = 'none';
  }
});




const popHead = document.getElementById('pop-head');
const popDropdown = document.getElementById('pop-dropdown');

popHead.addEventListener('click', () => {
  if (popDropdown.style.display === 'none' || popDropdown.style.display === '') {
    popDropdown.style.display = 'block';
  } else {
    popDropdown.style.display = 'none';
  }
});




const MoviesHead = document.getElementById('Movies-head');
const MoviesDropdown = document.getElementById('Movies-dropdown');

MoviesHead.addEventListener('click', () => {
  if (MoviesDropdown.style.display === 'none' || MoviesDropdown.style.display === '') {
    MoviesDropdown.style.display = 'block';
  } else {
    MoviesDropdown.style.display = 'none';
  }
});




const morecontentbutton = document.getElementById('more-content');
const seemore = document.getElementById('seemore');
const sec4 = document.getElementById('sec4id');

// Add click event listener to the button
morecontentbutton.addEventListener('click', () => {
  if (seemore.style.display === 'none' || seemore.style.display === '') {
    seemore.style.display = 'block';
    morecontentbutton.textContent="See Less";
    sec4.style.position="relative";
  } else {
    seemore.style.display = 'none';
    morecontentbutton.textContent="See More";
    sec4.style.position="absolute";
  }
});

const seeMoreSpanCommunityDivButton = document.getElementById('see-more-button-span');
const SeeMoreClass = document.getElementById('seeMore-span');

// Add click event listener to the button
seeMoreSpanCommunityDivButton.addEventListener('click', () => {
  if (SeeMoreClass.style.display === 'none' || SeeMoreClass.style.display === '') {
    SeeMoreClass.style.display = 'block';
    seeMoreSpanCommunityDivButton.textContent="See Less";
  } else {
    SeeMoreClass.style.display = 'none';
    seeMoreSpanCommunityDivButton.style.backgroundColor='transparent';
    seeMoreSpanCommunityDivButton.textContent="See More";
  }
});

const layoutSortBtn = document.getElementById('layout-sort-btn');
const layoutlist = document.getElementById('layout-sort');

layoutSortBtn.addEventListener('click', () => {
  if (layoutlist.style.display === 'none' || layoutlist.style.display === '') {
    layoutlist.style.display = 'block';
  } else {
    layoutlist.style.display = 'none';
  }
});
document.addEventListener('click', (event) => {
  if (layoutlist.style.display === 'block' && !layoutlist.contains(event.target) && !layoutSortBtn.contains(event.target)) {
    layoutlist.style.display = 'none';
  }
});



const timeSortBtn = document.getElementById('time-sort-btn');
const timelist = document.getElementById('time-sort');

timeSortBtn.addEventListener('click', () => {
  if (timelist.style.display === 'none' || timelist.style.display === '') {
    timelist.style.display = 'block';
  } else {
    timelist.style.display = 'none';
  }
});
document.addEventListener('click', (event) => {
  if (timelist.style.display === 'block' && !timelist.contains(event.target) && !timeSortBtn.contains(event.target)) {
    timelist.style.display = 'none';
  }
});



const hotSortBtn = document.getElementById('hot-sort-btn');
const hotlist = document.getElementById('hot-sort');

hotSortBtn.addEventListener('click', () => {
  if (hotlist.style.display === 'none' || hotlist.style.display === '') {
    hotlist.style.display = 'block';
  } else {
    hotlist.style.display = 'none';
  }
});
document.addEventListener('click', (event) => {
  if (hotlist.style.display === 'block' && !hotlist.contains(event.target) && !hotSortBtn.contains(event.target)) {
    hotlist.style.display = 'none';
  }
});



const countrySortBtn = document.getElementById('country-sort-btn');
const countrylist = document.getElementById('sort-country');

countrySortBtn.addEventListener('click', () => {
  if (countrylist.style.display === 'none' || countrylist.style.display === '') {
    countrylist.style.display = 'block';
  } else {
    countrylist.style.display = 'none';
  }
});
document.addEventListener('click', (event) => {
  if (countrylist.style.display === 'block' && !countrylist.contains(event.target) && !countrySortBtn.contains(event.target)) {
    countrylist.style.display = 'none';
  }
});



