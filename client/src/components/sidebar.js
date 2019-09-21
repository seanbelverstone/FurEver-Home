import React from "react";
import Sidebar from "react-sidebar";
import "./sidebar.css";

class FilterBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      sidebarOpen: true,

      valueControl: {
        species: {
          value: ""
        },
        age: {
          value: ""
        },
        coatLength: {
          value: ""
        },
        gender: {
          value: ""
        },
        size: {
          value: ""
        }
      }
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.setValue = this.setValue.bind(this);
	}
 
	onSetSidebarOpen(open) {
		this.setState({ sidebarOpen: open });
  }

  submitFilters(event) {
    console.log("The submit has been clicked and the function has been called");
    this.setValue(event);
  }
  
  setValue(event) {
    console.log("SetValue function has started.");
    // When the user selects Submit...
    // Scan over all of the drop-down menus to see if the value is anything OTHER THAN "all"
    
    // If the value is something other than "all" (e.g., if the user selected a search parameter) we take that 
    // value and we do setState to store it into the searchQueries array.
    // var testElements = document.getElementByClassName
    // if ((getElementsByClassName(selectOptions)).val() !== "all") {
      
    //   searchQueries = this.state.searchQueries.concat(this.option.value);
    //   console.log("SEARCHQUERIES IS NOW: ", searchQueries);

  
    
    this.setState({
      // valueControl: {
        species: event.target.value,
        age: event.target.value,
        coatLength: event.target.value,
        gender: event.target.value,
        size: event.target.value
      // }
    })

    console.log(this.state.valueControl);

    console.log("The selected Age is: ", this.state.age);
  
    console.log("The selected Species is: ", this.state.species);

    console.log("The selected Coat Length is: ", this.state.coatLength);

    console.log("The selected Gender is: ", this.state.gender);

    console.log("The selected size is: ", this.state.size);

    
  }



  test() {
    console.log(this.state.valueControl);
  }

  
renderContent = () => {
  return (
    <div>
      <div className="sideBarDiv">
        <div id="filterTitle">Adopt a Pet</div>
        <div className="selectMenus">Species</div>
        <select className="selectOptions" onChange={this.setValue}>
          <option value="all">All</option>
          <option value="dogs">Dogs</option>
          <option value="cats">Cats</option>
        </select>

        <div className="selectMenus"
              onChange={this.setValue}>Age</div>
        <select className="selectOptions" onChange={this.setValue}>
          <option value="all">All</option>
          <option 
            value="puppy">Puppy</option>
          <option
            value="young">Young</option>
          <option 
            value="adult">Adult</option>
          <option 
            value="senior">Senior</option>
        </select>

        <div className="selectMenus"
                onChange={this.setValue}>
                  Coat Length</div>
        <select className="selectOptions">
          <option value="all">All</option>
          <option value="hairless">Hairless</option>
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
          <option value="wire">Wire</option>
          <option value="curly">Curly</option>
        </select>

        <div className="selectMenus"
                onChange={this.setValue}>
                  Gender</div>
        <select className="selectOptions">
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <div className="selectMenus"
              onChange={this.setValue}>
                Size</div>
        <select className="selectOptions">
          <option value="all">All</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="extralarge">XL</option>
        </select>
      </div>

      <button id="submitBtn" onClick={this.setValue}>
        Submit
      </button>
    </div>
  )
}


  render() {
    return (
          <Sidebar
            sidebar={this.renderContent()}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            pullRight={false}
            transitions={true}
            touch={false}
            docked={true}
            position="fixed"
            >

            {/* <button id="filterTriggerBtn" onClick={() => this.onSetSidebarOpen(true)}>
            Adopt a Pet
            </button> */}
          </Sidebar>
    );
  }
}


export default FilterBar;
