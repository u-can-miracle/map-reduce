var assert = require('assert')
var chai = require('chai');  

var expect = chai.expect;
const { map, reduce } = require('./map-reduce')

describe('map', function() {
  it('should return dubled values in array', function() {
    const arr = [1,2,3]
    const cb = function asd(el, indx, arr){ return el * 2; }
    
    const doubledArr = [2, 4, 6];
    expect(map(arr, cb)).to.eql(doubledArr);
  })
})

describe.only('reduce', function() {
  describe.only('should return summ values in array', function(){
    const cbReduce = function sum(prevEl, nextEl, indx, arr){ 
      return prevEl + nextEl;
    }
    
    it('with initial value', function() {
      const arr = [0,1,2,3,4,5]
      const initialVal = 10
      
      expect(reduce(arr, cbReduce, initialVal)).to.eql(25);
    })
    
    it('without initial value', function() {
      const arr = [0,1,2,3,4,5]
      expect(reduce(arr, cbReduce)).to.eql(15);
    })   
  })
  
  describe('should have correct amount iterations', () => {
    const arr = [0,1,2,3,4,5]
    
    it('without initialValue', () => {
      let iterations = 0;
      let iterationsOriginal = 0;
       
      function concatIndexes(acc, elem, index, array){
        iterations++;
      }
      reduce(arr, concatIndexes)
      
      arr.reduce((acc, el, index, array) => { iterationsOriginal++ })
      
      expect(iterations).to.eql(iterationsOriginal);
    }); 
    
    it('with initialValue', () => {
      let iterations = 0;
      let iterationsOriginal = 0;
       
      function concatIndexes(acc, elem, index, array){
        iterations++;
      }
      reduce(arr, concatIndexes, 123)
      
      
      arr.reduce((acc, el, index, array) => { iterationsOriginal++ }, 123)
      
      expect(iterations).to.eql(iterationsOriginal);
    });       
  })
  
  describe('should have correct indexes', () => {
    const arr = [0,1,2,3,4,5]
    
    it('without initialValue', () => {
      let indexes = '';
      let indexesOriginal = '';
       
      function concatIndexes(acc, elem, index, array){
        indexes += index;
      }
      reduce(arr, concatIndexes)
      
      arr.reduce((acc, el, index, arr) => {
        indexesOriginal += index
      })
      
      expect(indexes).to.eql(indexesOriginal);
    });
    
    it(' with initialValue', () => {
      let indexes = '';
      let indexesOriginal = '';
       
      function concatIndexes(acc, elem, index, array){
        indexes += index;
      }
      reduce(arr, concatIndexes, 123)
      
      arr.reduce((acc, el, index, arr) => {
        indexesOriginal += index
      })

      expect(indexes).to.eql(indexesOriginal);
    });       
  })
})

