import { records } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Button from "./Button";
import Image from "next/image";
const CardDeal: React.FC = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Records 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      AFRICA SAMURAI has been involved since its creation in both lucrative and non-profit activities, particularly in the areas of education and social inclusion of young people through entrepreneurship.  
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <Image src={records} alt="record" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
