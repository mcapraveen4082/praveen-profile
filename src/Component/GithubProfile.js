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
            loading : true,
            error: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const safeRepos = Array.isArray(this.props.user_repo) ? this.props.user_repo : [];
        const result = safeRepos.filter(data => (data.name.toLowerCase()).includes(event.target.value.toLowerCase()));
        this.setState({repos: result});
    }

    async componentDidMount(){
        this.setState({loading : true, error: ''});
        try {
            const [profileRes, reposRes] = await Promise.all([
                fetch('https://api.github.com/users/mcapraveen4082'),
                fetch('https://api.github.com/users/mcapraveen4082/repos?sort=updated&per_page=100')
            ]);
            const profileJson = await profileRes.json();
            const reposJson = await reposRes.json();

            const safeProfile = profileJson && !profileJson.message ? profileJson : {};
            const safeRepos = Array.isArray(reposJson) ? reposJson : [];

            this.props.getUserGit(safeProfile);
            this.props.getRepo(safeRepos);
            this.setState({repos: safeRepos});

            if (!profileRes.ok || !reposRes.ok) {
                this.setState({error: 'Could not fully load GitHub data right now. Please try again shortly.'});
            }
        } catch (e) {
            this.setState({error: 'Network issue while loading GitHub data.'});
        } finally {
            this.setState({loading : false});
        }
    }

    render(){
        return (
            <div className="App">
                {
                    (!this.state.loading) ?
                         (
                            <Container className="github-profile-page">
                                 <div className="github-layout-row">
                                     <div className="github-left-col">
                                        <div id="user-details-wrapper">
                                         <div className="user-img">
                                             <img src={this.props.user_bio.avatar_url || 'https://avatars.githubusercontent.com/u/9919?s=200&v=4'} alt="img2" />
                                         </div>
                                         <h4>{this.props.user_bio.name || 'Praveen Kumar'}</h4>
                                         <p className="user-login">{this.props.user_bio.login || 'mcapraveen4082'}</p>
                                         <p className="user-bio">{this.props.user_bio.bio || 'Senior fullstack engineer building reliable production applications.'}</p>
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
                                             <span className="user-mail"><a href="mailto:mca.praveen4082@gmail.com">mca.praveen4082@gmail.com</a></span>
                                         </div>
                                         {this.props.user_bio.blog ? (
                                            <div className="del">
                                                <i className="fa fa-link" aria-hidden="true"></i>
                                                <span className="user-location"><a href={this.props.user_bio.blog} target="_blank" rel="noreferrer">Website</a></span>
                                            </div>
                                         ) : null}
                                         <div className="github-stats">
                                             <div><strong>{this.props.user_bio.public_repos || 0}</strong><span>Repos</span></div>
                                             <div><strong>{this.props.user_bio.followers || 0}</strong><span>Followers</span></div>
                                             <div><strong>{this.props.user_bio.following || 0}</strong><span>Following</span></div>
                                         </div>
                                        </div>
                                     </div>
                                     <div className="github-right-col github-repos-wrapper">
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
                                         {this.state.error ? <p className="repo-error">{this.state.error}</p> : null}
                                         <p className="repo-count">Showing {this.state.repos.length} repositories</p>
                                         <hr />
                                         {(this.state.repos).map((repo) => <Repository data={repo} key={repo.id} />)}
                                     </div>
                                 </div>
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
