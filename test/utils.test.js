const { assert } = require('chai');
const utils = require('../dist/utils');

describe('utils.trimController', function () {
  it('trimContoller should return success', () => {
    const str1 = utils.trimController('HomeController');
    assert(str1 === 'home');
    const str2 = utils.trimController('home');
    assert(str2 === 'home');
    const str3 = utils.trimController('Home');
    assert(str3 === 'home');
    const str4 = utils.trimController('HomeIndex');
    assert(str4 === 'homeIndex');
    const str5 = utils.trimController('homeIndex');
    assert(str5 === 'homeIndex');
  });

  it('trimContollerAndLower should return success', () => {
    const str1 = utils.trimControllerAndLower('HomeController');
    assert(str1 === 'home');
    const str2 = utils.trimControllerAndLower('home');
    assert(str2 === 'home');
    const str3 = utils.trimControllerAndLower('Home');
    assert(str3 === 'home');
    const str4 = utils.trimControllerAndLower('HomeIndexController');
    assert(str4 === 'homeindex');
    const str5 = utils.trimControllerAndLower('homeIndexController');
    assert(str5 === 'homeindex');
  });
});