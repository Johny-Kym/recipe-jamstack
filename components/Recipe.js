import React from "react";
import Link from "next/link";
import Image from "next/image";
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

export default function Recipe({ recipe }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <div className="flex flex-col   transform -rotate-1">
      {/* Image */}
      <div className="">
        {/* Image thumb */}
        <Image
        className="rounded"
          src={`https:${thumbnail.fields.file.url}`}
          width="1000"
          height="700"
        />
      </div>
      {/* content */}
      <div className="bg-yellow-400 shadow-lg relative -top-10 -left-2 z-10 rounded ">
        {/* info */}

        <div className="info p-2 bg-black w-max text-white">
          <h1 className="text-xl uppercase">{title}</h1>
          <p className="text-gray-400">Takes approx {cookingTime} minutes</p>
        </div>
        {/* CTA buttons*/}
        <div className="mt-10 flex justify-end actions">
          <Link  href={`recipes/${slug}`} >
              <button  className="  bg-blue-700 hover:bg-green-600 font-bold  transition-all transform  hover:-rotate-2  py-2 px-4 text-white">
                  Cook now <TrendingFlatIcon/>
              </button>
          </Link>
        </div>
      </div>

    </div>
  );
}
