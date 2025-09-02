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

function insert(root, value){
    if (root == null){
        return new Node(value);
    }else if (root.data == value){
        return root;
    }

    if (value > root.data){
        root.right = insert(root.right, value);
    }else if (value < root.data){
        root.left = insert(root.left, value);
    }

    return root;
}

function deleteItem(root, value){
    if (root == null){
        return root;
    }

    if (value < root.data){
        root.left = deleteItem(root.left, value);
    }else if (value > root.data){
        root.right = deleteItem(root.right, value);
    }else{
        if (root.right == null){
            return root.left;
        }else if (root.left == null){
            return root.right;
        }else{
            let succ = getSuccessor(root);
            root.data = succ.data;
            root.right = deleteItem(root.right, succ.data);
        }
    }

    return root;
}

function getSuccessor(root){
    root = root.right;

    while(root !== null && root.left !== null){
        root = root.left;
    }

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

function find(root, value){
    if (root.data == value){
        return root;
    }else if (value < root.data){
        return find(root.left, value);
    }else if (value > root.data){
        return find(root.right, value);
    }

    //Returns null if value is not in tree
    return null;
}

function sortArray(arr){
    return arr.sort((a, b) => a - b);
}

function levelOrderForEach(callback){
    if (typeof callback !== 'function'){
        throw new Error("No callback function provided!");
    }
    
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
let testRoot = buildTree(testArray, 0, testArray.length-1);
testRoot = find(testRoot, 4123)
prettyPrint(testRoot);