// app/page.tsx
import ProjectCard from "../components/ProjectCard"; // Using the reliable relative path

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24">
      
      {/* HEADER SECTION */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Soumya Gopalapuram
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300">
          Data Scientist | Machine Learning Practitioner
        </p>
      </div>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        
        <ProjectCard 
          title="Customer Churn Analysis and Predictive Modeling"
          description="To analyze the factors leading to customer churn and develop a high-accuracy model to predict which customers are likely to leave."
          techStack="Python, pandas, scikit-learn, XGBoost, imbalanced-learn, SHAP, seaborn, matplotlib"
          outcome="The tuned XGBoost model achieved the best overall balance of precision and recall. A key challenge was implementing SHAP for model interpretability under a 5-hour time constraint."
          githubLink="https://github.com/SoumyaGopalapuram/Customer-Churn-Analysis-and-Predictive-Modeling"
        />

      </section>

    </main>
  );
}