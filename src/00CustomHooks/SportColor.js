
//Custom Hook for changing the color according to the sports name
const useSportColor = (MSport) => {
    if (MSport === "Football") {
        return '#1a7489';
    } else if (MSport === "Basketball") {
        return '#c85bab';
    }
    return 'rgb(200, 77, 77)';
}
export default useSportColor;