import React from "react"
import { NavLink as RouterNavLink, useParams } from "react-router-dom"

const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams()
  const cat = cats.find((item) => item.id === +id)
  console.log(cat)

  return (
    <>
      <h3>Meet this Cat</h3>
      <img 
        src={cat?.image}
        alt="profile of all our cats friends"
        className="cat-profile-pic"
      />
      <p data-testid="cat-name">Name:{cat?.name}</p>
      <p>Age: {cat?.age}</p>
      <p>About: {cat?.about}</p>
            <RouterNavLink to={`/catedit`} className="nav-link-button">
              Update your Purr-File
            </RouterNavLink>
      <div></div>     
      <RouterNavLink className="nav-link-button" onClick={() => deleteCat(cat.id)}>
        Delete {cat?.name}
      </RouterNavLink>
    </>
  )
}

export default CatShow
