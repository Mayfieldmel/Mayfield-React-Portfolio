import React from 'react';
import resume from "../../assets/Mayfield IT Resume 2022.docx"

function Resume() {
    return (
        <section>
            <h2>Resume</h3>
            <p>To download my resume, click</p><a href={`${resume}`}>here</a>
        </section>
    )

}

export default Resume