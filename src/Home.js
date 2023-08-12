import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
  const { error, isPending, data: blogs } = useFetch('/data/db.json')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;