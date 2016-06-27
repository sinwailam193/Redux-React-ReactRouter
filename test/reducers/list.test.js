import { expect } from "../test_helper";
import { SAVE_COMMENT } from "../../src/actions/types";
import List from "../../src/reducers/list.reducer";

describe("Testing the list reducer", () => {
  it("handles action with unknown type", () => {
    expect(List(undefined, {})).to.eql([]);
  });

  it("handles action of type SAVE_COMMENT", () => {
    const action = {type: SAVE_COMMENT, payload: "new comment"};
    expect(List([], action)).to.eql(["new comment"]);
  });
});
