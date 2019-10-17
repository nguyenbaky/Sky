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

    componentDidMount()
    {
        soa.CnnTrans("c38eee5c404aa3836f5deef1949bf82d5395ad81636be4551571283223107518104702335193","hello").then(res=>{
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
