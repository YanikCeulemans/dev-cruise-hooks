// import * as profileApi from './profileApi';

export default class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profile: null };
    this.handleProfileChanges = this.handleProfileChanges.bind(this);
  }

  componentDidMount() {
    profileApi.getById(this.props.profileId).then(profile => {
      this.setState({ profile });
    });

    profileApi.subscribeToChanges(
      this.props.profileId,
      this.handleProfileChanges
    );
  }

  componentWillUnmount() {
    profileApi.unsubscribeFromChanges(
      this.props.profileId,
      this.handleProfileChanges
    );
  }

  handleProfileChanges(changes) {
    // Do something with the changes
  }

  render() {
    return <div>profile data from {this.state.profile.name} goes here</div>;
  }
}
