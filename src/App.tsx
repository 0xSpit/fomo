import { PricesList } from "./pages";
import { FooterContainer } from "./pages/prices/footer";

export default function App() {
  return (
    <div className="bg-gray-900 mx-auto h-screen p-8 min-w-[500px] min-h-[300px]">
      <main>
        <h1 className="text-2xl font-bold tracking-tight text-white text-center">
          👋 Crypto friend
        </h1>
        <PricesList />
      </main>
      <FooterContainer />
    </div>
  );
}
