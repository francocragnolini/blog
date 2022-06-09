import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

// const DUMMY_POSTS = [
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs",
//   },
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs2",
//   },
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs3",
//   },
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs4",
//   },
// ];

const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};

export default AllPostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
