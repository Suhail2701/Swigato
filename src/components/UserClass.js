import React from "react";

class UserClass extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {
            count: 0,
        }

        console.log(this.props.name+ " constructor");
    }

      componentDidMount()
      {
        console.log(this.props.name+ " componentDidMount");
      }  

    render(){

        console.log(this.props.name+ " render");

        const {name, location} = this.props;
        const {count, count1} = this.state;
        return (
            <div className="user-function">
            <h1>Name: {name}</h1>
            {/* <h1>Count: {count}</h1>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count + 1
                });
            }}>Count Increase</button>
            <h3>Location: {location}</h3>
            <h3>Contact: abc@gmail.com</h3> */}
        </div>
        )
    }
}


export default UserClass;