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
    age:21,
    salary:20000
}

]

Array.prototype.FindInGivenArray =  function(name)
{
    for (var i=0; i < Employee.length; i++) {
        if (Employee[i].name === name) {
            return Employee[i];
        }
    }
}


// --method to fing max of salary in the given array---
Array.prototype.findMaxage=function() {
//     var  max = Employee[0].age;
  
//     for (var i = 1;i<Employee.length;  i++) {
//       var v = Employee[i].age;
//       max = (v > max) ? v : max;
//     }
  
//     return max;

// New request Calulating max age without using loop


Employee.sort(function(a,b)
{
    if(a.age > b.age) return 1;
    if(a.age < b.age) return -1;
    return 0;

});
return Employee[Employee.length-1].age;
}


  //method to find minimum of salary in the given array--
  Array.prototype.findminage=function()
  {
    //   var min=Employee[0].age;
    //   for(var i=1;i<Employee.length;i++)
    //   {
    //       var v=Employee[i].age;
    //       min = (v < min) ? v : min;
    //   }
    //   return min;

    Employee.sort(function(a,b)
{
    if(a.age > b.age) return 1;
    if(a.age < b.age) return -1;
    return 0;

});
   return Employee[0].age;
  }

  //method to insert new employee   to the the emolyee array

  Array.prototype.insertEmployeee=function (Id,Name,Genderr,Ager,Salrary)
  {
   Employee.push
    ({
        id: Id,
        name: Name,
        gender: Genderr,
        age:Ager,
        salary:Salrary
      });

      return Employee;
  }


