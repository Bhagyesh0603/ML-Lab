export default function Home() {
  const practicals = [
    { title: "EDA & Visualization", file: "ML_01_EDA & Visualization.ipynb" },
    { title: "Data Preprocessing & Feature Engineering (Part 1)", file: "ML_02(1)_Data Preprocessing & Feature Engineering.ipynb" },
    { title: "Data Preprocessing & Feature Engineering (Part 2)", file: "ML_02(2)_Data Preprocessing & Feature Engineering.ipynb" },
    { title: "Linear Regression", file: "ML_03_Linear Regression.ipynb" },
    { title: "Decision Tree (ID3)", file: "ML_04_Decision Tree (ID3).ipynb" },
    { title: "KNN on Iris", file: "ML_05_KNN on Iris.ipynb" },
    { title: "Kernel SVM", file: "ML_06_Kernel SVM.ipynb" },
    { title: "Random Forest (Part 1)", file: "ML_07(part_1)_Random Forest.ipynb" },
    { title: "Random Forest (Part 2)", file: "ML_07(part_2)_Random Forest.ipynb" },
    { title: "K-Means Clustering", file: "ML_08_K-Means Clustering.ipynb" },
    { title: "Hierarchical Clustering", file: "ML_09_Hierarchical Clustering.ipynb" }
  ];

  const datasets = [
    "50_Startups.csv",
    "bill_authentication.csv",
    "heart (1).csv",
    "loan_train.csv",
    "Mall_Customers.csv",
    "Salary.csv"
  ];

  return (
    <div className="flex flex-col min-h-screen items-center py-12 px-4 bg-zinc-950 font-sans">
      <main className="flex flex-col gap-8 w-full max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            ML Practicals 🚀
          </h1>
          <p className="text-zinc-400 text-lg">
            Click on a practical title or dataset to easily download it instantly.
          </p>
        </div>

        <a
          href="/practicals.zip"
          download="practicals.zip"
          className="flex w-full items-center justify-center px-4 py-4 bg-blue-600 hover:bg-blue-500 text-white text-xl md:text-2xl font-bold rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:scale-[1.02] active:scale-95 mb-4"
        >
          📦 Download ALL as ZIP
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Practicals List */}
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-3">
              📘 Jupyter Notebooks
            </h2>
            <div className="flex flex-col gap-3">
              {practicals.map((prac, i) => (
                <a
                  key={i}
                  href={`/${encodeURIComponent(prac.file)}`}
                  download={prac.file}
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 hover:bg-emerald-600/20 border border-transparent hover:border-emerald-500/50 text-zinc-300 hover:text-emerald-400 transition-colors group"
                >
                  <span className="font-medium text-[15px]">{prac.title}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">⬇️</span>
                </a>
              ))}
            </div>
          </div>

          {/* Datasets List */}
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 shadow-xl h-fit">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-3">
              📊 Datasets (CSV)
            </h2>
            <div className="flex flex-col gap-3">
              {datasets.map((csv, i) => (
                <a
                  key={i}
                  href={`/${encodeURIComponent(csv)}`}
                  download={csv}
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 hover:bg-blue-600/20 border border-transparent hover:border-blue-500/50 text-zinc-300 hover:text-blue-400 transition-colors group"
                >
                  <span className="font-medium text-[15px] truncate max-w-[250px]">{csv}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">⬇️</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
