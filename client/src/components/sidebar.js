import React from "react";
import Sidebar from "react-sidebar";
import "./sidebar.css";

class FilterBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sidebarOpen: true
		};
		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	}
 
	onSetSidebarOpen(open) {
		this.setState({ sidebarOpen: open });
	}
 
renderContent = () => {
  return (
    <div>
      <div className="sideBarDiv">
        <div id="filterTitle">Adopt a Pet</div>
        <div id="selectMenus">Species</div>
        <select id="selectOptions">
          <option value="all">All</option>
          <option value="dogs">Dogs</option>
          <option value="cats">Cats</option>
        </select>

        <div id="selectMenus">Age</div>
        <select id="selectOptions">
          <option value="all">All</option>
          <option value="puppy">Puppy</option>
          <option value="young">Young</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
        </select>

        <div id="selectMenus">Coat Length</div>
        <select id="selectOptions">
          <option value="all">All</option>
          <option value="hairless">Hairless</option>
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
          <option value="wire">Wire</option>
          <option value="curly">Curly</option>
        </select>

        <div id="selectMenus">Gender</div>
        <select id="selectOptions">
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <div id="selectMenus">Size</div>
        <select id="selectOptions">
          <option value="all">All</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="extralarge">XL</option>
        </select>
      </div>

      <button id="submitBtn" onClick={() => this.onSetSidebarOpen(true)}>
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
