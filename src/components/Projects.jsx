import React, {useState} from 'react'
import ProjectInfo from './ProjectInfo'
const data = require('./project_info.json').reverse()
import('./projects.scss')

const Projects = () => {
    const [projID, setProjID] = useState(0)
    
    const project = [...data][projID]

    function handleClick(event, value){
        event.preventDefault()
        setProjID(value)
    }

    return (
        <section className="projects flexCol">
            <h3> Projects</h3>
            <section className="projWrapper flex">
                <ul className="projList flexCol">
                    <p className="stack">MERN</p>
                    <li className="endStack"><a href="Portfolio 2.0" onClick={e => handleClick(e, 0)}>Portfolio 2.0</a></li>
                    <li className="endStack"><a href="CMC Flow" onClick={e => handleClick(e, 1)}>CMCFlow</a></li>
                    <p className="stack">Ruby on Rails</p>
                    <li className="endStack"><a href="Tat2 Market" onClick={e => handleClick(e, 2)}>Tat2 Marketplace</a></li>
                    <p className="stack">Html</p>
                    <li className="endStack"><a href="Portfolio 1.0" onClick={e => handleClick(e, 3)}>Portfolio 1.0</a></li>
                    <p className="stack">Ruby</p>
                    <li className="endStack"><a href="Keylord" onClick={e => handleClick(e, 4)}>Keylord</a></li>
                </ul>
                <ProjectInfo project={project} />
            </section>
        </section>
    )
}

Projects.defaultProps = {id: 1}
export default Projects
