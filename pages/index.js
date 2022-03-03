import React, { useRef, useState, Component } from "react";
import Titlepage from '../components/Title/TitlePage'
import styles from "./index.module.scss";
import Headerpage from '../components/Header/HeaderPage';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Index = () => {

  return (
    <> 
    <header>
      <Headerpage/>
    </header>
    <main>
      <div className={styles.accueil__page}>
        <img src="https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfp3lzRu_RtiAgGuUB-m3kAKgOtsju3EcWJMJ8CfAZH6g-2QONpKp-kOoJtfXkduMTtOPbq_p7Lg29-mkJVSCHQrKjvl.webp?r=a9e" style={{width:"100%"}}/>
        <img src="https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABaj-xmN-UncRVyKJ_O8SxE4z5X6pyxJfG6MwNxzGHm48QcGR80rWlvlna-DKrMc08d9q6pOWSAQ2D8mdODvF8tHUmKSL3RjbPkQWsngsiOa_VNWxRE4eDepnx5Ud8AVvP78mDzQbiEMk1SIrijkYjoMs2TbR1nqtnOb9DlXGvKfgvA.webp?r=01d" style={{position: "relative",top: "-669px;", left: "4%;"}}/>
      <div className={styles.swiper} style={{marginTop: "-341px;"}}>

      <Titlepage title="Ma liste"/>
    
      <Swiper
        slidesPerView={6}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="eleonore"><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbIHpzojCbmJ176Jd21sI_Y_LK2tTMvHNBTkWWVg996xmTnc0p3lOPnOBGvESUiDjIJ2ZNaWibDx5IZGRiZEKj58rnVTX3fNtHykKAzg8TINKDTc7-01kGhxvzXc.jpg?r=1a5"></img></SwiperSlide>
        <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcINWpZJjXy8k_sqdVmwOdkGEq2ltv8a7DqhQG-5DLTfmI_sUzNl_406iDTv2Ey5hd3yGdpfmLJ3ARV16_u4J46NdJ_KnpD9ZfhLe2eytk4vi08gxyjxz_vm3sX9.jpg?r=169"></img></SwiperSlide>
        <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcoQ9TPn-2b2LyV0XFdx9UPLzHA_wtcTDI9nmncOIaYlDitpMfujYccfjcyhtxYX8k709El1oamb9cwurZbfKaGivmo.webp?r=01e"></img></SwiperSlide>
        <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVJ2DeMtX5ITFUgCs41s2KhGuidM7nJmbcK6HJjYNqaP5F_seIIQIUpVmWZQ2-ghJVsjBdBz_LkXcn6xqGSqFCjr9Yc.webp?r=59a"></img></SwiperSlide>
        <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeLaPhXh457HitrnFSPu6Yva_KGxAA2xB9rCt0DuFmILWtWtuUtQwLCecnhADaCgr75yTomq0S9GNDankr3TET_RY7vFbDw1GiTCv6GqR3T7Szl7u-f0F9WLWN8i.jpg?r=447"></img></SwiperSlide>
        <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXgXeo-mKe-CUTF9idnGHxvGkrEjbKK6dAnZ2Q-S6eLiec1FyNJeK7r8Ej-EDWLo5EJ6T-bSKlwCNXq809oDizsn5OvBuzM1kbULXb3hzAnFrwZ5buJAp8Hxu2Wn.jpg?r=e2a"></img></SwiperSlide>
        <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWwE_nF244W6i4QdBq2OHWJfUdKrHWzC6JvhWRCeQy_hkp398OHtkF4yma8bmGtqAsAfYj3FzPV8XzMCXC_x9EyGf78.webp?r=d5b"></img></SwiperSlide>
        <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdGz3V1RJxuGMuUhDlWHITBd1h1-Odl2yvqKmALjHTjwAZxopvCqAcVs_Mw-EQVMD7wqgFb-VCjsSIPEVgKLTc_05ZA.webp?r=c4b"></img></SwiperSlide>
      </Swiper>
      </div>

      <div className={styles.swiper}>
        <Titlepage title="Séries animées japonaises"/>
    
        <Swiper
          slidesPerView={6}
          spaceBetween={5}
          pagination={{
            clickable: true,
        
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="eleonore"><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfy3XHIJC3-aI0TcEgZfSXtVsOG7-aHP_i8vX26NVW2acwuD1-XLJHtnm-jyxNnw6F2SokEERW2BsCy_RLddIUYSTrM.webp?r=3f6"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdAlqQMZr5mEORjxSSIi-yDrTDdeym0n6DytueFe3b5XkHnPvJWmOrrh7Tau8Gz7kz_PjqU9pQtgeZT0Uo5fbUDz7qI.webp?r=68f"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbPTBlWv-ry5HxYA6gsoWhX5AojLP-NKMuDCLtv8AuHlAc9T_HzRsliugvn01F7SyEatPXkhYipZCJjR5tde7MBoFhs.webp?r=5cb"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZJ8tf7CQ4KJE9UzhDlOrJYYfa41OjwBgX1E_ILgxRptKPKTmKXS3sCFQH-J_xgIHmTqzqkPI5NGunvDA-yY0FVs218.webp?r=777"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTU6DgLWNOUm4aD70RVzLZGWZKrmWY_Dj9AaCpdtzaxQYV2aJzuPTSGCLpsAB8lwtQVz7zbxfNSUWZrsCt60QZOukYs.webp?r=3eb"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWvWEKmkhXndcR5vjL4TTMPCdtsbVdPHUddCjAPXUu6sIKtVRxXb3vlRJv1Dd78mTJyvc7PsvoW_Xd2b21ziSoAfzEQ.webp?r=725"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVJ2DeMtX5ITFUgCs41s2KhGuidM7nJmbcK6HJjYNqaP5F_seIIQIUpVmWZQ2-ghJVsjBdBz_LkXcn6xqGSqFCjr9Yc.webp?r=59a"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdrRvEN7-SPLZmOi2onKqAKryzHo93JhS7--yA3KP3umCilucaALs_qvhSJy9lnzjDIZukvbyL2uf1AAxH-oPnG7duDIOmzAQwuZ0ZXmfOglggB_fLsw4z1UqKRf.jpg?r=a1b"></img></SwiperSlide>
  
        </Swiper>
      </div>

      <div className={styles.swiper}> 
        <Titlepage title="Séries romantiques coréennes"/>
    
        <Swiper
          slidesPerView={6}
          spaceBetween={5}
          pagination={{
            clickable: true,
        
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="eleonore"><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS4z7dIuLrIIuzpv46QghwlXrGodrWNxUlI4AapeXIqcxE0HnlYzH3M-mihzmoIDsSoAYEoNDM2qEUCBes5Z6r5PrSJWtAxxnC1rtzdJ5q3ye5xuTyIE2NjZJhD_.jpg?r=443"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR5QbNq4dfSohw8Shqtrvjyo6smHQQOwRcpNvSK0mHZN313MFQs6tsz_D9BQS3Q8g1E7h9-KUVnnWd2sSv-9vztKCPr2Z_5Y1Kzk7J7WEJNp3mr73z8wy2kf05LlKTrD1olXsWpddHBbqKmMKJsXX23oXe7kXQ.jpg?r=a9f"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcFM9DKRuMJ6EwYBQzO0e7fH2qSU3cbwHEOPGDLUXH8iwXeKGKDq6WeO9U-5BCCSaJwV-TTXgG8awowR7isENHYxV4fn557D9Z36DRvOCZPCB4xSm143zOySFha8.jpg?r=68e"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa5_96d9Q48qJY6gCi2ZjaZL7HkuH0v0UkRmLGQxbA3MGVwR-J0Rl3JppYDMHZo1_ec7L_hIIPiyjNsSoKSvJE3uL2Vy2VcQvdH8FEbq1BBa3JIhOe22rzEbpoEL.jpg?r=d9f"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS01fucB7YjK8MgesQ8njeqClzs0NXQ8U7SuxgzJkzu9_O1YQKcvunR6D_0L2TAwTRArmVjfMQL1NvaLRrZpVjOUE18.webp?r=5fd"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWu68j_BU-avL7eLQ8YLRqPHMs0hdGM6TYb5vdz0y_IlEgcsgx97gG6DMsGTDemKygI8d72K3QaJCQK-h8fgexLvyqI.webp?r=ee0"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX7Y_pRIx-hfVm_KJU6jRpfQp5C6uVsQDM4zkw2X6ZYBYRFwuELEEPw0CB9q3oiHJbphfpQPdL0a0O86V7kVuqB7j_NaKvJ9M8krjs9sJyRWR4D5sUT6xzP7viIv.jpg?r=78a"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVBuDJYKj_08vL20cBajru1ehyTeRXAHilK3_FHnRncC4x2W-QwFMszuQvnjIWUQOwctMH99zuKzaq8Vsd5P2rPJQXA.webp?r=f2b"></img></SwiperSlide>
  
         </Swiper>
      </div>

      <div className={styles.swiper}>
        <Titlepage title="Histoires vraies"/>

        <Swiper
          slidesPerView={6}
          spaceBetween={5}
          pagination={{
            clickable: true,
        
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="eleonore"><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdZEjXXIYV5gpantrbc2jupcwGLDy5nXtWXf_4PTjxNSEOfsxMW3kcP5ahyjVkAZYO-YN-KBBjNjxxr24cATBAKQ2Dk4kq7TX__SxVmvFsDNbPVkqARRSRZx8Eht.jpg?r=cd8"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUrSFUJOIa3SrQin-VizYuMpGQ7gKciI4IFirnnfWbltYQflW2cjEw57uJ4lzs1JTyc4nmqblLsVngGEdou8boAXlWNAb1wB5b3aS5FZnhTlVIj7PGVaktQCvD8P.jpg?r=074"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaDi6owOw-MVdYNg2_PdN_OYcWvZ24BXm-XNyt5_R40v6Vv3roCCzaa_sHqI0UArF0WE87oeyjhVqu1YQwmdq4cTL79uKpw7DcfIxbrDtSez6hNczlQNBWJCiRBZ.jpg?r=c61"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWDjYN8svbAnFg-ckthuW-7ivi43XT1LNfUpr8adE5GLpDeltr-I1cnY9t66473e9g7e5JhmtkAo91zJ6c91r6Zdk7CUdA8nuGlKA_qn1gtBgEBn1x7IWvXmSTxN.jpg?r=301"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW50bq1QHj5Yv3gc4geBYAC5OlIMx9vWpwX_2iteE6Pz1InIi05l8YgVNgg9POx-_OH091G3Q2O-jT2sgpfubvD5hdk0QSbAhmxmKheeuIwHgal8nOAdBhqWZCCW.jpg?r=d63"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTwlpVhgFcufUSMrjUm8TPc0dBBgZ88THdIMZfKSUJ1lOuNiI5fZOKisl3EdaPqPRZmLTQUv3fUjoCjPE9QcwpNFqFOuGiLvbRaduHi9k13nBNHIIEUwhG3bFSn2.jpg?r=8e5"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTvCcz1XG9pEGbc8MUVjMbXmffTwEnajmJQwHhpDGSm8xS-M9BbW_ZKP0vkR3aF6YISdYNSkVKU2Y0F8hxQPAmAwN8JA4GK6ffqdxNOcj00ehDoMKfEQW1XO3EPp.jpg?r=de8"></img></SwiperSlide>
          <SwiperSlide><img src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdBDJi_TcHomTEtjbhW2h8p3Yd5ThVIIyz1EDLf0LYJ-sAppUrfRN0caCgzLexNZzw560ru5vHoPB0GmfciX7rVzKJz_tWYM0JKUWbqUd8WsWtwMddxVRMTUHLv6SOWeTg.webp?r=663"></img></SwiperSlide>
  
         </Swiper>
      </div>
      </div>
      </main>
    </>
  );
}

export default Index;
