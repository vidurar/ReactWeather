var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var ErrorModal = require("ErrorModal");
var openweathermap = require("openweathermap");

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading : false
    }
  },
  handleSearch:function(location){
    var that = this;


    this.setState({
      isLoading:true,
      errorMessage:undefined
    });
    openweathermap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });
    },
    function(e){
      that.setState({
        isLoading:false,
        errorMessage:e.message
      });
      alert(errorMessage);
    })
  },
  render: function(){
    var{isLoading,temp,location, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h1 className="text-center" >Fetching weather...</h1>;
      }
      else if (temp && location)
      {
        return <WeatherMessage temp={temp} location={location}/>;
      }

    };
    function renderError(){
      if(typeof errorMessage==='string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    };
    return(
      <div>
        <div>
          <h1 className="text-center">Get Weather</h1>
        </div>
        <div>
          <WeatherForm onSearch={this.handleSearch}/>
        </div>
        <div>
          {renderMessage()}
          {renderError()}
        </div>
      </div>
    );
  }
});


module.exports = Weather;
