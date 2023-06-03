import React from "react";
import { Link } from "react-router-dom";
import apiConfig from "../api/apiConfig";
import tmdbApi from "../api/tmdbApi";
import FrontLayout from "../common/FrontLayout/FrontLayout";
import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import Grid from "../components/Grid/Grid";
import { motion } from "framer-motion";

const PopularPeople = () => {
  const [people, setPeople] = React.useState([]);
  console.log(people);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  React.useEffect(() => {
    try {
      const getPeopleList = async () => {
        const params = {};
        const response = await tmdbApi.getPeople(params);
        setPeople(response.results);
        setTotalPages(response.total_pages);
      };
      getPeopleList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const LoadMore = async () => {
    try {
      const params = {
        page: page + 1,
      };
      const response = await tmdbApi.getPeople({ params });
      setPeople([...people, ...response.results]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FrontLayout>
      <section className="bg-PRIMARY-BG pt-32 pb-20">
        <Container>
          <h1 className="text-TYPOGRAPHY font-bold text-4xl text-center  mb-10">
            Popular People
          </h1>
          <Grid>
            {people &&
              people.length > 0 &&
              people.map((person) => {
                const bg = apiConfig.w500Image(
                  person.profile_path ? person.profile_path : null
                );
                const link = "/people/" + person.id + "/" + person.name;
                return (
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    key={person.id}
                  >
                    <Link to={link}>
                      <div
                        style={{ backgroundImage: `url(${bg})` }}
                        className="bg-cover rounded-xl bg-center bg-no-repeat pt-[140%]"
                      />
                      <h1 className="text-TYPOGRAPHY mt-2 font-semibold text-lg">
                        {person.name}
                      </h1>
                    </Link>
                  </motion.div>
                );
              })}
          </Grid>
          {page < totalPages && (
            <div className="flex flex-row justify-center items-center mt-20">
              <Button
                onClick={LoadMore}
                className="border-2 border-TYPOGRAPHY text-TYPOGRAPHY rounded-full py-3 px-8 font-semibold text-lg hover:bg-RED-TEXT duration-150 transition-all ease-linear"
              >
                Load More...
              </Button>
            </div>
          )}
        </Container>
      </section>
    </FrontLayout>
  );
};

export default PopularPeople;
