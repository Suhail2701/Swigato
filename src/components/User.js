const User = (props)=>{
    return(
        <div className="user-function">
            <h1>Name: {props.name}</h1>
            <h3>Location: {props.location}</h3>
            <h3>Contact: abc@gmail.com</h3>
        </div>
    )
}

export default User;