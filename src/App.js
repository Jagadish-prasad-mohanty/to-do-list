import classes from './App.module.css';
import React,{ useState} from 'react';

const App =()=> {
  const [name,setName] =useState({
    value:"",
    listContent:[]
  });
  const onChangeHandler=(event)=>{
    setName({
      ...name,
      value:event.target.value
    })
  }
  const showList= () =>{
    console.log(name.value);
    const value=name.value;
    const list=[...name.listContent];
    list.push({value:value,id:new Date().getTime()});
    setName({ 
      ...name,
      listContent:list
    })
  }

  const deleteItemHandler = (id)=>{
    const newList=name.listContent.filter(elem=>elem.id!==id)
    setName({
      ...name,
      listContent:newList
    });
  }

  const listItems=( 
    name.listContent.map(elem=>{
      return (
        <div key={elem.id} style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>

        <li >{elem.value}</li>
        <button onClick={()=>deleteItemHandler(elem.id)}>*</button>
        </div>
    )
    })
  )

  return (
    <div className={classes.App}>
        <div className={classes.toDoListContent}>
            <div className={classes.contentHeading}><h2>To Do List</h2></div>
            <div className={classes.contentControl}>
              <input type="text" value={name.value} onChange={onChangeHandler} placeholder="add your content"/>
              
              <button onClick={showList}>+</button>
            </div>
            <ol className={classes.contentList}>
              {listItems}
            </ol>
        </div>
    </div>
  );
}

export default App;
