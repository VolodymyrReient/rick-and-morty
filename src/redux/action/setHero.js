function setHero(hero) {
    return {
        type: "SET_HERO",
        payload: hero,
    };
}

export default setHero;
