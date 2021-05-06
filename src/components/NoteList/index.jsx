import React from 'react';

const NoteList = () => {
  
  let list = []
  for (let i= 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(localStorage.key(i));
    list.push(<h4> {key}  </h4>)
    list.push(<p> {value}  </p>)
  }
 


  return (
    <div>
        <button className="centre">Nouveau</button>
        {list}
    </div>
    
  );
};

export default NoteList;
