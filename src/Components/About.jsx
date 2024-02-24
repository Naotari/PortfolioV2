import "./About.css"

const About = (props) => {

    return (
        <div className="About_Main" id="About">
            <p>{props.language === "es"?
            "En 2022, tomé la decisión de incursionar en el campo de la programación y opté por embarcarme en un curso de Desarrollador Full Stack. Este curso intensivo abarcó más de 800 horas de estudio, durante las cuales adquirí conocimientos exhaustivos sobre la creación de sitios web completos. Al completar el curso, comencé a trabajar en proyectos personales y a abordar ejercicios técnicos, lo que eventualmente me llevó a concebir mi proyecto actual: el desarrollo de una plataforma de adopción de mascotas. Mi objetivo con este proyecto es promover la adopción de mascotas en Guatemala y contribuir al bienestar de los animales en situación de vulnerabilidad. Aunque actualmente me encuentro inmerso en este proyecto, mi meta a mediano plazo es expandir mis habilidades hacia el campo de la programación orientada a videojuegos."
            :
            "In 2022, I decided to delve into the field of programming and opted to enroll in a Full Stack Developer course. This intensive course spanned over 800 hours of study, during which I gained comprehensive knowledge on creating complete websites. Upon completion of the course, I began working on personal projects and tackling technical exercises, eventually leading me to conceive my current project: the development of a pet adoption platform. My goal with this project is to promote pet adoption in Guatemala and contribute to the well-being of animals in vulnerable situations. Although I am currently immersed in this project, my medium-term goal is to expand my skills into the field of game-oriented programming."
            }</p>
            

        </div>
    )
}

export default About