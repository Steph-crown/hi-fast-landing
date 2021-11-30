import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { TabContainer, tabVariant } from "./style";

export const TabComponent = ({ tabs, defaultIndex, noLink }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

    const history = useHistory();
    const path = history.location.pathname.slice(0, -2);
    // Set active tab index
    const onTabClick = (index) => {
        setActiveTabIndex(index);
    };

    useEffect(() => {
        setActiveTabIndex(0);
        // window.location.reload(false);
        return () => {};
    }, []);

    return (
        <TabContainer>
            {/* {closeSecond && setActiveTabIndex(0)} */}
            {/* Tab title */}
            <ul className="tab-links" role="tablist">
                {tabs.map((tab, index) => (
                    <motion.li
                        key={"udud" + index}
                        className={activeTabIndex === index ? "tab" : ""}
                        role="presentation"
                        variants={tabVariant}
                        animate={
                            activeTabIndex === index ? "active" : "inactive"
                        }
                    >
                        {/* {console.log(closeSecond)} */}
                        <Link
                            to={
                                noLink
                                    ? history.location.pathname +
                                      history.location.search
                                    : path + "/" + index
                            }
                            onClick={(e) => {
                                onTabClick(index);
                            }}
                        >
                            <motion.span>{tab.title}</motion.span>
                        </Link>
                    </motion.li>
                ))}
            </ul>

            {/* Tab content */}
            {tabs.map((tab, index) => {
                return (
                    <div
                        role="tabpanel"
                        id={tab.index}
                        key={"jjcc" + index}
                        className={
                            "tab-content " +
                            (activeTabIndex === index ? "active" : "")
                        }
                    >
                        {tab.content}
                    </div>
                );
            })}
        </TabContainer>
    );
};
