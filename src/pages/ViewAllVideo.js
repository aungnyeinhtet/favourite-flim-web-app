import React from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../api/tmdbApi";
import FrontLayout from "../common/FrontLayout";
import Container from "../components/Container/Container";
import Loader from "../components/LoadingSpinner/Loader";

const ViewAllVideo = () => {
  const [items, setItem] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { category, id } = useParams();
  React.useEffect(() => {
    try {
      const getVideos = async () => {
        setLoading(true);
        const response = await tmdbApi.getVideos(category, id);
        setItem(response.results);
        setLoading(false);
      };
      getVideos();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id, category]);
  return (
    <FrontLayout className={false}>
      <section className="py-32 bg-PRIMARY-BG">
        <Container>
          <h1 className="text-PRIMARY-TEXT text-center text-4xl font-bold mb-6">
            Trailers
          </h1>
          <div className="flex flex-col gap-6">
            {loading ? <Loader /> : <Videos items={items} />}
          </div>
        </Container>
      </section>
    </FrontLayout>
  );
};
const Videos = (props) => {
  const items = props.items;
  return (
    <>
      {items &&
        items.map((item) => (
          <div className="w-full cursor-pointer h-full" key={item.id}>
            <h1 className="font-semibold text-lg text-PRIMARY-TEXT mb-2">
              {item.name}
            </h1>
            <iframe
              className="rounded-xl w-full h-[500px]"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="trailer"
            />
          </div>
        ))}
    </>
  );
};
export default ViewAllVideo;
