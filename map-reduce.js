module.exports = {
  map,
  reduce,
};

function map(arr, cb){
  const res = [];
  const { length } = arr; 
  
  for(let i = 0; i < length; i++){
    res.push(cb(arr[i], i, arr));
  }
  
  return res;
}

function reduce(arr, cb, initialVal){
  if(initialVal !== undefined){
    arr.unshift(initialVal)
  }

  let acc = arr[0];
  
  for(let i = 1; i < arr.length; i++){
    const currentValue = arr[i];
    acc = cb(acc, currentValue, i, arr);
  }
  
  return acc;
}


const arr = [0,1,2,3,4,5]
const cbReduce = function sum(prevEl, nextEl, indx, arr){ 
  return prevEl + nextEl;
}

const initialVal = 10

reduce(arr, cbReduce, initialVal)
