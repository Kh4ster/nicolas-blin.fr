import React from "react"
import styled from "@emotion/styled"

import Project from "../components/project"
import Button from "./button"

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(1, 130px);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

    margin: 30px 0 16px 0;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 680px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Buttons = styled.div`
    display: flex;
`

const GithubIcon = styled.div`
    display: inline-block;

    position: relative;
    top: 2px;

    margin: 0 0 0 8px;

    width: 14px;
    height: 14px;

    background-color: rgb(60, 60, 60);

    mask: url(/images/icons/icon-github.svg) no-repeat center / contain;
`

const get_order = project => {
    let order = ''
    project.repositoryTopics.edges.forEach(topic => {
        let value = topic.node.topic.name
        if (value.startsWith('meta-project-order')) {
            let parts = value.split('-')
            if (parts.length === 4)
                order = parts[3]
        }
    })

    return (order === '') ? Infinity : parseInt(order)
}

export default ({data}) => {
    let projects = data.projects.nodes

    // Sort projects by order
    projects.sort((a, b) => {
        const a_order = get_order(a)
        const b_order = get_order(b)

        if (a_order < b_order)
            return -1
        else if (b_order < a_order)
            return 1
        return 0
    })

    return (
        <div>
            <h2>Projects</h2>

            <ProjectsGrid>
                {projects.map(repo => <Project key={repo.id} project={repo} />)}
            </ProjectsGrid>

            <Buttons>
                <Button to={'https://github.com/Kh4ster'} external>
                    See all projects on GitHub
                    <GithubIcon />
                </Button>
            </Buttons>
        </div>
    )
}