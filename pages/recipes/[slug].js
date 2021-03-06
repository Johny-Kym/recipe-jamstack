import React from "react";
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Header from "../../components/Header";
const client = createClient({
  space: "wumj2bwqym59",
  accessToken: "_AlJxd9xY27-EiTGd6cn33JFmHxfbrq4txlq2fXUcIM",
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "recipe",
  });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });
  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: "false",
      },
    };
  }
  return {
    props: {
      recipe: items[0],
    },
    revalidate: 1,
  };
};

export default function RecipeDetails({ recipe }) {
  if (!recipe) return <div>Loading...</div>;
  const { featuredImage, title, cookingTime, ingredients, method } =
    recipe.fields;
  console.log(recipe);

  return (
    <>
      <Header />
      <div className="px-2 font-myFont md:px-10 lg:px-36 py-10 ">
        {/*Banner */}
        <div className="mt-10">
          <Image
            src={`https:${featuredImage?.fields?.file?.url}`}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
          />
          <h1 className="bg-yellow-400 px-1 shadow-lg py-3 w-max font-black text-xl uppercase relative -top-10 -left-1 transform -rotate-1">
            {title}
          </h1>
        </div>
        {/*info */}
        <p className="mt-0 mb-2">
          Takes about{" "}
          <span className="font-bold text-black -mt-2"> {cookingTime}</span>{" "}
          mins
        </p>
        <h3 className="  shit  ">Ingredients</h3>

        <ol className="mb-4">
          {ingredients.map((ing) => (
            <li key={ing}>-{ing}</li>
          ))}
        </ol>

        <div className="">
          <h1 className="uppercase   shit ">Method</h1>
          <div>{documentToReactComponents(method)}</div>
        </div>
      </div>
    </>
  );
}
