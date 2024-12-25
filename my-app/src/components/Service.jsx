import React from "react";

function Service(props) {
    console.log(props);
    
    // let user = {
    //     city: "Bishkek",
    //     firstname: "Saltanat"
    // }   

    // console.log(user.firstname);
    // let {city,firstname} = user 

    let {name, age, image} = props
    return (
        <div>
            My name is {name} I'm {age} year old 
              <img style={{width:"200px", height:"200px"}} src={image}/>
        </div>
    )
}

export default Service