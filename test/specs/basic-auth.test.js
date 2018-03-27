var assert = require('assert');

describe('basic auth 測試', function () {
  it('basic auth', () => {
    // 前往測試頁面
    browser.url('http://admin:admin@the-internet.herokuapp.com/basic_auth')
    // 通過 basic 驗證後，取得頁面文字。
    browser.waitForExist('.example > p');
    let result = browser.getText('.example > p');
    // 檢查頁面文字
    assert.equal('Congratulations! You must have the proper credentials.', result);
  })
});