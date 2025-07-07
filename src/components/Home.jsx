import Skill from "./Skill";
import Contacts from "./Contacts";
import userimg from "../img/Osvaldo.jpeg";


function Home(){
    return(
        <div className="body">
            <div className="blue">
                <img className="foto" src={userimg} alt="my-img" />
                <h1>Osvaldo Cesar Quinteros Terrazas</h1>
                <p> Mechatronics Engineer graduated from UCB, with skills in electromechanics,
                    programming, electronics, and control. Experience within the 
                    industry with a broad focus on web development.</p>
                <Skill />
                <Contacts />
            </div>
        </div>
        
    )
}

export default Home;