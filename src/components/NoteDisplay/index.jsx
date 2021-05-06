import React from 'react';
import MarkdownView from 'react-showdown';

const NoteDisplay = (props) => {
  
  return (
    <div>
      <p>{props.title}</p>
      <MarkdownView
      markdown={props.content}
      options={{ tables: true, emoji: true }}
      />
    </div>
    
  );
};

export default NoteDisplay;
