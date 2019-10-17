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
        soa.CnnTrans("f2769854159f5e34c4728512d4dd06e269f65adc37d841e21571294767153518104702335193","vielate").then(res=>{
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
