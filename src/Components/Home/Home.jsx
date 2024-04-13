import Header from "../../Page/Header/Header";
import BreakingNews from "../BreakingNews";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import NavBar from "../NavBar/NavBar";
import RightSideNav from "../RightSideNav/RightSideNav";

const Home = () => {
        return (
                <div>
                        <Header></Header>
                        <BreakingNews></BreakingNews>
                        <NavBar></NavBar>
                        <div className="grid  grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="border">
                                        <LeftSideNav></LeftSideNav>
                                </div>
                                <div className="md:col-span-2 border">
                                        <h2 className="text-3xl">News Caming Soon...</h2>
                                </div>
                                <div className="border">
                                        <RightSideNav></RightSideNav>

                                </div>
                        </div>
                </div>
        );
};

export default Home;