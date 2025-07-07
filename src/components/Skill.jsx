function Skill (){
    const list=[{name:"HTML",link:"https://img.icons8.com/?size=100&id=20909&format=png&color=000000"},
        {name:"CSS",link:"https://img.icons8.com/?size=100&id=21278&format=png&color=000000"},
        {name:"JavaScript",link:"https://img.icons8.com/?size=100&id=108784&format=png&color=000000"},
        {name:"React",link:"https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000"},
        {name:"Python",link:"https://img.icons8.com/?size=100&id=13441&format=png&color=000000"},
        {name:"PostgreSQL",link:"https://img.icons8.com/?size=100&id=25010&format=png&color=000000"},
        {name:"SolidWorks",link:"https://img.icons8.com/?size=100&id=62397&format=png&color=000000"},
        {name:"PowerBI",link:"https://img.icons8.com/?size=100&id=qYfwpsRXEcpc&format=png&color=000000"}
        ];
        
    return(
        <div>
            <h2>Skills</h2>
            <ul className="ul-skills">
                {list.map((element)=>{
                    return(
                        <li className="list-img" key={element.name}>
                            <p>{element.name}</p>
                            <img src={element.link}/>
                            
                        </li>
                    )
                })}


            </ul>
        </div>
    );
};

export default Skill