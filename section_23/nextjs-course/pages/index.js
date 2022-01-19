// our-domain.com/

import Link from 'next/link';
import { Fragment } from "react";
function HomePage() {
	return (
		<Fragment>
			<h1>The Home Page</h1>
			<ul>
				<li>
					<Link href='/news/some-page'>SOME PAGE NEWS</Link>
				</li>
			</ul>
		</Fragment>
	);
}

export default HomePage;
