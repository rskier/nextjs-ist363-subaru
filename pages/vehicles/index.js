import { useState } from 'react';
import Container from '../../components/container';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import FilterBar from '../../components/FilterBar';
import { getAllVehicles, getVehicleTypes } from '../../lib/api';
import Heading from '../../components/Heading';

export async function getStaticProps() {
    const vehicles = await getAllVehicles();
    const vehicleTypes = await getVehicleTypes();

    vehicleTypes.unshift({
        "node": {
            "name": "All",
            "slug": "all"
        }
    },);

    return {
        props: {
            vehicles,
            vehicleTypes
        }
    }
}
const VehiclesPage = ({vehicles, vehicleTypes}) => {
    //add "all" to vehicle types
    const [activeVehicleType, setActiveVehicleType] = useState('all');

    //filter vehicles by active vehicle type
    const filteredVehicles = activeVehicleType === 'all' ? 
        vehicles 
        :
        vehicles.filter ((vehicle) => {
        const {vehicleTypes} = vehicle.node;
        const vehicleTypeSlugs = vehicleTypes.edges.map((vehicleType) => {
            return vehicleType.node.slug;
        });
        return vehicleTypeSlugs.includes(activeVehicleType);
    })

    return <Layout>
        <Heading 
            level={1} 
            color="black"
            textAlign="center"
            marginBottom={2}
        >
            Vehicles
        </Heading>
        <Container>
            <FilterBar 
            items={vehicleTypes} 
            activeItem={activeVehicleType}
            setActiveItem={setActiveVehicleType}
            />
            <Grid
                items={filteredVehicles}
            />
        </Container>
    </Layout>
}
export default VehiclesPage;