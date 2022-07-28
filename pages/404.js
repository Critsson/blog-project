import Head from "next/head"
export default function Page404() {
    return (
        <div>
            <Head>
                <title>Page Not Found</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "45vh", fontFamily: "Roboto", fontWeight: "700", fontSize: "3vw" }}>
                404 | Page Not Found
            </div>
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