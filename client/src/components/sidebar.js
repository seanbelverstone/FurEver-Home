import React from "react";
import Sidebar from "react-sidebar";
import "./sidebar.css";

class FilterBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      sidebarOpen: true,

      valueControl: {
        species: "all",
        age: "all",
        coat: "all",
        gender: "all",
        size: "all"
      }
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.setValue = this.setValue.bind(this);
	}
 
	onSetSidebarOpen(open) {
		this.setState({ sidebarOpen: open });
  }

  submitFilters(event) {
    // This checks that the submit has been clicked and the function has been called and sets state for event;
    this.setValue(event);
  }
  
    setValue(event, filterLabel) {
    // When the user selects Submit...
    // Scan over all of the drop-down menus to see if the value is anything OTHER THAN "all"
    
    // If the value is something other than "all" (e.g., if the user selected a search parameter) we take that 
    // value and we do setState to store it into the searchQueries array.

    let valueControl = this.state.valueControl;

    valueControl[filterLabel] = event.target.value;
    
    this.setState({
      valueControl
      }
    )
    this.props.updateValueControl(valueControl);

  }


  
renderContent = () => {
  return (
    <div>
      <div className="sideBarDiv">

        <div id="filterTitle">Adopt a Pet</div>
        
        <div className="selectMenus">Species</div>
        <select className="selectOptions" onChange={event => this.setValue(event,"species")}>
          <option value="all">All</option>
          <option value="dog">Dogs</option>
          <option value="cat">Cats</option>
        </select>

        <div className="selectMenus">Age</div>
        <select className="selectOptions" onChange={event => this.setValue(event,"age")}>
          <option value="all">All</option>
          <option value="puppy">Puppy</option>
          <option value="young">Young</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
        </select>

        <div className="selectMenus">Coat Length</div>
        <select className="selectOptions" onChange={event => this.setValue(event,"coat")}>
          <option value="all">All</option>
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
          <option value="wire">Wire</option>
        </select>

        <div className="selectMenus">Gender</div>
        <select className="selectOptions" onChange={event => this.setValue(event,"gender")}>
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <div className="selectMenus" >Size</div>
        <select className="selectOptions" onChange={event => this.setValue(event,"size")}>
          <option value="all">All</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
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
            children=""
            >
          </Sidebar>
    );
  }
}


export default FilterBar;