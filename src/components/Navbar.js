import React from 'react'

class Navbar extends React.Component {
  render(){
    return (
		<React.Fragment>
		 <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top">
		    <a className="navbar-brand text-success" href="#"><h4>Lorem ipsu</h4></a>
				<button class="navbar-toggler btn btn-outline-success" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link text-success" href="#">Lorem ipsu <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-success" href="#">Lorem ipsu</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">Lorem ipsu</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">Lorem ipsu</a>
						</li>
					</ul>
					<form className="form-inline">
						<button className="btn btn-outline-success" type="submit">Lorem ipsu</button>
					</form>
				</div>
			</nav>
		</React.Fragment>
    )
  }
}
export default Navbar;