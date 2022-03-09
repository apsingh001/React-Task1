import React from 'react';
function AA(props){
    const [ob,setOb]=React.useState(props.obj);
    const [col,setCol]=React.useState("black");
    const [names,setNames]=React.useState(ob.name);
    const [phones,setPhones]=React.useState(ob.phone);
    const [emails,setEmails]=React.useState(ob.email);
    const [lats,setLats]=React.useState(ob.address.geo.lat);
    const [longs,setLongs]=React.useState(ob.address.geo.lng);
    const [dcc,setDcc]=React.useState(0);
    const [dccc,setDccc]=React.useState(0);
    let ap="aa";
    if(ob.id%2===0){
        ap="white";
    }
    else{
        ap="lightgrey";
    }
    let style={color:col, backgroundColor:ap}
    
    const [dc,setDc]=React.useState(2);
    if(dc===0){
        return <div></div>;
    }
    if(dc===1){
        return <div id="undo">
            <button id="undo1" type="button" onClick={function(){
                setDc(2);
            }}>UNDO</button> &nbsp;
            <button id="undo1" type="button" onClick={function(){
                setDc(0);
            }}>Confirm Delete</button>
        </div>;
    }
    if(dcc===1){
        return <div class="aps">
            <div><input  type="text" id="i1" value={names} onChange={event=>setNames(event.target.value)}></input></div>
            <div><input  type="text" id="i2" value={phones} onChange={event=>setPhones(event.target.value)}></input></div>
            <div><input  type="text" id="i3" value={emails} onChange={event=>setEmails(event.target.value)}></input></div>
            <div><input  type="text" id="i4" value={lats} onChange={event=>setLats(event.target.value)}></input></div>
            <div><input  type="text" id="i5" value={longs} onChange={event=>setLongs(event.target.value)}></input></div>
            <div>
            <span><button type="button" onClick={function(){setDccc(1);setDcc(0);}}>Done</button></span> 

            </div>
            </div>
    }
    if(dccc===1){
        return (
            
            <div class="aps" style={style}>
                <div><input type="checkbox" onClick={function(){if(col==="black"){setCol("red")}else{setCol("black")}}}></input>{names}</div>
                <div>{phones}</div>
                <div>{emails}</div>
                <div>{lats}</div>
                <div>{longs}</div>
                <div>
                <span><button type="button" onClick={function(){setDcc(1)}}>Edit</button></span>&nbsp;
                <span><button type="button" onClick={function(){ setDc(1)
                }}>Delete</button></span> 
                </div>
    
    
            </div>
        )
    }
    return (
        
        <div class="aps" style={style}>
            <div><input type="checkbox" onClick={function(){if(col==="black"){setCol("red")}else{setCol("black")}}}></input>{ob.name}</div>
            <div>{ob.phone}</div>
            <div>{ob.email}</div>
            <div>{ob.address.geo.lat}</div>
            <div>{ob.address.geo.lng}</div>
            <div>
            <span><button type="button" onClick={function(){setDcc(1)}}>Edit</button></span>&nbsp;
            <span><button type="button" onClick={function(){ setDc(1)
            }}>Delete</button></span> 
            </div>


        </div>
    )
}

export default function A1(){
    const[dcc,setDcc]=React.useState(0);
    const[a,setA]=React.useState([]);
    async function A22(){
        let a1=await fetch('http://jsonplaceholder.typicode.com/users');
        let a=await a1.json();
        setA(a);
    
    }
    A22();
    return (
        <div id="fB">
        <h1 id="Heading">Users</h1>
        <div id="top">
            <div>Name</div>
            <div>Number</div>
            <div>Email</div>
            <div>Latitude</div>
            <div>Longitude</div>
            <div>Actions</div>
            </div>
        <div id="bot">
        { 
            a.map(function(obj,dcc){
                return (<AA obj={obj}/>)
            })
        }
        </div>
            </div>
    )
}
