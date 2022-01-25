import React from "react"
import Button from "./button"

export default () => {
    return (
        <div>
            <h2>Scientific research</h2>

            <p>I got the opportunity to be one of the 9 students selected at the <strong>EPITA Research & Development Laboratory (LRDE)</strong>. I was thus able to follow in parallel of my image processing courses the RDI curriculum dedicated to research. This includes working daily with a researcher and publishing articles.
            </p>
            <p>My field of study is <strong>GPU parallelization of the Max-tree algorithm</strong> using C++ and CUDA.
            </p>
            <p>I was able to reach an <b>x10 speed-up</b> compared to the best multi-threaded algorithm and thus achieve the desired real-time goal.
            </p>
            <p>Algorithm details and results were bundled in a scientific paper written with my supervisor <b>Edwin Carlinet</b> and submitted to TPDS (IEEE Transactions on Parallel and Distributed Systems).</p>
            <Button to={'/uploads/techrep.pdf'} external>Read my research report</Button><Button to={'/uploads/seminar.pdf'} external>Check out my research conference slides</Button>
        </div>
    )
}