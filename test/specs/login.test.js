var expect = require('chai').expect;
var LoginPage = require('../pageobjects/login.page');

describe('第一個前端測試程式', function () {

  beforeEach(function() {
    LoginPage.pause();
  });

  it('登入失敗', function () {
    LoginPage.open();
    // 輸入帳號
    LoginPage.email.setValue('demo@keystonejs.com');
    // 輸入錯誤密碼
    LoginPage.password.setValue('1234');
    // 按送出按鈕
    LoginPage.signInClick();
    // 檢查是否出現警告訊息
    LoginPage.waitAlertDangerIsExist();
    // 警告訊息的文字內容，是否如預期
    expect(LoginPage.alertDanger.getText()).to.contain('The email and password you entered are not valid.');
  });

  it('登入成功', function() {
    // 輸入帳號
    LoginPage.email.setValue('demo@keystonejs.com');
    // 輸入正確密碼
    LoginPage.password.setValue('demo');
    // 按送出按鈕
    LoginPage.signInClick();
    // 檢查是否存在登出連結
    LoginPage.waitSignOutIsExist();
  });

  it('登出', function() {
    // 點選登出
    LoginPage.signOutClick();
    // 檢查是否出現登出成功的訊息
    LoginPage.waitAlertInfoIsExist();
    expect(LoginPage.alertInfo.getText()).to.contain('You have been signed out.');
  });
});