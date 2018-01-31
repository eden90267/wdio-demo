var assert = require('assert');

describe('第一個前端測試程式', function () {

  beforeEach(function() {
    browser.pause(3000);
  });

  it('登入失敗', function () {
    browser.url('http://demo.keystonejs.com/keystone/signin');
    // 輸入帳號
    browser.setValue('input[name=email]', 'demo@keystonejs.com');
    // 輸入錯誤密碼
    browser.setValue('input[name=password]', '1234');
    // 按送出按鈕
    browser.click('button[type=submit]');
    // 檢查是否出現警告訊息
    browser.waitForExist('[data-alert-type=danger]');
    let alertText = browser.getText('[data-alert-type=danger]');
    // 警告訊息的文字內容，是否如預期
    assert.equal('The email and password you entered are not valid.', alertText);
  });

  it('登入成功', function() {
    // 輸入帳號
    browser.setValue('input[name=email]', 'demo@keystonejs.com');
    // 輸入正確密碼
    browser.setValue('input[name=password]', 'demo');
    // 按送出按鈕
    browser.click('button[type=submit]');
    // 檢查是否存在登出連結
    browser.waitForExist('[title="Sign Out"]', 7000);
  });

  it('登出', function() {
    // 點選登出
    browser.click('[title="Sign Out"]');
    // 檢查是否出現登出成功的訊息
    browser.waitForExist('[data-alert-type=info]');
    let infoText = browser.getText('[data-alert-type=info]');
    assert.equal('You have been signed out.', infoText);
  });
});