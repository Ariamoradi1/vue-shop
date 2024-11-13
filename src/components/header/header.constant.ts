import { h, ref } from "vue";

import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";

export const items = ref([
  {
    key: "mail",
    icon: () => h(HomeOutlined),
    label: "Home",
    title: "Home",
    route: "/",
  },
  {
    key: "app",
    icon: () => h(AppstoreOutlined),
    label: "Products",
    title: "Products",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    key: "sub1",
    icon: () => h(SettingOutlined),
    label: "About",
    title: "About",
    route: "/about",
  },
  {
    key: "alipay",
    label: h(
      "a",
      { href: "https://antdv.com", target: "_blank" },
      "Navigation Four - Link",
    ),
    title: "Navigation Four - Link",
  },
]);
