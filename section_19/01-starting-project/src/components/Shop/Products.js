import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
	{
		title: "Soap",
		price: 10,
		description: "Best soap in the industry",
		id: 1,
	},
	{
		title: "Book",
		price: 2,
		description: "Best book in the industry",
		id: 2,
	},
	{
		title: "Brush",
		price: 3,
		description: "Best brush in the industry",
		id: 3,
	}
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_DATA.map((object) => {
					return (
						<ProductItem
							key={object.id}
							id={object.id}
							title={object.title}
							price={object.price}
							description={object.description}
						/>
					);
				})}
				{/* <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        /> */}
			</ul>
		</section>
	);
};

export default Products;
