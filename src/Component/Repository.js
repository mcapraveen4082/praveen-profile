import React, {Component} from 'react';

class Repository extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="user-repo-list" data-id={this.props.data.id} data-owner={this.props.data.owner.id}>
                <p className="repo-name">{this.props.data.name}</p>
                <div className="user-repo-detail">
                    <li className="user-repo-language">{(this.props.data.language)? this.props.data.language : 'JavaScript'}</li>
                    <span className="repo-size"><i className="fa fa-code-fork" aria-hidden="true"></i> &nbsp; {this.props.data.size}</span>
                    <span className="repo-updated">Updated On &nbsp; {(new Date(this.props.data.updated_at)).getDay()+'/'+(new Date(this.props.data.updated_at)).getMonth()+'/'+(new Date(this.props.data.updated_at)).getFullYear()}</span>
                </div>
                <p>Clone URL : <b>{this.props.data.clone_url}</b></p>
                <hr/>
            </div>

        );
    }
}

export default Repository;