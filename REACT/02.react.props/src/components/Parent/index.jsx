import ChildA from '../ChildA'

const Parent = () => {
   const students =["miri","gsds","sdsd"]
  return (
    <div>
      <h3>Parent</h3>
      <h2><ChildA students ={students} /></h2>
    </div>
  )
}

export default Parent
