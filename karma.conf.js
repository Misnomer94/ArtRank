// Karma configuration
// Generated on Mon Mar 09 2015 23:00:05 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [ 
    'bower_components/angular/angular.js',
   // 'bower_components/angular/angular.min.js',
    //'bower_components/angular/**/*.js',
    'bower_components/angular/angular-mocks.js',
    'tests/test.js',
    'public/scripts/**/*.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
});
};

 /*'use strict';

  describe('Art', function() {

    beforeEach(module('artBoard'));

    describe('art.js', function(){
      it('should create imgArt and txtArt with 3 art pieces each', inject(function($controller) {
        var ctrl = $controller('Art');

        this.imgArt = [ 
        {artist: 'Place Holder', title: 'Washington', img: '../images/600x600.gif'},
        {artist: 'Place Holder', title: 'Washi', img: '../images/300.gif'},
        {artist: 'Place Holder', title: 'Wngton', img: '../images/1000x500.gif'},];

        this.txtArt = [
        {artist: 'Place Holdeer', title: 'Abstract Art', txt: 'Placeholder texweofoiebgoegril erough oewri oergh woeirgj ekgbe riv eirg erugh ernek rioeru ier t Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder text Placeholder text Placeholder text Placeholder text'},
        {artist: 'Place Holdeer', title: 'Art of a different sort', txt: 'Placeholder text Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder  regioher wiguh  eriogh eiuotext Placeholder text Placeholder text Placeholder text'},
        {artist: 'Place Holdeer', title: 'Wahingtof', txt: 'Placeholder text Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder text Placeholder text Placeholder text Placeholder text'},];

        expect(this.imgArt.length).to.equal(3);
        expect(this.txtArt.length).to.equal(3);
      }));
});
  });//delete
  /*it('should return the correct fields of imgArt and txtArt', inject(function($controller) {
    ctrl = $controller('Art');

    this.imgArt = [
    {artist: 'Place Holder', title: 'Washington', img: '../images/600x600.gif'},
    {artist: 'Place Holder', title: 'Washi', img: '../images/300.gif'},
    {artist: 'Place Holder', title: 'Wngton', img: '../images/1000x500.gif'}];

    this.txtArt = [
    {artist: 'Place Holdeer', title: 'Abstract Art', txt: 'Placeholder texweofoiebgoegril erough oewri oergh woeirgj ekgbe riv eirg erugh ernek rioeru ier t Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder text Placeholder text Placeholder text Placeholder text'},
    {artist: 'Place Holdeer', title: 'Art of a different sort', txt: 'Placeholder text Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder  regioher wiguh  eriogh eiuotext Placeholder text Placeholder text Placeholder text'},
    {artist: 'Place Holdeer', title: 'Wahingtof', txt: 'Placeholder text Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder text Placeholder text Placeholder text Placeholder text'}];


  }));
});*/

  /*describe('input', function() {
    before(function() {
      console.log("input should be abc")
    });
    it('input should be read correctly', function(done) {
      var input = getInput();
      assert.equal('abc', getInput());
    });
  });

  describe('head to head algorithm', function() {
        var pieceOne = getPieceOne();
        var pieceTwo = getPieceTwo();
        var pieceOneElo = pieceOne.getElo();
        var pieceTwoElo = pieceTwo.getElo();
    it('winning piece should gain elo', function(done) {
        battle(pieceOne, pieceTwo);
        var pieceOneEloAfter = pieceOne.getElo();
        var pieceOneEloAfter = pieceOne.getElo();

    });
    it('losing piece should lose', function(done) {
        battle(pieceOne, pieceTwo);
    });
  });

  describe('links', function() {
    it('links should be working properly', function(done) {
      var link = getLink();
      link.goTo(function(err) {
        if (err) throw err;
        done();
      });
    });
  });

  describe('file upload', function() {
    it('files should be uploaded correctly', function(done) {

    });
  });

  describe('favorite button', function() {
    it('favorite button should add artist to user\'s favorite artits', function(done) {

    });
  });

  describe('ladder', function() {
    it('ladder should display pieces of art in correct order', function(done) {

    });
  });

  describe('flags', function() {
    it('server should receive flags that users send', function(done) {

    });
  });

  describe('connection lost', function() {
    it('should log user out if she has been disconnected for more than one minute', function(done) {

    });
  });

  describe('user log in', function() {
    it('should log user in if he enters his id and password correctly', function(done) {

    });
  });
  */
