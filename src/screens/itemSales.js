import { Box } from "@mui/material";
import Header from "../components/Header";
import BarChart from "../components/ItemSalesChart";

const ItemSales = () => {
  return (
    <Box m="20px">
      <Header title="Item Sales Chart" subtitle="Month wise item sales" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default ItemSales;
