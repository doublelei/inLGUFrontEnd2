import React, { Fragment } from 'react'
import ReactDropZone from 'react-dropzone'
import Stores from '../store/stores.js';
import $ from 'jquery'
export default class DropzoneComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: []
        }
        this.handleDrop = this.handleDrop.bind(this);
    }
    handleDrop(acceptFile, rejectFile) {
        let { files } = this.state;
        if (rejectFile.length) {
            alert('不支持该格式')
            return;
        }
        files = []
        acceptFile.map(item => {
            files.push(item)
        })
        this.setState({
            files,
        })
        Stores.HomepageStore.attachment.file = URL.createObjectURL(files[0])
        // $("#upload").attr('src', URL.createObjectURL(files[0]))
    }
    render() {
        const imgs = this.state.files.map((file, index) => (
            <img
                id="upload"
                key={index}
                className="img-thumbnail"
                src={URL.createObjectURL(file)} />
        ));
        const files = this.state;
        return (
            <div className="upload dropzoneUpload">
                <ReactDropZone
                    className="upload-photo-item"
                    style={{ padding: "50px 10px 10px 10px" }}
                    activeClassName="upload-photo-item-hide"
                    acceptClassName="upload-photo-item-hide"
                    multiple={false}
                    accept="image/*"
                    onDrop={this.handleDrop}
                >
                    <div style={{ marginBottom: "3rem" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="olymp-computer-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/icons/icons.svg#olymp-computer-icon" /></svg>
                        <h6>Upload Photo</h6>
                        <span >Browse your computer.</span>
                    </div>
                    {imgs}
                </ReactDropZone>
            </div>
        )
    }
}
