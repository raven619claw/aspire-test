import { useEffect, useState } from "react";
import { TabsContainer, TabsLabel, TabContentContainer } from "./styles";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export interface TabItem {
  label: string;
  content: React.FC;
  path?: string;
}

interface TabsProps {
  tabs: TabItem[];
  handleNavigation?: boolean;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  handleNavigation = false,
}) => {
  //added tabs which update URL if needed
  const navigate = useNavigate();
  const location = useLocation();
  const currentTabPath = location.pathname.split("/").pop() || tabs[0].path;

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    if (handleNavigation) {
      const matchedIndex = tabs.findIndex((tab) => tab.path === currentTabPath);
      if (matchedIndex !== -1) {
        setActiveTabIndex(matchedIndex);
      } else {
        setActiveTabIndex(0);
      }
    }
  }, [location.pathname, tabs, handleNavigation]);

  const handleTabClick = (index: number, path?: string) => {
    if (handleNavigation && path) {
      navigate(`/cards/${path}`);
    } else {
      setActiveTabIndex(index);
    }
  };

  const activeTab = handleNavigation
    ? tabs.find((tab) => tab.path === currentTabPath) || tabs[0]
    : tabs[activeTabIndex];

  const TabComponent = activeTab.content;

  return (
    <TabsContainer>
      {tabs.map((tab, index) => {
        return (
          <TabsLabel
            key={index}
            selected={
              handleNavigation
                ? activeTab?.path === tab.path
                : activeTabIndex === index
            }
            onClick={() => handleTabClick(index, tab.path)}
          >
            {tab.label}
          </TabsLabel>
        );
      })}
      <TabContentContainer>
        <TabComponent />
      </TabContentContainer>
    </TabsContainer>
  );
};
