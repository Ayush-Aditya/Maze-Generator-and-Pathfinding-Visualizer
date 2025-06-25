import React, { Component } from "react";
import "./navbar.css";

const brand = window.innerWidth > 600 ? "Pathfinding Visualizer" : "Pathfinder";

class NavBar extends Component {
  state = {
    algorithm: "Visualize Algorithm",
    maze: "Generate Maze",
    pathState: false,
    mazeState: false,
    speedState: "Speed",
  };

  selectAlgorithm(selection) {
    if (this.props.visualizingAlgorithm) return;
    if (
      selection === this.state.algorithm ||
      this.state.algorithm === "Visualize Algorithm" ||
      this.state.algorithm === "Select an Algorithm!"
    ) {
      this.setState({ algorithm: selection });
    } else if (this.state.pathState) {
      this.clearPath();
      this.setState({ algorithm: selection });
    } else {
      this.setState({ algorithm: selection });
    }
  }

  visualizeAlgorithm() {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) return;
    if (this.state.pathState) {
      this.clearTemp();
      return;
    }
    if (
      this.state.algorithm === "Visualize Algorithm" ||
      this.state.algorithm === "Select an Algorithm!"
    ) {
      this.setState({ algorithm: "Select an Algorithm!" });
    } else {
      this.setState({ pathState: true });
      const alg = this.state.algorithm;
      if (alg === "Visualize Dijkstra") this.props.visualizeDijkstra();
      else if (alg === "Visualize A*") this.props.visualizeAStar();
      else if (alg === "Visualize Greedy BFS") this.props.visualizeGreedyBFS();
      else if (alg === "Visualize Bidirectional Greedy")
        this.props.visualizeBidirectionalGreedySearch();
      else if (alg === "Visualize Breadth First Search")
        this.props.visualizeBFS();
      else if (alg === "Visualize Depth First Search")
        this.props.visualizeDFS();
      else if (alg === "Visualize Random Walk")
        this.props.visualizeRandomWalk();
      else if (alg === "Visualize Flood Fill")
        this.props.visualizeFloodFill();
    }
  }

  selectMaze(selection) {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) return;
    if (
      selection === this.state.maze ||
      this.state.maze === "Generate Maze" ||
      this.state.maze === "Select a Maze!"
    ) {
      this.setState({ maze: selection });
    } else if (!this.state.mazeState) {
      this.setState({ maze: selection });
    } else {
      this.clearGrid();
      this.setState({ maze: selection });
    }
  }

  generateMaze() {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) return;
    if (this.state.mazeState || this.state.pathState) this.clearTemp();
    if (
      this.state.maze === "Generate Maze" ||
      this.state.maze === "Select a Maze!"
    ) {
      this.setState({ maze: "Select a Maze!" });
    } else {
      this.setState({ mazeState: true });
      const maze = this.state.maze;
      if (maze === "Generate Random Maze") this.props.generateRandomMaze();
      else if (maze === "Generate Recursive Maze")
        this.props.generateRecursiveDivisionMaze();
      else if (maze === "Generate Vertical Maze")
        this.props.generateVerticalMaze();
      else if (maze === "Generate Horizontal Maze")
        this.props.generateHorizontalMaze();
    }
  }

  clearGrid() {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) return;
    this.props.clearGrid();
    this.setState({
      algorithm: "Visualize Algorithm",
      maze: "Generate Maze",
      pathState: false,
      mazeState: false,
    });
  }

  clearPath() {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) return;
    this.props.clearPath();
    this.setState({ pathState: false, mazeState: false });
  }

  clearTemp() {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) return;
    this.props.clearGrid();
    this.setState({ pathState: false, mazeState: false });
  }

  changeSpeed(speed) {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) return;
    let value = [10, 10];
    if (speed === "Slow") value = [50, 30];
    else if (speed === "Medium") value = [25, 20];
    else if (speed === "Fast") value = [10, 10];
    this.setState({ speedState: speed });
    this.props.updateSpeed(value[0], value[1]);
  }

  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
        <a className="navbar-brand h1 mb-0" href="/">
          <span role="img" aria-label="Compass">🧭</span> {brand}
        </a>
        <div className="navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav align-items-center">

            {/* Algorithms */}
            <li className="nav-item dropdown mx-2">
              <div className="dropdown">
                <button className="btn btn-outline-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
                  Algorithms
                </button>
                <div className="dropdown-menu p-2">
                  <strong className="dropdown-header">Weighted</strong>
                  <button className="dropdown-item" onClick={() => this.selectAlgorithm("Visualize Dijkstra")}>Dijkstra</button>
                  <button className="dropdown-item" onClick={() => this.selectAlgorithm("Visualize A*")}>A*</button>
                  <div className="dropdown-divider"></div>
                  <strong className="dropdown-header">Unweighted</strong>
                  <button className="dropdown-item" onClick={() => this.selectAlgorithm("Visualize Greedy BFS")}>Greedy BFS</button>
                  <button className="dropdown-item" onClick={() => this.selectAlgorithm("Visualize Bidirectional Greedy")}>Bidirectional Greedy</button>
                  <button className="dropdown-item" onClick={() => this.selectAlgorithm("Visualize Breadth First Search")}>BFS</button>
                  <button className="dropdown-item" onClick={() => this.selectAlgorithm("Visualize Depth First Search")}>DFS</button>
                  <button className="dropdown-item" onClick={() => this.selectAlgorithm("Visualize Random Walk")}>Random Walk</button>
                  <button className="dropdown-item" onClick={() => this.selectAlgorithm("Visualize Flood Fill")}>Flood Fill (DFS)</button>
                </div>
              </div>
            </li>

            {/* Visualize */}
            <li className="mx-2">
              <button className="btn btn-success btn-sm" onClick={() => this.visualizeAlgorithm()}>
                <span role="img" aria-label="Play">▶️</span> {this.state.algorithm}
              </button>
            </li>

            {/* Mazes */}
            <li className="nav-item dropdown mx-2">
              <div className="dropdown">
                <button className="btn btn-outline-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
                  Mazes
                </button>
                <div className="dropdown-menu p-2">
                  <button className="dropdown-item" onClick={() => this.selectMaze("Generate Random Maze")}>Random Maze</button>
                  <button className="dropdown-item" onClick={() => this.selectMaze("Generate Recursive Maze")}>Recursive Division</button>
                  <button className="dropdown-item" onClick={() => this.selectMaze("Generate Vertical Maze")}>Vertical Maze</button>
                  <button className="dropdown-item" onClick={() => this.selectMaze("Generate Horizontal Maze")}>Horizontal Maze</button>
                </div>
              </div>
            </li>

            {/* Generate */}
            <li className="mx-2">
              <button className="btn btn-primary btn-sm" onClick={() => this.generateMaze()}>
                <span role="img" aria-label="Globe">🌐</span> {this.state.maze}
              </button>
            </li>

            {/* Clear */}
            <li className="mx-2">
              <button className="btn btn-danger btn-sm" onClick={() => this.clearGrid()}>
                <span role="img" aria-label="Broom">🧹</span> Clear Grid
              </button>
            </li>

            {/* Speed */}
            <li className="nav-item dropdown mx-2">
              <div className="dropdown">
                <button className="btn btn-outline-info btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
                  <span role="img" aria-label="Lightning">⚡</span> {this.state.speedState}
                </button>
                <div className="dropdown-menu p-2">
                  <button className="dropdown-item" onClick={() => this.changeSpeed("Slow")}>
                    <span role="img" aria-label="Turtle">🐢</span> Slow
                  </button>
                  <button className="dropdown-item" onClick={() => this.changeSpeed("Medium")}>
                    <span role="img" aria-label="Walk">🚶</span> Medium
                  </button>
                  <button className="dropdown-item" onClick={() => this.changeSpeed("Fast")}>
                    <span role="img" aria-label="Rocket">🚀</span> Fast
                  </button>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
