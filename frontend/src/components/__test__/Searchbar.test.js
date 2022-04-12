import React from "react";
import Search from "../SearchBar";

import renderer from "react-test-renderer";

it("matches snapshot", ()=> {
    const tree = renderer.create(<Search />).toJSON;
    expect(tree).toMatchSnapshot();
})
