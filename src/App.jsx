import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
function App() {
  return (
    <div>
      <Header name={blog.title} />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={blog.articles} />
    </div>
  );
}

export default App;
