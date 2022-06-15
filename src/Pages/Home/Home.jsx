import Widgets from "../../components/Widgets/Widgets";
import Charts from "../../components/Charts/Charts";
import Drawer from "../../components/Drawer/Drawer";

const Home = () => {
  return (
    <Drawer>
      <Widgets />
      <Charts />
    </Drawer>
  );
};

export default Home;
