import React, {Component, PropTypes } from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import  {Link} from 'react-router';


class PostsNew extends Component {
    
    static contextTypes = {
        router: PropTypes.object
    };
    
    onSubmit(props) {
        this.props.createPost(props)
          .then(()=> {
              //post created navigate to posts
              //navigate by this.context.router.push with new path
              this.context.router.push('/');
          });
    }
    
    render() {
        const {fields:{ title, categories, content}, handleSubmit } = this.props;
     
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a New Post </h3>
                
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' :''}`}>
                    <label className="form-control-label">Title</label>
                    <input type="text" className="form-control"{...title} />
                    <div className="form-control-label">
                    {title.touched ? title.error: ''}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' :''}`}>
                    <label className="form-control-label">Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                     <div className="form-control-feedback">
                    {categories.touched ? categories.error: ''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' :''}`}>
                    <label className="form-control-label">Content</label>
                    <textarea type="text" className="form-control"{...content} ></textarea>
                     <div className="form-control-feedback">
                    {content.touched ? content.error: ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
            );
    }
    
}

function validate(values) {
    const errors ={};
    if(!values.title) {
        errors.title = 'Enter a username'
    }
    if(!values.categories) {
        errors.categories = 'Enter categories'
    } 
    if(!values.content) {
        errors.content = 'Enter content'
    }
    
    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title','categories','content'],
    validate
},null,{createPost})(PostsNew);

//reduxform same behavior like connect function
//connect firt arg mapsStateToProps, 2nd mapDispatchToProps
//reduxForm 1st is a form config 2nd mapStateToProps, 3rd mapDispatchToProps
