import React from "react";

//a class component can be used just like a functional component:

    // class Class extends React.Component {
    //     render() {
    //       return <h1>Using a Class Component!</h1>;
    //     }
    //   }
    // export default Class;




// Once a class component is declared, it can be used in other components. 

    // class Sample extends React.Component {
    //     render(){
    //         return <h1>Using a Class Component!</h1>;
    //     }
    // }

    // class Class extends React.Component {
    //     render() {
    //       return <Sample />;
    //     }
    //   }


    // export default Class;



class Class extends React.Component {

    // The constructor in a React component is called before the component is mounted. When you implement the 
    // constructor for a React component, you need to call super(props) method before any other statement. 
    // If you do not call super(props) method, this.props will be undefined in the constructor and can lead to bugs.    
    constructor(props) {

// super() s used to call the constructor of its parent class. 
// This is required when we need to access some variables of its parent class.       
        super(props);

        this.state = { change: true };
    }
    // render is the only required method in a class component and is responsible for describing the view to be 
    // rendered to the browser window.
    render() {
        return(
            <div>
                <button onClick={() =>{this.setState({ change: !this.state.change });}}>
                    Click Here!
                </button>
                {this.state.change ? (
                    <h1>A more complex example of class function</h1>
                ) :(
                    <h1> Can i figure out what all this means?</h1>
                )}
            </div>
        );
    }
}



export default Class;