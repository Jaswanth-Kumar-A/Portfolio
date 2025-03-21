import heapq
from typing import List, Tuple, Dict, Set
from enum import Enum, auto

class Direction(Enum):
    UP = auto()
    DOWN = auto()
    LEFT = auto()
    RIGHT = auto()

class Node:
    def __init__(self, pos: Tuple[int, int], g_cost: float, h_cost: float, parent=None):
        self.pos = pos
        self.g_cost = g_cost  # Cost from start to current node
        self.h_cost = h_cost  # Estimated cost from current node to goal
        self.f_cost = g_cost + h_cost
        self.parent = parent
        
    def __lt__(self, other):
        return self.f_cost < other.f_cost

class CarPathfinder:
    def __init__(self, grid_size: Tuple[int, int]):
        self.grid_size = grid_size
        self.obstacles: Set[Tuple[int, int]] = set()
        self.allowed_directions: Dict[Tuple[int, int], Set[Direction]] = {}
        
    def add_obstacle(self, pos: Tuple[int, int]):
        self.obstacles.add(pos)
        
    def set_allowed_directions(self, pos: Tuple[int, int], directions: Set[Direction]):
        self.allowed_directions[pos] = directions
        
    def manhattan_distance(self, pos1: Tuple[int, int], pos2: Tuple[int, int]) -> float:
        return abs(pos1[0] - pos2[0]) + abs(pos1[1] - pos2[1])
    
    def get_neighbors(self, pos: Tuple[int, int]) -> List[Tuple[int, int]]:
        neighbors = []
        allowed = self.allowed_directions.get(pos, set())
        
        moves = {
            Direction.UP: (-1, 0),
            Direction.DOWN: (1, 0),
            Direction.LEFT: (0, -1),
            Direction.RIGHT: (0, 1)
        }
        
        for direction, (dx, dy) in moves.items():
            if direction in allowed:
                new_pos = (pos[0] + dx, pos[1] + dy)
                if (0 <= new_pos[0] < self.grid_size[0] and 
                    0 <= new_pos[1] < self.grid_size[1] and 
                    new_pos not in self.obstacles):
                    neighbors.append(new_pos)
                    
        return neighbors
    
    def find_path(self, start: Tuple[int, int], goal: Tuple[int, int]) -> List[Tuple[int, int]]:
        open_set = []
        closed_set = set()
        
        start_node = Node(start, 0, self.manhattan_distance(start, goal))
        heapq.heappush(open_set, start_node)
        
        came_from = {}
        
        while open_set:
            current = heapq.heappop(open_set)
            
            if current.pos == goal:
                path = []
                while current.pos in came_from:
                    path.append(current.pos)
                    current = came_from[current.pos]
                path.append(start)
                return path[::-1]
            
            closed_set.add(current.pos)
            
            for neighbor_pos in self.get_neighbors(current.pos):
                if neighbor_pos in closed_set:
                    continue
                    
                g_cost = current.g_cost + 1
                h_cost = self.manhattan_distance(neighbor_pos, goal)
                
                neighbor = Node(neighbor_pos, g_cost, h_cost, current)
                
                if neighbor.pos not in [n.pos for n in open_set]:
                    heapq.heappush(open_set, neighbor)
                    came_from[neighbor.pos] = current
                
        return []  # No path found

def heuristic(a, b):
    return abs(a[0] - b[0]) + abs(a[1] - b[1])

def solve_maze_constrained_astar(maze, start, goal, constraints):
    rows, cols = len(maze), len(maze[0])
    print(f"Maze dimensions: {rows} rows, {cols} columns")
    pq = [(heuristic(start, goal), 0, start, [start])]
    visited = {}

    moves = {
        (-1, 0): "up",
        (1, 0): "down",
        (0, -1): "left",
        (0, 1): "right"
    }

    while pq:
        _, cost, (r, c), path = heapq.heappop(pq)
        if (r, c) == goal:
            return path
        if (r, c) in visited and visited[(r, c)] <= cost:
            continue
        visited[(r, c)] = cost
        allowed_moves = constraints.get((r, c), list(moves.keys()))
        for (dr, dc) in allowed_moves:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and maze[nr][nc] == 0:
                new_cost = cost + 1
                heapq.heappush(pq, (new_cost + heuristic((nr, nc), goal), new_cost, (nr, nc), path + [(nr, nc)]))
    return None

# Define 5x5 maze where:
# 0 = empty space
# 1 = yellow obstacle
maze = [
    [1, 0, 1, 1, 1],    # Row 0
    [1, 0, 1, 1, 1],    # Row 1
    [1, 1, 1, 0, 1],    # Row 2
    [1, 1, 0, 0, 0],    # Row 3
    [1, 1, 1, 0, 0]     # Row 4
]

# Starting position (red car)
start = (0, 1)

# Goal position (based on blue path end)
goal = (4, 4)

# Define constraints based on arrows in the second image
# For each position, list the allowed moves based on visible arrows
constraints = {
    # Row 0
    (0, 1): [(0, 1), (1, 0)],  # Right, Down
    
    # Row 1
    (1, 1): [(0, 1), (-1, 0)],  # Right, Up
    
    # Row 2
    (2, 3): [(0, 1), (1, 0), (0, -1)],  # Right, Down, Left
    
    # Row 3
    (3, 2): [(0, 1), (1, 0)],  # Right, Down
    (3, 3): [(0, 1), (0, -1)],  # Right, Left
    (3, 4): [(1, 0), (0, -1)],  # Down, Left
    
    # Row 4
    (4, 3): [(0, 1), (-1, 0)],  # Right, Up
    (4, 4): [(-1, 0), (0, -1)]  # Up, Left
}

print("Finding path for car puzzle...")
path = solve_maze_constrained_astar(maze, start, goal, constraints)

if path:
    print("\nPath found:")
    for step in path:
        print(step)
    
    # Print the path in a more visual way
    visual_maze = [[' ' for _ in range(5)] for _ in range(5)]
    for i in range(5):
        for j in range(5):
            if maze[i][j] == 1:
                visual_maze[i][j] = '█'  # obstacle
            else:
                visual_maze[i][j] = '.'  # empty space
                
    # Mark the path
    for i, (r, c) in enumerate(path):
        if i == 0:
            visual_maze[r][c] = 'S'  # Start
        elif i == len(path) - 1:
            visual_maze[r][c] = 'E'  # End
        else:
            visual_maze[r][c] = '*'  # Path
            
    print("\nVisual representation:")
    print("  " + " ".join(str(i) for i in range(5)))
    for i in range(5):
        print(f"{i} {' '.join(visual_maze[i])}")
else:
    print("No path found.")

if __name__ == "__main__":
    solve_car_puzzle() 