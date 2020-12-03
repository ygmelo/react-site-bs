import React from 'react'

const webData = {
	imgFeaturette: [
		"https://nourishedlife.co.uk/media/1101/brain-food-2-copy.jpg",
		"https://life-in-the-lofthouse.com/wp-content/uploads/2016/06/Rainbow-Fruit-Salad-500x500.jpg",
		"https://nutritionfacts.org/app/uploads/2017/07/Fruit.jpeg",
	],
	imgCard: [
		"https://www.digitalnegative.co/wp-content/uploads/Food-Photographer-for-Wings-500x500.jpg",
		"https://www.lydiasfoods.com/wp-content/uploads/2014/08/Sunflower-Caraway-Sprouted-Bread-Lydias-Foods-www.LydiasFoods.com-800x800-4-500x500.jpg",
		"https://familystylefood.com/wp-content/uploads/2018/01/bucatini-23-500x500.jpg"
	],
  imgCustomer: [
		"https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg"
	]
}

class Article extends React.Component {
	render(){
		return (
			<React.Fragment>
				<div className="container">
					<div className="py-4 text-center mt-5">
						<h2 className="text-success">Lorem ipsum</h2>
						<p className="lead">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

class Featurette extends React.Component {
	render(){
		const classFeaturette = this.props.align == "left" ? "row featurette mt-5" : "row featurette mt-5 d-flex flex-row-reverse";

		return (
			<React.Fragment>
				<div className="container">
					<div className={classFeaturette}>
						<div className="col-md-7">
							<h2 className="featurette-heading">Lorem ipsum dolor sit amet. <span className="text-success">consectetur adipiscing elit.</span></h2>
							<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
						</div>
						<div className="col-md-5">
							<img className="featurette-image img-fluid mx-auto" src={this.props.img}/>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

class Card extends React.Component {
	render(){
		return (
			<div className="card">
				<img className="card-img-top" src={this.props.img}/>
				<div className="card-body">
					<h5 className="card-title">Lorem ipsum dolor</h5>
					<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
				</div>
				<div className="card-footer">
					<small className="text-success">Lorem ipsu</small>
				</div>
			</div>
		)
	}
}

class CardDeck extends React.Component {
	render(){
		return (
			<div className="container">
				<div className="card-deck mt-5">
					{this.props.children}
				</div>
			</div>
		)
	}
}

class Customer extends React.Component {
	render(){
		return (
			<div className="col-lg-4">
				<img className="rounded-circle" src={this.props.img} width="130" height="130"/>
				<h2>Lorem ipsum</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<p><a className="btn btn-outline-success" href="#" role="button">Ver detalhes »</a></p>
			</div>
		)
	}
}

class CustomerList extends React.Component {
	render(){
		return (
			<div className="container">
				<div className="row text-center mt-5">
					{this.props.children}
				</div>
			</div>
		)
	}
}

class Parallax extends React.Component {
	render(){
		return (
			<div className="container-fluid">
				<div className={this.props.option}></div>
			</div>
		)
	}	
}

class Body extends React.Component {
	render(){
		return (
		<React.Fragment>
			<Article/> 
			<Parallax option="parallax mt-3"/>
			<Featurette img={webData.imgFeaturette[0]} align="left"/>

			<CardDeck>
				<Card img={webData.imgCard[0]}/>
				<Card img={webData.imgCard[1]}/>
				<Card img={webData.imgCard[2]}/>
			</CardDeck>
			
			<Parallax option="parallax2 mt-4"/>
			<Featurette img={webData.imgFeaturette[1]} align="right"/>

			<CustomerList>
				<Customer img={webData.imgCustomer[0]}/>
				<Customer img={webData.imgCustomer[0]}/>
				<Customer img={webData.imgCustomer[0]}/>
			</CustomerList>

			<Featurette img={webData.imgFeaturette[2]} align="left"/>
		</React.Fragment>
		)
	}
}
export default Body;