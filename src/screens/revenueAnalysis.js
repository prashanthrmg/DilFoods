import { Box } from "@mui/material";
import Header from "../components/Header";
import RevenueAnalysisChart from "../components/RevenueAnalysisChart";

const RevenueAnalysis = () => {
  return (
    <Box m="20px">
      <Header title="Revenue Analysis" subtitle="Month wise revenue analysis" />
      <Box height="75vh">
        <RevenueAnalysisChart />
      </Box>
    </Box>
  );
};

export default RevenueAnalysis;
