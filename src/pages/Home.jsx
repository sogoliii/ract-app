import AppNav from "../components/AppNav";
import Logo from "../components/Logo";

function Home() {
  return (
    <div className="home">
      <header className="header">
        <AppNav />
      </header>
      <main className="main">
        <div className="line-horizontal"></div>
        <Logo />
      </main>
    </div>
  );
}

export default Home;
