// our-domain.com/news// our-domain.com/news/[anything]
import { useRouter } from "next/router";

function News() {
	const router = useRouter();
	const newsId = router.query.newsId;
	console.log(newsId);
	return <h1>xyz</h1>;
}

export default News;
