import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from 'components/MarkdownInput';
import NoteDisplay from 'components/NoteDisplay';
import NoteList from 'components/NoteList';
import 'style.css';
// import useLocalStorage from 'hooks/useLocalStorage';

const App = () =>  {
  const [value, setValue] = useState('');
  const handleChange = (newValue) => {
    setValue(newValue)
  };

  const [contentValue, setContent] = useState('');
  const handleContentChange = (newContent) => {
    setContent(newContent)
  };
  const test = localStorage.key(0)
  console.log(test)
  return (
  <div className="card-columns">
    <p>Bloc Notes !!!  ...?</p>
    <div className="notelist"> <NoteList /></div>
   
    <div className="theright"><NoteDisplay title={value} content={contentValue} />
    <MarkdownInput 
      title={value} onChildChange={handleChange}
      content={contentValue} onContentChange={handleContentChange}
    />
    </div>
  </div>
);
  
};

ReactDOM.render(<App />, document.getElementById('root'));
