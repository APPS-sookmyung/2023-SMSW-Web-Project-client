import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./PracticeRoomsImg.style.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const PracticeRoomsImg = () => {
  return (
    <>
      <S.PracticeRoomsImgInner>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <S.PracticeRoomsImg imgsrc="/images/PracticeRooms/m305.jpeg">
              <S.PracticeRoomsText>
                PC 실습실 - 명신관 305호
              </S.PracticeRoomsText>
            </S.PracticeRoomsImg>
          </SwiperSlide>
          <SwiperSlide>
            <S.PracticeRoomsImg imgsrc="/images/PracticeRooms/m406.jpeg">
              <S.PracticeRoomsText>
                삼성 소프트웨어 실습실 - 명신관 406호
              </S.PracticeRoomsText>
            </S.PracticeRoomsImg>
          </SwiperSlide>
          <SwiperSlide>
            <S.PracticeRoomsImg imgsrc="/images/PracticeRooms/m408.jpeg">
              <S.PracticeRoomsText>
                유비쿼터스 실습실 - 명신관 408호
              </S.PracticeRoomsText>
            </S.PracticeRoomsImg>
          </SwiperSlide>
          <SwiperSlide>
            <S.PracticeRoomsImg imgsrc="/images/PracticeRooms/m409.jpeg">
              <S.PracticeRoomsText>
                임베디드 실습실 - 명신관 409호
              </S.PracticeRoomsText>
            </S.PracticeRoomsImg>
          </SwiperSlide>
          <SwiperSlide>
            <S.PracticeRoomsImg imgsrc="/images/PracticeRooms/m103.jpeg">
              <S.PracticeRoomsText>
                소프트웨어학부 실습실 - 명신관 103호
              </S.PracticeRoomsText>
            </S.PracticeRoomsImg>
          </SwiperSlide>
          <SwiperSlide>
            <S.PracticeRoomsImg imgsrc="/images/PracticeRooms/m413.jpeg">
              <S.PracticeRoomsText>
                전용 강의실 - 명신관 413호
              </S.PracticeRoomsText>
            </S.PracticeRoomsImg>
          </SwiperSlide>
          <SwiperSlide>
            <S.PracticeRoomsImg imgsrc="/images/PracticeRooms/m410A.jpeg">
              <S.PracticeRoomsText>
                세미나실 - 명신관 410A호
              </S.PracticeRoomsText>
            </S.PracticeRoomsImg>
          </SwiperSlide>
        </Swiper>
      </S.PracticeRoomsImgInner>
    </>
  );
};

export default PracticeRoomsImg;
