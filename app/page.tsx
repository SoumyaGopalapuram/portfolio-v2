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
          Data Analyst | Machine Learning | Backend Developer
        </p>
      </div>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        
        <ProjectCard 
          title="Customer Churn Analysis and Predictive Modeling"
          description="Analyzed the factors leading to customer churn and develop a high-accuracy model to predict which customers are likely to leave."
          techStack="Python, pandas, scikit-learn, XGBoost, imbalanced-learn, SHAP, seaborn, matplotlib"
          outcome="The tuned XGBoost model achieved the best overall balance of precision and recall. A key challenge was implementing SHAP for model interpretability under a 5-hour time constraint."
          githubLink="https://github.com/SoumyaGopalapuram/Customer-Churn-Analysis-and-Predictive-Modeling"
           images={[
          {
            src: '/images/churn-bar.png', 
            caption: "Target Variable: Churn Distribution •	Churn rate is ~15.6%, indicates class imbalance "
          },
          {
            src: '/images/churn-balanced-churn-bars', 
            caption: "Churn by Complains:Customers who lodged complaints are far more likely to churn, showing that complaints are a strong early warning signal for dissatisfaction.Churn by Tariff Plan:Plan 1 has a higher churn rate compared to Plan 2, suggesting Plan 2 is better at retaining customers and could be promoted as a more stable option.'\n'Churn by Status:Customers with Status = 2 churn at significantly higher rates, marking this group as especially vulnerable and in need of targeted retention strategies."
          },
          {
            src: '/images/churn-correlation.png', 
            caption: "Multicollinearity Insights (Post-Balancing):The correlation matrix shows several strong correlations between independent variables:\n•	Seconds of Use and Frequency of Use (0.95)\n•	Customer Value and Frequency of SMS (0.92)\n•	Age and Age Group (0.93)\nThese indicate potential multicollinearity, which can affect linear models like logistic regression. Tree-based models such as Random Forest and XGBoost are less sensitive to this issue and can handle the full feature set without concern." 
          },
          {
            src: '/images/churn-numerical-features.png', 
            caption: "Distribution of numerical features in the dataset"
          },
          {
            src: '/images/churn-logistic.png', 
            caption: "Logistic Regression (Coefficient-based): •	Best for linear relationship insights." 
          },
          {
            src: '/images/churn-svm.png', 
            caption: "Support Vector Machine (Permutation Importance): •	Helps interpret nonlinear relationships in decision boundaries."
          },
          {
            src: '/images/churn-tunedrf.png', 
            caption: "Frequency of use, Customer Value, Seconds of Use: These showed the highest SHAP values, indicating strong influence on churn predictions."
          },
          {
            src: '/images/churn-tunedxgboost.png', 
            caption: "Top contributors: Frequency of Use, Seconds of Use, Customer Value.\nSecondary factors: Call Failure, Charge Amount, Age Group\nMinimal impact: Complains, Tariff Plan"
          }
    ]}
    />

        <ProjectCard 
          title="Steam Game Recommendation Engine"
          description="Engineered a scalable recommendation engine to personalize game suggestions for thousands of users on a platform with a vast library of games."
          techStack="PySpark, Azure Databricks, Collaborative Filtering (ALS), TF-IDF"
          outcome="Designed robust ETL pipelines to process millions of records, achieving a strong RMSE of 0.85 and Precision@5 of 72%."
          githubLink="https://github.com/SoumyaGopalapuram/YOUR_REPO_LINK_HERE" // <-- 
          images={[
          {
            src: '/images/steam-correlation-heatmap.png',
            caption: "Correlation heatmap for the numeric columns in the games dataset to visualize relationships between features such as price_final, discount, and positive_ratio. It is demonstrating how these features are interrelated, providing insights into patterns that will influence game recommendations."
          },
          {
            src: '/images/steam-sparse-matrix.png',
            caption: "Sparse matrix visualization to analyze user-game interactions on hours played. The matrix highlights the density of interactions, where each dot represents a specific user-game pair, offering insights into user engagement and activity distribution for the recommendation system."
          },
          {
            src: '/images/steam-network-graph-1.png',
            caption: "This Network graph visualizes the connections between users and games in the recommendation system. Users are represented as sky blue nodes, and games are represented as orange nodes. The size of each node reflects its degree (number of connections), providing insights into user preferences and game popularity. This visualization helps in understanding the network structure and interaction patterns within the dataset."
          },
          {
            src: '/images/steam-network-graph-2.png',
            caption: "This second network graph provides an intuitive view of how closely related different games are, highlighting clusters of similar games and their connections."
          },
          {
            src: '/images/steam-scatter-plot.png',
            caption: "This scatter plot visualizes the relationship between hours played and the number of helpful votes received for each game. The plot helps identify trends or patterns, such as whether higher playtimes are associated with more helpful votes, which can provide insights into user preferences and engagement levels."
          },
          {
            src: '/images/steam-bar-chart.png',
            caption: "This bar chart displays the top 10 games by total hours played, calculated by summing the playtime across all users for each game. It provides insights into the most popular games in terms of user engagement, helping to identify games that are widely played and may influence recommendation strategies."
          }  
    ]}
  />

      </section>

    </main>
  );
}