import Link from "next/link";
export const blogsdata = [
    {
        id: 1,
        title: "Blog 1",
        description: "Blog 1 description",
    },
    {
        id: 2,
        title: "Blog 2",
        description: "Blog 2 description",
    },
];
export async function generateStaticParams() {
    // No need for external data fetching here as you have `blogsdata`
    const params = blogsdata.map((post) => ({
      id: post.id.toString(), // Ensure ID is a string for matching routes
    }));
    return params;
  }

export default function Blogs() {
    

    return (
        <main className="mt-10">
            <ul>
                {blogsdata.map((blog) => (
                    <li className="mb-5 " key={blog.id}>
                        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
               
            </ul>
            <h1>{blogsdata[0].id}</h1>
        </main>
    );
}
