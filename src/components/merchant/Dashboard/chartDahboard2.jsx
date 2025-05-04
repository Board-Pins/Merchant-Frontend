import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';

const areaChartOptions = {
  chart: {
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    strokeDashArray: 0
  }
};

const ChartDahboard2 = ({ slot }) => {
  const theme = useTheme();
  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary.main, theme.palette.primary[700], '#14B8A6'], // Add color for third label 'Abbandound'
      xaxis: {
        categories:
          slot === 'month'
            ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          style: {
            colors: Array(12).fill(secondary)
          }
        },
        axisBorder: {
          show: true,
          color: line
        },
        tickAmount: slot === 'month' ? 11 : 7
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary]
          }
        }
      },
      grid: {
        borderColor: line
      }
    }));
  }, [primary, secondary, line, theme, slot]);

  const [series, setSeries] = useState([
    {
      name: 'Retuaring',
      data: [0, 86, 28, 115, 48, 210, 136]
    },
    {
      name: 'Newcommers',
      data: [0, 43, 14, 56, 24, 105, 68]
    },
    {
      name: 'Abbandound',
      data: slot === 'month' ? [90, 60, 120, 90, 100, 86, 76] : [40, 62, 45, 32, 34, 52, 41] // Example data, adjust as needed
    }
  ]);

  useEffect(() => {
    setSeries([
      {
        name: 'Retuaring',
        data: slot === 'month' ? [76, 85, 101, 98, 87, 105, 91, 114, 94] : [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: 'Newcommers',
        data: slot === 'month' ? [110, 60, 150, 35, 60, 36, 26, 45, 65] : [11, 32, 45, 32, 34, 52, 41]
      },
      {
        name: 'Abbandound',
        data: slot === 'month' ? [90, 60, 120, 90, 100, 86, 76] : [40, 62, 45, 32, 34, 52, 41]
      }
    ]);
  }, [slot]);

  return <ReactApexChart options={options} series={series} type="area" height={slot === 'month' ? 450 : 300} />;
};

ChartDahboard2.propTypes = {
  slot: PropTypes.string.isRequired
};

export default ChartDahboard2;
