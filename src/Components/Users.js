import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { usersList } from '../Services/actions/userAction'

const Users = ({ usersList, loading, users, error }) => {
    useEffect(() => {
        usersList()
    }, [])
    return (
        <div>
            <h3>Users</h3>
            {
                users.map(user => {
                    return <li>{user.title}</li>
                })
            }

            {/* {
                loading ? <h3>Loading...</h3> : error ? <h3>{error}</h3> : <div>{
                    users.map(user => {
                        return <p>{user.title}</p>
                    })
                }</div>
            } */}
        </div>
    );
};
const mapStateToProps = (state) => ({
    loading: state.usersReducer.loading,
    users: state.usersReducer.users,
    error: state.usersReducer.error
})

export default connect(mapStateToProps, { usersList })(Users);