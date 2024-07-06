
export default function Profile(){
    return (
        <div className="profile">
            <img src="/src/assets/carol2.jpg" alt="most beautiful girl"/>
            <h1>Carol Aziz</h1>
            <p>Highschool graduate</p>
            <p><a href="#">carolaziz.website</a></p>
            <div className="buttons">
                <a href="#" className="email"><i className="fa-solid fa-envelope" />Email</a>
                <a href="#" className="linkedIn"><i className="fa-brands fa-linkedin" />LinkedIn</a>
            </div>
        </div>
        
    )
}