import React from "react"
import styled from "@emotion/styled"

import Button from "./button"

const EMAIL_ADDRESS = 'nicolas@nicolas-blin.fr'

const ALERT_TEXT = `
    Looking for a 6-month internship in C++/GPGPU programming
    starting in February 2022.
`

const Alert = styled.div`
    display: inline-block;

    margin: 30px 0 0 0;
    padding: 14px 32px;

    color: rgb(30, 30, 30);
    font-size: 16px;
    line-height: 1.75;
    text-align: center;

    background: #f2f7ff;
    border-left: 6px solid #377dff;
    border-radius: 6px;
`

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;

    text-align: center;

    div {
        margin-top: 16px;
    }
`

export default () => {
    return (
        <div>
            <Alert dangerouslySetInnerHTML={{ __html: ALERT_TEXT }} />

            <h2>About</h2>
            <div>
                <p>
                    My name is <b>Nicolas Blin</b>, I am a computer engineering student
                    at <b>EPITA</b> based in Paris, France.
                </p>
                <p>
                    As an optimisation enthusiast, I bet on low level and threads to make programs more efficient.
                    Therefore, I program daily in C++/CUDA to take advantage of GPUs and be able to write generic code.
                </p>

                <Actions>
                    <Button to={'/uploads/Resume_BLIN_Nicolas.pdf'} external>Read my resume</Button>
                    <div>
                        or reach me at <a href={'mailto:' + EMAIL_ADDRESS}>
                            {EMAIL_ADDRESS.replace('@', '[at]')} </a>
                        or on <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.linkedin.com/in/blin-nicolas/">Linkedin</a>.
                    </div>
                </Actions>
            </div>
        </div>
    )
}