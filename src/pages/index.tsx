import Header from "../components/Header";

const style = {
  wrapper:
    "h-screen max-h-screen h-min-screen w-screen bg-slate-900 text-white select-none flex flex-col justify-between",
};

export default function Index() {
  return (
    <div className={style.wrapper}>
      <Header />
      <h2>Header 2</h2>;
    </div>
  );
}
