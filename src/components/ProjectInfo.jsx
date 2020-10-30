import React from 'react'
import gitCat from '../pictures/githubCat.svg'
import webPic from '../pictures/Website.svg'

const ProjectInfo = (props) => {
console.log(props)
    const {title, description, tech, links: {github, site}} = props.project

    let technology = tech.map(tech => <li>{tech}</li>)

    if(!site){
    
        return (
            <article className="flexCol projInfo">
            
            <section className="flexCol" >
            <p className="projTitle">{title}</p>
            <picture className="projPic">
                <source media="(min-width:650px)" srcSet="img_pink_flowers.jpg" />
                <source media="(min-width:465px)" srcSet="img_white_flower.jpg" />
                <img src="img_orange_flowers.jpg" alt="Flowers"  />
            </picture>
            <p className="projDesc">{description}</p>
            <p>The technology used included:</p>
            <ul className="projTech flex">{technology}</ul>    
            <div className="projLinks flex">
            <a className="projGit flexCol" href={github}> <img src={gitCat}  alt="github Link"/>Github</a> 
            <p>This a terminal project so there is no deployed site.</p>
            </div>
            </section>
        </article>
    )} else{
        
        return (
        <article className="flexCol projInfo">
            
            <section className="flexCol" >
            <p className="projTitle">{title}</p>
            <picture className="projPic">
                <source media="(min-width:650px)" srcSet="img_pink_flowers.jpg" />
                <source media="(min-width:465px)" srcSet="img_white_flower.jpg" />
                <img src="img_orange_flowers.jpg" alt="Flowers"  />
            </picture>
            <p className="projDesc">{description}</p>
            <p>The technology used included:</p>
            <ul className="projTech flex">{technology}</ul>    
            <div className="projLinks flex">
            <a className="projGit flexCol" href={github}> <img src={gitCat}  alt="github Link"/>Github</a> 
            <a className="projSite flexCol" href={site}>  <img src={webPic}  alt="Deployed Site"/>Deployed Site</a>            
            </div>
            </section>
        </article>
    )}
}

export default ProjectInfo
