import {useState} from 'react';

import style from './trimpicker.module.scss';
import Heading from './Heading';
import Label from './Label';
import Select from './Select';
import FormGroup from './FormGroup';
import Image from 'next/image';

const TrimPicker = ({trims, locations}) => {
    //state variable, setter function
    const [activeTrim, setActiveTrim] = useState(0);
    const [activeLocation, setActiveLocation] = useState(0);
    //create an array of objects
    //each object has a value and a label
    const trimOptions = trims.map((trim, index) => {
        const {name} = trim;
        return {
            label: name,
            value: index,
        }
    });
    const locationOptions = locations.map((location, index)=> {
        const {name} = location;
        return {
            label: name,
            value: index,
        }
    });


    return <section className={style.trimpicker}>
        <div className={style.trimpicker__text}>
            <Heading 
                level={2} 
                color="white"
                marginBottom={2}
            >
                Picture Yourself Behind the Wheel
            </Heading>
            <form>
                <FormGroup>
                    <Label>I want to drive a...</Label>
                    <Select 
                        options={trimOptions}
                        changeHandler={setActiveTrim}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Change the driving location to ...</Label>
                    <Select 
                        options={locationOptions}
                        changeHandler={setActiveLocation}
                    />
                </FormGroup>
            </form>
        </div>
        <div className={style.trimpicker__images}>
            <Image
                src={`/images/series-background-${activeLocation + 1}.jpg`}
                alt={`${locations[activeLocation].name}`}
                width={1900}
                height={656}
                className={style.trimpicker__images__background} 
            />
            <Image
                src={`${trims[activeTrim].images.large.node.sourceUrl}`}
                alt={`${trims[activeTrim].images.large.node.altText}`}
                width={`${trims[activeTrim].images.large.node.mediaDetails.width}`}
                height={`${trims[activeTrim].images.large.node.mediaDetails.width}`}
                className={style.trimpicker__images__foreground} 
            />
        </div>
    </section>
}
export default TrimPicker;