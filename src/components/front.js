import React, { Component } from 'react'
import d from '../data/frontdb.json'
import 'semantic-ui-css/semantic.min.css'
import {Link} from 'react-router-dom'
class Front extends Component{
    componentDidMount(){
        console.log(d)
        d.sort(function(a, b){
            return (a.Time - b.Time);
        });
        d.reverse()
        console.log(d)
        this.setState({data:d})
    }
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    render(){
        return(
        <>
        <span class="navbar navbar-light text-white " style={{backgroundColor:"#128C7E"}}>
            <h3>Whatsapp</h3>
        </span>
        <navbar class="d-flex justify-content-around navbar-light text-white sticky-top" style={{ padding:"10px" ,marginTop:"-2px", backgroundColor:"#128C7E"}}>
            <span className="selected"><h6>Chats</h6></span>
            <span><h6>Calls</h6></span>
        </navbar>
        {this.state.data.map((item)=>{
            return <Link to ={"/"+item.Name}>
            <div className="row " style={{color:"black" ,padding:"20px", borderBottom:"1px solid lightgray"}}>
            <div className="col-2">
                <img src="gray.jpg" class="rounded-circle" alt="dp" width="40px" height="40px" />
            </div>
            <div className="col-8">
                <div className="row" style={{marginBottom:"5px"}}>
                    <div className="col-12">
                        <b>{item.Name}</b>        
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {item.Message.slice(0,30)}
                    </div>
                </div>
            </div>
            <div className="col-2">
                <div className="row" style={{marginBottom:"5px"}}>
                    <div className="col-12 d-flex flex-row-reverse">
                        {item.newmsg>0?
                        (<b style={{color:"#25D366"}}>{item.Time.slice(0,2)}:{item.Time.slice(2,4)}</b> )
                        :(<b>{item.Time.slice(0,2)}:{item.Time.slice(2,4)}</b> )   }    
                    </div>
                </div>
                {item.newmsg>0?
                (<div className="row">
                    <div className="col-12 d-flex flex-row-reverse">
                    <div className="d-flex text-white justify-content-center" 
                        style={{ backgroundColor :"#25D366",height: "21px",width: "21px",borderColor:"#25D366",borderRadius: "100%"}}
                        >
                      {item.newmsg}
                    </div>
                    </div>
                </div>):(<div></div>)}
            </div>
            
        </div>    
        </Link>
        })}
        </>)
    }

}
export default Front