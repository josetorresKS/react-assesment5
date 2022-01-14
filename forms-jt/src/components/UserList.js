import React from "react";

function UserList(props) {
  return (
    <div className="user-list">
      <p style={{fontWeight:"bold"}}>Username and Age</p>
      <ol class = "border">
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name}     ({user.age} Years old)
          </li>
        ))}
      </ol>
    </div>
    
    
  );
}

export default UserList;