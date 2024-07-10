# Fractal Tree Generator

This project is a fractal tree generator built using [three.js](https://threejs.org/). It allows users to interactively create and visualize fractal trees with adjustable parameters such as angle, branch length, tree depth, and scale.

## Features

- **Interactive GUI Controls**: Adjust tree parameters in real-time using a graphical user interface.
- **3D Visualization**: Navigate the 3D space using orbit controls.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/rozjan1/fractal-tree-generator.git
    cd fractal-tree-generator
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npx vite
    ```

4. Open your browser and navigate to `http://localhost:5173` (or whatever port you use for your vite dev server).

## Usage

### GUI Controls

- **Angle**: Adjust the branching angle of the tree.
- **Length**: Set the initial length of the tree branches.
- **Depth**: Define the recursion depth of the tree branches.
- **Scale**: Scale the length of each subsequent branch.

### Navigation

- Use your mouse to look around the tree.