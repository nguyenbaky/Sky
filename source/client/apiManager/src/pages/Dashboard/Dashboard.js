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
            fakedata:[],
            Isloading: false,
            search: "",
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
                var free = 0;
                var pay = 0;
                var un = 0;
                res.map(value=>{
                    if(value.type.includes("Free")) free+=1;
                    if(value.type.includes("Mounth")) pay+=1;
                    if(value.type.includes("Un")) un+=1;
                })
               this.setState({
                   data:res,
                   fakedata: res,
                   free,
                   pay,
                   un,
                   Isloading: true
               })
            })
    }

    delclick = (e)=>
    {
        alert(e.target.value);
    }

    vieclick = (e)=>
    {
        alert(e.target.value);
    }

    handleSearch = (e)=>{
        this.setState({search: e.target.value});
    }

    search = ()=>{
        var {search} = this.state;
        var {data} = this.state;
        var fakedata = [];
        this.setState({fakedata: data});
        if(search === "")
        {
            fakedata = data
        }
        else
        {
            this.state.fakedata.map(value=>{
                if(value.value.includes(search))
                {
                fakedata.push(value);
                }
            })
        }
        this.setState({fakedata})
    }

    renderTable = (data)=>{
        return data.map(value=>{
            return(
                <tr>
                    <td scope="row">{value.id}</td>
                    <td>{value.value}</td>
                    <td>{value.type}</td>
                    <td>{value.user}</td>
                    <td>{value.start}</td>
                    <td> <button type = "button" class="fa fa-trash-o fa-lg" value = {value.id} onClick = {this.delclick}></button></td>
                    <td><button type = "button" class="fa fa-eye fa-lg" value = {value.id} onClick = {this.vieclick}></button></td>
                </tr>
            )
        })
    }


    RenderChart = ()=>{
        var {free,pay,un} = this.state
        var chartData = {labels: ['Free Trial', 'Pay', 'Unlimted'],
        datasets:[
          {
            label:'Population',
            data:[
               free,
               pay,
               un 
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)'
            ]
          }
        ]}
       return <Chart chartData={chartData} legendPosition="bottom" />
    }

    render()
    {
        if(this.state.Isloading)
        {
        return(
        <div>
            <div class="row" style = {{width: "90%", marginLeft: "10%", marginTop:"2%"}}>
                <div class="col-sm-10">
                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" onChange = {this.handleSearch}/>
                </div>
                <div class="col-sm-2"><button class="fa fa-search fa-2x" onClick = {this.search}></button></div>
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
                        {this.renderTable(this.state.fakedata)}
                    </tbody>
            </table>
            <div>
                {this.RenderChart()}
            </div>
        </div>
        </div>
        )
        }
        else
        {
            return(
                <div style = {{textAlign: "center", marginTop: "250px"}}>
                    <p>Đang tải</p>
                    <img src={"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"} alt="loading..." style = {{width: "100px", height: "100px"}}/>
                </div>
              )
        }
    }
}


export default Dashboard;