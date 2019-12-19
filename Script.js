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
function FindInGivenArray(name)
{
    for (var i=0; i < Employee.length; i++) {
        if (Employee[i].name === name) {
            return Employee[i];
        }
    }
}

// --method to fing max of salary in the given array---
function findMaxage() {
    var  max = Employee[0].age;
  
    for (var i = 1;i<Employee.length;  i++) {
      var v = Employee[i].age;
      max = (v > max) ? v : max;
    }
  
    return max;
  }

  //method to find minimum of salary in the given array--
  function findminage()
  {
      var min=Employee[0].age;
      for(var i=1;i<Employee.length;i++)
      {
          var v=Employee[i].age;
          min = (v < min) ? v : min;
      }
      return min;
  }

  //method to insert new employee   to the the emolyee array

  function insertEmployeee(Id,Name,Genderr,Ager,Salrary)
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
