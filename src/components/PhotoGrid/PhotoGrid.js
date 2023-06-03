import React from "react";
import apiConfig from "../../api/apiConfig";
import Grid from "../Grid/Grid";

const PhotoGrid = ({ items, title }) => {
  return (
    <>
      <h1 className="text-center font-bold text-4xl my-10 text-TYPOGRAPHY">
        {title}
      </h1>
      <Grid>
        {items &&
          items.length > 0 &&
          items.map((cast) => {
            const bg = apiConfig.w500Image(
              cast.profile_path ? cast.profile_path : null
            );
            return (
              <div key={cast.id}>
                <div
                  style={{ backgroundImage: `url(${bg})` }}
                  className="bg-cover rounded-xl bg-center bg-no-repeat pt-[140%]"
                />
                <h1 className="text-TYPOGRAPHY mt-2 font-semibold text-lg">
                  {cast.name}
                </h1>
                <h4 className="text-PARAGRAPH text-sm">{cast.character}</h4>
              </div>
            );
          })}
      </Grid>
    </>
  );
};

export default PhotoGrid;
