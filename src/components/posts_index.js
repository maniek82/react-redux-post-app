import React, { Component } from 'react';
import {connect } from 'react-redux';
import {Link} from 'react-router';
// import {bindActionCreators } from 'redux';
import {fetchPosts} from '../actions/index';


class PostsIndex extends Component {
    
    componentWillMount() {
        this.props.fetchPosts();
    }  
    renderPosts() {
        return this.props.posts.map((post)=>{
            return (
             <Link to={"posts/"+post.id}>
                <li className="list-group-item" key={post.id}>
                    
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    
                 </li>
                </Link>
                );
            
        });
    }
    render() {
        return (
          <div>
            <div className="text-xs-right">
              <Link to="/posts/new" className="btn btn-primary">
              Add a Post
              </Link>
            </div>
             <h3>Posts</h3>
             <ul className="list-group">
             {this.renderPosts()}
             </ul>
          </div>
            )
    }
}

//in index reducer jest object i tam za posty odpowiada post_reducer a ten ma dwa klucze all i post wiec state.posts.all

function mapStateToProps(state) {
    return {posts: state.posts.all};
}


export default connect(mapStateToProps,{fetchPosts})(PostsIndex);

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchPosts},dispatch);
// // }
// export default connect(null,mapDispatchToProps)(fetchPosts);

