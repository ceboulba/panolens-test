import * as PANOLENS from 'panolens'
import * as THREE from 'three'


import './style.css';



const panorama = new PANOLENS.ImagePanorama( 'https://res.cloudinary.com/archipicture/image/upload/v1557515706/ca_pano.jpg' );
const viewer = new PANOLENS.Viewer();
viewer.add( panorama );
viewer.controlBar = false;