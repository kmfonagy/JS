var nums = [45,65,77,18];

nums.forEach(functio(nu){
    console.log(num);
});

// myForEach(nums, function(num){
//     console.log(num);
// });

function myForEach(arr, func){
    //loop through array
    for(var i = 0; i < arr.length; i++){
        //call func for each item in array
        func(arr[i]);
    }
}

Array.prototype.myForEach = function(func){
    for(var i = 0; i < this.length; i++){
        func(this[i]);
    }
}

var friends = ["chris", "matt", "jeff", "corey"];

friends.myForEach(alert)

// more common with annonymous function
friends.myForEach(function(name){
    console.log("My friend " + name);
})