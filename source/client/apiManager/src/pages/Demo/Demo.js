import React, {Component} from "react";
import SOA from '../Database/SOA';

const soa = new SOA();


class Demo extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            value: null
        }
    }

    componentWillMount()
    {
        window.scrollTo(0, 0);
    }

    componentDidMount()
    {
        soa.CnnTrans("5e8658b64d4f4112b56e1fa85a66f484c6fda28adb62f1691572228159153518104702335193","hello").then(res=>{
            this.setState({
                value: res.vie
            })
        })
    }

    render()
    {
        return(
            <div>{this.state.value}</div>
        )
    }
}

export default Demo;
