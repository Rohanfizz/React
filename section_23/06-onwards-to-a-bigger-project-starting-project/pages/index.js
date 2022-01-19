import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

// const DUMMY_MEETUPS = [
// 	{
// 		id: 1,
// 		image: "https://picsum.photos/1920/1080?random=1",
// 		title: "London",
// 		address: "Some Address, 123 City",
// 		description: "This is first meetup",
// 	},
// 	{
// 		id: 2,
// 		image: "https://picsum.photos/1920/1080?random=2",
// 		title: "Mumbai",
// 		address: "Not Some Address, 234 City",
// 		description: "Bad place to meet",
// 	},
// ];

const HomePage = (props) => {
	return (
		<Fragment>
			<Head>
				<title>Meetups</title>
				<meta
					name="description"
					content="All the best meetups locations across the globe"
				/>
			</Head>
			<MeetupList meetups={props.meetups} />
		</Fragment>
	);
};
export async function getStaticProps() {
	const client = await MongoClient.connect(
		"mongodb+srv://Rohan:rjck112@cluster0.wxkad.mongodb.net/meetups?retryWrites=true&w=majority "
	);
	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				description: meetup.description,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 1,
	};
}
export default HomePage;
