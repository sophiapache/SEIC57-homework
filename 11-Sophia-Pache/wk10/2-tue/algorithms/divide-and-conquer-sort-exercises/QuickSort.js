function quickSort(arr, arr1 = [], arr2 = []) {
  let lastElement = arr[arr.length - 1];
  let newArray = arr.pop();
  if (arr.length <= 1) {
    return arr;
  } else {
    for (let i = 0; i < newArray.length; i++) {
      let element = newArray[i];
      if (element <= lastElement) {
        arr1.push(element);
      } else if (element >= lastElement) {
        arr2.push(element);
      }
    }
    return [...quickSort(arr1), lastElement, ...quickSort(arr2)];
  }
}

module.exports = quickSort;
