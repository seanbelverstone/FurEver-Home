export const addFavorite = (petId) => {
  console.log("HELLO WORLD");
  console.log("The Pet ID we just clicked on is: ", petId);
};

function addFavorite(props) {
  return <div className="filterfav-button">{props.filterOptions}</div>;
};

//-------------------------------------------
import React from 'react';

class addFavorite extends React.Component {
  render() {
    return (
      <div>
        {this.props.render()}
      </div>
    );
  }
}
// -------------------------
import React from 'react';
import Storage from 'components/Storage';

class ComponentNeedingStorage extends React.Component {
  state = {
    pet_id: '',
    pet_image: '',

}