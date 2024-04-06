import { ReactElement } from "react";
import styles from "./index.module.scss";
import { Header } from "../../widgets/Header";
import { Divider } from '../../shared/ui';

const HomePage = (): ReactElement => {
    return (
        <div className={styles["home-page"]}>            
            <Header />
            <Divider className={styles["home-page__divider"]}/>
        </div>
    )
}

export default HomePage;
