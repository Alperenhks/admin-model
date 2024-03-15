import { RouterProvider } from "react-router-dom";
import routes from "./routes/route";
import { ConfigProvider } from "antd";
import useTheme from "./hooks/useTheme";

function App() {
  const theme = useTheme();
  console.log(theme);
  return (
    <ConfigProvider
    theme={{
      token: {
        colorText: theme?.text,
        colorPrimary:theme.text
      },
      components: {
        Layout: {
          siderBg: theme?.appBar,
          headerBg: theme.appBar,
        },
        Menu: {
          subMenuItemBg: theme?.appBar,
          itemSelectedBg: theme?.items,
          itemSelectedColor: theme?.text,
          itemColor: theme?.text,
          itemBg:theme?.item,
          popupBg:theme?.appBar,
          bodyBg:theme?.background
        },
        Table:{
          headerBg:theme?.background,
          headerColor:theme?.text,
          bodySortBg:theme?.background,
          colorBgContainer:theme?.items,
        },
        Switch:{
          handleBg:theme.background
        },
        Card:{
          colorBgContainer:theme.appBar,
          borderRadiusLG:0,
          colorBorderSecondary:"none",
          actionsLiMargin:"0px"
        }
      },
    }}
  >
      <RouterProvider router={routes} />
    </ConfigProvider>
  );
}

export default App;
