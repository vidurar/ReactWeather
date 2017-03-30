var React = require("react");
var {Link, IndexLink} = require('react-router');

var Nav = (props)=>{
  return(
    <div>
      <h2>Nav component</h2>
      <IndexLink to='/' activeClass="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
      <IndexLink to='/about' activeClass="active" activeStyle={{fontWeight:'bold'}}>Learn About</IndexLink>
      <IndexLink to='/examples' activeClass="active" activeStyle={{fontWeight:'bold'}}>See Examples</IndexLink>
    </div>
  );
};

module.exports = Nav;
