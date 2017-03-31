var React = require("react");
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    alert("not yet wired up");
  },
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather</li>
            <li>
              <IndexLink to='/' activeClass="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <IndexLink to='/about' activeClass="active" activeStyle={{fontWeight:'bold'}}>Learn About</IndexLink>
            </li>
            <li>
              <IndexLink to='/examples' activeClass="active" activeStyle={{fontWeight:'bold'}}>See Examples</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather by city" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
})
module.exports = Nav;


// var old =
// {
// <div>
//   <h2>Nav component</h2>
//   <IndexLink to='/' activeClass="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
//   <IndexLink to='/about' activeClass="active" activeStyle={{fontWeight:'bold'}}>Learn About</IndexLink>
//   <IndexLink to='/examples' activeClass="active" activeStyle={{fontWeight:'bold'}}>See Examples</IndexLink>
// </div>
// }
// ;
