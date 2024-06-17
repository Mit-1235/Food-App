import User from "./User";
import Userclass from "./Userclass";
import { Component } from "react";


// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React</h2>

//             <User name = {"Akashay"}/>
//             <Userclass name = {"Akashay"} location = {"surat"}/>
//         </div>
//     )
// }

class About extends Component{
    constructor(props){
        super(props);
        // console.log("Parent constructor");
    };

    componentDidMount(){
        // console.log("Parent component Did Mount");
    }

    render(){
        // console.log("Parent render");
        return(
            <div>
                <Userclass name={"first"} />
                <Userclass name={"second"} />
            </div>
        );
    }
}

export default About;