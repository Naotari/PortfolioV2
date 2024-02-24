import "./ProjectTemplate.css"

const ProjectTemplate = (props) => {

    const language = props.language
    const content = props.Project

    return (
        <div className="Project_Template_Main" id={content.id}>
            <h1>{language === "es"? content.nombre: content.name}</h1>
            <a href={content.link} className="Project_Template_Image_Box">
                <h1 className="Project_Template_Image_Text">{language === "es"? "Ir al sitio": "Go to page"}</h1>
                <img src={content.imagen} className="Project_Template_Image"></img>
            </a>
            <div className="Project_Template_Description_Box">
                <a href={content.githubLink} className="Project_Template_Box_GitHub">GitHub<img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674581324/Portfolio/GitHub%20Logo.png" className="Project_Template_Image_GitHub"></img></a>
                <p className="Project_Template_Text">{language === "es"? content.contenido: content.content}</p>
            </div>
        </div>
    )
};

export default ProjectTemplate