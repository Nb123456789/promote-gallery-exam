import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './Image.scss';

class Image extends React.Component {
  static propTypes = {
    dto: PropTypes.object,
    galleryWidth: PropTypes.number
  };

  static filters = [
    'saturate(100%)',
    'contrast(200%)',
    'grayscale(80%)',
    'hue-rotate(90deg)',
    'drop-shadow(16px 16px 20px red) invert(75%)'
  ]

  constructor(props) {
    super(props);
    this.calcImageSize = this.calcImageSize.bind(this);
    this.cloneHandler = this.cloneHandler.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
    this.sizeHandler = this.sizeHandler.bind(this);

    this.state = {
      size: 200,
      filter: '',
      isOpen: false
    };
  }

  calcImageSize() {
    const {galleryWidth} = this.props;
    const targetSize = 200;
    const imagesPerRow = Math.round(galleryWidth / targetSize);
    const size = (galleryWidth / imagesPerRow);
    this.setState({
      size
    });
  }

  componentDidMount() {
    this.calcImageSize();
  }

  urlFromDto(dto) {
    return `https://farm${dto.farm}.staticflickr.com/${dto.server}/${dto.id}_${dto.secret}.jpg`;
  }

  cloneHandler() {
    this.props.addImageHandler(this)
  }
  filterHandler() {
    this.setState({filter: Image.filters[Math.floor(Math.random()*Image.filters.length)]})
  }

  sizeHandler(){
    if ((!this.state.isOpen)) {
      this.setState({size : this.state.size * 2});
    }
    else {
      this.setState({size: 181.25});
    }
    this.setState({isOpen:!this.state.isOpen })
  }



  render() {
    return (
      <div
        className="image-root"
        style={{
          backgroundImage: `url(${this.urlFromDto(this.props.dto)})`,
          width: this.state.size + 'px',
          height: this.state.size + 'px',
          filter: this.state.filter
        }}
        >
        <div>
          <FontAwesome className="image-icon" name="clone" title="clone" onClick={this.cloneHandler} />
          <FontAwesome className="image-icon" name="filter" title="filter" onClick={this.filterHandler} />
          <FontAwesome className="image-icon" name="expand" title="expand" onClick={this.sizeHandler}/>
        </div>
      </div>
    );
  }
}

export default Image;
