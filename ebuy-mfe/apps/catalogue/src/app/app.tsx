// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./app.module.css";
import NxWelcome from "./nx-welcome";
import { Header } from "@ebuy/ui";

export function App() {
  return (
    <>
      <Header />
      <NxWelcome title="catalogue" />
      <div />
    </>
  );
}

export default App;
