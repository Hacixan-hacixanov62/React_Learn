const ChildB = ({students}) => {
  console.log(students)
  return (
    <>
    <div>
      <h3>ChildB </h3>
    </div>
    <span>Students Count: {students.length}</span>
    </>
    
  )
}

export default ChildB
 