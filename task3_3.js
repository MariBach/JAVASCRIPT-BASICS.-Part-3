/* There are two arrays with individual values, write a JavaScript program to compute the sum of each individual
index value from the given arrays and save them to third array */
let num_arr1 = [1, 3, 5, 7, 9];
let num_arr2 = [2, 4, 6, 8, 10];
let sum_arr = [];
let i = 0;
for (let element of num_arr1) {
    sum_elem = element + num_arr2[i];
    sum_arr.push(sum_elem);
    i++;
}
console.log(sum_arr);

