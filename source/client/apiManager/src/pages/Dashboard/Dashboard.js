import React, {Component} from "react";
import Chart from './Chart';
import API from '../../pages/Database/APICnn';
const api = new API();

class Dashboard extends Component{

    constructor(props)
    {
        super(props)
        this.handleinput = this.handleinput.bind(this);
        this.timer = 0;
        this.state = {
            data: [],
            fakedata:[],
            Isloading: false,
            search: "",
            code: this.randomkey(),
            recode: "",
            lemail: localStorage.getItem("FacebookUser")||localStorage.getItem("GoogleUser"),
            userData: this.props.data,
            seconds: 15,
            showModal: false
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
  
      

    back = ()=>{
      clearInterval(this.timer);
    }

     

    confirm =  ()=>{
        var {code, recode} = this.state;
        if(code == recode)
        {
            api.delkey(this.state.id).then(res=>{
                console.log(res);
                window.location.reload();
            })
        }
        else
        {
          alert("Incorect! please try again!")
        }
    }
    

    RenderModalDelClick = ()=>{
          const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(24, 23, 23, 0.308)',
            padding: 50
          };
          var notification = null;
          if(this.state.seconds === 0)
          {
            notification = (
              <div><label className = "notification">Check your email and then enter code you recived</label></div>
            )
          }
          else
          {
            notification = (
              <div>
                      <div class="row">
                        <div class="col-sm-6"> <label>{"Please waiting "}<label className = "timer-span">{this.state.seconds}</label></label> <label> for sendMail</label></div>
                      </div>
                </div>
            )
          }
          return(     
            <div  class="modal fade" id="modal-id" style={backdropStyle}>
              <div class="modal-dialog" >
                <div class="modal-content">
                  
                  <div class="modal-body">
                  <span className="login100-form-title p-b-59" style = {{textAlign :"center",fontSize: "20px"}}>
                        confirm delete key
                  </span>
                  
                  {notification}
                  <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Your code</span>
                        <input className="input100" type="text" name="name" placeholder="Code..." style = {{fontSize: "20px"}} onChange = {this.handleinput}/>
                        <span className="focus-input100" />
                      </div>
                  </div>
                  <div class="row" style = {{
                    textAlign: "center",
                    paddingBottom : "50px"
                    }}>
                      {/* {this.RedirectRender()} */}
                    <div class="col-sm-6"> <button type="button" class="btn btn-default" style = {{width :"80%", marginTop: "10px"}} onClick = {this.back} data-dismiss="modal">Back</button></div>
                    <div class="col-sm-6"><button type="button" class="btn btn-primary" style = {{width :"80%", marginTop: "10px"}} onClick = {this.confirm}>Confirm</button></div>
                  </div>
                </div>
              </div>
            </div>
            

          )
      }
      

      handleinput(e){
        this.setState({recode: e.target.value})
        console.log(this.state.recode);
      }
      
      s4 = ()=>{
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      }
    
      randomkey = ()=>
      {
        return this.s4();
      }

    delclick = (e)=>
    {
        
        this.setState({
            ...this.state,
            id: e.target.value,
            seconds: 15
        })
        this.timer = setInterval(()=>{
        let seconds = this.state.seconds - 1;
        this.setState({
          seconds
        });
        if(seconds === 0)
        {
            clearInterval(this.timer);
        }
        }, 1000);
        var lemail = "";
        if(localStorage.getItem("ID"))
        {
            this.state.userData.map(value=>{
                if(value.id === localStorage.getItem("ID"))
                {
                    this.setState({lemail})
                }
            })
        }
        var data = {
            code: this.state.code,
            email: this.state.lemail,
            contain: "Đây là code của bạn dùng để xác nhận xóa key "
          }
        api.SendMail(data).then(res=>{
            console.log(res);
        })
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
                    <td>{value.count}</td>
                    <td> <button type = "button" class="fa fa-trash-o fa-lg" value = {value.id} onClick = {this.delclick} data-toggle="modal" href='#modal-id'></button></td> 
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
            {this. RenderModalDelClick()}
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
                        <th >ID</th>
                        <th style = {{width: "15%"}}>Key</th>
                        <th>Type</th>
                        <th>User code</th>
                        <th>Start date</th>
                        <th>Called</th>
                        <th>Action</th>
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
                <div style = {{textAlign: "center", marginTop: "100px"}}>
                    <img src={"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"} alt="loading..." style = {{width: "100px", height: "100px"}}/>
                </div>
              )
        }
    }
}


export default Dashboard;