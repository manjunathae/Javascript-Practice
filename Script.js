var Employee =[
{
    id:1,
    name:'manju',
    gender:'Male',
    age:25,
    salary:25000

},
{
    id:2,
    name:'sanjana',
    gender:'Female',
    age:26,
    salary:170000
},
{
    id:3,
    name:'silva',
    gender:'male',
    age:23,
    salary:19000

},
{
    id:4,
    name:'jevetha',
    gender:'Female',
    age:28,
    salary:20000
}

]


// method to student name in the given array
function FindInGivenArray(name, Employee)
{
    for (var i=0; i < student.length; i++) {
        if (student[i].name === name) {
            return student[i];
        }
    }
}

// --method to fing max of salary in the given array---
function findMax(Employee) {
    var  max = Employee[0];
  
    for (var i = 1;i<=Employee.length;  i++) {
      let v = arr[i].y;
      min = (v < min) ? v : min;
      max = (v > max) ? v : max;
    }
  
    return [min, max];
  }