import { Chart } from "react-google-charts";
import { green, red } from "@ant-design/colors";

export const ChartPage = ({
  data,
  isLoading,
}: {
  data: any;
  isLoading: boolean;
}) => {
  console.log("[Chart] data :", data);

  const makeCharData = (data: any) => {
    /* data = { A1: 38, A2: 8, B1: 8, B2: 23, C1: 4, C2: 5, stopwords: 39, unk: 0 } */
    return [
      ['Score', 'CEFR', { role: 'style' } ],
      ['A1', data.A1, red[5]],
      ['A2', data.A2, red[3]],
      ['B1', data.B1, red[1]],
      ['B2', data.B2, green[1]],
      ['C1', data.C1, green[3]],
      ['C2', data.C2, green[5]],

    ]
  };

  const options = {
    chart: {
      title: "CEFR Distribution",
      subtitle: "A1 ~ C2",
    },
  };

  return (
    <Chart
      chartType="ColumnChart"
      data={makeCharData(data)}
      width="100%"
      height="200px"
      options={options}
    />
  );
};

export default ChartPage;
 