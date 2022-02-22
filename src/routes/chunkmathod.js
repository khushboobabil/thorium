



function spliceIntoChunks(arr, chunkSize) {
    const res = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}

const arr = ["Jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
console.log(spliceIntoChunks(arr, 4));

const kb=require('lodash');
const oldArr=[1,3,5,7,9,11,13,15,17,19];
const tailArr=kb.tail(oldArr);
console.log(tailArr);


const unionArr=kb.union([1,2,3,4,5],[2,3,5,7,8],[4,6,8,0,1],[3,7,5,90],[12,4,77,9]);
console.log(unionArr);


const fromParisArr=kb.fromPairs( [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]
]);
console.log(fromParisArr);

module.exports.spliceIntoChunks=spliceIntoChunks;
module.exports.kb=kb;
module.exports.arr=arr;
module.exports.tailArr=tailArr;
module.exports.unionArr=unionArr;
module.exports.fromParisArr=fromParisArr;