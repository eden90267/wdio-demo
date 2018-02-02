var Page = require('./page');
var LoginPage = Object.create(Page, {

  // 測試資料
  content: {
    get: () => {
      return {
        email: 'demo@keystonejs.com',
        correctPassword: 'demo',
        worryPassword: '1234',
        errorMessage: 'The email and password you entered are not valid.',
        infoMessage: 'You have been signe22d out.',
      }
    }
  },

  // 定義元素
  email: {
    get: function () {
      return browser.element('input[name=email]');
    }
  },
  password: {
    get: function () {
      return browser.element('input[name=password]');
    }
  },
  signIn: {
    get: function () {
      return browser.element('button[type=submit]');
    }
  },
  signOut: {
    get: function () {
      return browser.element('[title="Sign Out"]');
    }
  },
  alertDanger: {
    get: function () {
      return browser.element('[data-alert-type=danger]');
    }
  },
  alertInfo: {
    get: function () {
      return browser.element('[data-alert-type=info]');
    }
  },

  // override 方法
  open: {
    value: function () {
      Page.open.call(this, 'http://demo.keystonejs.com/keystone/signin');
    }
  },
  pause: {
    value: function () {
      Page.pause.call(this, 3000);
    }
  },

  // 自訂方法
  signInClick: {
    value: function () {
      this.signIn.click();
    }
  },
  signOutClick: {
    value: function () {
      this.signOut.click();
    }
  },
  waitAlertDangerIsExist: {
    value: function () {
      this.alertDanger.waitForExist();
    }
  },
  waitAlertInfoIsExist: {
    value: function () {
      this.alertInfo.waitForExist();
    }
  },
  waitSignOutIsExist: {
    value: function () {
      this.signOut.waitForExist(7000);
    }
  },



});

module.exports = LoginPage;