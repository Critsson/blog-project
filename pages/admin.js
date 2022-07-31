import React from "react"

export default function Admin() {

    React.useEffect(() => {
        ; (async () => {
            const CMS = (await import('netlify-cms-app')).default
            CMS.init()
        })()
    }, [])

    return (
        <div></div>
    )
}

Admin.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}