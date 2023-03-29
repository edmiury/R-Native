import { Image } from 'react-native';

import {Style} from '../Styles/style'

export default function img() {

    return (
        
        <Image 
            source = { require('../../assets/nature.jpg') }
            style = { Style.img }   
        />
        
    )
};