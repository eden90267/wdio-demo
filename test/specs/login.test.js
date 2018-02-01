var expect = require('chai').expect;
var LoginPage = require('../pageobjects/login.page');

var config = require('./test-data');

describe('第一個前端測試程式', function () {

  beforeEach(function() {
    LoginPage.pause();
  });

  it('登入失敗', function () {
    LoginPage.open();
    // 輸入帳號
    // LoginPage.email.setValue(config.email); // 第二種導入測試資料的管理方式
    LoginPage.email.setValue(LoginPage.content.email);
    // 輸入錯誤密碼
    LoginPage.password.setValue(LoginPage.content.worryPassword);
    // 按送出按鈕
    LoginPage.signInClick();
    // 檢查是否出現警告訊息
    LoginPage.waitAlertDangerIsExist();
    // 警告訊息的文字內容，是否如預期
    expect(LoginPage.alertDanger.getText()).to.contain(LoginPage.content.errorMessage);
  });

  it('登入成功', function() {
    // 輸入帳號
    LoginPage.email.setValue(LoginPage.content.email);
    // 輸入正確密碼
    LoginPage.password.setValue(LoginPage.content.correctPassword);
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
    expect(LoginPage.alertInfo.getText()).to.contain(LoginPage.content.infoMessage);
  });
});