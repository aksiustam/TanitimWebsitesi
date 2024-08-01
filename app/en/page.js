import getSettings from "../actions/getSettings";
import HomePage from "./components/Home/HomePage";

export default async function Home() {
  const settings = await getSettings();
  return (
    <main>
      <HomePage settings={settings} />
    </main>
  );
}
