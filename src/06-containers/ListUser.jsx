import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getListUsers } from '../01-actions/user';
import UserItem from '../05-components/UserItem/UserItem';
import Loading from '../05-components/Loading/Loading';

const ListUser = props => {
    const { getListUsers, listUser, loading } = props;

    useEffect(() => {
        getListUsers();
    }, [getListUsers]);

    return (
        <div>
            <p className='test-red'>This is list user screen</p>
            <Link to='/state-eg'>Go to state eg. screen</Link>
            <Loading data={listUser} loading={loading}/>
            {
                listUser && listUser.map((user, index) => (
                    <UserItem user={user} key={index}/>
                ))
            }
        </div>
    );
};

const mapStateToProps = store => {
    return {
        listUser: store.user.listUser,
        loading: store.utils.loading,
    };
};

const mapActionToProps = {
    getListUsers,
};

export default compose(withRouter, connect(mapStateToProps, mapActionToProps))(ListUser);