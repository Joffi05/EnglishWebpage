import React from 'react'
import styles from '.././styles/MakePost.module.css'

function MakePost() {

    [postData, setPostData] = React.useState({
        "name": null,
        ""
    })

    return (
        <div>

            <button>Send</button>
        </div>
    )
}

export default MakePost
