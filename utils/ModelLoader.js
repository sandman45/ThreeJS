import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

export default {
    loadModel: async (url) => {
        return loader.loadAsync(url);
    }
}


