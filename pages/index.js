import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
import Header from "../components/Header";
import Recipe from "../components/Recipe";

export const getStaticProps = async () => {
  const client = createClient({
    space: "wumj2bwqym59",
    accessToken: "_AlJxd9xY27-EiTGd6cn33JFmHxfbrq4txlq2fXUcIM",
  });

  const res = await client.getEntries({
    content_type: "recipe",
  });

  return {
    props: {
      recipes: res.items,
    },
    revalidate: 1,
  };
};

export default function Home({ recipes }) {
  console.log(recipes);
  return (
    <>
      <Header />
      <div className="px-4  font-myFont md:px-10 lg:px-36">
        <h1 className="text-black text-center text-4xl mt-24">Recipes</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {recipes.map((recipe) => (
            <Recipe key={recipe.sys.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
}
