var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openweathermap = require("openweathermap");

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading : false
    }
  },
  handleSearch:function(location){
    var that = this;


    this.setState({isLoading:true});
    openweathermap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });
    },
    function(errorMessage){
      that.setState({
        isLoading:false
      });
      alert(errorMessage);
    })
  },
  render: function(){
    var{isLoading,temp,location} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather...</h3>;
      }
      else if (temp && location)
      {
        return <WeatherMessage temp={temp} location={location}/>;
      }

    };
    return(
      <div>
        <div>
          <h3>Weather component</h3>
        </div>
        <div>
          <WeatherForm onSearch={this.handleSearch}/>
        </div>
        <div>
          {renderMessage()}
        </div>
      </div>
    );
  }
});


module.exports = Weather;
