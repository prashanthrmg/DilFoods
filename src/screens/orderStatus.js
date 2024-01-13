import { Box } from "@mui/material";
import Header from "../components/Header";
import OrderStatusChart from "../components/OrderStatusChart";

const OrderStatus = () => {
  return (
    <Box m="20px">
      <Header title="Order Status Chart" subtitle="Status of order" />
      <Box height="75vh">
        <OrderStatusChart />
      </Box>
    </Box>
  );
};

export default OrderStatus;
