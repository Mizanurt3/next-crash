// import { notFound } from "next/navigation";
// import { blogsdata } from "../page";


// export default function BlogPage({ params }) {
//     const { id } = params;
//     console.log(params)
//     return <h1>{id}</h1>

//     // if (id === "3") {
//     //     notFound();
//     // }

//     // return <div className="mt-6">{`The blog id is: ${id} this is ${blogsdata[id-1].title}`}</div>;
// }

import { generateStaticParams } from "../page"; 
import { notFound } from "next/navigation";
import { blogsdata } from "../page";

export async function getStaticPaths() {
  const params = await generateStaticParams();
  return {
    paths: params.map((param) => ({ params: param })),
    fallback: false,
  };
}

export default function BlogPage({ params }) {
  const { id } = params;

//   if (id === "3") {
//     notFound(); // Handle non-existent ID as a 404
//   }

  return (
    <div className="mt-6">
      {`The blog id is: ${id} this is ${blogsdata[parseInt(id) - 1].title}`}
    </div>
  );
}
