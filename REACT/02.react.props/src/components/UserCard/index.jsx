const UserCard = ({ name, age, email, avatar }) => {

    

  return (
    <div style={{ border: "1px solid #dddd", padding: "10px", margin: "10px", borderRadius: "10px" }}>
      <img src={avatar} alt={name} width="100" height="100" />
      <h3 style={{ color: "yellow" }}>{name}</h3>
      <p>Yas: {age}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default UserCard;
