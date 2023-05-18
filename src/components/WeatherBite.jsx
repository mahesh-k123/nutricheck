import {weatherBite} from '../assets';
import styles, { layout } from "../style";
import Button from "./Button";

const WeatherBite = () => (
  <section id="WeatherBite" className={layout.section1}>
    <div className={layout.sectionImg1}>
      <img src={weatherBite} alt="Weather Bite" className="w-[100%] h-[100%]" />
    </div>

    <div className={layout.sectionInfo1} >
      <h2 className={styles.heading2}>
        KCalc <br className="sm:block hidden" /> in few easy
        steps.
      </h2> 
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       An Auto log book which gives the calorific count of person according to his
      BMI.
      </p>

      <Button styles={`mt-10`} name={`demon`}/>
    </div>
  </section>
);

export default WeatherBite;