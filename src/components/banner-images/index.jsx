import { BannerImagesContainer } from "./style";
import banner1 from "./../../assets/images/banner1.png";
import banner2 from "./../../assets/images/banner2.png";
import banner3 from "./../../assets/images/banner3.png";
import banner4 from "./../../assets/images/banner4.png";
import banner5 from "./../../assets/images/banner5.png";
import banner6 from "./../../assets/images/banner6.png";

export const BannerImages = () => {
    return (
        <BannerImagesContainer>
            <img src={banner1} alt="" className="banner1" data-aos="fade-up" />
            <div className="right">
                <div className="right__top">
                    <img
                        src={banner2}
                        alt=""
                        className="banner2"
                        data-aos="fade-up"
                    />
                    <img
                        src={banner3}
                        alt=""
                        className="banner3"
                        data-aos="fade-up"
                    />
                    {/* </div> */}
                    {/* <div className="right__bottom"> */}
                    <img
                        src={banner4}
                        alt=""
                        className="banner4"
                        data-aos="fade-up"
                    />
                    <img
                        src={banner5}
                        alt=""
                        className="banner5"
                        data-aos="fade-up"
                    />
                    <img
                        src={banner6}
                        alt=""
                        className="banner6"
                        data-aos="fade-up"
                    />
                </div>
            </div>
        </BannerImagesContainer>
    );
};
