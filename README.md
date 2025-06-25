# 🧠 Maze Generator & Pathfinding Visualizer

An interactive web app that lets you **generate mazes** and **visualize pathfinding algorithms** in action. Designed for learning, exploration, and fun! 🔍

![Maze Demo](https://github.com/Ayush-Aditya/Maze-Generator-and-Pathfinding-Visualizer/blob/main/Screenshot%202025-06-26%20004927.png)

---

## 🌐 Live Preview

👉 [**Click here to try it out!**](https://ayush-aditya.github.io/Maze-Generator-and-Pathfinding-Visualizer/)

---

## 🚀 Features

- 🎲 **Maze Generation**
  - Random Maze
  - Recursive Division
  - (Vertical / Horizontal)
- 🧭 **Pathfinding Algorithms**
  - Dijkstra’s Algorithm
  - A* Search
  - Breadth-First Search (BFS)
  - Depth-First Search (DFS)
  - Greedy Best-First Search
  - FloodFill DFS
- 🧱 **Interactive Grid**
  - Click and drag to draw walls
  - Add weights for weighted pathfinding
  - Customise start and end points
- ⚡ **Fast & Beautiful Visualizations**
  - Animated step-by-step exploration
  - Adjustable speed
  - Colour-coded node states

---

## 🛠️ Tech Stack

| Frontend       | Tools           |
|----------------|-----------------|
| HTML / CSS     | Grid Styling    |
| JavaScript     | Core Logic      |
| React (optional)| UI Components  |
| GitHub Pages   | Deployment      |
| SFML (legacy)  | Previous desktop version (C++) |

---

## 🖥️ Getting Started

### 🔧 Prerequisites
- Node.js (v16 or newer)
- npm or yarn

### ⚙️ Installation

```bash
git clone https://github.com/Ayush-Aditya/Maze-Generator-and-Pathfinding-Visualizer.git
cd Maze-Generator-and-Pathfinding-Visualizer
npm install
npm start
App will run locally at: http://localhost:3000

📂 Project Structure
php
Copy
Edit
/
├── public/           # index.html, favicon
├── src/
│   ├── components/   # React components
│   ├── algorithms/   # Pathfinding and maze logic
│   ├── styles/       # CSS / Tailwind
│   └── App.js        # Main UI
├── package.json
└── README.md
🎮 How to Use
Select Start/End Nodes
Click the grid to place start and target points.

Draw Walls or Weights
Drag your mouse to draw barriers or assign weights.

Choose an Algorithm
Pick from BFS, DFS, A*, Dijkstra, etc.

Visualize!
Hit "Visualize" and watch the algorithm in action.

Generate Maze
Select a maze type to auto-generate a labyrinth.

🧠 Educational Value
Understand how algorithms work under the hood

Compare time complexity & path accuracy

Experiment with different maze types and layouts

Great for CS students, educators, and curious developers!

🔮 Upcoming Features
📱 Mobile support & responsive layout

🧩 Custom node types (e.g., teleporters, terrain)

📈 Real-time stats: path cost, visited nodes

🧪 Algorithm benchmarking

🤝 Contributing
Contributions are welcome!
Feel free to fork this repo, suggest improvements, or submit pull requests.

bash
Copy
Edit
git checkout -b feature/your-feature-name
📜 License
This project is licensed under the MIT License.
See LICENSE for more details.

🙌 Acknowledgements
Inspired by Clement Mihailescu's visualizer

Algorithm references: CLRS, Wikipedia, and personal implementations

Made with ❤️ by Ayush Aditya
