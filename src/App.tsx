import React from "react";
import './App.css'

class App extends React.Component<any, any> {

    state = {
        count: 0,
        visible: true
    }
    /*  up = (): void => {
          this.setState({count: this.state.count + 1});
      }
      down = (): void => {
          this.setState({count:this.state.count-1})
      }*/

    update = (type: string): void => {
        switch (type) {
            case 'UP':
                this.setState({count: this.state.count + 1});
                break;
            case 'DOWN':
                this.setState({count: this.state.count - 1})
        }
    }

    render() {
        return (
            <div className={"m-5"}>

                <button className="bg-blue-600 mx-5 font-bold " onClick={()=>this.update('UP')}>+</button> {/*if passed the parameters*/}
                <div className={"mx-5 inline font-bold"}>{this.state.count}</div>
                <button className="bg-red-600 mx-5 font-bold" onClick={()=>this.update('DOWN')}>-</button>
            </div>


        );
    }


}

export default App
