import React from "react";
import { useGetProfile } from "../hooks/useGetProfile";
import "../App.css";
export default function GetProfile({account}) {
  const { error, loading, data } = useGetProfile();
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log({ error, loading, data });
  const url = data.profile.picture.original.url;
  const newUrl = "https" + url.slice(4) + ".ipfs.dweb.link";
//   console.log("profile account", account)

  return (
    <div className="charactersList">
      <h2>{data.profile.handle}</h2>
      <img className="image" src={newUrl}></img>
      <h3>{account}</h3>
    </div>
  );
}
