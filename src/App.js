import React from "react";
import marked from "marked";

const initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

const App = () => {
  const [markupText, setMarkupText] = React.useState(initialText);
  const getPreviewText = (markupText) => {
    return marked(markupText);
  };
  const [previewText, setPreviewText] = React.useState(
    getPreviewText(markupText)
  );

  const handleCodeChange = (value) => {
    setMarkupText(value);
    setPreviewText(getPreviewText(value));
  };

  return (
    <div className="container">
      <Editor onCodeChange={handleCodeChange} text={markupText} />
      <Preview text={previewText} />
    </div>
  );
};

const Editor = ({ text, onCodeChange }) => {
  return (
    <div className="editor">
      <div className="editorTitle">Editor</div>
      <textarea
        id="editor"
        onChange={(event) => onCodeChange(event.target.value)}
        value={text}
      ></textarea>
    </div>
  );
};

const Preview = ({ text }) => {
  return (
    <div className="preview">
      <div className="editorTitle">Preview Editor</div>
      <div
        id="preview"
        onChange={() => {}}
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </div>
  );
};

//   ReactDOM.render(<App/>, document.getElementById("root"));
export default App;
