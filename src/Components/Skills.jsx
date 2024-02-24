import "./Skills.css"

const Skills = (props) => {

    return (
        <div className="Skills_Main" id="Skills">
            <h1>{props.language === "es"? "Habilidades": "Skills"}</h1>
            <div className="Skills_Second">
                <div className="Skills_Tech">
                    <h2>{props.language === "es"? "Habilidades Tecnicas": "Tech Skills"}</h2>
                    <div className="Skills_Tech_Box_Group">
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">HTML</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">CSS</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">JavaScript</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">Node</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">React</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">Redux</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575055/Portfolio/Tecnologies/Cloudinary.png" alt="cloudinary" className="Skill_Tech_Logos"></img>
                                <p className="Skills_Tech_Box_frame_Text">Cloudinary</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="sequelize" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">Sequelize</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="postgresql" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">PostgreSQL</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">npm</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  className="Skill_Tech_Logos" fill="rgb(255, 72, 0)"><title>Git</title><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>
                                <p className="Skills_Tech_Box_frame_Text">Git</p>
                            </div>
                        </div>
                </div>
                <div className="Skills_Soft">
                    <h2>{props.language === "es"? "Habilidades Blandas": "Soft Skills"}</h2>
                    <div className="Skill_Soft_Box_List">
                            <p className="Skill_Soft_Box_List_Text">{props.language === "es"? "Trabajo en equipo": "Teamwork"}</p>
                            <p className="Skill_Soft_Box_List_Text">{props.language === "es"? "Cooperacion": "Cooperation"}</p>
                            <p className="Skill_Soft_Box_List_Text">{props.language === "es"? "Iniciativa": "initiative"}</p>
                            <p className="Skill_Soft_Box_List_Text">{props.language === "es"? "Recilencia": "Resilence"}</p>
                            <p className="Skill_Soft_Box_List_Text">{props.language === "es"? "Autoconfianza": "Self-confidence"}</p>
                            <p className="Skill_Soft_Box_List_Text">{props.language === "es"? "Versatilidad": "Versatility"}</p>
                            <p className="Skill_Soft_Box_List_Text">{props.language === "es"? "Curiosidad": "Curiosity"}</p>
                            <p className="Skill_Soft_Box_List_Text">{props.language === "es"? "Adaptabilidad": "Adaptability"}</p>
                            <p className="Skill_Soft_Box_List_Text">{props.language === "es"? "Analisis de problemas": "Problem analysis"}</p>
                            <p className="Skill_Soft_Box_List_Text">{props.language === "es"? "Autodidacta": "Autodidact"}</p>
                            <p className="Skill_Soft_Box_List_Text">{props.language === "es"? "Autonomia": "Autonomy"}</p>
                            <p className="Skill_Soft_Box_List_Text">{props.language === "es"? "Capacidad Critica": "Critical capacity"}</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Skills