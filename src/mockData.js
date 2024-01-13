import { tokens } from "../src/theme";

// This is the sample code to fetch the data from backend
// all the below mokced data's can be fetched using such endpoints 
// once the backend apis are configured and ready to use

// async function fetchData () {
//   try {
//     let result = await fetch('endpoint url');
//   } catch(e) {
//     console.log(e)
//   }
// }

export const recentTransactions = [
  {
    txId: "01e4dsa",
    user: "mum",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "del",
    date: "2024-01-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "hyd",
    date: "2023-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "che",
    date: "2023-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "blr",
    date: "2024-01-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "che-sw",
    date: "2023-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "sec-hyd",
    date: "2024-01-11",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "new-del",
    date: "2023-08-01",
    cost: "133.45",
  },
];

export const mockItemSales = [
  {
    month: "JAN",
    cake: 96,
    cakeColor: "hsl(296, 70%, 50%)",
    muffin: 72,
    muffinColor: "hsl(97, 70%, 50%)",
    cookie: 140,
    cookieColor: "hsl(340, 70%, 50%)",
  },
  {
    month: "FEB",
    cake: 28,
    cakeColor: "hsl(111, 70%, 50%)",
    muffin: 58,
    muffinColor: "hsl(273, 70%, 50%)",
    cookie: 29,
    cookieColor: "hsl(275, 70%, 50%)",
  },
  {
    month: "MAR",
    cake: 23,
    cakeColor: "hsl(96, 70%, 50%)",
    muffin: 34,
    muffinColor: "hsl(106, 70%, 50%)",
    cookie: 152,
    cookieColor: "hsl(256, 70%, 50%)",
  },
  {
    month: "APR",
    cake: 52,
    cakeColor: "hsl(326, 70%, 50%)",
    muffin: 43,
    muffinColor: "hsl(110, 70%, 50%)",
    cookie: 83,
    cookieColor: "hsl(9, 70%, 50%)",
  },
  {
    month: "MAY",
    cake: 80,
    cakeColor: "hsl(325, 70%, 50%)",
    muffin: 112,
    muffinColor: "hsl(54, 70%, 50%)",
    cookie: 35,
    cookieColor: "hsl(285, 70%, 50%)",
  },
  {
    month: "JUN",
    cake: 111,
    cakeColor: "hsl(334, 70%, 50%)",
    muffin: 167,
    muffinColor: "hsl(182, 70%, 50%)",
    cookie: 18,
    cookieColor: "hsl(76, 70%, 50%)",
  },
];

export const mockOrderStatus = [
  {
    "order status": "Created",
    totalOrders: 96,
    totalOrdersColor: "hsl(296, 70%, 50%)",
  },
  {
    "order status": "Shipped",
    totalOrders: 28,
    totalOrdersColor: "hsl(111, 70%, 50%)",
  },
  {
    "order status": "Delivered",
    totalOrders: 23,
    totalOrdersColor: "hsl(96, 70%, 50%)",
  },
  {
    "order status": "Cancelled",
    totalOrders: 52,
    totalOrdersColor: "hsl(326, 70%, 50%)",
  },
];

export const revenueAnalysisData = [
  {
    id: "Mumbai",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "jan",
        y: 101,
      },
      {
        x: "feb",
        y: 75,
      },
      {
        x: "mar",
        y: 36,
      },
      {
        x: "apr",
        y: 216,
      },
      {
        x: "may",
        y: 35,
      },
      {
        x: "jun",
        y: 236,
      },
      {
        x: "jul",
        y: 88,
      },
      {
        x: "aug",
        y: 232,
      },
      {
        x: "sep",
        y: 281,
      },
      {
        x: "oct",
        y: 1,
      },
      {
        x: "nov",
        y: 35,
      },
      {
        x: "dec",
        y: 14,
      },
    ],
  },
  {
    id: "Delhi",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "jan",
        y: 212,
      },
      {
        x: "feb",
        y: 190,
      },
      {
        x: "mar",
        y: 270,
      },
      {
        x: "apr",
        y: 9,
      },
      {
        x: "may",
        y: 75,
      },
      {
        x: "jun",
        y: 175,
      },
      {
        x: "jul",
        y: 33,
      },
      {
        x: "aug",
        y: 189,
      },
      {
        x: "sep",
        y: 97,
      },
      {
        x: "oct",
        y: 87,
      },
      {
        x: "nov",
        y: 299,
      },
      {
        x: "dec",
        y: 251,
      },
    ],
  },
  {
    id: "Bengaluru",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "jan",
        y: 191,
      },
      {
        x: "feb",
        y: 136,
      },
      {
        x: "mar",
        y: 91,
      },
      {
        x: "apr",
        y: 190,
      },
      {
        x: "may",
        y: 211,
      },
      {
        x: "jun",
        y: 152,
      },
      {
        x: "jul",
        y: 189,
      },
      {
        x: "aug",
        y: 152,
      },
      {
        x: "sep",
        y: 8,
      },
      {
        x: "oct",
        y: 197,
      },
      {
        x: "nov",
        y: 107,
      },
      {
        x: "dec",
        y: 170,
      },
    ],
  },
  {
    id: "Hyderabad",
    color: tokens("dark").blueAccent[600],
    data: [
      {
        x: "jan",
        y: 191,
      },
      {
        x: "feb",
        y: 136,
      },
      {
        x: "mar",
        y: 91,
      },
      {
        x: "apr",
        y: 190,
      },
      {
        x: "may",
        y: 211,
      },
      {
        x: "jun",
        y: 152,
      },
      {
        x: "jul",
        y: 189,
      },
      {
        x: "aug",
        y: 152,
      },
      {
        x: "sep",
        y: 8,
      },
      {
        x: "oct",
        y: 197,
      },
      {
        x: "nov",
        y: 107,
      },
      {
        x: "dec",
        y: 170,
      },
    ],
  },
  {
    id: "Chennai",
    color: tokens("dark").redAccent[600],
    data: [
      {
        x: "jan",
        y: 191,
      },
      {
        x: "feb",
        y: 136,
      },
      {
        x: "mar",
        y: 91,
      },
      {
        x: "apr",
        y: 190,
      },
      {
        x: "may",
        y: 211,
      },
      {
        x: "jun",
        y: 152,
      },
      {
        x: "jul",
        y: 189,
      },
      {
        x: "aug",
        y: 152,
      },
      {
        x: "sep",
        y: 8,
      },
      {
        x: "oct",
        y: 197,
      },
      {
        x: "nov",
        y: 107,
      },
      {
        x: "dec",
        y: 170,
      },
    ],
  },
];
