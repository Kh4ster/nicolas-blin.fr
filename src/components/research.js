import React from "react"
import Button from "./button"

export default () => {
    return (
        <div>
            <h2>Work experience</h2>

            <p>I had the chance to do both my engineering internship in GPU computing
            </p>
            <p>A first one at the 15-20 hospital in Paris:<br></br>
            I was able to work with <strong>CNRS researcher Michael Atlan on a medical imaging software</strong>. Holovibes allows visualizing in real-time the blood circulating in the veins of the retina in order to detect certain eye diseases.<br></br>
            My main task during this internship was to <strong>optimize the GPU calculation pipeline using C++ & CUDA</strong> to be able to manage a larger flow of images and thus be able to better detect diseases.<br></br>
            All the optimizations I made allowed the software to gain an x20 speed factor and thus go from an average processing of 500 fps to 10000 fps, allowing to finally visualize the blood circulation in real-time.<br></br>
            </p>
            <p>The second one was at <strong>NVIDIA in the cuOpt team</strong> in Paris.<br></br>
            I was supervised by <strong>Alex Fender</strong>. I worked on building a completely new PDP solver algorithm on GPU using C++ & CUDA. I had to write & optimize the solver and parallelize a new metaheuristic algorithm on GPU. I had the great honor to work with <strong>DevTech engineer Akif Çördük and VRP world record breaker Piotr Sielski.</strong><br></br>
            Together, we built the fastest PDP solver on the market. 
            </p>
            <p>Now, I'm beginning my career at <strong>NVIDIA as a DevTech engineer.</strong><br></br>
            I will keep on working on cuOpt and on various other projects.
            </p>

            <h2>Scientific research</h2>

            <p>I got the opportunity to be one of the 9 students selected at the <strong>EPITA Research & Development Laboratory (LRDE)</strong>. I was thus able to follow in parallel of my image processing courses the RDI curriculum dedicated to research. This includes working daily with a researcher and publishing articles.
            </p>
            <p>My field of study was <strong>GPU parallelization of the Max-tree algorithm</strong> using C++ and CUDA.
            </p>
            <p>I was able to reach <b>x10 speed-up</b> compared to the best multi-threaded algorithm and thus achieve the desired real-time goal.
            </p>
            <p>Algorithm details and results were bundled in a scientific paper written with my supervisor <b>Edwin Carlinet</b> and published in TPDS (IEEE Transactions on Parallel and Distributed Systems), A* scientific journal.</p>
            <Button to={'/uploads/paper.pdf'} external>Read the paper</Button>

            <h2>Teaching</h2>

            <p>
                I created an advanced GPU programming course for last year students (master 2) of the major IMAGE at EPITA.<br></br>
                Several topics are covered during the course:<br></br>
                <ul>
                <li>Understanding GPU hardware in greater depth</li>
                <li>Knowing how to use Nsight Compute / Systems</li>
                <li>Mastering the Reduce pattern and all related advanced optimizations</li>
                <li>Know how to program and use the Decoupled Look-back technique as part of the Scan pattern</li>
                <li>Ability to code and optimize Histogram and Radix Sort algorithms</li>
                <li>Being able to handle the key tools for a cleaner CUDA programming: CUB, Thrust, cuda-gdb, Compute Sanitizer...</li>
                </ul>
                The course is divided into 6 classes of 3 hours, including 4 lectures and 2 hands-on sessions. Assessment is project-based: Students have to create an optimized pipeline to repair images in real-time. Repairing images involves Reduce, Scan, Radix Sort, Histogram... The goal is to program those algorithms in the most optimized way possible and analyze performance on Nsight Compute and Systems.
            </p>
        </div>
    )
}