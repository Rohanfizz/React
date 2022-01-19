// our-domain.com/news// our-domain.com/news
import Link from "next/link";
import { Fragment } from "react";

function News() {
	return (
		<Fragment>
			<h1>News</h1>
            <ul>
                <li><Link href="/news/abcdef">Some link</Link></li>
            </ul>
		</Fragment>
	);
}

export default News;
