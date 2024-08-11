import "../utils/shimmer.css";
import { useSelector } from "react-redux";



const Shimmer = () => {

    const darkMode = useSelector((store) => store.darkMode)
    const shimmerCards = Array(15).fill(0);

    return (
        <div className={`${darkMode && "dark"}`}>
            <div className="min-h-screen dark:bg-c2">
                <div className="w-11/12  mx-auto   xl:w-10/12">
                    <div className="flex justify-between py-5 xs:flex-col xs:items-center sm:pt-8 sm:px-4 ">
                        <div className={`w-64 h-10 bg-gray-100 rounded-2xl ${darkMode ? 'shimmer-image-dark' : 'shimmer-image'} xs:w-full xs:px-1 xs:my-3`}></div>
                        <div className="flex items-center xs:flex-col">
                            <div className={`w-60 h-10 bg-gray-100 rounded-2xl shimmer-image xs:w-52 xs:my-2 ${darkMode ? 'shimmer-image-dark' : 'shimmer-image'}`}></div>
                            <div className={`w-20 h-10 bg-gray-100 rounded-2xl ml-4 shimmer-image xs:w-14 ${darkMode ? 'shimmer-image-dark' : 'shimmer-image'} `}></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center ">

                        {
                            shimmerCards.map((_, index) => (

                                <div key={index} className={`m-4 w-[250px] h-[320px] p-3 rounded-md shimmer-card  overflow-hidden hover:shadow-2xl transition-shadow duration-300  bg-gray-100 xs:w-[140px] xs:h-[240px] sm:w-[150px] sm:h-[240px] md:w-[250px] md:h-[320px] xs:m-2 sm:m-2 md:m-4 ${darkMode ? 'shimmer-card-dark' : 'shimmer-image'}`}>
                                    <div className="h-[180px] w-full  bg-gray-200 rounded-md  xs:h-28 sm:h-28 md:h-48 dark:bg-c4"></div>
                                    <div className="h-[30px] w-full my-2 bg-gray-200 rounded-3xl shimmer-tittle dark:bg-c4"></div>
                                    <div className="h-[20px] w-full my-2 bg-gray-200 rounded-3xl shimmer-cuisines dark:bg-c4"></div>
                                    <div className="flex justify-between">
                                        <div className="h-[20px] w-4/12  my-2 bg-gray-200 rounded-3xl shimmer-row dark:bg-c4"></div>
                                        <div className="h-[20px] w-3/12  my-2 bg-gray-200 rounded-3xl shimmer-row dark:bg-c4"></div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>
        </div>
    );
}


export const MenuShimmer = () => {

    const darkMode = useSelector((store) => store.darkMode)

    const menuShimmerCards = Array(8).fill(0);
    return (
        <div className={`${darkMode && "dark"}`}>
            <div className="min-h-screen dark:bg-c2">
                <div className="pb-5 pt-10">
                    <div className={` bg-gray-200  h-[150px] w-2/12 mx-auto p-4 rounded-lg xs:w-9/12 xs:p-2 sm:w-5/12 md:w-5/12 lg:w-3/12  ${darkMode ? 'shimmer-image-dark' : 'shimmer-accordian'} `}></div>
                </div>
                <div>
                    {
                        menuShimmerCards.map((_, index) => (
                            <div className="flex justify-between p-1  ">
                                <div key={index} className={`w-6/12 bg-gray-200 h-10 my-2 shadow-lg mx-auto rounded-md  ${darkMode ? 'shimmer-accordian-dark' : 'shimmer-accordian'}`}>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}




export default Shimmer;