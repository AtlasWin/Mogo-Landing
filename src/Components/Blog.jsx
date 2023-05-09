import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";

function Blog() {
  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="text">
            <p className="text-secondary">Our Stories</p>
            <h2 className="text-main">Latest Blog</h2>
            <div className="text-underline"></div>
          </div>
          <div className="blog-grid text-left">
            <div className="blog-grid-item">
              <div className="blog-grid-item-img">
                <img src={require("../img/blog1.png")} alt="blog1" />
                <div className="blog-grid-item-content">
                  <span>15</span>
                  <p>Jan</p>
                </div>
              </div>
              <div className="blog-grid-item-text">
                <h2 className="item-text-main">Lorem ipsum dolor sit amet</h2>
                <p className="item-text-underline">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="blog-grid-item-underline"></div>
              <div className="blog-grid-item-icons">
                <span>
                  <AiOutlineEye color="#95e1d3" size={20} />
                </span>
                <p>542</p>
                <span>
                  <HiChatBubbleLeftEllipsis color="#95e1d3" size={20} />
                </span>
                <p>17</p>
              </div>
            </div>
            <div className="blog-grid-item">
              <div className="blog-grid-item-img">
                <img src={require("../img/blog2.png")} alt="blog2" />
                <div className="blog-grid-item-content">
                  <span>14</span>
                  <p>Jan</p>
                </div>
              </div>
              <div className="blog-grid-item-text">
                <h2 className="item-text-main">Sed do eiusmod tempor</h2>
                <p className="item-text-underline">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <div className="blog-grid-item-underline"></div>
              </div>
              <div className="blog-grid-item-icons">
                <span>
                  <AiOutlineEye color="#95e1d3" size={20} />
                </span>
                <p>992</p>
                <span>
                  <HiChatBubbleLeftEllipsis color="#95e1d3" size={20} />
                </span>
                <p>42</p>
              </div>
            </div>
            <div className="blog-grid-item">
              <div className="blog-grid-item-img">
                <img src={require("../img/blog3.png")} alt="blog3" />
                <div className="blog-grid-item-content">
                  <span>12</span>
                  <p>Jan</p>
                </div>
              </div>
              <div className="blog-grid-item-text">
                <h2 className="item-text-main">
                  Incididunt ut labore et dolore
                </h2>
                <p className="item-text-underline">
                  Elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <div className="blog-grid-item-underline"></div>
              </div>
              <div className="blog-grid-item-icons">
                <span>
                  <AiOutlineEye color="#95e1d3" size={20} />
                </span>
                <p>1560</p>
                <span>
                  <HiChatBubbleLeftEllipsis color="#95e1d3" size={20} />
                </span>
                <p>98</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
