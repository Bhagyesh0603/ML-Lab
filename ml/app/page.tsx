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
    <div className="min-h-screen bg-black text-neutral-50 font-sans selection:bg-neutral-800">
      <main className="max-w-5xl mx-auto px-6 py-24 flex flex-col gap-12">
        <header className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            ML Practicals
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
            A minimalist directory for accessing your machine learning practicals and datasets. 
            Select individual files below or download the complete archive.
          </p>
        </header>

        <section>
          <a
            href="/practicals.zip"
            download="practicals.zip"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-medium rounded-md hover:bg-neutral-200 transition-colors"
          >
            Download Complete Archive
          </a>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Practicals List */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-medium tracking-tight text-neutral-200 border-b border-neutral-900 pb-4">
              Jupyter Notebooks
            </h2>
            <div className="flex flex-col gap-2">
              {practicals.map((prac, i) => (
                <a
                  key={i}
                  href={`/${encodeURIComponent(prac.file)}`}
                  download={prac.file}
                  className="group flex items-center justify-between p-4 rounded-lg bg-transparent border border-neutral-900 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all"
                >
                  <span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-100 transition-colors">
                    {prac.title}
                  </span>
                  <svg className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              ))}
            </div>
          </section>

          {/* Datasets List */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-medium tracking-tight text-neutral-200 border-b border-neutral-900 pb-4">
              Datasets
            </h2>
            <div className="flex flex-col gap-2">
              {datasets.map((csv, i) => (
                <a
                  key={i}
                  href={`/${encodeURIComponent(csv)}`}
                  download={csv}
                  className="group flex items-center justify-between p-4 rounded-lg bg-transparent border border-neutral-900 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all"
                >
                  <span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-100 transition-colors truncate pr-4">
                    {csv}
                  </span>
                  <svg className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
