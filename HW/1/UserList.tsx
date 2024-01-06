type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  name: string
  age: number
  address: AddressType
  id: number
};

type UserListPropsType = {
  users: Array<UserType>; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>
      <ul>
       {props.users.map((user) => {
			//debugger
			return (
			<li key={user.id} id={`hw01-user-${user.id}`}>
				<strong>{user.name} </strong> 
				<strong>Age: {user.age}</strong>
				<strong> Address: {user.address.street}, {user.address.city}</strong>
			</li>
			)
		 }
    )}
      </ul>
    </div>
  );
};
