import axios from 'axios'
import { StorageService, ProfileService } from '../services'
import user from '../models/User'

export default class AuthService {
    static token(code) {
        axios({
            method: 'post',
            url: 'https://cloud.feedly.com/v3/auth/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {},
            params: {
                'client_id': 'feedly',
                'client_secret': '0XP4XQ07VVMDWBKUHTJM4WUQ',
                'grant_type': 'authorization_code',
                'redirect_uri': 'http://www.feedly.com/feedly.html',
                'code': code
            }
        }).then(async result => {
            StorageService.save('session', JSON.stringify(result.data))

            ProfileService.profile().then(profile => {
                StorageService.save('profile', JSON.stringify(profile.data))
                user.setPicture(profile.data.picture)
            }).catch(error => console.log(error))
        }).catch(error => {
            console.log(error)
        })
    }
}