import { Node } from "./Node.js";

export class Tree{
    constructor(arr){
        this.root = buildTree(arr);
    }
}

function buildTree(arr, start, end){
    if (start > end) {
        return null;
    }

    let mid = start + Math.floor((end - start)/2);

    let root = new Node(arr[mid]);

    root.left = buildTree(arr, start, mid-1);
    root.right = buildTree(arr, mid+1, end);

    return root;
}

function removeDuplicates(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.length > 0){
            let dup = false;
            for (let j = 0; j < newArr.length; j++) {
                if (arr[i] == newArr[j]) {
                    dup = true;
                }
            }
            if (!dup){
                newArr[newArr.length] = arr[i];
            }
        }else{
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}

function sortArray(arr){
    return arr.sort((a, b) => a - b);
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

let testArray = sortArray(removeDuplicates([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]));
console.log(testArray);
prettyPrint(buildTree(testArray, 0, testArray.length-1));