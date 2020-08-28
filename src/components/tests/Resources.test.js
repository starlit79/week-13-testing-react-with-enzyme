import React from "react";
import { shallow, mount, render } from "../../enzyme";
import Resources from "../Resources";

describe("", () => {
    it("Display some URLs", () => {
        const sites = [
                {
                Name: "Npm package prop-types",
                UrlLink: "https://www.npmjs.com/package/prop-types"
                }, 
                {
                Name: "React bootstrap carousel of photos", 
                UrlLink: "https://react-bootstrap.github.io/components/carousel/"
                }
            ];
        const wrapper = shallow(<Resources reactSites={sites} />);

        expect(wrapper.find(".resources").exists()).toBe(true);
    })});