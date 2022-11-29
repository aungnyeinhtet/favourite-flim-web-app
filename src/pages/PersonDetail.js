import React from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../api/apiConfig";
import tmdbApi, { category } from "../api/tmdbApi";
import FrontLayout from "../common/FrontLayout/FrontLayout";
import Container from "../components/Container/Container";
import MovieList from "../components/MovieList/MovieList";

const PersonDetail = () => {
  const { id } = useParams();
  const [item, setItem] = React.useState(null);
  const [casts, setCasts] = React.useState([]);
  console.log(item);
  React.useEffect(() => {
    try {
      const getPersonDetail = async () => {
        const response = await tmdbApi.personDetail(id);
        setItem(response);
      };
      getPersonDetail();
    } catch (error) {}
  }, [id]);
  React.useEffect(() => {
    try {
      const getCastList = async () => {
        const response = await tmdbApi.castList(id);
        setCasts(response.cast);
      };
      getCastList();
    } catch (error) {}
  }, [id]);
  return (
    <FrontLayout>
      <section className="bg-PRIMARY-BG py-40">
        <Container>
          {item && (
            <div className="flex lg:flex-row flex-col gap-10 max-w-full">
              <div className="lg:w-[20%] w-[50%] ">
                <div
                  style={{
                    backgroundImage: `url(${apiConfig.w500Image(
                      item.profile_path ? item.profile_path : null
                    )})`,
                  }}
                  className="bg-cover w-full bg-center bg-no-repeat pt-[150%] rounded-xl"
                />
                <div className="flex-1">
                  {item.known_for_department && (
                    <div className="flex flex-col mt-4">
                      <h3 className="text-PRIMARY-TEXT font-bold text-xl">
                        Known For
                      </h3>
                      <p className="text-gray-300 text-base">
                        {item.known_for_department}
                      </p>
                    </div>
                  )}

                  {item.place_of_birth && (
                    <div className="flex flex-col mt-4">
                      <h3 className="text-PRIMARY-TEXT font-bold text-xl">
                        Place Of Birth
                      </h3>
                      <p className="text-gray-300 text-base">
                        {item.place_of_birth}
                      </p>
                    </div>
                  )}

                  {item.birthday && (
                    <div className="flex flex-col mt-4">
                      <h3 className="text-PRIMARY-TEXT font-bold text-xl">
                        Birthday
                      </h3>
                      <p className="text-gray-300 text-base">{item.birthday}</p>
                    </div>
                  )}

                  {item.gender && (
                    <div className="flex flex-col mt-4">
                      <h3 className="text-PRIMARY-TEXT font-bold text-xl">
                        Gender
                      </h3>
                      <p className="text-gray-300 text-base">
                        {item.gender === 1 ? "Female" : "Male"}
                      </p>
                    </div>
                  )}

                  {item.also_known_as.length !== 0 ? (
                    <div className="flex flex-col mt-4">
                      <h3 className="text-PRIMARY-TEXT font-bold text-xl">
                        Also Known As
                      </h3>
                      <p className="text-gray-300 text-base">
                        {item.also_known_as[0]}
                      </p>
                    </div>
                  ) : null}

                  {item.deathday !== null && (
                    <div className="flex flex-col mt-4">
                      <h3 className="text-PRIMARY-TEXT font-bold text-xl">
                        Death Day
                      </h3>
                      <p className="text-gray-300 text-base">{item.deathday}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <h1 className="font-bold text-5xl text-PRIMARY-TEXT">
                  {item.name}
                </h1>
                <div className="flex flex-col mt-4">
                  <h3 className="text-PRIMARY-TEXT font-bold text-xl">
                    Biography
                  </h3>
                  <p className="text-gray-300 text-base">{item.biography}</p>
                </div>
                {casts.length && casts.length > 0 ? (
                  <>
                    {" "}
                    <h1 className="text-2xl font-bold text-PRIMARY-TEXT mt-6">
                      Known For
                    </h1>
                    <MovieList
                      items={casts.slice(0, 12)}
                      category={category.movie}
                    />
                  </>
                ) : null}
              </div>
            </div>
          )}
        </Container>
      </section>
    </FrontLayout>
  );
};

export default PersonDetail;
