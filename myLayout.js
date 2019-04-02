
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
  "textAlign": "center"
}

const Layout = props => (
  <div style={layoutStyle}>
    <h1>Welcome to your TO-DO App</h1>
    {props.children}
  </div>
)

export default Layout