import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const VitalScan = () => (
  <section id="VitalScan" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        KCalc <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       An Auto log book which gives the calorific count of person according to his
      BMI.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default VitalScan;