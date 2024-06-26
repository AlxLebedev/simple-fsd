import { ReactElement } from "react";
import styles from "./index.module.scss";
import { Header } from "@widgets/Header";
import { Divider } from "@shared/ui";
import { CreateColorForm } from "@features/CreateColor";
import { ColorList } from "@widgets/ColorList";

const HomePage = (): ReactElement => {
    return (
        <div className={styles["home-page"]}>            
            <Header />
            <Divider className={styles["home-page__divider"]}/>
            <CreateColorForm />
            <ColorList />
        </div>
    )
}

export default HomePage;
