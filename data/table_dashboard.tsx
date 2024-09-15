// Sample rows of data with progressive changes and numeric timestamps
export const rows = [
  {
    key: "1",
    weight: "72",
    bmi: "22.5",
    bodyfat: "18",
    muscleMass: "45",
    restingMetabolism: "1500",
    bodyAge: "30",
    visceralFat: "9",
    timestamp: 1693545600, // Sunday, 1st Sep 2024 (Unix timestamp)
  },
  {
    key: "2",
    weight: "73",
    bmi: "22.8",
    bodyfat: "18.5",
    muscleMass: "45.5",
    restingMetabolism: "1510",
    bodyAge: "30",
    visceralFat: "9",
    timestamp: 1694150400, // Sunday, 8th Sep 2024 (Unix timestamp)
  },
  {
    key: "3",
    weight: "74",
    bmi: "23.1",
    bodyfat: "19",
    muscleMass: "46",
    restingMetabolism: "1520",
    bodyAge: "30",
    visceralFat: "9.5",
    timestamp: 1694755200, // Sunday, 15th Sep 2024 (Unix timestamp)
  },
  {
    key: "4",
    weight: "75",
    bmi: "23.4",
    bodyfat: "19.5",
    muscleMass: "46.5",
    restingMetabolism: "1530",
    bodyAge: "31",
    visceralFat: "10",
    timestamp: 1695360000, // Sunday, 22nd Sep 2024 (Unix timestamp)
  },
  {
    key: "5",
    weight: "76",
    bmi: "23.7",
    bodyfat: "20",
    muscleMass: "47",
    restingMetabolism: "1540",
    bodyAge: "31",
    visceralFat: "10.5",
    timestamp: 1695964800, // Sunday, 29th Sep 2024 (Unix timestamp)
  },
];

// Columns for the data, including timestamp
export const columns = [
  {
    key: "weight",
    label: "WEIGHT (kg)",
  },
  {
    key: "bmi",
    label: "BMI",
  },
  {
    key: "bodyfat",
    label: "BODY FAT (%)",
  },
  {
    key: "muscleMass",
    label: "MUSCLE MASS (%)",
  },
  {
    key: "restingMetabolism",
    label: "RESTING METABOLISM (kcal/day)",
  },
  {
    key: "bodyAge",
    label: "BODY AGE",
  },
  {
    key: "visceralFat",
    label: "VISCERAL FAT",
  },
  {
    key: "timestamp",
    label: "TIMESTAMP",
  },
];
