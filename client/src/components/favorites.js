import React from "react";
import "../App.css";

function displayFav() {
    const [open, setOpen] = useState(false);

    return(
        <>
        <Button
            onClick= {() => setOpen(!open)}
            aria-controls="favorite-collapse-text"
            aria-expanded={open}
      >
    )
    Display Favorites
      </Button>
      <Collapse in={open}>
        <div id="favorite-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </>
  );
}

render(<displayFav />);

