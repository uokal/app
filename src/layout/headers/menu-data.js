const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Über uns",
    link: "/",
    active: "active"
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Angebot",
    link: "",
    active: ""
  },

  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Infos",
    link: "/",
    active: "",
    sub_menus: [{ link: "/", title: "Menu" }]
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Universitäten",
    link: "/",
    active: "",
    sub_menus: [{ link: "/", title: "Menu" }]
  }
];
export default menu_data;
