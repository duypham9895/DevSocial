import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Action
import { getCurrentProfile } from '../../actions/profile';

import Spinner from '../layout/Spinner';
import DashboardAcion from './DashboardAction';

const Dashboard = ({
    getCurrentProfile,
    profile: { profile, loading },
    auth: { user, isAuthenticated }
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);
    return loading && profile === null ? (
        <Spinner />
    ) : (
        <Fragment>
            <h1 className='large text-primary'>Dashboard</h1>
            <p className='lead'>
                <i className='fas fa-user' /> Welcome to {user && user.name}
            </p>
            {profile !== null ? (
                <Fragment>
                    <DashboardAcion />
                </Fragment>
            ) : (
                <Fragment>
                    <p className=''>
                        You have not yet a profile, please add some info
                    </p>
                    <Link to='/create-profile' className='btn btn-primary my-1'>
                        Create Profile
                    </Link>
                </Fragment>
            )}
        </Fragment>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { getCurrentProfile }
)(Dashboard);
