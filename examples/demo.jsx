import React, { Component } from "react";
import blessed from "blessed";
import { render } from "../src";
import DockerSync from "./components/DockerSync";

class App extends Component {
  render() {
    return (
      <box
        label="blessed-helpling-toolbelt"
        border={{ type: "line" }}
        style={{ border: { fg: "cyan" } }}
      >
        <DockerSync />
      </box>
    );
  }
}

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "blessed-helpling-toolbelt"
});

screen.key(["escape", "q", "C-c"], function(_ch, _key) {
  // TODO: Exit running processes gracefully
  return process.exit(0);
});

render(<App />, screen);
