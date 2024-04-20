import { notFound } from "next/navigation";
import { blogsdata } from "../page";


export default function BlogPage({ params }) {
    const { id } = params;
    console.log(params)

    if (id === "3") {
        notFound();
    }

    return <div className="mt-6">{`The blog id is: ${id} this is ${blogsdata[id-1].title}`}</div>;
}
