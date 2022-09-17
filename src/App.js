import TodosForm from "./components/reducer/todos-form";
import MarkdownPage from "./components/markdown-parsing/markdown-page"
import UsingRef from "./components/referencer/using-ref";
import UsingMemo from "./components/memoer/using-memo";
import UsingLayoutEffect from "./components/layouter/using-layout-effect";
// import logo from './logo.svg';

function App() {

  return (
    <div style={{ padding: "4rem" }}>
      <TodosForm />
      <hr />
      <UsingRef />
      <hr />
      <UsingMemo />
      <hr />
      <UsingLayoutEffect />
      <hr />
      <MarkdownPage />
    </div>
  );
}

export default App;
