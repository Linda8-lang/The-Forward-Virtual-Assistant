import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DataAnalysisDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-secondary"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Button>

        <article className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Data Analysis Dashboard
            </h1>
            <p className="text-xl text-muted-foreground">
              Interactive visualization of sales trends using Python and Tableau
            </p>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                A mid-sized retail company struggled with disconnected sales data spread across multiple spreadsheets and legacy systems. They needed a unified, real-time dashboard to track sales trends, identify patterns, and make quick business decisions. I developed a comprehensive interactive dashboard using Python for data processing and Tableau for visualization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                The client had sales data from multiple stores in different formats - CSV files, Excel spreadsheets, and outdated database records. Reports took days to compile manually, decisions were made on incomplete information, and identifying trends was nearly impossible. They needed a solution that could integrate all data sources, clean inconsistencies, and present actionable insights in real-time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Dashboard Preview</h2>
              <div className="bg-secondary/20 rounded-lg p-8 text-center border-2 border-dashed border-primary/30">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-muted-foreground mb-2">Interactive Sales Dashboard Screenshot</p>
                <p className="text-sm text-muted-foreground">Real-time sales trends, store performance metrics, and seasonal analysis visualizations</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Visualizations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-secondary/20 rounded-lg p-6 text-center border-2 border-dashed border-primary/30">
                  <div className="text-4xl mb-3">📈</div>
                  <h4 className="font-semibold mb-2">Sales Trend Analysis</h4>
                  <p className="text-sm text-muted-foreground">Monthly sales trends with seasonal patterns and growth indicators</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-6 text-center border-2 border-dashed border-primary/30">
                  <div className="text-4xl mb-3">🏪</div>
                  <h4 className="font-semibold mb-2">Store Performance Map</h4>
                  <p className="text-sm text-muted-foreground">Geographic visualization of store performance and revenue distribution</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-6 text-center border-2 border-dashed border-primary/30">
                  <div className="text-4xl mb-3">📊</div>
                  <h4 className="font-semibold mb-2">Product Category Breakdown</h4>
                  <p className="text-sm text-muted-foreground">Top-performing product categories and margin analysis</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-6 text-center border-2 border-dashed border-primary/30">
                  <div className="text-4xl mb-3">⏰</div>
                  <h4 className="font-semibold mb-2">Time-based Analysis</h4>
                  <p className="text-sm text-muted-foreground">Peak hours, seasonal patterns, and forecasting models</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {["Python", "Tableau", "SQL", "Data Analysis"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>75% reduction in reporting time:</strong> From 3 days to 12 hours for monthly reports, enabling faster decision-making</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Identified $500K optimization opportunity:</strong> Dashboard revealed seasonal trends and underperforming store locations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Real-time decision making:</strong> Team now has instant access to sales performance, enabling quick response to market changes</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Learnings</h2>
              <p className="text-muted-foreground leading-relaxed">
                This project reinforced the critical importance of data quality as the foundation for analytics. Time spent upfront cleaning and validating data prevents downstream issues and builds user trust in the insights. I also learned that the best analysis is useless if stakeholders don't understand it - investing in clear, interactive visualization and user training is just as important as the technical analysis itself.
              </p>
            </section>
          </div>

          <div className="pt-8 border-t border-border">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Project
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DataAnalysisDashboard;
