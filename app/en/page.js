import getSettings from "../actions/getSettings";
import HomePage from "./components/Home/HomePage";
import HomePage2 from "./components/Home/HomePage2";

export default async function Home() {
  const settings = await getSettings();
  return (
    <main>
      <HomePage2 settings={settings} />
    </main>
  );
}
