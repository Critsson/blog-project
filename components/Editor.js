import React from "react"
import EditorJs from "@editorjs/editorjs"
import Header from "@editorjs/header"

export default function Editor(props) {

    const editorRef = React.useRef();

    React.useEffect(() => {
        if(!editorRef.current) {
            const editor = new EditorJs({
                tools: {
                    header: Header
                },
                autofocus: true,
                onReady: () => {
                    editorRef.current = editor
                }
            }, [])
        }

        return () => {
            editorRef.current = null;
        }
    }, [])



    return(
        <>
            <div id="editorjs"></div>
            <button onClick={() => editorRef.current.save().then((data) => console.log(data))}>Save</button>
        </>
    )
}