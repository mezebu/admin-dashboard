import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "social",
    label: "Social",
    value: 15,
    color: "hsl(64, 70%, 50%)",
  },
  {
    id: "Search",
    label: "Search",
    value: 23,
    color: "hsl(329, 70%, 50%)",
  },
  {
    id: "Direct",
    label: "Direct",
    value: 2,
    color: "hsl(253, 70%, 50%)",
  },
];

const rows = [
  {
    id: 1,
    name: "Social",
    value: 15,
    revenue: 400,
  },
  {
    id: 2,
    name: "Search",
    value: 23,
    revenue: 600,
  },
  {
    id: 3,
    name: "Direct",
    value: 2,
    revenue: 900,
  },
];

const featureChart = data && (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={1}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 2,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "social",
        },
        id: "dots",
      },
      {
        match: {
          id: "Search",
        },
        id: "dots",
      },
      {
        match: {
          id: "Direct",
        },
        id: "dots",
      },
    ]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 80,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "diamond",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

export { featureChart, rows };
