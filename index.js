import * as THREE from 'three'
import * as PANOLENS from 'panolens'
import './style.css';



const panorama = new PANOLENS.ImagePanorama( 'https://res.cloudinary.com/archipicture/image/upload/v1583256612/ca-valdahon/cafc-Valdhon-02_View01.jpg' );
const viewer = new PANOLENS.Viewer();
viewer.controlBar = true;
viewer.add( panorama );