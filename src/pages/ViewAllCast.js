import React from 'react'
import { useParams } from 'react-router-dom';
import tmdbApi from '../api/tmdbApi';
import FrontLayout from '../common/FrontLayout/FrontLayout';
import Container from '../components/Container/Container';
import PhotoGrid from '../components/PhotoGrid/PhotoGrid';

const ViewAllCast = () => {
    const { category, id } = useParams();
    const [castList, setCastList] = React.useState([])
    React.useEffect(() => {
        try {
            const getCast = async () => {
                const response = await tmdbApi.credits(category, id);
                setCastList(response.cast)
            }
            getCast()
        } catch (error) {

        }
    }, [category, id]);
    return (
        <FrontLayout transparent={false}>
            <section className='py-32 bg-PRIMARY-BG'>
                <Container>
                    <PhotoGrid items={castList} title="Top Cast" />
                </Container>
            </section>
        </FrontLayout>
    )
}

export default ViewAllCast
