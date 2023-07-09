import React, { Component } from 'react'
import Link from '../components/Link/Link'
import './Profile.css'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            loading: true,
        }
    }

    async componentDidMount() {
        const profile = await fetch('https://api.github.com/users/octocat');
        const profileJSON = await profile.json();
        if (profileJSON) {
            this.setState({
                data: profileJSON,
                loading: false
            })
        }
    }

    render() {
        const { data: { avatar_url, html_url, repos_url, name, company, location, email, bio }, loading } = this.state;
        if(loading) {
            return (<div>Loading...</div>)
        }
        return (<div className='Profile-container'>
                <img className='Profile-avatar' src={avatar_url} alt='avatar'/>
                <ul>
                    <li><strong>html_url: {html_url}</strong>&nbsp;<Link url={html_url} title='Github URL'/></li>
                    <li>repos_url: {repos_url}</li>
                    <li>name: {name}</li>
                    <li>company: {company}</li>
                    <li>location: {location}</li>
                    <li>email: {email}</li>
                    <li>bio: {bio}</li>
                </ul>
        </div>)
    }
}

export default Profile;