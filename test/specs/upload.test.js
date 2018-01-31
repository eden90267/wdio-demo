var assert = require('assert');
var path = require('path');

var appRootPath = require('app-root-path');

describe('test', function () {
  it('上傳檔案', () => {
    // 前往要測試的網站
    browser.url('http://the-internet.herokuapp.com/upload');
    // 要上傳的檔案路徑
    let filename = 'sign.png';
    let filePath = path.resolve(appRootPath.resolve('src'), 'img', filename);
    // 點擊上傳按鈕
    browser.chooseFile('#file-upload', filePath);
    browser.click('#file-submit');
    // 驗證結果
    browser.waitForExist('#uploaded-files', 3000);
    let result = browser.getText('#uploaded-files');
    assert.equal(filename, result);
  });
});