import { NavLink } from "react-router-dom"
import './style/Navbar.css'
export const Navbar = () => {
    return(
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src="data:image/jpeg;base64,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"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/register' >Register</NavLink>
       <NavLink to='/login'>login</NavLink>
       <NavLink to='/shortenurl'>Shorten Url</NavLink>
     
      </div>
    </div>
  </div>
</nav>
    )
}