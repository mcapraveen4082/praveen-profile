import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/githubrepo.css';


import { connect } from 'react-redux';
import {getUserGit, getRepo} from '../actions/index';

import Repository from '../Component/Repository';

class GithubProfile extends Component{
    constructor(){
        super();
        this.state = {
            repos: [],
            loading : false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const result = this.props.user_repo.filter(data => (data.name.toLowerCase()).includes(event.target.value.toLowerCase()));
        this.setState({repos: result});
    }

    async componentDidMount(){
        this.setState({loading : false,});
        const data = await fetch('https://api.github.com/users/mcapraveen4082')
            .then(res => res.json())
            .then(json => {
                this.setState({loading : true,});
                return json;
            })
            .catch(error => console.log('Network Issue !'));

        const data_repo = await fetch('https://api.github.com/users/mcapraveen4082/repos')
            .then(res => res.json())
            .then(json => {
                this.setState({loading : true,});
                return json;
            })
            .catch(error => console.log('Network Issue !'));

        this.props.getUserGit(data);
        this.props.getRepo(data_repo);
        this.setState({repos: data_repo});
    }

    render(){
        return (
            <div className="App">
                {
                    (this.state.loading) ?
                         (
                             <Container>
                                 <Row>
                                     <Col id="user-details-wrapper" sm={12} md={3} lg={3}>
                                         <div className="user-img">
                                             <img src={this.props.user_bio.avatar_url} alt="img2" />
                                         </div>
                                         <h4>{this.props.user_bio.name}</h4>
                                         <p className="user-login">{this.props.user_bio.login}</p>
                                         <p className="user-bio">{this.props.user_bio.bio}</p>
                                         <button className="click-bio">Edit Bio</button>
                                         <hr />
                                         <div className="del">
                                             <i className="fa fa-users" aria-hidden="true"></i>
                                             <span className="user-company">{this.props.user_bio.company}</span>
                                         </div>
                                         <div className="del">
                                             <i className="fa fa-map-marker" aria-hidden="true"></i>
                                             <span className="user-location">{this.props.user_bio.location}</span>
                                         </div>
                                         <div className="del">
                                             <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                             <span className="user-mail">mca.praveen4082@gmail.com</span>
                                         </div>
                                     </Col>
                                     <Col sm={12} md={9} lg={9}>
                                         <ul className="user-repos">
                                             <li className="menu-list">Overview</li>
                                             <li className="menu-list active">Repositories</li>
                                             <li className="menu-list">Stars</li>
                                             <li className="menu-list">Followers</li>
                                             <li className="menu-list">Following</li>
                                         </ul>
                                         <hr />
                                         <Row className="user-inputs">
                                             <Col sm={12} md={5} lg={5}>
                                                 <input type="text" className="search-repo" onChange={this.handleChange} placeholder="Search Repositories..." />
                                             </Col>
                                             <Col sm={12} md={2} lg={2}>
                                                 <select>
                                                     <option value="all">Type:&nbsp; All</option>
                                                     <option value="Option 1">Option 1</option>
                                                     <option value="Option 2">Option 2</option>
                                                     <option value="Option 3">Option 3</option>
                                                 </select>
                                             </Col>
                                             <Col sm={12} md={3} lg={3}>
                                                 <select>
                                                     <option value="all">Languages:&nbsp; All</option>
                                                     <option value="Language 1">Language 1</option>
                                                     <option value="Language 2">Language 2</option>
                                                     <option value="Language 3">Language 3</option>
                                                 </select>
                                             </Col>
                                             <Col sm={12} md={2} lg={2}>
                                                 <button className="new-add"><i className="fa fa-book" aria-hidden="true"></i>&nbsp; New</button>
                                             </Col>
                                         </Row>
                                         <hr />
                                         {(this.state.repos).map((repo) => <Repository data={repo} key={repo.id} />)}

                                     </Col>
                                 </Row>
                             </Container>
                        ) : (
                        <div>Page Loading...</div>
                    )

                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user_bio: state.user_bio,
        user_repo: state.user_repo,
    }
}

const mapDispatchToProps = dispatch => ({
    getUserGit: data => dispatch(getUserGit(data)),
    getRepo: data => dispatch(getRepo(data)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GithubProfile)
