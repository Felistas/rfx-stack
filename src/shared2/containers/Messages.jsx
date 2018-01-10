import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { inject, observer } from 'mobx-react';
import { authorize } from '@/utils2/authorize.hoc';

// components
import PostListHeader from '@/shared2/components/PostListHeader';
import PostListBar from '@/shared2/components/PostListBar';
import PostList from '@/shared2/components/PostList';
import PostCreateModal from '@/shared2/components/PostCreateModal';

// form
import postForm from '@/shared2/forms/post';

@inject('store') @authorize @observer
export default class Messages extends Component {

  static fetchData({ store }) {
    return store.post.find();
  }

  static propTypes = {
    store: React.PropTypes.object,
  };

  render() {
    const { ui, post } = this.props.store;

    return (
      <div className="pt5">
        <Helmet title="Message List" />
        <PostListHeader />
        <PostListBar post={post} />
        <div className="pa4 _c4">
          <PostList items={post.list} />
        </div>
        <PostCreateModal
          open={ui.postCreateModal.isOpen}
          form={postForm}
        />
      </div>
    );
  }
}
