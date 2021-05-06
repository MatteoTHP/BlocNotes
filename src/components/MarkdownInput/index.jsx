import React from 'react';
import Showdown from 'showdown';
const converter = new Showdown.Converter();
 
function MarkdownInput (props) {
  const {title, onChildChange} = props;
  const {content, onContentChange} = props;

  const saved = () => {
    localStorage.setItem(title, content);
  }
 

    //const imputChange = (event) => {
    //    onChildChange(event.target.value); 
    //};                                       methode alternative

    return (
        <>
       
            <div>
                <input value={title} onChange={(event) => onChildChange(event.target.value)} />
                <textarea style={{width: 90 + '%'}} value={content} onChange={(event) => onContentChange(event.target.value)}  />
                <button onClick={saved}>Sauvegarder</button>
            </div>
        </>
    );  
 
};
 
export default MarkdownInput;
