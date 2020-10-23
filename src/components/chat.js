import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import data from '../data/chat.json'
import './chat.css'
import { animateScroll } from "react-scroll";
class Chat extends Component{
    
    componentDidMount(){
        this.setState({name:this.props.match.params.name})
        this.setState({chat:data})
    }
    constructor(props){
        super(props);
        this.state={
            name:"",
            chat:[],
            message:""

        }
        
    }
    nameHandler=(e)=>{
        this.setState({message:e.target.value})
    }
    changeHandler=(e)=>{
   let temp=[];
   temp=this.state.chat;
   
   temp.push({
       id:1,
       message:this.state.message,
       person:"receiver"
   })
        this.setState({chat:temp})
        this.setState({message:" "})
        animateScroll.scrollToBottom({
            containerId: "ContainerElementID"
          });
    }
    render(){
        return(
        <div style={{backgroundColor:"#ECE5DD" }}>

        <nav class="navbar navbar-light sticky-top" style={{backgroundColor:"#128C7E", color:"white"}}>
                <a class="navbar-brand" href="#">
                    <Link to="/"><i class="fa fa-arrow-left" style={{padding:"7px" ,color:"white"}}aria-hidden="true"></i></Link>
                    <img src="logo192.png" width="30" height="30" className=" rounded-circle d-inline-block align-top" alt=""/>
                    <span className="text-white"><b>  {this.state.name}</b></span>
                </a>
            </nav>
            <br/>
            <div   style={{height:"90%"}}>
           {this.state.chat.map(data=>{
                return <p className={data.person=="sender"?"sender":"receiver"}>{data.message}</p>
            })}
            <br/><br/><br/>
            </div>
            <div style={{margin:"8px",position:"fixed",top:"92%",width:"100%"}}>
                    <div className="row">
                        <div className="col-10">
                            <input type="text" class="form-control" placeholder="....Type your message" style={{borderRadius:"20px"}}
                            onChange={this.nameHandler}
                            name="message"
                            value={this.state.message}
                            ></input>
                        </div>
                        <div className="col-2">
                            <button 
                            onClick={this.changeHandler}
                            className="btn btn-success" style={{borderRadius:"20px"}}> 
                            {this.state.message.length==0?
                            (<i className="fa fa-microphone fa-x"></i>):(<i className="fa fa-send fa-x"></i>)

                            }
                            </button>
                        </div>
                    </div>
                </div>
        </div>) 
    }

}
export default Chat