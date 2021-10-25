/* There are two arrays with individual values, write a JavaScript program to compute the sum of each individual
index value from the given arrays and save them to third array */

let num_arr1 = [1, 3, 5, 7, 9, 11];
let num_arr2 = [2, 4, 6, 8, 10];
let sum_arr = [];
let i = 0;
let n = 0;
if (num_arr1.length > num_arr2.length) {
    extension = num_arr1.length - num_arr2.length;
    while (n < extension) {
        num_arr2.push(0);
        n++;
    }
    for (let element of num_arr1) {
        sum_elem = element + num_arr2[i];
        sum_arr.push(sum_elem);
        i++;
    }
}
else if (num_arr1.length < num_arr2.length) {
    extension = num_arr2.length - num_arr1.length;
    while (n < extension) {
        num_arr1.push(0);
        n++;
    }
    for (let element of num_arr2) {
        sum_elem = element + num_arr1[i];
        sum_arr.push(sum_elem);
        i++;
    }

}
else {
    for (let element of num_arr1) {
        sum_elem = element + num_arr2[i];
        sum_arr.push(sum_elem);
        i++;
    }
}
console.log(num_arr1);
console.log(num_arr2);
console.log(sum_arr);

