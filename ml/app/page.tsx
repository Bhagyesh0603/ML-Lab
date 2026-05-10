export default function Home() {
  const practicals = [
    "EDA & Visualization",
    "Data Preprocessing & Feature Engineering",
    "Linear Regression",
    "Decision Tree (ID3)",
    "KNN on Iris",
    "Kernel SVM",
    "Random Forest",
    "K-Means Clustering",
    "Hierarchical Clustering"
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-950 font-sans p-8">
      <main className="flex flex-col items-center gap-8 w-full max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          ML Practicals 🚀
        </h1>
        <p className="text-zinc-400 text-lg text-center max-w-md">
          Download all datasets and Jupyter Notebooks in a single click.
        </p>

        <a
          href="/practicals.zip"
          download="practicals.zip"
          className="flex w-full items-center justify-center px-8 py-6 bg-blue-600 hover:bg-blue-500 text-white text-2xl md:text-3xl font-extrabold rounded-2xl shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all hover:scale-105 active:scale-95"
        >
          ⬇️ ONE CLICK DOWNLOAD
        </a>

        <div className="w-full mt-8 bg-zinc-900 rounded-2xl p-6 border border-zinc-800 shadow-xl">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-2">Included Practicals:</h2>
          <ol className="list-decimal list-inside space-y-3 text-zinc-300">
            {practicals.map((prac, i) => (
              <li key={i} className="text-lg md:text-xl font-medium tracking-wide">
                {prac}
              </li>
            ))}
          </ol>
        </div>
      </main>
    </div>
  );
}
