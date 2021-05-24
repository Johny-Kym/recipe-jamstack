import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Recipe({ recipe }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <div className="flex flex-col   transform -rotate-1">
      {/* Image */}
      <div className="">
        {/* Image thumb */}
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      {/* content */}
      <div className="bg-yellow-400 shadow-lg relative -top-10 -left-2 z-10 ">
        {/* info */}

        <div className="info p-4">
          <h1 className="text-xl uppercase">{title}</h1>
          <p className="font-thin">Takes approx {cookingTime} minutes</p>
        </div>
        {/* CTA buttons*/}
        <div className="mt-10 flex justify-end actions">
          <Link  href={`recipes/${slug}`} >
              <button style={{background:"#2460FB"}} className="  py-2 px-4 text-white">
                  Cook now
              </button>
          </Link>
        </div>
      </div>

    </div>
  );
}
