const InfiniteScroll = require('infinite-scroll');

module.exports.infScroll = () => {
    if (typeof window !== 'undefined') {

    let elem = document.querySelector('.market-list');
    let infScroll = new InfiniteScroll( elem, {
  // options
  path: '.pagination__next',
  append: '.market-list-item',
  history: false,
});
} else {
    console.log('windows undefined')
}
}
