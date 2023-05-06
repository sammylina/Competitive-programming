//User function Template for javascript

/**
 *
 * select
 * @param {number[]} arr
 * @param {number} i
 * @return {number}
 *
 * selectionSort
 * @param {number[]} arr
 * @param {number} n
 */
class Solution
{
  select(arr,i){
     // code here such that selectionSort() sorts arr[]
     let smaller = i;
     for (let c = i; c < arr.length; c++) {
        if (arr[c] < arr[smaller]) {
            smaller = c
        }    
     }
     return smaller;
  }

  //Function to sort the array using selection sort algorithm.
  selectionSort(arr,n){
   //code here
    let temp;
    for(let i in arr) {
        let s = this.select(arr, i);
        if (s >= 0) {
            temp = arr[i];
            arr[i] = arr[s];
            arr[s] = temp;
        }
    }
    return arr;
  }
    
}
