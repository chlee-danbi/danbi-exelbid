import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { defaultExelbidData } from "../defaultProps";
import Exelbid from "../Exelbid";
configure({ adapter: new Adapter() });

describe("<Exelbid />", () => {
  it("with shallow", () => {
    shallow(<Exelbid {...defaultExelbidData} />);
  });
  it("with mount", () => {
    mount(<Exelbid {...defaultExelbidData} />);
  });
  it("match snapshot", () => {
    expect(shallow(<Exelbid {...defaultExelbidData} />)).toMatchSnapshot();
  });
});
