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
  //const newUrl = "https" + url.slice(4) + ".ipfs.dweb.link";
  const newUrl = url;
//   console.log("profile account", account)

  return (
    <div className="profile-container">
      <img className="bannerImage" src={data.profile.coverPicture.original.url}></img>
      <h2>{data.profile.handle}</h2>
      <img className="image" src={newUrl}></img>
      <p>{data.profile.bio}</p>
      <h3>Followers {data.profile.stats.totalFollowers}</h3>
      <h3>Following {data.profile.stats.totalFollowing}</h3>
      <h3>Posts {data.profile.stats.totalPosts}</h3>
    </div>
  );
}
