/**Write a function that takes in an array of objects representing students, 
 * where each object has properties for name and grade,
 *  and returns an array of objects representing only the students who have a grade of "A". */

const students = [
    {
      name: "John Doe",
      grade: 'A',
    },
    {
      name: "Jane Doe",
      grade: 'B',
    },
    {
      name: "Mary Smith",
      grade: 'A',
    },
  ];

  function findGrade(students)
  {
    let result=[];
    for(let i of students)
    {
        if(i.grade=== 'A')
        {
            result.push(i);
        }
    }
    return result;
  }

  let result = findGrade(students);
  console.log(result);