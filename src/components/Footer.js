import React from 'react'

class Features extends React.Component {
	render(){
		return (
      <div className="col-6 col-md">
        <h5 className="text-success">Features</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-muted" href="#">Lorem ipsum</a></li>
          <li><a className="text-muted" href="#">Lorem ipsum</a></li>
          <li><a className="text-muted" href="#">Lorem ipsum</a></li>
          <li><a className="text-muted" href="#">Lorem ipsums</a></li>
          <li><a className="text-muted" href="#">Lorem ipsum</a></li>
          <li><a className="text-muted" href="#">Lorem ipsum</a></li>
        </ul>
      </div>
		)
	}
}

class Resources extends React.Component {
	render(){
		return (
      <div className="col-6 col-md">
        <h5 className="text-success">Resources</h5>
        <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="#">Lorem ipsum</a></li>
        <li><a className="text-muted" href="#">Lorem ipsum</a></li>
        <li><a className="text-muted" href="#">Lorem ipsum</a></li>
        <li><a className="text-muted" href="#">Lorem ipsums</a></li>
        <li><a className="text-muted" href="#">Lorem ipsum</a></li>
        <li><a className="text-muted" href="#">Lorem ipsum</a></li>
        </ul>
      </div>
		)
	}
}

class About extends React.Component {
	render(){
		return (
      <div className="col-6 col-md">
        <h5 className="text-success">About</h5>
        <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="#">Lorem ipsum</a></li>
        <li><a className="text-muted" href="#">Lorem ipsum</a></li>
        <li><a className="text-muted" href="#">Lorem ipsum</a></li>
        <li><a className="text-muted" href="#">Lorem ipsums</a></li>
        <li><a className="text-muted" href="#">Lorem ipsum</a></li>
        <li><a className="text-muted" href="#">Lorem ipsum</a></li>
        </ul>
      </div>
		)
	}
}

class Credit extends React.Component {
	render(){
		return (
      <div className="col-12 col-md">
        <small className="d-block mb-3 text-muted">© 2020</small>
      </div>
		)
	}
}

class Footer extends React.Component {
  render(){
    return (
      <div className="container">
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <Credit/>
            <Features/>
            <Resources/>
            <About/>
          </div>
      </footer>
    </div>
    )
  }
}

export default Footer;