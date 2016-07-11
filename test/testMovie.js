var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080/moviesurl");


//----------------AllMOvie Testing-----------------------------------
describe("Testing the movie all", function(err){
  it("should handle all the movie request", function(done){
    url
        .get("/allMovies")
        .expect(200)
        .expect('Content-Type', /json/)
         .end(function(err,res){
           should.not.exist(err);
           var myObj = JSON.parse(res.text);
          console.log(myObj);
           done();
         });

   });
});
//-----------------------end---------------------------------------------
//----------------MovieAdd Testing-----------------------------------
describe("Testing the movie post", function(err){
  it("should handle post movie request", function(done){
    url
        .post("/add")
        .expect(200)
        .expect('Content-Type', /json/)
         .end(function(err,res){
           should.not.exist(err);

          //expect(res.text).to.be.equal("Hello!");
          res.text.should.be.equal("Movie is inserted:");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});
//-------------------------end----------------------------------
// describe("Testing the second route", function(err){
//   it("should handle and send the computed info", function(done){
//     url
//         .get("/product/5/6")
//         .expect(200)
//         .end(function(err,res){
//           should.not.exist(err);
//           parseFloat(res.text).should.be.equal(30);
//           done();
//         });
//
//   });
// });
//
// describe("Testing the third route", function(err){
//   it("should handle and send the JSON data Part 1", function(done){
//     url
//         .get("/data")
//         .expect(200)
//         .expect('Content-Type', /json/)
//         .end(function(err,res){
//           should.not.exist(err);
//           var myObj = JSON.parse(res.text);
//           myObj.name.should.be.equal("Amit");
//           done();
//         });
//
//   });
//   it("should handle and send the JSON data Part 2", function(done){
//     url
//         .get("/data/js")
//         .expect(200)
//         .expect('Content-Type', /json/)
//         .end(function(err,res){
//           should.not.exist(err);
//           var myObj = JSON.parse(res.text);
//           myObj.name.should.be.equal("Mahesh");
//           done();
//         });
//
//   });
// });
