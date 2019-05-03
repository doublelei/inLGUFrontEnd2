'use strict';
import React, { Component } from 'react';
import Stores from '../store/stores.js';
import $ from 'jquery'
import { toast } from 'react-toastify';
import { observer } from "mobx-react";
import GlobalStore from '../store/store_global.js'
import { Link } from 'react-router-dom'

function PostInfo(props) {
  if (props.id == GlobalStore.accounts.id) {
    return (
      <div className="post__author author vcard inline-items">
        <Link to={"/homepage/" + props.id}>
          <img className="img-responsive" src={props.avatar} alt="author" />
        </Link>
        <div className="author-date">
          <a className="h6 post__author-name fn" href="#">{props.username}</a>
          <div className="post__date">
            <time className="published">
              { props.created_at }
            </time>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      (
        <div className="post__author author vcard inline-items">
          <Link to={"/otherpage/" + props.id}>
            <img className="img-responsive" src={props.avatar} alt="author" />
          </Link>
          <div className="author-date">
            <a className="h6 post__author-name fn" href="#">{props.username}</a>
            <div className="post__date">
              <time className="published">
                {moment(props.created_at).fromNow()}
              </time>
            </div>
          </div>
        </div>
      )
    )
  }
}

function PostContent(props) {
  if (props.img == null) {
    return (
      <div>
        <p>
          {props.content}
        </p>
      </div>
    )
  } else {
    return (
      <div>
        <a href="#" data-target="#post-view-photo" data-toggle="modal">
          <img className="img-responsive" style={{ marginRight: "1rem" }} className="rounded float-left" src={props.img} alt="Pic Loading Failed" />
        </a>
        <p>
          {props.content}
        </p>
      </div>
    )
  }
}

function PostBottom(props) {
  if (props.liked) {
    return (
      <div className="post-additional-info inline-items">
        <a id="heart-text" className="post-add-icon inline-items" style={{ color: "#ff5e3a" }} onClick={function like_status() { Stores.HomepageStore.undoLikeStatus(props.status_id) }}>
          <svg id="heart-icon" className="olymp-heart-icon" style={{ fill: "#ff5e3a" }}><use xlinkHref="/icons/icons.svg#olymp-heart-icon">
          </use></svg>
          <span>{props.likes} Liked</span>
        </a>
        <div className="comments-shared">
          <a data-toggle="collapse" href={"#" + props.status_id} className="post-add-icon inline-items" role="button" aria-expanded="false" aria-controls="Comments">
            <svg className="olymp-speech-balloon-icon"><use xlinkHref="/icons/icons.svg#olymp-speech-balloon-icon"></use></svg>
            <span>{props.comments} Comments</span>
          </a>
        </div>
      </div>
    )
  } else {
    return (
      <div className="post-additional-info inline-items">
        <a id="heart-text" className="post-add-icon inline-items" onClick={function like_status() { Stores.HomepageStore.likeStatus(props.status_id) }}>
          <svg id="heart-icon" className="olymp-heart-icon"><use xlinkHref="/icons/icons.svg#olymp-heart-icon">
          </use></svg>
          <span>{props.likes} Likes</span>
        </a>

        <div className="comments-shared">
          <a data-toggle="collapse" href={"#" + props.status_id} className="post-add-icon inline-items" role="button" aria-expanded="false" aria-controls="Comments">
            <svg className="olymp-speech-balloon-icon"><use xlinkHref="/icons/icons.svg#olymp-speech-balloon-icon"></use></svg>
            <span>{props.comments} Comments</span>
          </a>
        </div>
      </div>
    )
  }
}

function PostSideButton(props) {
  return (
    <div className="control-block-button post-control-button">
      <a className="btn btn-control" onClick={function collectStatus() { Stores.HomepageStore.collectStatus(props.status_id) }}>
        <svg className="olymp-star-icon" data-toggle="tooltip" data-placement="right" data-original-title="Collect Status"><use xlinkHref="/icons/icons.svg#olymp-star-icon"></use></svg>
      </a>
      <a className="btn btn-control">
        <svg className="olymp-speech-balloon-icon" data-toggle="modal" data-target="#commentform" onClick={function changeReplyID() { Stores.HomepageStore.new_status.in_reply_to_id = props.status_id; $('#commentforminput').val("To @ " + props.username + ": ")}}><use xlinkHref="/icons/icons.svg#olymp-speech-balloon-icon"></use></svg>
      </a>
      <a className="btn btn-control" onClick={function deleteStatur() { Stores.HomepageStore.deletStatus(props.status_id) }}>
        <svg className="olymp-little-delete" data-toggle="tooltip" data-placement="right" data-original-title="Delete"><use xlinkHref="/icons/icons.svg#olymp-little-delete"></use></svg>
      </a>
    </div>
  )
}

function Tag(props) {
  const tags = props.tags.map((tag, index) =>
    <a key={index}>
      <span href="" className="badge badge-pill badge-success" style={{ margin: "0px 2px 2px 2px", fontWeight: "400", fontSize: "100%" }} onClick={function clickTag() { Stores.HomepageStore.getAllStatusIn(tag.name) }}>
        <font color="#F8F8F8">{tag.name}</font>
      </span>
    </a>);
  return (
    <div style={{ margin: "2px 2px 2px 2px" }}>
      {tags}
      <button type="button" className="btn badge-pill badge-success" data-toggle="modal" data-target="#add-tag" style={{ marginBottom: "0", padding: ".15rem .4rem" }} onClick={function setStatusID() { Stores.HomepageStore.add_tag.status_id = props.status_id }}>+</button>
    </div>)
}

function CommentWithChildren(props) {
  const children = props.replies.map((child, index) => <Comment key={index} fatherid={props.fatherid} {...child}></Comment>)
  console.log(props)
  return (
    <li className="has-children">
      <div className="post__author author vcard inline-items">
        <img className="img-responsive" alt="author" src={props.account.avatar} />
        <div className="author-date">
          <a className="h6 post__author-name fn" href="02-ProfilePage.html">{props.account.username}</a>
          <div className="post__date">
            <time className="published">
              {moment(props.created_at).fromNow()}
            </time>
          </div>
        </div>
        <a className="more" href="#"><svg xmlns="http://www.w3.org/2000/svg" className="olymp-three-dots-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/icons/icons.svg#olymp-three-dots-icon" /></svg></a>
      </div>
      <p>{props.content}</p>
      <a className="post-add-icon inline-items" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="olymp-heart-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/icons/icons.svg#olymp-heart-icon" /></svg>
        <span>{props.likes_count}</span>
      </a>
      <a className="reply" data-toggle="modal" data-target="#commentform" onClick={function changeReplyID() { Stores.HomepageStore.new_status.in_reply_to_id = props.id; $('#commentforminput').val("To @ " + props.account.username + ": ")}}>
        <span href="">Reply</span>
      </a>
      <ul className="children">
        {children}
      </ul>
    </li>
  )
}

function CommentWithoutChildren(props) {
  return (
    <li>
      <div className="post__author author vcard inline-items">
        <img className="img-responsive" alt="author" src={props.account.avatar} />
        <div className="author-date">
          <a className="h6 post__author-name fn" href="02-ProfilePage.html">{props.account.username}</a>
          <div className="post__date">
            <time className="published">
              {moment(props.created_at).fromNow()}
            </time>
          </div>
        </div>
        <a className="more" href="#"><svg xmlns="http://www.w3.org/2000/svg" className="olymp-three-dots-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/icons/icons.svg#olymp-three-dots-icon" /></svg></a>
      </div>
      <p>{props.content}</p>
      <a className="post-add-icon inline-items" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="olymp-heart-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/icons/icons.svg#olymp-heart-icon" /></svg>
        <span>{props.likes_count}</span>
      </a>
      <a className="reply" data-toggle="modal" data-target="#commentform" onClick={function changeReplyID() { Stores.HomepageStore.new_status.in_reply_to_id = props.id; $('#commentforminput').val("To @ " + props.account.username + ": ") }}>
        <span href="">Reply</span>
      </a>
    </li>
  )
}

function Comment(props) {
  if (props.replies_count > 0) {
    return (
      <CommentWithChildren {...props}></CommentWithChildren>
    )
  } else {
    return (
      <CommentWithoutChildren {...props}></CommentWithoutChildren>
    )
  }
}

function CommentList(props) {
  const comments = props.replies.map((comment, index) => <Comment key={index} {...comment}></Comment>);
  return (
    <ul className="comments-list">
      {comments}
    </ul>
  )
}


function Pollcontent(props) {
  if (props.voted) {
    return (
      <li>
        <div class="skills-item">
          <div class="skills-item-info">
            <span class="skills-item-title">
              <span class="radio" >
                <label style={{ paddingLeft: "0px" }}>
                  {props.title}
                </label>
              </span>
            </span>
            <span class="skills-item-count"><span class="count-animate" data-speed="1000" data-refresh-interval="50" data-to="11" data-from="0"></span><span class="units">{props.votes_count}</span></span>
          </div>
          <div class="skills-item-meter">
            <span class="skills-item-meter-active bg-primary skills-animate" style={{ width: props.votes_count, opacity: "1" }}></span>
          </div>
        </div>
      </li>)
  } else {
    return (
      <li>
        <div class="skills-item">
          <div class="skills-item-info">
            <span class="skills-item-title">
              <span class="radio">
                <label>
                  <input type="radio" name="optionsRadios" /><span class="circle"></span><span class="check"></span>
                  {props.title}
                </label>
              </span>
            </span>
            <span class="skills-item-count"><span class="count-animate" data-speed="1000" data-refresh-interval="50" data-to="11" data-from="0"></span><span class="units">{props.votes_count}</span></span>
          </div>
          <div class="skills-item-meter">
            <span class="skills-item-meter-active bg-primary skills-animate" style={{ width: props.votes_count, opacity: "1" }}></span>
          </div>
        </div>
      </li>
    )
  }
}

class _Post extends Component {
  render() {
    if (this.props.content == 'This content is muted.') {
      return (
        <div> </div>
      )
    } else {
      if (this.props.poll != null) {
        return (<div className="ui-block">
          <article className="hentry post has-post-thumbnail">
            <PostInfo id={this.props.account.id} avatar={this.props.account.avatar} username={this.props.account.username} created_at={this.moment(props.created_at).fromNow()} />
            <ul className="widget w-poll">
              <p>
                {this.props.content}
              </p>
              {this.props.poll.options.map((option) => <Pollcontent voted={this.props.poll.voted} {...option} />)}
            </ul>
            <PostBottom likes={this.props.likes_count} comments={this.props.replies_count} status_id={this.props.id} liked={this.props.liked} />
            <PostSideButton status_id={this.props.id} username={this.props.account.username}/>
            <br />
            <Tag tags={this.props.tags} status_id={this.props.id} />
          </article>
          <div className="collapse" id={this.props.id}>
            <CommentList fatherid={this.props.id} {...this.props} />
            {/* <MoreComment />
            <CommentForm id={this.props.id} avatar={this.props.account.avatar} /> */}
          </div>
        </div>)
      } else {
        return (
          <div className="ui-block">
            {console.log(this.props.liked)}
            <article className="hentry post has-post-thumbnail">
              <PostInfo id={this.props.account.id} avatar={this.props.account.avatar} username={this.props.account.username} created_at={this.moment(props.created_at).fromNow()} />
              <PostContent content={this.props.content} img={this.props.img} />
              <PostBottom likes={this.props.likes_count} comments={this.props.replies_count} status_id={this.props.id} liked={this.props.liked} />
              <PostSideButton status_id={this.props.id} username={this.props.account.username}/>
              <br />
              <Tag tags={this.props.tags} status_id={this.props.id} />
            </article>
            <div className="collapse" id={this.props.id}>
              <CommentList {...this.props} />
              {/* <MoreComment /> */}
              {/* <CommentForm id={this.props.id} avatar={this.props.account.avatar} /> */}
            </div>
          </div>
        );
      }
    }
  }
}

const Post = observer(_Post)
export default Post;
