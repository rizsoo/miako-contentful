import React from "react"

const NotFoundPage = () => {
    return (
        <div seo={{
            title: "Not found",
            description: "",
            preview: {
                url: "./static/assets/seo.png",
            },
            isIndexable: false,
        }} locale={"hu"}>
            <div id={"NotFoundSection"} />404
        </div>
    )
}

export default NotFoundPage