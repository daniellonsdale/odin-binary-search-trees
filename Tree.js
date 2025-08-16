import { Node } from "./Node.js";

export class Tree{
    constructor(arr){
        this.root = buildTree(arr);
    }
}

function buildTree(arr){

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
    
}

console.log(removeDuplicates([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]));
