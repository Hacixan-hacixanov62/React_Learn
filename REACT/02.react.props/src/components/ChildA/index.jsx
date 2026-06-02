import ChildB from '../ChildB'
const ChildA = ({students}) => {
  return (
    <div>
      <h3>ChildA</h3>
      <h2><ChildB students={students}/></h2>
    </div>
  )
}

export default ChildA
