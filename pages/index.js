import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import Head from "next/head";

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

import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Franks Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
