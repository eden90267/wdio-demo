function Page() {
  this.title = 'My Page';
}

Page.prototype.open = function (path) {
  browser.url(path);
};
Page.prototype.pause = function (milliseconds) {
  browser.pause(milliseconds);
};

module.exports = new Page();