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
            .catch(() => null);

        const data_repo = await fetch('https://api.github.com/users/mcapraveen4082/repos')
            .then(res => res.json())
            .then(json => {
                this.setState({loading : true,});
                return json;
            })
            .catch(() => []);

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
                            <Container className="github-profile-page">
                                 <Row>
                                     <Col id="user-details-wrapper" sm={12} md={3} lg={3}>
                                         <div className="user-img">
                                             <img src={this.props.user_bio.avatar_url} alt="img2" />
                                         </div>
                                         <h4>{this.props.user_bio.name}</h4>
                                         <p className="user-login">{this.props.user_bio.login}</p>
                                         <p className="user-bio">{this.props.user_bio.bio}</p>
                                         <a className="click-bio d-block text-center text-decoration-none" href={this.props.user_bio.html_url} target="_blank" rel="noreferrer">
                                             Open GitHub Profile
                                         </a>
                                         <hr />
                                         <div className="del">
                                             <i className="fa fa-users" aria-hidden="true"></i>
                                             <span className="user-company">{this.props.user_bio.company || 'Company not listed'}</span>
                                         </div>
                                         <div className="del">
                                             <i className="fa fa-map-marker" aria-hidden="true"></i>
                                             <span className="user-location">{this.props.user_bio.location || 'Bengaluru, India'}</span>
                                         </div>
                                         <div className="del">
                                             <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                             <span className="user-mail">mca.praveen4082@gmail.com</span>
                                         </div>
                                         <div className="github-stats">
                                             <div><strong>{this.props.user_bio.public_repos || 0}</strong><span>Repos</span></div>
                                             <div><strong>{this.props.user_bio.followers || 0}</strong><span>Followers</span></div>
                                             <div><strong>{this.props.user_bio.following || 0}</strong><span>Following</span></div>
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
                                                 <button className="new-add" type="button"><i className="fa fa-book" aria-hidden="true"></i>&nbsp; New</button>
                                             </Col>
                                         </Row>
                                         <p className="repo-count">Showing {this.state.repos.length} repositories</p>
                                         <hr />
                                         {(this.state.repos).map((repo) => <Repository data={repo} key={repo.id} />)}

                                     </Col>
                                 </Row>
                             </Container>
                        ) : (
                        <div className="loading-state">Loading GitHub profile...</div>
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
