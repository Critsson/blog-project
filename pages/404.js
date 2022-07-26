export default function Page404() {
    return (
        <div style={{display: "flex", justifyContent:"center", marginTop: "45vh", fontFamily: "Roboto", fontWeight: "700", fontSize: "3vw"}}>
            404 | Page Not Found
        </div>
    )
}

Page404.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}