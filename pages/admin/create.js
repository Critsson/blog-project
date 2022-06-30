import dynamic from "next/dynamic"
const Editor = dynamic(() => {
    return import("../../components/Editor")
},
    { ssr: false });


export default function CreatePage() {
    return (
        <>
            <h1>Create</h1>
            <Editor />
        </>
    )
}

CreatePage.getLayout = function PageLayout(page) {
    return (
    <>
        {page}
    </>
    )
}