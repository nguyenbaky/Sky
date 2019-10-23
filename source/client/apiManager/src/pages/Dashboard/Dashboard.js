import React, {Component} from "react";
import Chart from './Chart';
import API from '../../pages/Database/APICnn';

const api = new API();

class Dashboard extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            data: [],
            chartData:{labels: ['Free Trial', 'Pay', 'Unlimted'],
            datasets:[
              {
                label:'Population',
                data:[
                  3,
                  1,
                  0
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)'
                ]
              }
            ]}
        }
    }

    componentWillMount()
    {
        var data = {};
        if(localStorage.getItem("FacebookID")){
            data = {id: localStorage.getItem("FacebookID")}
        }
        if(localStorage.getItem("GoogleID"))
        {
            data = {id: localStorage.getItem("GoogleID")}
        }
        if(localStorage.getItem("ID"))
        {
            data = {id: localStorage.getItem("ID")}
        }
        api.getKey(data).then(res=>
            {
               this.setState({
                   data:res
               })
            })
    }

    renderTable = ()=>{
        return this.state.data.map(value=>{
            return(
                <tr>
                    <td scope="row">{value.id}</td>
                    <td>{value.value}</td>
                    <td>{value.type}</td>
                    <td>{value.user}</td>
                    <td>{value.start}</td>
                    <td> <button type = "button"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></button></td>
                    <td><button type = "button"><i class="fa fa-eye fa-lg" aria-hidden="true"></i></button></td>
                </tr>
            )
        })
    }

    render()
    {
        return(
        <div>
            <div class="row" style = {{width: "90%", marginLeft: "10%", marginTop:"2%"}}>
                <div class="col-sm-10">
                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
                </div>
                <div class="col-sm-2"><button ><i class="fa fa-search fa-2x" aria-hidden="true"></i></button></div>
            </div>
             
        <div style = {{width: "80%", marginLeft: "10%", marginTop:"2%"}}>
            <table class="table table-striped table-inverse table-responsive" style = {{width: "100%"}}>
                <thead class="thead-inverse" style = {{backgroundColor: "#3b5998", color: "white"}}>
                    <tr>
                        <th>ID</th>
                        <th>Key</th>
                        <th>Type</th>
                        <th>User code</th>
                        <th>Start date</th>
                        <th>Action</th>
                        <th>Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
            </table>
            <div>
            <Chart chartData={this.state.chartData} legendPosition="bottom" />
            </div>
        </div>
        </div>
        )
    }
}


export default Dashboard;