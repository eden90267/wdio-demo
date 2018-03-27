var assert = require('assert');
var path = require('path');

var appRootPath = require('app-root-path');

describe('上傳檔案測試', function () {
  it('上傳檔案', () => {
    // 前往要測試的網站
    browser.url('http://the-internet.herokuapp.com/upload');
    // 要上傳的檔案路徑
    let filename = 'sign.png';
    let filePath = path.resolve(appRootPath.resolve('src'), 'img', filename);
    // 點擊上傳按鈕
    browser.chooseFile('input#file-upload', filePath);
    browser.click('input#file-submit');
    // 驗證結果
    browser.waitForExist('div#uploaded-files', 3000);
    let result = browser.getText('div#uploaded-files');
    assert.equal(filename, result);
  });
});