function AddingLinks(array){
    const len = array.length;
    for(let i = len - 2 ; i>=0 ;i-- ){
        array[i].value = array[i+1];
    }

    return array;
}

array = [
    {id : "one" , next : "two" , value : null},
    {id : "two" , next : "three" , value : null},
    {id : "three" , next : null, value : null}
]

console.log(AddingLinks(array));