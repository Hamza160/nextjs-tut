
import {serverSideFunction} from "@/utils/server-utils";
import ImageSlider from "@/app/ImageSlider";

export default function ServerRoute() {
    const result = serverSideFunction();

    return (
        <div>
            <h1>ServerRoute {result}</h1>
            <ImageSlider/>
        </div>
    );
}

