import dynamic from "next/dynamic"
const Editor = dynamic(() => {
    return import("../components/Editor")
},
{ssr: false});


export default function Editortest() {
    return (
        <>
            <h1>Editor Test</h1>
            <Editor />
        </>
    )
}
