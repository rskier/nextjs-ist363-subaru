import Head from 'next/head';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Showcase from '../../components/Showcase';
import TrimPicker from '../../components/TrimPicker';
import ColorPicker from '../../components/ColorPicker';
import CallToAction from '../../components/CallToAction';


import { getVehicleBySlug, getAllVehicleSlugs } from '../../lib/api';
import {getDrivingLocations} from '../../lib/locations';
import { style } from 'motion';

//WATERFALL
//1. getStaticPaths

export async function getStaticPaths() {
    const vehicles = await getAllVehicleSlugs();
    const paths = vehicles.map((vehicle) => {
        const {slug} = vehicle.node;
        return {
            params: {
                id: slug
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}
//2. getStaticProps
export async function getStaticProps({ params }) {
    const vehicleData = await getVehicleBySlug(params.id);
    const drivingLocations = getDrivingLocations();
    return {
        props : {
            vehicleData,
            drivingLocations
        }
    }
}

const SingleVehiclePage =({ vehicleData, drivingLocations }) => {
    const { title, slug, featuredImage, vehicleInformation } = vehicleData;
    const {headline} = vehicleInformation.showcase;
    const {trimLevels, vehicleColors} = vehicleInformation;
    return <Layout>
        <Head>
            <title>{title} | Subaru USA</title>
        </Head>
        <Showcase 
            subtitle={title}
            title={headline}
            featuredImage={featuredImage}
        />
        <div id="main-content">
            <Container>
                <TrimPicker 
                    trims={trimLevels}
                    locations = {drivingLocations}
                />
                <ColorPicker 
                    colors={vehicleColors}
                />
            </Container>
        </div>
        <CallToAction 
            subtitle={title}
        />

    </Layout>
}
export default SingleVehiclePage;