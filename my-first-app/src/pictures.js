import React, { Component } from 'react';
import {adImagestyle} from './App1.js';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import logo192 from './logo192.png';

class Pictures extends Component {
    render() {
        let i = 1;
        let image1 = img1;
        const showImages = (i) => {
            switch (i) {
                case 1:
                    i++;
                  image1= img1;
                  break;
                case 2:
                        i++;
                        image1= img2;
                        break;
                case 3:
                  i++;
                  image1= img3;
                  break;
                  case 4 :
                    i++;
                    image1 = img4;
                    break;
                    case 5 :
                    i = 1;
                    image1 = img5;
                    break;
                default:
                  image1 = img1;
            }
            return(img1)
        }
        return (
            <div>
                <img src = {showImages()}></img>
            <img style = {adImagestyle}  src = {setInterval(showImages, 5000)} />
            </div>
        )
    }
}

export default Pictures;
