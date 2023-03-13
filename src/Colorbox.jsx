export function Colorbox({ color }) {
  const styles = {
    width: "250px",
    height: "25px",
    margin: "5px 0",
    background: color,
  };
  return <div style={styles}> </div>;
}
