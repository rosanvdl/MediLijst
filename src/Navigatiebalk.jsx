import './App.css'

class Navigatiebalk extends React.Component {
  render() {
    return (
      <main>
        <div class="navbar">
          <a class="active" href="index.html">Home</a>
          <div class="navbar-right">
            <a href="index.html">Uitloggen</a>
          </div>
        </div> 
      </main>
    )
  }
}
