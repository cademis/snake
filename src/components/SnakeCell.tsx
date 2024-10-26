type Props = {
  position: { x: number; y: number };
};

function SnakeCell({ position }: Props) {
  return (
    <div
      className="snake-cell"
      style={{ left: position.x, top: position.y }}
    ></div>
  );
}

export { SnakeCell };
