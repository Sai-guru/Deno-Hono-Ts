export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-10">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <p className="text-lg text-gray-600">
        Visit{" "}
        <a href="/landing" className="text-blue-500 underline">
          /landing
        </a>{" "}
        to see the cool landing page!
      </p>
    </main>
  );
}
