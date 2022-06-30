import React from "react"
import EditorJs from "@editorjs/editorjs"
import Paragraph from "@editorjs/paragraph"
import Header from "@editorjs/header"
import List from "@editorjs/list"
import Embed from "@editorjs/Embed"
const AlignmentTuneTool = require("editorjs-text-alignment-blocktune")

export default function Editor(props) {

    const editorRef = React.useRef();

    React.useEffect(() => {
        if(!editorRef.current) {
            const editor = new EditorJs({
                tools: {
                    header: {
                        class: Header,
                        inlineToolbar: true,
                        tunes: ["alignTune"]
                    },
                    list: {
                        class: List,
                        inlineToolbar: true,
                        tunes: ["alignTune"]
                    },
                    embed: {
                        class:Embed,
                        inlineToolbar: true,
                        tunes: ["alignTune"]
                    },
                    paragraph: {
                        class: Paragraph,
                        inlineToolbar: true,
                        tunes: ["alignTune"]
                    },
                    alignTune: {
                        class: AlignmentTuneTool,
                        config: {
                            default: "left"
                        }
                    }
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