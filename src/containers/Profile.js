import React, { Component } from 'react'
import Link from '../components/Link/Link'
import List from '../components/List/List'
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
        const items = [
            { label: 'html_url', value: <Link url={html_url} title='Github URL'/>},
            { label: 'name', value: name },
            { label: 'repos_url', value: repos_url },
            { label: 'company', value: company },
            { label: 'location', value: location },
            { label: 'email', value: email },
            { label: 'bio', value: bio }
        ]
        if(loading) {
            return (<div>Loading...</div>)
        }
        return (<div className='Profile-container'>
                <img className='Profile-avatar' src={avatar_url} alt='avatar'/>
                <List items={items}/>
        </div>)
    }
}

export default Profile;