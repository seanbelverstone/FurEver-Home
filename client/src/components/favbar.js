import React from "react";
import Sidebar from "react-sidebar";
 
class FavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
 
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }
 
    render() {
        return (
            <Sidebar
                sidebar={<b>Sidebar content</b>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
        styles={{ 
          sidebar: { 
            background: "white",
            zIndex: "1",
            width: "500px"
            
          } 
        }}
        pullRight={true}
        touch={true}
            >
                <button style={{float: "right"}}onClick={() => this.onSetSidebarOpen(true)}>
          Favorites
                </button>
            </Sidebar>
        );
    }
}
 
export default FavBar;