import React from "react";
import { SidebarContainer, SidebarItem } from "./styledCompo";

export const Sidebar = () => {
  const sidebarItems = [
    { id: "customService", image: "/imagesDome/customService.png" },
    { id: "phone", image: "/imagesDome/phone.png" },
    // { id: "topImg", image: "/imagesDome/toTop.png.png" },
  ];
  return (
    <SidebarContainer id="SidebarContainer">
      {sidebarItems.map((item, index) => (
        <SidebarItem id={item.id}>
          <div>
            <img src={item.image} alt={item.image} />
          </div>
        </SidebarItem>
      ))}
    </SidebarContainer>
  );
};
