import { Button } from '@mui/material'
import {Link} from 'react-router-dom'
export default function SMNavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark  text-light" style={{backgroundColor:'black'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Bolier Plate</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Components</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="dasboard/*">Dash Board</a>
              </li>
            </ul>
            <form className="d-flex " role="search">
            <Link to='login'><Button className='mx-2' variant='contained' color='error' >Login</Button></Link>
              <Link to='signup'><Button className='mx-2' variant='contained' color='error' >Sign Up</Button></Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
