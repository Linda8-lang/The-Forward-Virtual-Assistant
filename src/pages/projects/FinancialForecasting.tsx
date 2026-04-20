import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinancialForecasting = () => {
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
              Financial Forecasting
            </h1>
            <p className="text-xl text-muted-foreground">
              Predictive modeling for small business budget planning
            </p>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                A growing small business faced challenges with budget planning and financial forecasting. They were operating on gut feelings and historical averages, leading to overspending in some areas and under-investment in others. I developed a predictive financial model that incorporated historical data, seasonal patterns, and growth projections to provide accurate budget recommendations for the year ahead.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                The business had 3 years of transaction data scattered across bank statements, invoices, and spreadsheets with no organized analysis. They couldn't identify seasonal patterns, didn't understand their true cost structure, and had no way to forecast expenses for upcoming months. This led to cash flow surprises, missed investment opportunities, and inefficient budget allocation across departments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Forecasting Dashboard</h2>
              <div className="bg-secondary/20 rounded-lg p-8 text-center border-2 border-dashed border-primary/30">
                <div className="text-6xl mb-4">💰</div>
                <p className="text-muted-foreground mb-2">Financial Forecasting Model Interface</p>
                <p className="text-sm text-muted-foreground">Interactive budget planning tool with scenario analysis and variance tracking</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Analytics Visualizations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-secondary/20 rounded-lg p-6 text-center border-2 border-dashed border-primary/30">
                  <div className="text-4xl mb-3">📈</div>
                  <h4 className="font-semibold mb-2">Expense Trend Analysis</h4>
                  <p className="text-sm text-muted-foreground">Historical spending patterns with seasonal adjustments</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-6 text-center border-2 border-dashed border-primary/30">
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="font-semibold mb-2">Forecast Accuracy Chart</h4>
                  <p className="text-sm text-muted-foreground">Model performance metrics and prediction intervals</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-6 text-center border-2 border-dashed border-primary/30">
                  <div className="text-4xl mb-3">💡</div>
                  <h4 className="font-semibold mb-2">Cost Optimization Insights</h4>
                  <p className="text-sm text-muted-foreground">Identified savings opportunities and efficiency gains</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-6 text-center border-2 border-dashed border-primary/30">
                  <div className="text-4xl mb-3">📊</div>
                  <h4 className="font-semibold mb-2">Scenario Planning</h4>
                  <p className="text-sm text-muted-foreground">Best/worst case projections and sensitivity analysis</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {["Statistics", "Excel", "Forecasting", "Predictive Modeling"].map((tech) => (
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
                  <span><strong>85% forecast accuracy:</strong> Model predictions matched actual expenses within 15% variance, enabling confident budget planning</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Identified $120K annual savings:</strong> Analysis revealed unnecessary spending categories and seasonal optimization opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Improved cash flow management:</strong> Quarterly forecasts eliminated cash flow surprises and enabled strategic investment planning</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Learnings</h2>
              <p className="text-muted-foreground leading-relaxed">
                This project taught me that even simple statistical models can provide tremendous value when based on clean, organized data. Business users don't need complex AI - they need accurate, understandable forecasts they can act on. Including uncertainty ranges and scenario analysis made the model more credible and useful for planning multiple futures.
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

export default FinancialForecasting;
