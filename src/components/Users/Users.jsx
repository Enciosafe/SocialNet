import React from "react";
import styles from "./Users.module.css"

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: '1', photoUrl: 'https://skolkolet.com/images/590e5ad27d66ac348e88c00d/dmitriy-nagiev.jpg', followed: false, fullname: 'Stas Matvieiev', status: 'i am a boss', location: {city: 'Toronto', country: 'Canada'} },
            {id: '2', photoUrl: 'https://skolkolet.com/images/590e5ad27d66ac348e88c00d/dmitriy-nagiev.jpg', followed: false,fullname: 'Igor Lastochkin', status: 'adafhehehe googls suks', location: {city: 'Kiev', country: 'Ukraine'} },
            {id: '3', photoUrl: 'https://skolkolet.com/images/590e5ad27d66ac348e88c00d/dmitriy-nagiev.jpg', followed: true,fullname:'Olga Orlova', status: 'ilisteN!!!', location: {city: 'Moskow', country: 'Russia'} },
            {id: '4', photoUrl: 'https://skolkolet.com/images/590e5ad27d66ac348e88c00d/dmitriy-nagiev.jpg', followed: true,fullname:'Garick Harlamov', status: 'i want coffie', location: {city: 'Paris', country: 'Franch'} },
            {id: '5', photoUrl: 'https://skolkolet.com/images/590e5ad27d66ac348e88c00d/dmitriy-nagiev.jpg', followed: false,fullname: 'Irina Podpolnaya', status: 'fuck off', location: {city: 'Toronto', country: 'Canada'} },
            {id: '6', photoUrl: 'https://skolkolet.com/images/590e5ad27d66ac348e88c00d/dmitriy-nagiev.jpg', followed: true,fullname: 'Jmix ', status: 'asdadq!', location: {city: 'Dubai', countrwy: 'Emirates'} },
        ])
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;