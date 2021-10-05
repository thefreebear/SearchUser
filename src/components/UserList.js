import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserList extends React.Component {
  constructor(props){
      super(props);
      this.state = { userName : '', searchUser: null };
    }
  componentDidMount() {
    this.props.fetchUser();
  }
  handleSearch = () =>{
    this.props.posts.map(post =>{
      post.map(user =>{
        if(user.name.indexOf(this.state.userName) > -1 ){
          return this.setState({searchUser: user.name});
        }
       
      })
    })
    //this.setState({searchUser: this.state.userName});
  }

  renderList() {
    if(!this.state.searchUser || this.state.userName === '' ){
    return this.props.posts.map((post) => {
      return post.map((user) => {
        
        return <div>{user.name}</div>;
      });
    });
  } else{
    return <div>{this.state.searchUser}</div>
  }
  }

  render() {
    return (
      <div>
        {/* <SearchUser /> */}
        <label for="gsearch">Search User:</label>
        <input type="search" id="usersearch" name="usersearch" value={this.state.userName} onChange={(e) => this.setState({userName:e.target.value})} />
        <button onClick={() => this.handleSearch()}>Search</button>
        <br />
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserList);
