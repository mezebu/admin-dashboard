export const lineData = {
  labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  datasets: [
    {
      data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
      label: "Africa",
      borderColor: "#3e95cd",
      fill: false,
    },
    {
      data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
      label: "Asia",
      borderColor: "#8e5ea2",
      fill: false,
    },
    {
      data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
      label: "Europe",
      borderColor: "#3cba9f",
      fill: false,
    },
    {
      data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
      label: "Latin America",
      borderColor: "#e8c3b9",
      fill: false,
    },
    {
      data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
      label: "North America",
      borderColor: "#c45850",
      fill: false,
    },
  ],
};

export const lineOptions = {
  title: {
    display: true,
    text: "World population per region (in millions)",
  },
  plugins: {
    legend: {
      position: "top",
    },
  },
  responsive: true,
};

export const pieData = {
  labels: ["Instagram", "LinkedIn", "Twitter", "Other"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 65, 9],
      backgroundColor: [
        "rgba(63, 120, 43, 1)",
        "rgba(14, 118, 168, 1)",
        "rgba(0, 172, 238, 1)",
        "rgba(159, 72, 43, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 150, 173, 1)",
      ],
      borderWidth: 1,
      spacing: 4,
      cutout: "70%",
      borderRadius: 3,
    },
  ],
};

export const pieLabelPosition = {
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};
