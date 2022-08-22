import React from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

export class AmbientPics extends React.Component {
  render() {
    return (
      <div className="layout-wrapper">
        {console.log(this.props.layoutLg)}
        <ResponsiveGridLayout
          className="layout"
          layouts={this.props.layoutLg}
          rowHeight={63}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          breakpoints={{ lg: 1150, md: 996, sm: 768, xs: 480, xxs: 0 }}
          width={1160}
          isResizable={true}
          isDraggable={true}
          margin={[25, 25]}
          useCSSTransforms={false}
          compactType={"vertical"}
        >
          {this.props.dataPics.map((photo) => {
            return (
              <div key={photo.id} className={"card_img"}>
                <img
                  src={photo.url}
                  alt={
                    "Pic"
                  } /*className={ "card_img"photo.orientation === "lan" ? "card_imL" : "card_img" }*/
                />
              </div>
            );
          })}
        </ResponsiveGridLayout>
      </div>
    );
  }
}
