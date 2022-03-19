import React from "react"
import Button from "./button"

export default () => {
    return (
        <div>
            <h2>Scientific research</h2>

            <p>I got the opportunity to be one of the 9 students selected at the <strong>EPITA Research & Development Laboratory (LRDE)</strong>. I was thus able to follow in parallel of my image processing courses the RDI curriculum dedicated to research. This includes working daily with a researcher and publishing articles.
            </p>
            <p>My field of study was <strong>GPU parallelization of the Max-tree algorithm</strong> using C++ and CUDA.
            </p>
            <p>I was able to reach <b>x10 speed-up</b> compared to the best multi-threaded algorithm and thus achieve the desired real-time goal.
            </p>
            <p>Algorithm details and results were bundled in a scientific paper written with my supervisor <b>Edwin Carlinet</b> and published in TPDS (IEEE Transactions on Parallel and Distributed Systems).</p>
            <Button to={'/uploads/paper.pdf'} external>Read the paper</Button>
        </div>
    )
}