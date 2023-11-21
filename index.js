const app = require('./app')
// console.log(app.z());
const arr = [2,3,4,5,6,3];
let ans = arr.filter((item)=>{
    // console.log(item);
    return item >= 3;
})
console.warn(ans);