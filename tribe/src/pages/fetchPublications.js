import React from "react";
import { usePublications } from "../hooks/usePublications";
import "../App.css";
export default function GetPublications({account}) {
  const { error, loading, data } = usePublications();
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log({ error, loading, data });




    return (
        <div className="charactersList">
            <h1>Posts</h1>
        {data.publications.items.map((publication) => {

            return(
                <div>
                    {publication.metadata.content}
                </div>
            )
         // if(publication){
            
        //     return (
        //       <div >
        //         <h2>{recommendedProfile.id}</h2>
        //         <h3>{recommendedProfile.handle}</h3>
        //         <img className="image" src={recommendedProfile.picture.original.url}></img>
        //         <h3>Total Followers {recommendedProfile.stats.totalFollowers} </h3>
        //       </div>
        //     );
        //   }else{
        //     return (
        //       <div>
        //         <h2>{recommendedProfile.id}</h2>
        //         <h3>{recommendedProfile.handle}</h3>
        //         <h3>Total Followers {recommendedProfile.stats.totalFollowers} </h3>
        //       </div>
        //     );
        //  }
  
        })}
      </div>
      )

    }