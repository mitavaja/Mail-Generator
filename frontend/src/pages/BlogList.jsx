import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { Calendar, Clock, BookOpen, ArrowRight, Search } from "lucide-react";

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="dashboard-layout">
      {/* Blog Page Hero Header */}
      <section className="blog-hero-section card-container premium-email-card" style={{ marginBottom: "20px" }}>
        <div style={{ position: "relative", zIndex: 2 }}>
          <span className="logo-badge" style={{ marginBottom: "12px", display: "inline-block" }}>Knowledge Hub</span>
          <h1 style={{ fontSize: "2.2rem", color: "var(--navy-950)", marginBottom: "12px" }}>
            Privacy & <span className="text-highlight">Security</span> Blog
          </h1>
          <p style={{ color: "var(--navy-700)", maxWidth: "700px", fontSize: "1.05rem", marginBottom: "20px" }}>
            Learn about temporary email addresses, email privacy secrets, anti-spam techniques, and developer integration tricks. Stay secure online.
          </p>

          {/* Search bar inside hero */}
          <div className="search-bar-wrapper">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search articles, categories, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="blog-grid-layout">
        {filteredPosts.length > 0 ? (
          <div className="blog-posts-grid">
            {filteredPosts.map((post) => (
              <article key={post.slug} className="card-container blog-card-item">
                <div className="blog-card-meta">
                  <span className="blog-badge-category">{post.category}</span>
                  <div className="blog-meta-details">
                    <span className="meta-text-item">
                      <Calendar size={13} style={{ marginRight: "4px" }} />
                      {post.date}
                    </span>
                    <span className="meta-text-item">
                      <Clock size={13} style={{ marginRight: "4px" }} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-summary">{post.summary}</p>
                <div className="blog-card-footer">
                  <span className="author-text">By {post.author}</span>
                  <Link to={`/blog/${post.slug}`} className="read-more-link">
                    Read Article <ArrowRight size={14} style={{ marginLeft: "4px" }} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="card-container empty-state-premium" style={{ width: "100%", padding: "60px 20px" }}>
            <div className="empty-state-icon-decor">
              <BookOpen className="empty-icon-animated" size={36} />
            </div>
            <h4>No Articles Found</h4>
            <p>We couldn't find any articles matching "{searchQuery}". Try searching for other terms like "spam" or "privacy".</p>
            <button className="btn-action-generate" style={{ marginTop: "12px" }} onClick={() => setSearchQuery("")}>
              Clear Search
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
