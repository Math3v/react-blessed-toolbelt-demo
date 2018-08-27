import React, { Component } from "react";
import { spawn } from "child_process";

const renderLine = component => line => {
  component.refs.mybox.pushLine(line);
  component.refs.mybox.setScrollPerc(100);
  component.forceUpdate();
};

// TODO: Make Generic to run any command
class DockerSync extends Component {
  componentDidMount() {
    this.startDockerSync();
  }

  startDockerSync() {
    const child = spawn("docker-sync", ["start", "--foreground"], {
      // FIXME
      cwd: "/Users/matej/dev/hassle"
    });

    child.stdout.setEncoding("utf8");
    child.stdout.on("data", renderLine(this));

    child.stderr.setEncoding("utf8");
    child.stderr.on("data", renderLine(this));

    child.on("close", renderLine(this));
  }

  render() {
    return (
      <box
        label={"docker-sync start --foreground"}
        width="45%"
        height="70%"
        top="10%"
        border={{ type: "line" }}
        style={{ border: { fg: "green" } }}
        ref="mybox"
        scrollable={true}
      />
    );
  }
}

export default DockerSync;
