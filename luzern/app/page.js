import MapWithCirclesKonva from "@/components/MapWithCircles";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="sticky text-center inset-x-0 top-0 text-6xl md:text-[100px] m-0 z-10">
        Luzern
      </h1>
      <MapWithCirclesKonva />
    </main>
  );
}
