import { Stack, Tabs } from "expo-router";

const RootLayout = () => {
  return (
    // <Stack>
    //   <Stack.Screen
    //     name="index"
    //     options={{
    //       headerTitle: "Home Page",
    //       headerStyle: {
    //         backgroundColor: "crimson",
    //       },
    //     }}
    //   />
    //   <Stack.Screen
    //     name="About"
    //     options={{
    //       headerTitle: "About Page",
    //       headerStyle: {
    //         backgroundColor: "blue",
    //       },
    //     }}
    //   />

    //   <Stack.Screen
    //     name="users/[id]"
    //     options={{
    //       headerTitle: "User Page",
    //     }}
    //   />
    // </Stack>
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="About" />
      <Tabs.Screen name="Contact" />
    </Tabs>
  );
};
export default RootLayout;
