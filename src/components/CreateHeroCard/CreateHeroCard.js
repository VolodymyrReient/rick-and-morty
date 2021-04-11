import { connect } from "react-redux";

import NewHero from "./NewHero";

function CreateHeroCard({ heroData }) {
  
    return (
        <div>
            {heroData.map((el) => {
                return <NewHero {...el} key={el.name + Math.random()} />;
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        heroData: state.heroReducer.data,
    };
};

export default connect(mapStateToProps)(CreateHeroCard);
