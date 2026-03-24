/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';

class Repository extends Component{
    constructor(props){
        super(props);
    }

    copyText = async (value) => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(value);
            } else {
                const helperInput = document.createElement('textarea');
                helperInput.value = value;
                helperInput.style.position = 'fixed';
                helperInput.style.left = '-9999px';
                document.body.appendChild(helperInput);
                helperInput.focus();
                helperInput.select();
                document.execCommand('copy');
                document.body.removeChild(helperInput);
            }
            alert('Copied to clipboard');
        } catch (error) {
            alert('Could not copy. Please copy manually.');
        }
    }

    render(){
        const updatedDate = new Date(this.props.data.updated_at);
        const formattedDate = `${updatedDate.getDate()}/${updatedDate.getMonth() + 1}/${updatedDate.getFullYear()}`;
        return (
            <div className="user-repo-list" data-id={this.props.data.id} data-owner={this.props.data.owner.id}>
                <p className="repo-name">
                    <a href={this.props.data.html_url} target="_blank" rel="noreferrer">{this.props.data.name}</a>
                </p>
                {this.props.data.description ? <p className="repo-description">{this.props.data.description}</p> : null}
                <div className="user-repo-detail">
                    <li className="user-repo-language">{(this.props.data.language)? this.props.data.language : 'JavaScript'}</li>
                    <span className="repo-size"><i className="fa fa-code-fork" aria-hidden="true"></i> &nbsp; {this.props.data.size}</span>
                    <span className="repo-updated">Updated On &nbsp; {formattedDate}</span>
                </div>
                <p>Clone URL : <b><a href={this.props.data.clone_url} target="_blank" rel="noreferrer">{this.props.data.clone_url}</a></b></p>
                <div className="repo-actions">
                    <button type="button" onClick={() => this.copyText(this.props.data.clone_url)}>Copy HTTPS</button>
                    <button type="button" onClick={() => this.copyText(this.props.data.ssh_url)}>Copy SSH</button>
                    {this.props.data.homepage ? <a href={this.props.data.homepage} target="_blank" rel="noreferrer">Live Demo</a> : null}
                </div>
                <hr/>
            </div>

        );
    }
}

export default Repository;