import Head from "next/head"
export default function Page500() {
    return (
        <div>
            <Head>
                <title>Error</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "45vh", fontFamily: "Roboto", fontWeight: "700", fontSize: "3vw" }}>
                500 | Error
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