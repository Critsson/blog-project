import dynamic from "next/dynamic"
const Editor = dynamic(() => {
    return import("../../components/Editor")
},
    { ssr: false });


export default function EditPage() {
    return (
        <>
            <h1>Edit</h1>
            <Editor />
        </>
    )
}

EditPage.getLayout = function PageLayout(page) {
    return (
    <>
        {page}
    </>
    )
}