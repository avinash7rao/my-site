import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

interface ExtendedSpeedInsightsProps {
  projectId: string;
}

const ExtendedSpeedInsights: React.FC<ExtendedSpeedInsightsProps> = ({
  projectId,
}) => {
  return <SpeedInsights />;
};

export default ExtendedSpeedInsights;
