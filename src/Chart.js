import React, { useEffect, useRef, useState } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import axios from "axios";
const Chart = () => {
  const chartContainerRef = useRef();
  const chart = useRef();
  const resizeObserver = useRef();

  useEffect(() => {
    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        backgroundColor: "#131722",
        textColor: "rgba(255, 255, 255, 0.9)",
      },

      grid: {
        vertLines: {
          color: "#1C202B",
        },
        horzLines: {
          color: "#1C202B",
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      priceScale: {
        borderColor: "#485c7b",
      },
      priceRange: {
        minValue: 25,
        maxValue: -25,
      },
      timeScale: {
        borderColor: "#485c7b",
      },
    });

    const lineSeriesAud = chart.current.addLineSeries({
      lineStyle: 0,
      color: "#2C73D2",
      lineWidth: 2,
      crosshairMarkerVisible: false,
      LastPriceAnimationMode: 2,
    });
    const lineSeriesCad = chart.current.addLineSeries({
      lineStyle: 0,
      color: "#ffffff",
      lineWidth: 2,
    });
    const lineSeriesChf = chart.current.addLineSeries({
      lineStyle: 0,
      color: "#16a34a",
      lineWidth: 2,
    });
    const lineSeriesJpy = chart.current.addLineSeries({
      lineStyle: 0,
      color: "#C25E5E",
      lineWidth: 2,
    });
    const lineSeriesEur = chart.current.addLineSeries({
      lineStyle: 0,
      color: "#F9F871",
      lineWidth: 2,
    });
    const lineSeriesGbp = chart.current.addLineSeries({
      lineStyle: 0,
      color: "#00C9A7",
      lineWidth: 2,
    });
    const lineSeriesUsd = chart.current.addLineSeries({
      lineStyle: 0,
      color: "#845EC2",
      lineWidth: 2,
    });
    const lineSeriesNzd = chart.current.addLineSeries({
      lineStyle: 0,
      color: "#AD5E00",
      lineWidth: 2,
    });

    axios
      .get("http://68.183.176.100:8001/api/v1/history")
      // .get("http://localhost:8001/api/v1/history")
      .then((res) => {
        lineSeriesAud.setData(res.data.data.audArr);
        lineSeriesCad.setData(res.data.data.cadArr);
        lineSeriesChf.setData(res.data.data.chfArr);
        lineSeriesJpy.setData(res.data.data.jpyArr);
        lineSeriesEur.setData(res.data.data.eurArr);
        lineSeriesGbp.setData(res.data.data.gbpArr);
        lineSeriesUsd.setData(res.data.data.usdArr);
        lineSeriesNzd.setData(res.data.data.nzdArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    resizeObserver.current = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      chart.current.applyOptions({ width, height });
      setTimeout(() => {
        chart.current.timeScale().fitContent();
      }, 0);
    });

    resizeObserver.current.observe(chartContainerRef.current);

    return () => resizeObserver.current.disconnect();
  }, []);

  return (
    <div className="">
      <div className="h-screen" ref={chartContainerRef} />
    </div>
  );
};

export default Chart;
