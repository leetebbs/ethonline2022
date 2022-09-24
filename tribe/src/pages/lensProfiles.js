import React from "react";
import { useRecommendedProfiles } from "../hooks/useLensProfiles";

export default function LensRecommendedProfiles() {
  const { error, loading, data } = useRecommendedProfiles();
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log({ error, loading, data });
  return (
    <div className="charactersList">
      {data.recommendedProfiles.map((recommendedProfile) => {
        return (
          <div>
            <h2>{recommendedProfile.id}</h2>
            <h3>{recommendedProfile.handle}</h3>
            <h3>{recommendedProfile.stats.totalFollowers}</h3>
          </div>
        );
      })}
    </div>
  );
}
