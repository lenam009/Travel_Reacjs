import Slider from '~/pages/Home/Slider';
import Location from './Location';
import Promotion from './Promotion';
import Hint from './Hint';
import HintDiscover from './HintDiscover';
import Tutorial from './Tutorial';

function Home() {
    return (
        <div id="wrapper-home">
            <Slider />
            <Location />
            <Promotion />
            <Hint />
            <HintDiscover />
            <Tutorial />
        </div>
    );
}

export default Home;
