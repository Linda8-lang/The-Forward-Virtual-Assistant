import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import reportPdf from "@/assets/autism_epilepsy_report.pdf";

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
              Autism & Epilepsy Analytics Dashboard
            </h1>
            <p className="text-xl text-muted-foreground">
              Clinical analytics for autism and epilepsy using Power BI and actionable dataset insights.
            </p>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                This report focuses on autism and epilepsy analytics, combining clinical insights with Power BI visualizations to support diagnosis trends, patient outcomes, and care planning.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Live Project & Report</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href={reportPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-primary/30 bg-secondary/20 p-6 hover:bg-secondary transition-colors"
                >
                  <div className="text-4xl mb-3">📄</div>
                  <h3 className="text-lg font-semibold mb-2">Download Autism/Epilepsy Report</h3>
                  <p className="text-sm text-muted-foreground">
                    Access the uploaded clinical analytics report for autism and epilepsy.
                  </p>
                </a>

                <a
                  href="https://app.powerbi.com/view?r=eyJrIjoiMDY0ZmY5YWYtM2U0MS00YzAwLTgyYzItNGViNjVjODkxNWE3IiwidCI6ImRkMjQ2ZTRhLTU0MzQtNGUxNS04YWUzLTkxYWQ5Nzk3YjIwOSIsImMiOjN9"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-primary/30 bg-secondary/20 p-6 hover:bg-secondary transition-colors"
                >
                  <div className="text-4xl mb-3">🔗</div>
                  <h3 className="text-lg font-semibold mb-2">View Live Power BI Project</h3>
                  <p className="text-sm text-muted-foreground">
                    Open the live autism/epilepsy analytics dashboard in Power BI.
                  </p>
                </a>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DataAnalysisDashboard;
